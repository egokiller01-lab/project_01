import {
  INQUIRY_CONSENT_VERSION,
  INQUIRY_LIMITS as limits,
  INQUIRY_RATE_LIMIT_POLICY,
} from "../../src/lib/inquiryConstants";

const locales = ["ko", "en", "vi"] as const;
const inquiryTypes = [
  "product",
  "technical-support",
  "process-problem",
  "quotation",
  "distribution-partnership",
  "other",
] as const;
const productProcessValues = [
  "degreasing-cleaning-pretreatment",
  "electroplating",
  "electroless-plating",
  "aluminum-anodizing",
  "zinc-zinc-nickel-chromate",
  "conversion-corrosion-coating",
  "general-chemicals-non-ferrous-metals",
  "filtration-equipment-supplies",
] as const;

const allowedFiles = {
  pdf: ["application/pdf"],
  jpg: ["image/jpeg"],
  jpeg: ["image/jpeg"],
  png: ["image/png"],
  xlsx: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  docx: [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
} as const;

type AllowedExtension = keyof typeof allowedFiles;

type D1Statement = {
  bind: (...values: unknown[]) => D1Statement;
  run?: () => Promise<unknown>;
};

type D1Database = {
  prepare: (query: string) => D1Statement;
  batch: (statements: D1Statement[]) => Promise<unknown[]>;
};

type R2Bucket = {
  put: (
    key: string,
    value: ArrayBuffer,
    options?: Record<string, unknown>,
  ) => Promise<unknown>;
  delete: (key: string) => Promise<unknown>;
};

type RateLimitAdapter = {
  get: (key: string) => Promise<string | null>;
  put: (
    key: string,
    value: string,
    options?: { expirationTtl?: number },
  ) => Promise<unknown>;
};

type Env = {
  TURNSTILE_SECRET_KEY?: string;
  INQUIRY_DB?: D1Database;
  INQUIRY_FILES?: R2Bucket;
  INQUIRY_RATE_LIMIT?: RateLimitAdapter;
  RATE_LIMIT_SALT?: string;
  SITE_ENV?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

type UploadedFile = {
  id: string;
  key: string;
  originalName: string;
  mimeType: string;
  size: number;
  data: ArrayBuffer;
};

type ValidationResult = {
  errors: Record<string, string>;
  files: File[];
  locale: string;
  inquiryType: string;
  productProcess: string;
  values: Record<
    | "companyName"
    | "contactName"
    | "email"
    | "phone"
    | "country"
    | "website"
    | "message",
    string
  >;
};

const textFieldNames = new Set([
  "companyName",
  "contactName",
  "email",
  "phone",
  "country",
  "website",
  "inquiryType",
  "productProcess",
  "message",
  "locale",
  "consent",
  "consentVersion",
  "submittedAt",
  "cf-turnstile-response",
]);

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function methodNotAllowed() {
  return json({ ok: false, code: "method_not_allowed" }, 405);
}

function normalizeText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.normalize("NFKC").trim() : "";
}

function textValue(form: FormData, name: string) {
  return normalizeText(form.get(name));
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPhone(value: string) {
  return /^[0-9+\-()\s]{0,40}$/.test(value);
}

function isWebsite(value: string) {
  if (!value) return true;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function hasControlCharacters(value: string) {
  return /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(value);
}

function hasExecutableMarkup(value: string) {
  return /<[^>]*>|<\/|<\s*script|on[a-z]+\s*=|javascript\s*:|data\s*:/iu.test(
    value,
  );
}

function hasTooManyLineBreaks(value: string) {
  return (value.match(/\r?\n/g) ?? []).length > 1;
}

function isSafeShortText(value: string) {
  return (
    !hasControlCharacters(value) &&
    !hasExecutableMarkup(value) &&
    !hasTooManyLineBreaks(value)
  );
}

function isSafeMessage(value: string) {
  return !hasControlCharacters(value) && !hasExecutableMarkup(value);
}

function safeOriginalName(name: string) {
  return name
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F/\\]/gu, "_")
    .slice(0, 180);
}

function fileExtension(name: string): AllowedExtension | "" {
  const raw = name.includes(".") ? name.split(".").pop()?.toLowerCase() : "";
  return raw && raw in allowedFiles ? (raw as AllowedExtension) : "";
}

function bytesStartWith(bytes: Uint8Array, signature: number[]) {
  return signature.every((value, index) => bytes[index] === value);
}

function findEndOfCentralDirectory(bytes: Uint8Array) {
  const min = Math.max(0, bytes.length - 66000);
  for (let index = bytes.length - 22; index >= min; index -= 1) {
    if (
      bytes[index] === 0x50 &&
      bytes[index + 1] === 0x4b &&
      bytes[index + 2] === 0x05 &&
      bytes[index + 3] === 0x06
    ) {
      return index;
    }
  }
  return -1;
}

function readUint16(bytes: Uint8Array, offset: number) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function readUint32(bytes: Uint8Array, offset: number) {
  return (
    (bytes[offset] |
      (bytes[offset + 1] << 8) |
      (bytes[offset + 2] << 16) |
      (bytes[offset + 3] << 24)) >>>
    0
  );
}

function parseZipEntries(bytes: Uint8Array) {
  if (!bytesStartWith(bytes, [0x50, 0x4b, 0x03, 0x04])) return null;

  const eocd = findEndOfCentralDirectory(bytes);
  if (eocd < 0) return null;

  const entryCount = readUint16(bytes, eocd + 10);
  const centralDirectorySize = readUint32(bytes, eocd + 12);
  const centralDirectoryOffset = readUint32(bytes, eocd + 16);

  if (entryCount < 1 || entryCount > 256) return null;
  if (
    centralDirectoryOffset + centralDirectorySize > bytes.length ||
    centralDirectoryOffset < 0
  ) {
    return null;
  }

  const decoder = new TextDecoder();
  const entries: string[] = [];
  let offset = centralDirectoryOffset;

  for (let index = 0; index < entryCount; index += 1) {
    if (
      bytes[offset] !== 0x50 ||
      bytes[offset + 1] !== 0x4b ||
      bytes[offset + 2] !== 0x01 ||
      bytes[offset + 3] !== 0x02
    ) {
      return null;
    }

    const compressedSize = readUint32(bytes, offset + 20);
    const uncompressedSize = readUint32(bytes, offset + 24);
    const nameLength = readUint16(bytes, offset + 28);
    const extraLength = readUint16(bytes, offset + 30);
    const commentLength = readUint16(bytes, offset + 32);
    const nameStart = offset + 46;
    const nameEnd = nameStart + nameLength;

    if (nameEnd > bytes.length) return null;
    if (
      compressedSize > 0 &&
      uncompressedSize / Math.max(compressedSize, 1) > 100
    ) {
      return null;
    }
    if (uncompressedSize > 100 * 1024 * 1024) return null;

    const name = decoder.decode(bytes.slice(nameStart, nameEnd));
    if (
      name.startsWith("/") ||
      name.startsWith("\\") ||
      name.includes("..") ||
      name.includes("\\")
    ) {
      return null;
    }
    entries.push(name);
    offset = nameEnd + extraLength + commentLength;
  }

  return entries;
}

function validateZipDocument(bytes: Uint8Array, extension: "xlsx" | "docx") {
  const entries = parseZipEntries(bytes);
  if (!entries) return false;
  const required =
    extension === "xlsx"
      ? ["[Content_Types].xml", "xl/workbook.xml"]
      : ["[Content_Types].xml", "word/document.xml"];
  return required.every((entry) => entries.includes(entry));
}

async function validateFileContent(file: File) {
  const extension = fileExtension(file.name);
  if (!extension) return "file_type";
  if (!allowedFiles[extension].includes(file.type as never)) return "file_type";
  if (file.size > limits.fileMaxBytes) return "file_size";

  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (extension === "pdf" && !bytesStartWith(bytes, [0x25, 0x50, 0x44, 0x46])) {
    return "file_signature";
  }
  if (
    (extension === "jpg" || extension === "jpeg") &&
    !bytesStartWith(bytes, [0xff, 0xd8, 0xff])
  ) {
    return "file_signature";
  }
  if (
    extension === "png" &&
    !bytesStartWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  ) {
    return "file_signature";
  }
  if (
    (extension === "xlsx" || extension === "docx") &&
    !validateZipDocument(bytes, extension)
  ) {
    return "file_signature";
  }

  return "";
}

async function validateFiles(files: File[]) {
  if (files.length > limits.fileMaxCount) return "file_count";

  for (const file of files) {
    const error = await validateFileContent(file);
    if (error) return error;
  }

  return "";
}

function validateTextFieldCount(form: FormData) {
  let count = 0;
  for (const [name, value] of form.entries()) {
    if (typeof value === "string") {
      count += 1;
      if (!textFieldNames.has(name)) return false;
    }
  }
  return count <= limits.textFieldMaxCount;
}

async function validateForm(form: FormData): Promise<ValidationResult> {
  const errors: Record<string, string> = {};
  const locale = textValue(form, "locale");
  const inquiryType = textValue(form, "inquiryType");
  const productProcess = textValue(form, "productProcess");
  const values = {
    companyName: textValue(form, "companyName"),
    contactName: textValue(form, "contactName"),
    email: textValue(form, "email"),
    phone: textValue(form, "phone"),
    country: textValue(form, "country"),
    website: textValue(form, "website"),
    message: textValue(form, "message"),
  };

  if (!validateTextFieldCount(form)) errors.request = "invalid";
  if (!locales.includes(locale as (typeof locales)[number]))
    errors.locale = "invalid";
  if (!inquiryTypes.includes(inquiryType as (typeof inquiryTypes)[number])) {
    errors.inquiryType = "invalid";
  }
  if (
    productProcess &&
    !productProcessValues.includes(
      productProcess as (typeof productProcessValues)[number],
    )
  ) {
    errors.productProcess = "invalid";
  }

  if (
    !values.companyName ||
    values.companyName.length > limits.companyNameMax ||
    !isSafeShortText(values.companyName)
  ) {
    errors.companyName = "invalid";
  }
  if (
    !values.contactName ||
    values.contactName.length > limits.contactNameMax ||
    !isSafeShortText(values.contactName)
  ) {
    errors.contactName = "invalid";
  }
  if (
    !values.email ||
    values.email.length > limits.emailMax ||
    hasControlCharacters(values.email) ||
    !isEmail(values.email)
  ) {
    errors.email = "invalid";
  }
  if (
    values.phone &&
    (values.phone.length > limits.phoneMax ||
      hasControlCharacters(values.phone) ||
      !isPhone(values.phone))
  ) {
    errors.phone = "invalid";
  }
  if (
    !values.country ||
    values.country.length > limits.countryMax ||
    !isSafeShortText(values.country)
  ) {
    errors.country = "invalid";
  }
  if (
    values.website &&
    (values.website.length > limits.websiteMax ||
      hasControlCharacters(values.website) ||
      !isWebsite(values.website))
  ) {
    errors.website = "invalid";
  }
  if (
    values.message.length < limits.messageMin ||
    values.message.length > limits.messageMax ||
    !isSafeMessage(values.message)
  ) {
    errors.message = "invalid";
  }
  if (
    textValue(form, "consentVersion") !== INQUIRY_CONSENT_VERSION ||
    textValue(form, "consent") !== "accepted"
  ) {
    errors.consent = "invalid";
  }

  const files = form
    .getAll("attachments")
    .filter((value): value is File => value instanceof File && value.size > 0);
  const fileError = await validateFiles(files);
  if (fileError) errors.attachments = fileError;

  return { errors, files, locale, inquiryType, productProcess, values };
}

async function parseLimitedFormData(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
    return {
      response: json({ ok: false, code: "unsupported_content_type" }, 415),
    };
  }

  const declaredLength = request.headers.get("content-length");
  if (declaredLength && Number(declaredLength) > limits.requestMaxBytes) {
    return { response: json({ ok: false, code: "request_too_large" }, 413) };
  }

  const body = await request.arrayBuffer();
  if (body.byteLength > limits.requestMaxBytes) {
    return { response: json({ ok: false, code: "request_too_large" }, 413) };
  }

  const replay = new Request(request.url, {
    method: request.method,
    headers: request.headers,
    body,
  });
  return { form: await replay.formData() };
}

