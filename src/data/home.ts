import type {
  BlogLink,
  CTA,
  Locale,
  ProductFamily,
  SolutionItem,
} from "../types";
import { getProductFamilies } from "./products";

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
  technologyPanel: {
    title: string;
    items: string[];
  };
  processSteps: string[];
  products: ProductFamily[];
  solutions: SolutionItem[];
  blogs: BlogLink[];
  footerNote: string;
};

export const homeContent: Record<Locale, HomeContent> = {
  ko: {
    seoTitle: "PLACHEM VINA | 표면처리 화학 솔루션",
    description:
      "한국 포뮬레이션 기술과 베트남 현지 제조를 기반으로 표면처리 공정 안정화와 현장 기술지원을 제공합니다.",
    heroEyebrow: "Surface Treatment Chemical Solutions",
    heroTitle: "표면처리 공정 안정화를 위한 화학 솔루션",
    heroSummary:
      "PLACHEM VINA는 제품 판매와 현장 기술지원을 함께 제공하며 전처리, 도금, 아노다이징, 화성피막 공정의 안정화를 돕습니다.",
    primaryCtas: [
      { label: "기술문의", href: "#contact", variant: "primary" },
      { label: "공정 불량 상담", href: "#contact", variant: "secondary" },
      { label: "TDS·SDS·COA 자료 요청", href: "#contact", variant: "ghost" },
    ],
    strengths: [
      "한국 포뮬레이션 기술",
      "베트남 현지 제조",
      "현장 기술지원",
      "주요 공급품 LOT 추적 관리",
    ],
    sectionLabels: {
      company: "회사소개",
      solutions: "제품·솔루션",
      technology: "공정별 기술지원",
      quality: "품질·기술지원",
      knowledge: "기술자료",
      contact: "기술문의",
    },
    sectionSummaries: {
      company:
        "한국의 포뮬레이션 기술과 베트남 현지 제조 기반으로 제조 현장의 표면처리 공정 안정화를 지원합니다.",
      solutions:
        "8개 제품군을 공정, 소재, 관리 항목 기준으로 탐색할 수 있습니다.",
      technology:
        "소재, 공정, 불량 유형을 함께 확인해 상담에 필요한 조건을 빠르게 정리합니다.",
      quality:
        "샘플 평가, 공정 조건 검토, 주요 공급품 LOT 추적 관리를 중심으로 신뢰를 확보합니다.",
      knowledge:
        "확인된 기술 블로그 글만 연결해 현장 엔지니어가 필요한 자료로 바로 이동할 수 있게 합니다.",
      contact: "공정, 소재, 제품군, 요청 자료를 정리해 기술 검토로 연결합니다.",
    },
    technologyPanel: {
      title: "PLACHEM 지원 방식",
      items: [
        "공정 조건 검토",
        "샘플 평가 지원",
        "자료 요청 접수",
        "현장 문제 상담",
      ],
    },
    processSteps: ["공정 선택", "소재 확인", "불량 유형 정리", "기술문의 연결"],
    products: getProductFamilies("ko"),
    solutions: [
      {
        title: "공정 조건 점검",
        summary: "소재, 전처리, bath, 수세, 후처리 조건을 함께 확인합니다.",
        checks: ["소재", "공정", "불량 유형"],
      },
      {
        title: "샘플 평가 지원",
        summary: "제품 적용 전 평가 목적과 조건을 정리해 검토합니다.",
        checks: ["적용 목적", "평가 조건", "회신 언어"],
      },
      {
        title: "자료 요청 흐름",
        summary: "TDS·SDS·COA는 요청 접수 후 내부 검토하여 개별 제공합니다.",
        checks: ["문서 유형", "제품명", "사용 목적"],
      },
    ],
    blogs: [
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
    ],
    footerNote: "표면처리 공정 안정화를 위한 제품과 기술지원을 제공합니다.",
  },
  en: {
    seoTitle: "PLACHEM VINA | Surface Treatment Chemical Solutions",
    description:
      "Surface treatment chemical solutions combining Korean formulation technology, local manufacturing in Vietnam, and field technical support.",
    heroEyebrow: "Surface Treatment Chemical Solutions",
    heroTitle: "Chemical solutions for stable surface treatment processes",
    heroSummary:
      "PLACHEM VINA combines product supply with field technical support for pretreatment, plating, anodizing, and conversion coating processes.",
    primaryCtas: [
      { label: "Technical inquiry", href: "#contact", variant: "primary" },
      { label: "Defect consultation", href: "#contact", variant: "secondary" },
      { label: "Request TDS/SDS/COA", href: "#contact", variant: "ghost" },
    ],
    strengths: [
      "Korean formulation technology",
      "Local manufacturing in Vietnam",
      "Field technical support",
      "LOT tracking for key supplied items",
    ],
    sectionLabels: {
      company: "Company",
      solutions: "Products & Solutions",
      technology: "Process Support",
      quality: "Quality & Technical Support",
      knowledge: "Technical Library",
      contact: "Technical Inquiry",
    },
    sectionSummaries: {
      company:
        "PLACHEM supports stable surface treatment processes through formulation know-how and local manufacturing in Vietnam.",
      solutions:
        "Browse eight product families by process, substrate, and key control items.",
      technology:
        "Organize process, material, and defect information before sending a technical inquiry.",
      quality:
        "Sample review, process condition checks, and LOT tracking support dependable B2B operation.",
      knowledge:
        "Only verified technical blog resources are linked from this site.",
      contact:
        "Prepare process, material, product family, and document request details for technical review.",
    },
    technologyPanel: {
      title: "How PLACHEM Supports",
      items: [
        "Process review",
        "Sample evaluation",
        "Document requests",
        "Field consultation",
      ],
    },
    processSteps: [
      "Select process",
      "Check material",
      "Define defect",
      "Send inquiry",
    ],
    products: getProductFamilies("en"),
    solutions: [
      {
        title: "Process condition review",
        summary:
          "Review substrate, pretreatment, bath, rinsing, and post-treatment conditions.",
        checks: ["Material", "Process", "Defect type"],
      },
      {
        title: "Sample evaluation support",
        summary:
          "Prepare evaluation purpose and operating conditions before product trials.",
        checks: ["Purpose", "Evaluation condition", "Reply language"],
      },
      {
        title: "Document request flow",
        summary:
          "TDS, SDS, and COA requests are reviewed internally and provided individually.",
        checks: ["Document type", "Product name", "Purpose"],
      },
    ],
    blogs: [],
    footerNote:
      "Products and technical support for stable surface treatment processes.",
  },
  vi: {
    seoTitle: "PLACHEM VINA | Giải pháp hóa chất xử lý bề mặt",
    description:
      "Giải pháp hóa chất xử lý bề mặt dựa trên công nghệ formulation Hàn Quốc, sản xuất tại Việt Nam và hỗ trợ kỹ thuật hiện trường.",
    heroEyebrow: "Surface Treatment Chemical Solutions",
    heroTitle: "Giải pháp hóa chất cho quy trình xử lý bề mặt ổn định",
    heroSummary:
      "PLACHEM VINA kết hợp cung ứng sản phẩm và hỗ trợ kỹ thuật hiện trường cho tiền xử lý, mạ, anodizing và xử lý chuyển hóa.",
    primaryCtas: [
      { label: "Liên hệ kỹ thuật", href: "#contact", variant: "primary" },
      { label: "Tư vấn lỗi quy trình", href: "#contact", variant: "secondary" },
      { label: "Yêu cầu TDS/SDS/COA", href: "#contact", variant: "ghost" },
    ],
    strengths: [
      "Công nghệ formulation Hàn Quốc",
      "Sản xuất tại Việt Nam",
      "Hỗ trợ kỹ thuật hiện trường",
      "Quản lý truy xuất LOT cho hạng mục cung ứng chính",
    ],
    sectionLabels: {
      company: "Giới thiệu",
      solutions: "Sản phẩm & giải pháp",
      technology: "Hỗ trợ theo quy trình",
      quality: "Chất lượng & hỗ trợ kỹ thuật",
      knowledge: "Tài liệu kỹ thuật",
      contact: "Liên hệ kỹ thuật",
    },
    sectionSummaries: {
      company:
        "PLACHEM hỗ trợ ổn định quy trình xử lý bề mặt dựa trên nền tảng formulation và sản xuất tại Việt Nam.",
      solutions:
        "Tìm 8 nhóm sản phẩm theo quy trình, vật liệu và hạng mục quản lý chính.",
      technology:
        "Chuẩn bị thông tin về quy trình, vật liệu và lỗi trước khi gửi yêu cầu kỹ thuật.",
      quality:
        "Đánh giá mẫu, kiểm tra điều kiện quy trình và quản lý LOT hỗ trợ vận hành B2B ổn định.",
      knowledge: "Chỉ liên kết tài liệu kỹ thuật đã được xác minh.",
      contact:
        "Chuẩn bị thông tin quy trình, vật liệu, nhóm sản phẩm và tài liệu cần yêu cầu.",
    },
    technologyPanel: {
      title: "Cách PLACHEM hỗ trợ",
      items: [
        "Xem xét quy trình",
        "Đánh giá mẫu",
        "Yêu cầu tài liệu",
        "Tư vấn hiện trường",
      ],
    },
    processSteps: [
      "Chọn quy trình",
      "Kiểm tra vật liệu",
      "Xác định lỗi",
      "Gửi liên hệ",
    ],
    products: getProductFamilies("vi"),
    solutions: [
      {
        title: "Kiểm tra điều kiện quy trình",
        summary: "Xem xét vật liệu, tiền xử lý, bể xử lý, rửa và xử lý sau.",
        checks: ["Vật liệu", "Quy trình", "Loại lỗi"],
      },
      {
        title: "Hỗ trợ đánh giá mẫu",
        summary:
          "Chuẩn bị mục đích đánh giá và điều kiện vận hành trước khi thử sản phẩm.",
        checks: ["Mục đích", "Điều kiện đánh giá", "Ngôn ngữ phản hồi"],
      },
      {
        title: "Quy trình yêu cầu tài liệu",
        summary:
          "Yêu cầu TDS, SDS và COA được kiểm tra nội bộ trước khi cung cấp riêng.",
        checks: ["Loại tài liệu", "Tên sản phẩm", "Mục đích sử dụng"],
      },
    ],
    blogs: [],
    footerNote:
      "Sản phẩm và hỗ trợ kỹ thuật cho quy trình xử lý bề mặt ổn định.",
  },
};
