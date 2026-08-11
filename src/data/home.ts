import type {
  BlogLink,
  CTA,
  Locale,
  ProductFamily,
  SolutionItem,
} from "../types";

type HomeContent = {
  seoTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitleLines: string[];
  heroAccent: string;
  heroSummary: string;
  primaryCtas: CTA[];
  strengths: string[];
  valueFlow: string[];
  sectionLabels: {
    value: string;
    solutions: string;
    technology: string;
    quality: string;
    knowledge: string;
  };
  sectionSummaries: {
    value: string;
    solutions: string;
    technology: string;
    quality: string;
    knowledge: string;
  };
  featuredProducts: ProductFamily[];
  supportFlow: SolutionItem[];
  qualitySteps: string[];
  blogs: BlogLink[];
  footerNote: string;
};

const koBlogs: BlogLink[] = [
  {
    title: "철·동·알루미늄·스테인리스의 도금 난이도가 다른 이유",
    href: "https://blog.plachem.biz/material-plating-difficulty-guide/",
    meta: "소재·도금",
  },
  {
    title: "도금액 교반 방식 하나 바꿨는데 결함이 달라지는 이유",
    href: "https://blog.plachem.biz/plating-agitation-defects-quality/",
    meta: "전기도금",
  },
  {
    title: "피트가 났다고 바로 활성탄부터 돌리면 안 됩니다",
    href: "https://blog.plachem.biz/plating-pitting-filtration-carbon-treatment/",
    meta: "불량 분석",
  },
];

const koHome: HomeContent = {
  seoTitle: "PLACHEM VINA | 표면처리 공정 안정화를 위한 화학 솔루션",
  description:
    "PLACHEM VINA는 한국 포뮬레이션 기술, 베트남 현지 제조, 현장 기술지원을 기반으로 표면처리 공정 안정화를 지원합니다.",
  heroEyebrow: "KOREAN FORMULATION · VIETNAM MANUFACTURING",
  heroTitleLines: ["표면처리 공정의", "안정성을 만드는"],
  heroAccent: "화학 솔루션",
  heroSummary:
    "한국의 포뮬레이션 기술과 베트남 현지 제조, 고객 생산현장에 대응하는 기술지원으로 공정의 품질을 높입니다.",
  primaryCtas: [
    { label: "제품·솔루션 보기", href: "/ko/solutions/", variant: "primary" },
    { label: "공정 기술문의", href: "/ko/contact/", variant: "secondary" },
  ],
  strengths: [
    "2016 / 설립",
    "BẮC NINH / 현지 제조·공급",
    "FIELD SUPPORT / 현장 기술지원",
  ],
  valueFlow: ["공정 분석", "적합한 약품 공급", "현장 안정화 지원"],
  sectionLabels: {
    value: "PLACHEM이 제공하는 가치",
    solutions: "4개 핵심 솔루션",
    technology: "현장 기술지원",
    quality: "제조·품질관리 흐름",
    knowledge: "기술자료와 문의",
  },
  sectionSummaries: {
    value:
      "약품 공급 전에 제품군, 공정, 불량 증상, 관리 기록을 함께 보고 현장 안정화까지 연결합니다.",
    solutions:
      "표면처리의 주요 공정 축을 기준으로 핵심 솔루션을 안내합니다. 전체 제품군은 제품·솔루션에서 확인할 수 있습니다.",
    technology:
      "도금욕 분석부터 조건 조정과 재확인까지, 문제 원인을 단계별로 좁혀갑니다.",
    quality:
      "원료 확인부터 LOT 관리까지 이어지는 제조·검사 흐름으로 공급 신뢰를 관리합니다.",
    knowledge:
      "공정관리, 불량 원인, 약품 안전과 품질관리에 필요한 기술자료를 공정별로 안내합니다.",
  },
  featuredProducts: [
    {
      slug: "pretreatment",
      title: "전처리",
      summary:
        "탈지·세정·산세·에칭·디스머트로 표면처리의 시작 조건을 정리합니다.",
      href: "/ko/solutions/",
      materials: "철강 · 동합금 · 알루미늄",
      process: "탈지 · 세정 · 산세",
      cta: "제품·솔루션",
    },
    {
      slug: "plating",
      title: "도금·무전해도금",
      summary:
        "전기도금과 무전해도금의 도금욕 관리와 불량 원인을 함께 검토합니다.",
      href: "/ko/solutions/",
      materials: "전기도금 · 무전해도금",
      process: "니켈 · 구리 · 주석 · 무전해 니켈",
      cta: "제품·솔루션",
    },
    {
      slug: "anodizing-conversion",
      title: "아노다이징·화성피막",
      summary:
        "알루미늄 전처리, 염색, 봉공과 인산염·징케이트·크로메이트를 연결해 봅니다.",
      href: "/ko/solutions/",
      materials: "아노다이징 · 화성피막",
      process: "아노다이징 · 봉공 · 화성피막",
      cta: "제품·솔루션",
    },
    {
      slug: "post-treatment",
      title: "후처리·특수약품",
      summary:
        "변색방지, 코팅, 특수 세정, 제거제 등 후속 공정 안정화를 지원합니다.",
      href: "/ko/solutions/",
      materials: "도금품 · 피막 처리품",
      process: "변색방지 · 코팅 · 특수 세정",
      cta: "제품·솔루션",
    },
  ],
  supportFlow: [
    {
      title: "도금욕 분석",
      summary: "pH, 금속농도, 온도, 교반, 여과를 분석 항목으로 확인합니다.",
      checks: ["pH", "금속농도", "온도"],
    },
    {
      title: "불량 원인 점검",
      summary:
        "피트, 밀착 불량, 색상 편차, 백청, 얼룩을 공정 단계별로 분류합니다.",
      checks: ["사진", "발생 시점", "작업조건"],
    },
    {
      title: "조건 조정과 안정화",
      summary:
        "약품 보충, 도금욕 관리, 신규 공정 적용 후 재확인 흐름으로 연결합니다.",
      checks: ["보충", "도금욕 관리", "재확인"],
    },
  ],
  qualitySteps: ["원료 확인", "제조", "공정검사", "완제품검사", "LOT 관리"],
  blogs: koBlogs,
  footerNote: "표면처리약품 제조와 현장 기술지원을 제공합니다.",
};

