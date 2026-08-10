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

const allowedFileTypes = new Map([
  ["application/pdf", "pdf"],
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"],
  [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "docx",
  ],
]);

const limits = {
  companyNameMax: 120,
  contactNameMax: 80,
  emailMax: 160,
  phoneMax: 40,
  countryMax: 80,
  websiteMax: 180,
  messageMin: 20,
  messageMax: 3000,
  fileMaxBytes: 10 * 1024 * 1024,
  fileMaxCount: 3,
};

type Env = {
  TURNSTILE_SECRET_KEY?: string;
  INQUIRY_DB?: {
    prepare: (query: string) => {
      bind: (...values: unknown[]) => { run: () => Promise<unknown> };
    };
  };
  INQUIRY_FILES?: {
    put: (
      key: string,
      value: File | ArrayBuffer,
      options?: unknown,
    ) => Promise<unknown>;
    delete: (key: string) => Promise<unknown>;
  };
  SITE_ENV?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function textValue(form: FormData, name: string) {
  const value = form.get(name);
  return typeof value === "string" ? value.trim() : "";
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

function hasMarkup(value: string) {
  return /<[^>]*>|javascript:/i.test(value);
}

function validateFiles(files: File[]) {
  if (files.length > limits.fileMaxCount) return "file_count";

  for (const file of files) {
    const extension = file.name.includes(".")
      ? file.name.split(".").pop()?.toLowerCase()
      : "";
    const expectedExtension = allowedFileTypes.get(file.type);

    if (!expectedExtension || !extension) return "file_type";
    if (expectedExtension === "jpg" && !["jpg", "jpeg"].includes(extension))
      return "file_type";
    if (expectedExtension !== "jpg" && expectedExtension !== extension)
      return "file_type";
    if (file.size > limits.fileMaxBytes) return "file_size";
  }

  return "";
}

function validateForm(form: FormData) {
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
    values.companyName.length > limits.companyNameMax
  ) {
    errors.companyName = "invalid";
  }
  if (
    !values.contactName ||
    values.contactName.length > limits.contactNameMax
  ) {
    errors.contactName = "invalid";
  }
  if (
    !values.email ||
    values.email.length > limits.emailMax ||
    !isEmail(values.email)
  ) {
    errors.email = "invalid";
  }
  if (
    values.phone &&
    (values.phone.length > limits.phoneMax || !isPhone(values.phone))
  ) {
    errors.phone = "invalid";
  }
  if (!values.country || values.country.length > limits.countryMax) {
    errors.country = "invalid";
  }
  if (
    values.website &&
    (values.website.length > limits.websiteMax || !isWebsite(values.website))
  ) {
    errors.website = "invalid";
  }
  if (
    values.message.length < limits.messageMin ||
    values.message.length > limits.messageMax ||
    hasMarkup(values.message)
  ) {
    errors.message = "invalid";
  }
  if (
    !textValue(form, "consentVersion") ||
    textValue(form, "consent") !== "accepted"
  ) {
    errors.consent = "invalid";
  }

  const files = form
    .getAll("attachments")
    .filter((value): value is File => value instanceof File && value.size > 0);
  const fileError = validateFiles(files);
  if (fileError) errors.attachments = fileError;

  return { errors, files, locale, inquiryType, productProcess, values };
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

export const onRequestPost = async ({ request, env }: PagesContext) => {
  if (!request.headers.get("content-type")?.includes("multipart/form-data")) {
    return json({ ok: false, code: "unsupported_content_type" }, 415);
  }

  const form = await request.formData();
  const validation = validateForm(form);

  if (Object.keys(validation.errors).length > 0) {
    return json(
      { ok: false, code: "validation_failed", fields: validation.errors },
      400,
    );
  }

  const hasRequiredPreviewResources =
    Boolean(env.TURNSTILE_SECRET_KEY) &&
    Boolean(env.INQUIRY_DB) &&
    Boolean(env.INQUIRY_FILES);

  if (!hasRequiredPreviewResources) {
    return json(
      {
        ok: false,
        code: "not_configured",
        message: "Online inquiry intake is not connected yet.",
      },
      503,
    );
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

  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  const ref = referenceNo(new Date(now));
  const payload = {
    companyName: validation.values.companyName,
    contactName: validation.values.contactName,
    email: validation.values.email,
    phone: validation.values.phone,
    country: validation.values.country,
    website: validation.values.website,
    inquiryType: validation.inquiryType,
    productProcess: validation.productProcess,
    message: validation.values.message,
    locale: validation.locale,
  };

  await env.INQUIRY_DB?.prepare(
    `INSERT INTO inquiries (
      id, reference_no, company_name, contact_name, email, phone, country, website,
      inquiry_type, product_process, message, locale, consent_version, consented_at,
      status, source, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      id,
      ref,
      payload.companyName,
      payload.contactName,
      payload.email,
      payload.phone,
      payload.country,
      payload.website,
      payload.inquiryType,
      payload.productProcess,
      payload.message,
      payload.locale,
      textValue(form, "consentVersion"),
      now,
      "new",
      "preview",
      now,
      now,
    )
    .run();

  for (const file of validation.files) {
    const fileId = crypto.randomUUID();
    const extension =
      allowedFileTypes.get(file.type) === "jpg"
        ? "jpg"
        : allowedFileTypes.get(file.type);
    const key = `quarantine/${id}/${fileId}.${extension}`;

    await env.INQUIRY_FILES?.put(key, file, {
      httpMetadata: { contentType: file.type },
      customMetadata: { inquiryId: id, status: "quarantine" },
    });

    await env.INQUIRY_DB?.prepare(
      `INSERT INTO inquiry_files (
        id, inquiry_id, object_key, original_name, mime_type, size_bytes, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(fileId, id, key, file.name.slice(0, 180), file.type, file.size, now)
      .run();
  }

  return json({ ok: true, referenceNo: ref });
};

export const onRequestGet = async () =>
  json({ ok: false, code: "method_not_allowed" }, 405);
