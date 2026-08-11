import type { Locale, ProductDetail, ProductFamily } from "../types";

const slugs = [
  "pretreatment",
  "electroplating",
  "electroless-plating",
  "aluminum-anodizing",
  "conversion-coating",
  "post-treatment-specialty",
  "basic-chemicals",
  "filtration-equipment",
] as const;

export type ProductSlug = (typeof slugs)[number];

export const productSlugs = [...slugs];

export const processLabels: Record<ProductSlug, string> = {
  pretreatment: "전처리",
  electroplating: "전기도금",
  "electroless-plating": "무전해도금",
  "aluminum-anodizing": "알루미늄 아노다이징",
  "conversion-coating": "화성피막",
  "post-treatment-specialty": "후처리·특수약품",
  "basic-chemicals": "기초화학약품",
  "filtration-equipment": "여과장비·관련 설비",
};

const koProducts: ProductDetail[] = [
  {
    slug: "pretreatment",
    title: "전처리",
    summary:
      "탈지, 세정, 산세, 에칭, 디스머트로 후속 도금·피막 공정의 시작 조건을 잡습니다.",
    overview:
      "전처리 공정에서 관리하는 취급 품목을 기준으로 후속 도금·피막 공정의 시작 조건을 정리합니다.",
    materials: ["탈지", "세정", "산세", "에칭", "디스머트"],
    processes: ["탈지", "세정", "산세", "에칭", "디스머트"],
    checks: ["농도", "온도", "처리 시간", "수세 상태", "소재 표면 상태"],
    support: ["전처리 순서 검토", "불량 원인 점검", "관리 항목 확인"],
    cta: "전처리 문의",
  },
  {
    slug: "electroplating",
    title: "전기도금",
    summary:
      "니켈, 구리, 주석, 아연, 크롬, 은, 금 도금 공정의 도금욕 관리와 적용 조건을 검토합니다.",
    overview:
      "피트, 두께 편차, 밀착 불량, 색상 편차 등 전기도금 현장의 주요 문제를 도금욕 관리와 연결해 봅니다.",
    materials: ["니켈", "구리", "주석", "아연", "크롬", "은", "금"],
    processes: ["니켈", "구리", "주석", "아연", "크롬", "은", "금"],
    checks: ["pH", "금속 농도", "전류밀도", "교반", "여과", "온도"],
    support: ["도금욕 분석", "작업조건 검토", "불량 사진 기반 상담"],
    cta: "전기도금 문의",
  },
  {
    slug: "electroless-plating",
    title: "무전해도금",
    summary: "무전해 니켈과 무전해 구리 공정의 도금욕 안정성을 검토합니다.",
    overview:
      "전류 분포보다 환원 반응과 욕 안정성이 중요한 공정으로 보고 관리 항목을 정리합니다.",
    materials: ["무전해 니켈", "무전해 구리"],
    processes: ["무전해 니켈", "무전해 구리"],
    checks: ["pH", "온도", "금속 농도", "환원제 상태", "욕 안정성"],
    support: ["도금욕 관리 항목", "환원 반응 확인", "불량 원인 점검"],
    cta: "무전해도금 문의",
  },
  {
    slug: "aluminum-anodizing",
    title: "알루미늄 아노다이징",
    summary:
      "화학연마, 에칭, 디스머트, 아노다이징, 염색, 봉공, 니켈 리치아웃 제거를 검토합니다.",
    overview:
      "합금 종류와 전처리 반응 차이를 먼저 확인하고 피막 형성, 색상, 봉공 조건까지 함께 검토합니다.",
    materials: [
      "화학연마",
      "에칭",
      "디스머트",
      "아노다이징",
      "염색",
      "봉공",
      "니켈 리치아웃 제거",
    ],
    processes: [
      "화학연마",
      "에칭",
      "디스머트",
      "아노다이징",
      "염색",
      "봉공",
      "니켈 리치아웃 제거",
    ],
    checks: ["합금 종류", "전처리 조건", "피막 상태", "염색 조건", "봉공 조건"],
    support: ["전처리 조건 검토", "색상 편차 상담", "봉공 조건 점검"],
    cta: "아노다이징 문의",
  },
  {
    slug: "conversion-coating",
    title: "화성피막",
    summary:
      "인산염, 징케이트, 크로메이트 등 금속 표면 피막 공정을 안내합니다.",
    overview:
      "소재 표면, 수세, 건조 조건에 영향을 받는 공정으로 보고 전후 조건을 함께 확인합니다.",
    materials: ["인산염", "징케이트", "크로메이트"],
    processes: ["인산염", "징케이트", "크로메이트"],
    checks: ["표면 상태", "pH", "온도", "처리 시간", "수세", "건조"],
    support: ["피막 공정 검토", "전후 조건 확인", "불량 원인 점검"],
    cta: "화성피막 문의",
  },
  {
    slug: "post-treatment-specialty",
    title: "후처리·특수약품",
    summary:
      "변색방지, 코팅, 특수 세정, 제거제 등 후처리와 특수 목적 약품 범주입니다.",
    overview:
      "앞 공정의 품질을 유지하는 단계로 보고 수세, 건조, 보관 전 조건까지 함께 확인합니다.",
    materials: ["변색방지", "코팅", "특수 세정", "제거제"],
    processes: ["변색방지", "코팅", "특수 세정", "제거제"],
    checks: ["전공정 상태", "잔류 약품", "수세", "건조", "보관 조건"],
    support: ["후처리 조건 검토", "변색·얼룩 원인 점검", "공정 보완 제안"],
    cta: "후처리 문의",
  },
  {
    slug: "basic-chemicals",
    title: "기초화학약품",
    summary:
      "황산, 염산, 질산, 가성소다 등 표면처리 라인 운영에 필요한 기초화학약품입니다.",
    overview:
      "공정 원료의 사양, 보관 조건, LOT 관리를 확인해 표면처리 라인의 공급 안정성을 지원합니다.",
    materials: ["황산", "염산", "질산", "가성소다"],
    processes: ["원료 공급", "보충 관리", "사양 확인"],
    checks: ["사양서", "LOT", "보관 조건", "입고 확인"],
    support: ["원료 사양 확인", "취급 조건 검토", "주요 공급품 LOT 추적 관리"],
    cta: "기초화학약품 문의",
  },
  {
    slug: "filtration-equipment",
    title: "여과장비·관련 설비",
    summary: "표면처리 및 도금 공정용 여과장비를 공정 조건과 함께 검토합니다.",
    overview:
      "입자성 불량과 도금욕 오염을 줄이기 위한 여과 조건과 설비 적용성을 함께 확인합니다.",
    materials: ["표면처리 및 도금 공정용 여과장비"],
    processes: ["표면처리 및 도금 공정용 여과장비"],
    checks: ["여과량", "필터 교체 주기", "도금욕 오염 상태", "장비 점검"],
    support: [
      "여과 조건 검토",
      "도금욕 관리와 장비 요인 분리",
      "장비 적용 검토",
    ],
    cta: "여과장비 문의",
  },
];

