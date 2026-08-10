import { onRequestPost } from "../functions/api/inquiry";
import { INQUIRY_CONSENT_VERSION } from "../src/lib/inquiryConstants";

declare const process: { exit: (code?: number) => never };

function assert(condition: unknown, message?: string) {
  if (!condition) throw new Error(message ?? "assertion failed");
}

assert.equal = (actual: unknown, expected: unknown, message?: string) => {
  if (actual !== expected) {
    throw new Error(
      message ?? `expected ${String(expected)}, got ${String(actual)}`,
    );
  }
};

assert.match = (actual: unknown, pattern: RegExp, message?: string) => {
  if (typeof actual !== "string" || !pattern.test(actual)) {
    throw new Error(message ?? `value did not match ${pattern}`);
  }
};

type PutRecord = { key: string; value: ArrayBuffer };

class MockRateLimit {
  store = new Map<string, string>();

  async get(key: string) {
    return this.store.get(key) ?? null;
  }

  async put(key: string, value: string) {
    this.store.set(key, value);
  }
}

class MockR2 {
  puts: PutRecord[] = [];
  deletes: string[] = [];
  failAt = -1;
  failDelete = false;

  async put(key: string, value: ArrayBuffer) {
    if (this.puts.length === this.failAt) throw new Error("r2_put_failed");
    this.puts.push({ key, value });
  }

  async delete(key: string) {
    if (this.failDelete) throw new Error("r2_delete_failed");
    this.deletes.push(key);
  }
}

class MockStatement {
  values: unknown[] = [];

  constructor(public query: string) {}

  bind(...values: unknown[]) {
    this.values = values;
    return this;
  }
}

class MockD1 {
  statements: MockStatement[] = [];
  batches: MockStatement[][] = [];
  failBatch = false;

  prepare(query: string) {
    const statement = new MockStatement(query);
    this.statements.push(statement);
    return statement;
  }

  async batch(statements: MockStatement[]) {
    if (this.failBatch) throw new Error("d1_batch_failed");
    this.batches.push(statements);
    return statements.map(() => ({ success: true }));
  }
}

function validPdf(name = "sample.pdf") {
  return new File([new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d])], name, {
    type: "application/pdf",
  });
}

function validJpg(name = "sample.jpg") {
  return new File([new Uint8Array([0xff, 0xd8, 0xff, 0xe0])], name, {
    type: "image/jpeg",
  });
}

function validPng(name = "sample.png") {
  return new File(
    [new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])],
    name,
    { type: "image/png" },
  );
}

function crc32Table() {
  const table = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    table[index] = value >>> 0;
  }
  return table;
}

const crcTable = crc32Table();

function crc32(bytes: Uint8Array) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function u16(value: number) {
  return [value & 0xff, (value >>> 8) & 0xff];
}

function u32(value: number) {
  return [
    value & 0xff,
    (value >>> 8) & 0xff,
    (value >>> 16) & 0xff,
    (value >>> 24) & 0xff,
  ];
}

function zip(entries: Record<string, string>) {
  const encoder = new TextEncoder();
  const locals: number[] = [];
  const centrals: number[] = [];
  let offset = 0;

  for (const [name, text] of Object.entries(entries)) {
    const nameBytes = encoder.encode(name);
    const data = encoder.encode(text);
    const crc = crc32(data);
    const local = [
      ...u32(0x04034b50),
      ...u16(20),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u32(crc),
      ...u32(data.length),
      ...u32(data.length),
      ...u16(nameBytes.length),
      ...u16(0),
      ...nameBytes,
      ...data,
    ];
    locals.push(...local);
    centrals.push(
      ...u32(0x02014b50),
      ...u16(20),
      ...u16(20),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u32(crc),
      ...u32(data.length),
      ...u32(data.length),
      ...u16(nameBytes.length),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u16(0),
      ...u32(0),
      ...u32(offset),
      ...nameBytes,
    );
    offset += local.length;
  }

  const centralOffset = locals.length;
  const centralSize = centrals.length;
  const entryCount = Object.keys(entries).length;
  return new Uint8Array([
    ...locals,
    ...centrals,
    ...u32(0x06054b50),
    ...u16(0),
    ...u16(0),
    ...u16(entryCount),
    ...u16(entryCount),
    ...u32(centralSize),
    ...u32(centralOffset),
    ...u16(0),
  ]);
}

