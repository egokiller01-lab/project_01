export const INQUIRY_CONSENT_VERSION = "inquiry-consent-v1";

export const INQUIRY_LIMITS = {
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
  requestMaxBytes: 32 * 1024 * 1024,
  textFieldMaxCount: 32,
};

export const INQUIRY_RATE_LIMIT_POLICY = {
  windowSeconds: 10 * 60,
  windowMax: 5,
  daySeconds: 24 * 60 * 60,
  dayMax: 20,
};