function fallbackProducts(locale: Exclude<Locale, "ko">): ProductDetail[] {
  const labels: Record<
    Exclude<Locale, "ko">,
    { suffix: string; cta: string }
  > = {
    en: { suffix: " - Korean page pending review", cta: "Technical inquiry" },
    vi: { suffix: " - chờ duyệt nội dung tiếng Hàn", cta: "Liên hệ kỹ thuật" },
  };

  return koProducts.map((item) => ({
    ...item,
    title: `${item.title}${labels[locale].suffix}`,
    summary:
      locale === "en"
        ? "This product group will be finalized after Korean content review."
        : "Nhóm sản phẩm này sẽ được hoàn thiện sau khi nội dung tiếng Hàn được duyệt.",
    overview:
      locale === "en"
        ? "The multilingual page is preserved for routing only at this stage."
        : "Trang đa ngôn ngữ được giữ để duy trì đường dẫn ở giai đoạn này.",
    cta: labels[locale].cta,
  }));
}

export const products: Record<Locale, ProductDetail[]> = {
  ko: koProducts,
  en: fallbackProducts("en"),
  vi: fallbackProducts("vi"),
};

export function getProduct(locale: Locale, slug: string) {
  return products[locale].find((item) => item.slug === slug);
}

export function getProductFamilies(locale: Locale): ProductFamily[] {
  return products[locale].map((product) => ({
    slug: product.slug,
    title: product.title,
    summary: product.summary,
    href: `/${locale}/contact/?process=${product.slug}`,
    materials: product.materials.slice(0, 4).join(" · "),
    process: product.processes.slice(0, 5).join(" · "),
    cta: product.cta,
  }));
}