function validXlsx(name = "sample.xlsx") {
  return new File(
    [
      zip({
        "[Content_Types].xml": "<Types/>",
        "xl/workbook.xml": "<workbook/>",
      }),
    ],
    name,
    {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  );
}

function validDocx(name = "sample.docx") {
  return new File(
    [
      zip({
        "[Content_Types].xml": "<Types/>",
        "word/document.xml": "<document/>",
      }),
    ],
    name,
    {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
  );
}

function badZip(name: string, type: string, entries: Record<string, string>) {
  return new File([zip(entries)], name, { type });
}

function baseForm(locale = "en") {
  const form = new FormData();
  form.set("companyName", "ABC Surface");
  form.set("contactName", "Kim Manager");
  form.set("email", "test@example.com");
  form.set("country", "Vietnam");
  form.set("inquiryType", "technical-support");
  form.set("productProcess", "electroplating");
  form.set(
    "message",
    "Please review our nickel plating bath and pitting issue.",
  );
  form.set("consent", "accepted");
  form.set("consentVersion", INQUIRY_CONSENT_VERSION);
  form.set("locale", locale);
  form.set("submittedAt", "2026-08-10T14:00:00.000Z");
  form.set("cf-turnstile-response", "token");
  return form;
}

function request(form: FormData, headers: Record<string, string> = {}) {
  return new Request("https://project-01-astro-preview.pages.dev/api/inquiry", {
    method: "POST",
    body: form,
    headers: {
      "CF-Connecting-IP": "203.0.113.20",
      ...headers,
    },
  });
}

function env(overrides: Record<string, unknown> = {}) {
  return {
    TURNSTILE_SECRET_KEY: "secret",
    INQUIRY_DB: new MockD1(),
    INQUIRY_FILES: new MockR2(),
    INQUIRY_RATE_LIMIT: new MockRateLimit(),
    RATE_LIMIT_SALT: "test-salt",
    ...overrides,
  };
}

async function post(
  form: FormData,
  environment = env(),
  headers: Record<string, string> = {},
) {
  const response = await onRequestPost({
    request: request(form, headers),
    env: environment as never,
  });
  const body = await response.json();
  return { response, body, environment };
}

function mockTurnstile(success = true) {
  const original = globalThis.fetch;
  globalThis.fetch = (async () =>
    new Response(
      JSON.stringify({
        success,
        hostname: "project-01-astro-preview.pages.dev",
        action: "technical_inquiry",
      }),
      { headers: { "content-type": "application/json" } },
    )) as typeof fetch;
  return () => {
    globalThis.fetch = original;
  };
}

async function assertStatus(
  name: string,
  form: FormData,
  status: number,
  headers: Record<string, string> = {},
) {
  const restore = mockTurnstile(true);
  try {
    const result = await post(form, env(), headers);
    assert.equal(result.response.status, status, name);
    return result;
  } finally {
    restore();
  }
}

async function run() {
  for (const locale of ["ko", "en", "vi"]) {
    const form = baseForm(locale);
    const restore = mockTurnstile(true);
    try {
      const result = await post(form);
      assert.equal(result.response.status, 200, `success ${locale}`);
      assert.equal(result.body.ok, true);
      assert.match(result.body.referenceNo, /^PLCH-\d{8}-[A-Z0-9]{8}$/);
    } finally {
      restore();
    }
  }

  for (const field of ["companyName", "contactName", "country"]) {
    const form = baseForm();
    form.set(field, "<script>alert(1)</script>");
    await assertStatus(`blocked ${field}`, form, 400);
  }

  const chemistry = baseForm();
  chemistry.set(
    "message",
    "NiSO4 bath shows pH 4.2 and H2 bubbles near the rack.",
  );
  await assertStatus("chemistry message allowed", chemistry, 200);

  const badMarkup = baseForm();
  badMarkup.set("message", "<img src=x onerror=alert(1)> plating issue");
  await assertStatus("message markup blocked", badMarkup, 400);

  const badConsent = baseForm();
  badConsent.set("consentVersion", "future-version");
  await assertStatus("bad consent", badConsent, 400);

  const noConsent = baseForm();
  noConsent.delete("consentVersion");
  await assertStatus("missing consent", noConsent, 400);

  const largeHeader = baseForm();
  await assertStatus("content length hard limit", largeHeader, 413, {
    "content-length": String(33 * 1024 * 1024),
  });

  for (const [name, headers] of [
    ["missing content length", {}],
    ["false content length", { "content-length": "1" }],
  ] as const) {
    const largeBody = baseForm();
    largeBody.set("message", "A".repeat(33 * 1024 * 1024));
    await assertStatus(name, largeBody, 413, headers);
  }

  const restore = mockTurnstile(true);
  try {
    const noConfigured = env({ INQUIRY_DB: undefined });
    const notConfigured = await post(baseForm(), noConfigured);
    assert.equal(notConfigured.response.status, 503);
    assert.equal(notConfigured.body.code, "not_configured");

    const rate = new MockRateLimit();
    const limitedEnv = env({ INQUIRY_RATE_LIMIT: rate });
    for (let index = 0; index < 5; index += 1) {
      const ok = await post(baseForm(), limitedEnv);
      assert.equal(ok.response.status, 200);
    }
    const limited = await post(baseForm(), limitedEnv);
    assert.equal(limited.response.status, 429);

    const files = baseForm();
    files.append("attachments", validPdf());
    files.append("attachments", validJpg());
    files.append("attachments", validPng());
    const fileOk = await post(files);
    assert.equal(fileOk.response.status, 200);

    for (const file of [
      new File([new Uint8Array([0x4d, 0x5a])], "fake.pdf", {
        type: "application/pdf",
      }),
      new File([new Uint8Array([0x25, 0x50])], "fake.jpg", {
        type: "image/jpeg",
      }),
      new File([new Uint8Array([0x25, 0x50])], "fake.png", {
        type: "image/png",
      }),
      badZip(
        "fake.xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        {
          "[Content_Types].xml": "<Types/>",
        },
      ),
      badZip(
        "fake.docx",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        {
          "[Content_Types].xml": "<Types/>",
        },
      ),
      badZip(
        "path.xlsx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        {
          "[Content_Types].xml": "<Types/>",
          "../xl/workbook.xml": "<workbook/>",
        },
      ),
    ]) {
      const form = baseForm();
      form.append("attachments", file);
      const result = await post(form);
      assert.equal(result.response.status, 415, file.name);
    }

    for (const validFile of [validXlsx(), validDocx()]) {
      const form = baseForm();
      form.append("attachments", validFile);
      const result = await post(form);
      assert.equal(result.response.status, 200, validFile.name);
    }

    for (const failAt of [0, 1, 2]) {
      const r2 = new MockR2();
      r2.failAt = failAt;
      const form = baseForm();
      form.append("attachments", validPdf("a.pdf"));
      form.append("attachments", validJpg("b.jpg"));
      form.append("attachments", validPng("c.png"));
      const result = await post(form, env({ INQUIRY_FILES: r2 }));
      assert.equal(result.response.status, 500);
      assert.equal((result.environment.INQUIRY_DB as MockD1).batches.length, 0);
      assert.equal(r2.deletes.length, r2.puts.length);
    }

    const d1 = new MockD1();
    d1.failBatch = true;
    const d1Form = baseForm();
    d1Form.append("attachments", validPdf());
    const d1Result = await post(d1Form, env({ INQUIRY_DB: d1 }));
    assert.equal(d1Result.response.status, 500);
    assert.equal(
      (d1Result.environment.INQUIRY_FILES as MockR2).deletes.length,
      1,
    );

    const cleanupR2 = new MockR2();
    cleanupR2.failDelete = true;
    cleanupR2.failAt = 1;
    const cleanupForm = baseForm();
    cleanupForm.append("attachments", validPdf("a.pdf"));
    cleanupForm.append("attachments", validJpg("b.jpg"));
    const cleanup = await post(cleanupForm, env({ INQUIRY_FILES: cleanupR2 }));
    assert.equal(cleanup.response.status, 500);

    const failedTurnstile = mockTurnstile(false);
    try {
      const turnstileResult = await post(baseForm());
      assert.equal(turnstileResult.response.status, 403);
    } finally {
      failedTurnstile();
    }
  } finally {
    restore();
  }
}

run()
  .then(() => {
    console.log("inquiry security tests PASS");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
