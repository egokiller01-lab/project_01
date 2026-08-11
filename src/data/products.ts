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

const koProducts: ProductDetail[] = [
  {
    slug: "pretreatment",
    title: "전처리",
    summary:
      "탈지, 세정, 산세, 활성화 등 후속 도금·피막 공정의 시작 조건을 잡는 제품군입니다.",
    overview:
      "소재 표면의 유분, 산화막, 가공 잔류물을 정리해 밀착 불량과 얼룩의 원인축을 줄입니다.",
    materials: ["철강", "동 및 동합금", "알루미늄", "스테인리스"],
    processes: ["탈지", "세정", "산세", "활성화", "디스머트"],
    checks: ["농도", "온도", "처리 시간", "수세 상태", "소재 표면 상태"],
    support: ["전처리 순서 검토", "불량 원인 점검", "샘플 평가 조건 제안"],
    cta: "전처리 문의",
  },
  {
    slug: "electroplating",
    title: "전기도금",
    summary:
      "전류, 도금욕, 여과, 교반 조건을 함께 보며 금속 도금 품질의 반복성을 관리합니다.",
    overview:
      "피트, 두께 편차, 밀착 불량, 색상 편차 등 전기도금 현장의 주요 문제를 bath 관리와 연결해 검토합니다.",
    materials: ["철강", "동합금", "정밀 금속 부품", "전자 부품"],
    processes: ["니켈 도금", "동 도금", "주석 도금", "아연 도금"],
    checks: ["pH", "금속 농도", "전류밀도", "교반", "여과", "온도"],
    support: ["도금욕 분석", "Hull Cell 평가", "불량 사진 기반 상담"],
    cta: "전기도금 문의",
  },
  {
    slug: "electroless-plating",
    title: "무전해도금",
    summary:
      "복잡 형상과 특수 소재에 적용되는 화학 도금 공정의 안정성을 검토합니다.",
    overview:
      "전류 분포보다 소재 활성화, 환원 반응, bath 안정성이 중요한 공정으로 보고 관리 항목을 정리합니다.",
    materials: ["금속 부품", "PCB 관련 소재", "플라스틱", "복잡 형상 부품"],
    processes: ["무전해 니켈", "무전해 동", "소재 활성화", "침지형 표면처리"],
    checks: ["pH", "온도", "금속 농도", "환원제 상태", "bath 안정성"],
    support: [
      "소재별 적용성 검토",
      "bath 관리 체크리스트",
      "샘플 테스트 조건 제안",
    ],
    cta: "무전해도금 문의",
  },
  {
    slug: "aluminum-anodizing",
    title: "알루미늄 아노다이징",
    summary:
      "알루미늄 전처리, 산화피막, 염색, 봉공 조건을 연결해 품질 편차를 줄입니다.",
    overview:
      "합금 종류와 전처리 반응 차이를 먼저 확인하고 피막 형성, 색상, 봉공 조건까지 함께 검토합니다.",
    materials: [
      "압출 알루미늄",
      "가공 알루미늄",
      "주조 알루미늄",
      "알루미늄 합금",
    ],
    processes: ["탈지", "에칭", "디스머트", "아노다이징", "염색", "봉공"],
    checks: ["합금 종류", "전처리 조건", "피막 상태", "염색 조건", "봉공 조건"],
    support: ["합금별 전처리 검토", "색상 편차 상담", "봉공 조건 점검"],
    cta: "아노다이징 문의",
  },
  {
    slug: "conversion-coating",
    title: "화성피막",
    summary:
      "내식성, 도장 밀착, 변색 억제를 위한 금속 표면 피막 공정을 안내합니다.",
    overview:
      "전환피막과 관련 후처리는 소재 표면, 수세, 건조 조건의 영향을 함께 받으므로 공정 전후를 같이 봅니다.",
    materials: ["철강", "알루미늄", "마그네슘", "스테인리스", "아연계 소재"],
    processes: ["전환피막", "인산염", "패시베이션", "흑색산화", "방청 처리"],
    checks: ["표면 상태", "pH", "온도", "처리 시간", "수세", "건조"],
    support: ["소재별 피막 선택", "도장 밀착 상담", "방청 조건 점검"],
    cta: "화성피막 문의",
  },
  {
    slug: "post-treatment-specialty",
    title: "후처리·특수약품",
    summary:
      "도금과 피막 이후의 변색, 방청, 세척, 보완 처리를 위한 약품 범주입니다.",
    overview:
      "후처리는 앞 공정의 품질을 유지하는 단계이므로 수세, 건조, 포장 전 조건까지 함께 확인합니다.",
    materials: ["도금품", "피막 처리품", "정밀 금속 부품", "방청 목적 부품"],
    processes: ["변색 방지", "방청 후처리", "세척", "건조 전 관리"],
    checks: ["전공정 상태", "잔류 약품", "수세", "건조", "보관 조건"],
    support: ["후처리 조건 검토", "변색·얼룩 원인 점검", "공정 보완 제안"],
    cta: "후처리 문의",
  },
  {
    slug: "basic-chemicals",
    title: "기초화학약품",
    summary:
      "표면처리 라인 운영에 필요한 산·알칼리류, 금속염, 보충 원료 공급 범주입니다.",
    overview:
      "공정 원료의 사양, 보관 조건, LOT 관리를 확인해 표면처리 라인의 공급 안정성을 지원합니다.",
    materials: [
      "산·알칼리류",
      "금속염",
      "동계 원료",
      "아연계 원료",
      "니켈계 원료",
    ],
    processes: ["원료 공급", "보충 관리", "사양 확인", "대체 원료 검토"],
    checks: ["사양서", "LOT", "보관 조건", "유효기간", "입고 확인"],
    support: ["원료 사양 확인", "취급 조건 검토", "주요 공급품 LOT 추적 관리"],
    cta: "기초화학약품 문의",
  },
  {
    slug: "filtration-equipment",
    title: "여과장비·관련 설비",
    summary:
      "도금·전처리 라인의 여과, 온도 관리, 시험·점검 기자재를 함께 검토합니다.",
    overview:
      "입자성 불량, 도금욕 오염, 온도 편차를 줄이기 위한 설비와 공정 보조 기자재를 안내합니다.",
    materials: ["도금 라인", "전처리 라인", "세정 라인", "시험·분석 현장"],
    processes: [
      "순환 여과",
      "활성탄 처리",
      "온도 관리",
      "Hull Cell 시험",
      "bath 점검",
    ],
    checks: [
      "여과량",
      "필터 교체 주기",
      "온도 안정성",
      "센서 상태",
      "시험 조건",
    ],
    support: ["여과 조건 검토", "bath 관리와 장비 요인 분리", "시험 조건 안내"],
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
    materials: product.materials.slice(0, 3).join(" · "),
    process: product.processes.slice(0, 4).join(" · "),
    cta: product.cta,
  }));
}
