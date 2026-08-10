-- Phase 3A preview inquiry schema draft.
-- Do not apply to Production without representative approval.

CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  reference_no TEXT NOT NULL UNIQUE,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  website TEXT,
  inquiry_type TEXT NOT NULL,
  product_process TEXT,
  message TEXT NOT NULL,
  locale TEXT NOT NULL,
  consent_version TEXT NOT NULL,
  consented_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  source TEXT NOT NULL DEFAULT 'preview',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  CHECK (status IN ('new', 'reviewing', 'replied', 'closed', 'spam')),
  CHECK (locale IN ('ko', 'en', 'vi')),
  CHECK (
    inquiry_type IN (
      'product',
      'technical-support',
      'process-problem',
      'quotation',
      'distribution-partnership',
      'other'
    )
  )
);

CREATE INDEX IF NOT EXISTS idx_inquiries_status_created_at
  ON inquiries (status, created_at);

CREATE INDEX IF NOT EXISTS idx_inquiries_locale_created_at
  ON inquiries (locale, created_at);

CREATE TABLE IF NOT EXISTS inquiry_files (
  id TEXT PRIMARY KEY,
  inquiry_id TEXT NOT NULL,
  object_key TEXT NOT NULL UNIQUE,
  original_name TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (inquiry_id) REFERENCES inquiries (id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_inquiry_files_inquiry_id
  ON inquiry_files (inquiry_id);