function fallbackHome(locale: Exclude<Locale, "ko">): HomeContent {
  const isEn = locale === "en";

  return {
    ...koHome,
    seoTitle: isEn
      ? "PLACHEM VINA | Korean content under review"
      : "PLACHEM VINA | Nội dung tiếng Hàn đang được duyệt",
    description: isEn
      ? "The Korean homepage is being renewed first. This route is preserved until final translation."
      : "Trang tiếng Hàn đang được làm mới trước. Đường dẫn này được giữ cho đến khi dịch cuối cùng.",
    heroEyebrow: "KOREAN CONTENT FIRST",
    heroTitleLines: isEn
      ? ["Korean renewal", "in progress"]
      : ["Đang làm mới", "nội dung tiếng Hàn"],
    heroAccent: isEn ? "Translation pending" : "Chờ dịch",
    heroSummary: isEn
      ? "Final EN/VI copy will be prepared after Korean approval."
      : "Bản dịch EN/VI sẽ thực hiện sau khi tiếng Hàn được duyệt.",
    primaryCtas: [
      {
        label: isEn ? "View Korean page" : "Xem trang tiếng Hàn",
        href: "/ko/",
        variant: "primary",
      },
      {
        label: isEn ? "Contact" : "Liên hệ",
        href: `/${locale}/contact/`,
        variant: "secondary",
      },
    ],
    blogs: [],
    footerNote: isEn
      ? "Multilingual pages are preserved until final translation."
      : "Trang đa ngôn ngữ được giữ cho đến khi dịch cuối cùng.",
  };
}

export const homeContent: Record<Locale, HomeContent> = {
  ko: koHome,
  en: fallbackHome("en"),
  vi: fallbackHome("vi"),
};
