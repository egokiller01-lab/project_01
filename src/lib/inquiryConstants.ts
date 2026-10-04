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

// 문의 폼의 제품/공정 선택값이다. 사이트 제품군 slug를 그대로 사용해야
// 언어 전환·제품 상세 링크에서 넘어온 선택이 서버 검증과 일치한다.
// 레거시 공정값도 기존 제출 데이터와의 호환을 위해 허용한다.
export const INQUIRY_PRODUCT_FAMILY_VALUES = [
  "pretreatment",
  "electroplating",
  "electroless-plating",
  "aluminum-anodizing",
  "conversion-coating",
  "post-treatment-specialty",
  "basic-chemicals",
  "filtration-equipment",
] as const;

export const INQUIRY_LEGACY_PROCESS_VALUES = [
  "degreasing-cleaning-pretreatment",
  "zinc-zinc-nickel-chromate",
  "conversion-corrosion-coating",
  "general-chemicals-non-ferrous-metals",
  "filtration-equipment-supplies",
] as const;

export const INQUIRY_PRODUCT_PROCESS_VALUES: readonly string[] = [
  ...INQUIRY_PRODUCT_FAMILY_VALUES,
  ...INQUIRY_LEGACY_PROCESS_VALUES,
];

export const INQUIRY_RATE_LIMIT_POLICY = {
  windowSeconds: 10 * 60,
  windowMax: 5,
  daySeconds: 24 * 60 * 60,
  dayMax: 20,
};