async function verifyTurnstile(
  secret: string,
  token: string,
  request: Request,
) {
  if (!token) return false;

  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body,
    },
  );
  const result = (await response.json()) as Record<string, unknown>;
  const hostname = typeof result.hostname === "string" ? result.hostname : "";
  const action = typeof result.action === "string" ? result.action : "";
  const requestHost = new URL(request.url).hostname;

  return (
    result.success === true &&
    hostname === requestHost &&
    action === "technical_inquiry"
  );
}

function referenceNo(now = new Date()) {
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  const random = crypto.randomUUID().slice(0, 8).toUpperCase();
  return `PLCH-${date}-${random}`;
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getClientIp(request: Request) {
  return request.headers.get("CF-Connecting-IP") ?? "unknown";
}

async function readRateBucket(
  adapter: RateLimitAdapter,
  key: string,
  ttl: number,
) {
  const raw = await adapter.get(key);
  const now = Date.now();
  if (!raw) return { count: 0, resetAt: now + ttl * 1000 };
  try {
    const parsed = JSON.parse(raw) as { count?: number; resetAt?: number };
    if (!parsed.resetAt || parsed.resetAt <= now) {
      return { count: 0, resetAt: now + ttl * 1000 };
    }
    return {
      count: Math.max(0, Number(parsed.count) || 0),
      resetAt: parsed.resetAt,
    };
  } catch {
    return { count: 0, resetAt: now + ttl * 1000 };
  }
}

async function checkRateLimit(request: Request, env: Env) {
  const adapter = env.INQUIRY_RATE_LIMIT;
  if (!adapter) return { ok: false, configured: false };

  const ipHash = await sha256Hex(
    `${env.RATE_LIMIT_SALT ?? "inquiry"}:${getClientIp(request)}`,
  );
  const windowKey = `inquiry:window:${ipHash}`;
  const dayKey = `inquiry:day:${ipHash}`;
  const windowBucket = await readRateBucket(
    adapter,
    windowKey,
    INQUIRY_RATE_LIMIT_POLICY.windowSeconds,
  );
  const dayBucket = await readRateBucket(
    adapter,
    dayKey,
    INQUIRY_RATE_LIMIT_POLICY.daySeconds,
  );

  if (
    windowBucket.count >= INQUIRY_RATE_LIMIT_POLICY.windowMax ||
    dayBucket.count >= INQUIRY_RATE_LIMIT_POLICY.dayMax
  ) {
    return { ok: false, configured: true, limited: true };
  }

  await adapter.put(
    windowKey,
    JSON.stringify({
      count: windowBucket.count + 1,
      resetAt: windowBucket.resetAt,
    }),
    { expirationTtl: INQUIRY_RATE_LIMIT_POLICY.windowSeconds },
  );
  await adapter.put(
    dayKey,
    JSON.stringify({ count: dayBucket.count + 1, resetAt: dayBucket.resetAt }),
    { expirationTtl: INQUIRY_RATE_LIMIT_POLICY.daySeconds },
  );
  return { ok: true, configured: true };
}

function hasRequiredPreviewResources(env: Env) {
  return Boolean(
    env.TURNSTILE_SECRET_KEY &&
    env.INQUIRY_DB &&
    env.INQUIRY_FILES &&
    env.INQUIRY_RATE_LIMIT,
  );
}

async function prepareFiles(inquiryId: string, files: File[]) {
  const prepared: UploadedFile[] = [];

  for (const file of files) {
    const extension = fileExtension(file.name);
    if (!extension) throw new Error("invalid_file_extension");
    const fileId = crypto.randomUUID();
    prepared.push({
      id: fileId,
      key: `quarantine/${inquiryId}/${fileId}.${extension === "jpeg" ? "jpg" : extension}`,
      originalName: safeOriginalName(file.name),
      mimeType: file.type,
      size: file.size,
      data: await file.arrayBuffer(),
    });
  }

  return prepared;
}

async function cleanupUploadedFiles(bucket: R2Bucket, keys: string[]) {
  const failures: string[] = [];
  for (const key of keys) {
    try {
      await bucket.delete(key);
    } catch {
      failures.push(key);
    }
  }
  if (failures.length > 0) {
    console.warn(
      JSON.stringify({
        event: "inquiry_cleanup_failed",
        failedCount: failures.length,
      }),
    );
  }
}

function dedupePayload(validation: ValidationResult, files: UploadedFile[]) {
  return JSON.stringify({
    companyName: validation.values.companyName,
    contactName: validation.values.contactName,
    email: validation.values.email,
    country: validation.values.country,
    inquiryType: validation.inquiryType,
    productProcess: validation.productProcess,
    message: validation.values.message,
    locale: validation.locale,
    files: files.map((file) => ({
      name: file.originalName,
      type: file.mimeType,
      size: file.size,
    })),
  });
}

async function storeInquiry(
  env: Env,
  validation: ValidationResult,
  now: string,
) {
  const db = env.INQUIRY_DB;
  const bucket = env.INQUIRY_FILES;
  if (!db || !bucket) throw new Error("missing_storage");

  const id = crypto.randomUUID();
  const ref = referenceNo(new Date(now));
  const files = await prepareFiles(id, validation.files);
  const uploadedKeys: string[] = [];

  try {
    for (const file of files) {
      await bucket.put(file.key, file.data, {
        httpMetadata: { contentType: file.mimeType },
        customMetadata: { inquiryId: id, status: "quarantine" },
      });
      uploadedKeys.push(file.key);
    }
  } catch {
    await cleanupUploadedFiles(bucket, uploadedKeys);
    return { ok: false, status: 500, code: "file_upload_failed" };
  }

  const dedupeKey = await sha256Hex(dedupePayload(validation, files));
  const statements = [
    db
      .prepare(
        `INSERT INTO inquiries (
          id, reference_no, dedupe_key, company_name, contact_name, email, phone,
          country, website, inquiry_type, product_process, message, locale,
          consent_version, consented_at, status, source, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        id,
        ref,
        dedupeKey,
        validation.values.companyName,
        validation.values.contactName,
        validation.values.email,
        validation.values.phone,
        validation.values.country,
        validation.values.website,
        validation.inquiryType,
        validation.productProcess,
        validation.values.message,
        validation.locale,
        INQUIRY_CONSENT_VERSION,
        now,
        "new",
        "preview",
        now,
        now,
      ),
    ...files.map((file) =>
      db
        .prepare(
          `INSERT INTO inquiry_files (
            id, inquiry_id, object_key, original_name, mime_type, size_bytes, created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        )
        .bind(
          file.id,
          id,
          file.key,
          file.originalName,
          file.mimeType,
          file.size,
          now,
        ),
    ),
  ];

  try {
    await db.batch(statements);
  } catch {
    await cleanupUploadedFiles(bucket, uploadedKeys);
    return { ok: false, status: 500, code: "storage_failed" };
  }

  return { ok: true, referenceNo: ref };
}

async function handlePost({ request, env }: PagesContext) {
  const limited = await parseLimitedFormData(request);
  if (limited.response) return limited.response;
  const form = limited.form;
  if (!form) return json({ ok: false, code: "invalid_request" }, 400);

  const validation = await validateForm(form);

  if (Object.keys(validation.errors).length > 0) {
    const hasFileError = Boolean(validation.errors.attachments);
    return json(
      { ok: false, code: "validation_failed", fields: validation.errors },
      hasFileError ? 415 : 400,
    );
  }

  if (!hasRequiredPreviewResources(env)) {
    return json(
      {
        ok: false,
        code: "not_configured",
        message: "Online inquiry intake is not connected yet.",
      },
      503,
    );
  }

  const rateLimit = await checkRateLimit(request, env);
  if (!rateLimit.configured) {
    return json({ ok: false, code: "not_configured" }, 503);
  }
  if (rateLimit.limited) {
    return json({ ok: false, code: "rate_limited" }, 429);
  }

  const token = textValue(form, "cf-turnstile-response");
  const passedTurnstile = await verifyTurnstile(
    env.TURNSTILE_SECRET_KEY ?? "",
    token,
    request,
  );

  if (!passedTurnstile) {
    return json({ ok: false, code: "security_check_failed" }, 403);
  }

  const stored = await storeInquiry(env, validation, new Date().toISOString());
  if (!stored.ok) {
    return json({ ok: false, code: stored.code }, stored.status);
  }

  return json({ ok: true, referenceNo: stored.referenceNo });
}

export const onRequest = async (context: PagesContext) => {
  if (context.request.method !== "POST") return methodNotAllowed();
  return handlePost(context);
};

export const onRequestPost = handlePost;

export const onRequestGet = async () => methodNotAllowed();

export const __test = {
  validateForm,
  validateFileContent,
  parseLimitedFormData,
  checkRateLimit,
  storeInquiry,
  referenceNo,
  INQUIRY_CONSENT_VERSION,
};
