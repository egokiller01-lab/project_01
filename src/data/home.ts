import type {
  BlogLink,
  CTA,
  Locale,
  ProductFamily,
  SolutionItem,
} from "../types";
import { getProductFamilies } from "./products";

type VisualContent = {
  src: string;
  alt: string;
  caption: string;
};

type HomeContent = {
  seoTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSummary: string;
  primaryCtas: CTA[];
  strengths: string[];
  sectionLabels: {
    company: string;
    solutions: string;
    technology: string;
    quality: string;
    knowledge: string;
    contact: string;
  };
  sectionSummaries: {
    company: string;
    solutions: string;
    technology: string;
    quality: string;
    knowledge: string;
    contact: string;
  };
  processSteps: string[];
  products: ProductFamily[];
  solutions: SolutionItem[];
  qualitySteps: string[];
  blogs: BlogLink[];
  footerNote: string;
  visuals: {
    hero: VisualContent;
    company: VisualContent;
    solutions: VisualContent;
    technology: VisualContent;
    quality: VisualContent;
    knowledge: VisualContent;
  };
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

const koVisuals: HomeContent["visuals"] = {
  hero: {
    src: "/assets/home/metal-surface-process.webp",
    alt: "금속 부품 표면처리 공정을 상징하는 이미지",
    caption: "금속 표면처리 공정을 표현한 참고 이미지",
  },
  company: {
    src: "/assets/home/manufacturing-reference.webp",
    alt: "화학 제조 환경을 상징하는 산업 이미지",
    caption: "베트남 현지 제조 기반을 설명하기 위한 참고 이미지",
  },
  solutions: {
    src: "/assets/home/chemical-mixing-process.webp",
    alt: "화학 용액 교반과 제조 공정을 상징하는 이미지",
    caption: "약품 제조와 공정 적용을 표현한 참고 이미지",
  },
  technology: {
    src: "/assets/home/lab-analysis-reference.webp",
    alt: "시료 분석과 공정 점검을 상징하는 연구 이미지",
    caption: "공정 진단과 분석 지원을 표현한 참고 이미지",
  },
  quality: {
    src: "/assets/home/quality-lab-testing.webp",
    alt: "품질 검사를 상징하는 실험실 이미지",
    caption: "검사와 LOT 관리 흐름을 설명하는 참고 이미지",
  },
  knowledge: {
    src: "/assets/home/rd-lab-analysis.webp",
    alt: "자료 검토와 기술 지원을 상징하는 이미지",
    caption: "기술자료 연결을 돕는 참고 이미지",
  },
};

const koHome: HomeContent = {
  seoTitle: "PLACHEM VINA | 표면처리약품 제조와 현장 기술지원",
  description:
    "PLACHEM VINA는 한국 포뮬레이션 기술, 베트남 현지 제조, 현장 기술지원을 기반으로 표면처리 공정 안정화를 지원합니다.",
  heroEyebrow: "표면처리약품 제조·기술지원",
  heroTitle: "표면처리약품 제조와 현장 기술지원",
  heroSummary:
    "PLACHEM VINA는 전처리, 도금, 무전해도금, 아노다이징, 화성피막 공정에 필요한 약품 공급과 현장 조건 검토를 함께 제공합니다.",
  primaryCtas: [
    { label: "제품·솔루션 보기", href: "/ko/solutions/", variant: "primary" },
    { label: "기술문의", href: "/ko/contact/", variant: "secondary" },
  ],
  strengths: ["한국 포뮬레이션 기술", "베트남 박닌 제조 기반", "현장 기술지원"],
  sectionLabels: {
    company: "PLACHEM의 역할",
    solutions: "핵심 솔루션",
    technology: "현장 기술지원",
    quality: "제조·품질관리",
    knowledge: "기술자료·문의",
    contact: "공정 정보를 정리해 문의하세요",
  },
  sectionSummaries: {
    company:
      "고객 라인의 소재와 공정 조건을 확인하고, 적합한 약품 공급과 현장 안정화 지원으로 연결합니다.",
    solutions:
      "표면처리 공정 흐름에 맞춰 8개 제품군을 분류했습니다. 개별 제품 상세는 확인된 자료가 있을 때만 공개합니다.",
    technology:
      "도금욕 분석, 불량 원인 점검, 작업조건 조정, 약품 보충과 욕관리, 신규 공정 적용을 지원합니다.",
    quality:
      "원료 확인, 제조, 공정검사, 완제품검사, LOT 관리 흐름을 기준으로 공급 신뢰를 관리합니다.",
    knowledge:
      "기술 블로그는 검증된 글만 연결하고, TDS·SDS·COA는 요청 접수 후 개별 검토 절차로 안내합니다.",
    contact:
      "소재, 공정, 현재 증상, 요청 자료를 함께 알려주시면 기술 검토에 필요한 정보를 빠르게 정리할 수 있습니다.",
  },
  processSteps: ["공정 분석", "적합한 약품 공급", "현장 안정화 지원"],
  products: getProductFamilies("ko"),
  solutions: [
    {
      title: "도금욕 분석",
      summary:
        "pH, 금속 농도, 온도, 교반, 여과 등 bath 관리 항목을 공정 조건과 함께 확인합니다.",
      checks: ["pH", "금속 농도", "온도·교반"],
    },
    {
      title: "불량 원인 점검",
      summary:
        "피트, 밀착 불량, 색상 편차, 백청, 얼룩을 소재·전처리·욕관리·후처리 단계로 나눠 봅니다.",
      checks: ["불량 사진", "발생 시점", "최근 변경 사항"],
    },
    {
      title: "욕관리와 보충",
      summary:
        "약품 보충, 여과, 활성탄 처리, 수세와 건조 조건을 함께 확인해 반복성을 높입니다.",
      checks: ["보충 이력", "여과 조건", "수세·건조"],
    },
  ],
  qualitySteps: ["원료 확인", "제조", "공정검사", "완제품검사", "LOT 관리"],
  blogs: koBlogs,
  footerNote: "표면처리약품 제조와 현장 기술지원을 제공합니다.",
  visuals: koVisuals,
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
    heroEyebrow: "Korean Content Preview",
    heroTitle: isEn
      ? "Korean renewal in progress"
      : "Đang làm mới nội dung tiếng Hàn",
    heroSummary: isEn
      ? "The multilingual routes remain available, but final EN/VI copy will be prepared after Korean approval."
      : "Các đường dẫn đa ngôn ngữ vẫn được giữ, bản dịch EN/VI sẽ thực hiện sau khi tiếng Hàn được duyệt.",
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
    strengths: isEn
      ? ["Korean page first", "Routes preserved", "Translation pending"]
      : ["Ưu tiên tiếng Hàn", "Giữ đường dẫn", "Chờ dịch cuối"],
    products: getProductFamilies(locale),
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
