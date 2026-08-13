import type { BlogLink, Locale, PageKey, StaticPageContent } from "../types";
import { homeContent } from "./home";
import { getProductFamilies } from "./products";

export const staticPageKeys = [
  "about",
  "solutions",
  "technology",
  "quality",
  "knowledge",
  "contact",
] as const;

export type StaticPageKey = (typeof staticPageKeys)[number];

export const companyFacts = {
  legalName: "PLACHEM VINA CO., LTD",
  vietnamContactName: "PLACHEM VINA",
  koreaContactName: "(주)플라켐",
  establishedKo: "2016년",
  establishedEn: "2016",
  establishedVi: "2016",
  regionKo: "베트남 박닌",
  regionEn: "Bac Ninh, Vietnam",
  regionVi: "Bac Ninh, Việt Nam",
  site: "Bắc Ninh, Vietnam",
  vietnamPhone: "+84 222 395 2060",
  vietnamEmail: "plachem01@gmail.com",
  koreaAddressKo: "경기도 안산시 단원구 산단로 341",
  koreaAddressEn: "341 Sandan-ro, Danwon-gu, Ansan-si, Gyeonggi-do, Korea",
  koreaAddressVi: "341 Sandan-ro, Danwon-gu, Ansan-si, Gyeonggi-do, Hàn Quốc",
  koreaPhone: "031-495-6688",
  koreaEmail: "plachem2020@naver.com",
};

export const verifiedBlogLinks: Record<Locale, BlogLink[]> = {
  ko: homeContent.ko.blogs,
  en: homeContent.en.blogs,
  vi: homeContent.vi.blogs,
};

export const pageLabels: Record<
  Locale,
  Record<PageKey, { title: string; short: string }>
> = {
  ko: {
    home: { title: "홈", short: "홈" },
    about: { title: "회사소개", short: "회사소개" },
    solutions: { title: "제품·솔루션", short: "제품·솔루션" },
    technology: { title: "기술지원", short: "기술지원" },
    quality: { title: "품질관리", short: "품질관리" },
    knowledge: { title: "기술자료", short: "기술자료" },
    contact: { title: "기술문의", short: "기술문의" },
  },
  en: {
    home: { title: "Home", short: "Home" },
    about: { title: "About", short: "About" },
    solutions: { title: "Products & Solutions", short: "Solutions" },
    technology: { title: "Technology Support", short: "Support" },
    quality: { title: "Quality Management", short: "Quality" },
    knowledge: { title: "Knowledge", short: "Knowledge" },
    contact: { title: "Contact", short: "Contact" },
  },
  vi: {
    home: { title: "Trang chủ", short: "Trang chủ" },
    about: { title: "Giới thiệu", short: "Giới thiệu" },
    solutions: { title: "Sản phẩm & giải pháp", short: "Giải pháp" },
    technology: { title: "Hỗ trợ kỹ thuật", short: "Hỗ trợ" },
    quality: { title: "Quản lý chất lượng", short: "Chất lượng" },
    knowledge: { title: "Tài liệu", short: "Tài liệu" },
    contact: { title: "Liên hệ", short: "Liên hệ" },
  },
};

const koPages: Record<StaticPageKey, StaticPageContent> = {
  about: {
    key: "about",
    title: "한국 포뮬레이션, 베트남 현지 제조",
    seoTitle: "회사소개 | PLACHEM VINA",
    description:
      "PLACHEM VINA는 2016년 설립된 베트남 박닌 기반의 표면처리약품 제조·공급 및 현장 기술지원 기업입니다.",
    eyebrow: "회사소개",
    lead: "PLACHEM VINA는 한국의 표면처리약품 포뮬레이션 경험과 박닌의 현지 제조 기반을 연결해 약품 공급, 공정 검토, 현장 기술지원을 제공합니다.",
    ctaLabel: "기술문의",
    ctaHref: "/ko/contact/",
    sections: [
      {
        title: "회사 정체성",
        summary:
          "PLACHEM VINA CO., LTD는 표면처리약품을 제조·공급하고, 고객 라인의 공정 조건을 함께 검토하는 B2B 기술 파트너입니다.",
        items: ["표면처리약품 제조·공급", "공정 조건 검토", "현장 기술지원"],
      },
      {
        title: "설립과 제조 기반",
        summary:
          "2016년 설립 이후 베트남 박닌 지역을 제조 기반으로 운영하며, 현지 고객의 공정 대응 속도를 높이는 구조를 지향합니다.",
        items: ["2016년 설립", "베트남 박닌 제조 기반", "현지 공급 대응"],
      },
      {
        title: "사업영역",
        summary:
          "전처리, 도금, 무전해도금, 아노다이징, 화성피막, 후처리, 기초화학약품, 여과장비를 공정 흐름으로 연결합니다.",
        items: ["제품군별 약품 공급", "소재·공정별 검토", "자료 요청 대응"],
      },
      {
        title: "한국 기술과 베트남 대응",
        summary:
          "한국 포뮬레이션 기술을 기반으로 베트남 제조 현장의 작업조건, 불량 증상, 보충 관리 이슈를 함께 확인합니다.",
        items: ["포뮬레이션 검토", "현장 조건 확인", "도금욕 관리 지원"],
      },
    ],
  },
  solutions: {
    key: "solutions",
    title: "8개 제품군으로 보는 표면처리 솔루션",
    seoTitle: "제품·솔루션 | PLACHEM VINA",
    description:
      "전처리, 전기도금, 무전해도금, 아노다이징, 화성피막, 후처리, 기초화학약품, 여과장비 제품군을 안내합니다.",
    eyebrow: "제품·솔루션",
    lead: "개별 제품명보다 공정과 관리 항목을 먼저 확인할 수 있도록 제품군을 정리했습니다.",
    ctaLabel: "공정별 기술문의",
    ctaHref: "/ko/contact/",
    sections: [
      {
        title: "공정 기준 제품 분류",
        summary:
          "표면처리 라인의 시작 조건부터 도금·피막·후처리·관리 설비까지 공정 흐름으로 탐색합니다.",
        items: getProductFamilies("ko").map((item) => item.title),
      },
      {
        title: "기술문의 연결 방식",
        summary:
          "제품 자료가 확인되지 않은 상세페이지는 만들지 않고, 제품군별 문의를 통해 적용 공정과 요청 자료를 확인합니다.",
        items: ["제품군", "현재 공정", "주요 불량", "요청 자료"],
      },
    ],
  },
  technology: {
    key: "technology",
    title: "현장 조건을 함께 보는 기술지원",
    seoTitle: "기술지원 | PLACHEM VINA",
    description:
      "공정 진단, 분석 지원, 불량 대응, 도금욕 관리, 신규 라인 및 제품 적용 지원 범위를 안내합니다.",
    eyebrow: "기술지원",
    lead: "표면처리 문제는 약품명 하나로 판단하기 어렵습니다. 전처리, 도금욕 관리, 여과, 수세, 후처리를 함께 봅니다.",
    ctaLabel: "공정 조건 상담",
    ctaHref: "/ko/contact/",
    sections: [
      {
        title: "공정 진단",
        summary:
          "현재 라인 조건, 불량 발생 시점, 최근 변경 사항을 기준으로 확인 순서를 정리합니다.",
        items: [
          "공정 확인",
          "전처리·도금욕 조건",
          "수세·후처리",
          "최근 변경 사항",
        ],
      },
      {
        title: "분석 지원",
        summary:
          "도금욕과 공정 관리 항목을 확인하고, 필요한 경우 자료 요청 또는 샘플 평가 조건으로 연결합니다.",
        items: ["pH", "금속 농도", "온도", "교반·여과", "보충 이력"],
      },
      {
        title: "불량 대응",
        summary:
          "피트, 밀착 불량, 색상 편차, 백청, 얼룩 등 증상을 공정 단계별 원인축으로 분리합니다.",
        items: ["불량 사진", "발생 위치", "발생 빈도", "작업조건"],
      },
      {
        title: "신규 적용 지원",
        summary:
          "신규 라인이나 제품 적용 전에는 적용 목적, 요구 품질, 평가 기준을 먼저 확인합니다.",
        items: ["적용 목적", "공정 조건", "평가 기준", "요청 문서"],
      },
    ],
  },
  quality: {
    key: "quality",
    title: "원료부터 출하까지 이어지는 품질관리",
    seoTitle: "품질관리 | PLACHEM VINA",
    description:
      "원료 입고, 제조관리, 공정검사, 출하검사, LOT 추적, TDS·SDS·COA 제공 절차를 안내합니다.",
    eyebrow: "품질관리",
    lead: "품질관리는 검사 항목을 나열하는 일이 아니라, 원료 확인부터 제조·검사·출하·LOT 관리까지 흐름을 정리하는 일입니다.",
    ctaLabel: "자료 요청",
    ctaHref: "/ko/contact/",
    sections: [
      {
        title: "원료 입고",
        summary:
          "원료 사양, 보관 조건, LOT 정보를 확인해 제조 전 기본 조건을 정리합니다.",
        items: ["원료 사양", "입고 확인", "보관 조건", "LOT 정보"],
      },
      {
        title: "제조관리",
        summary:
          "제조 과정에서는 배합 조건과 공정 중 확인 항목을 기준으로 제품 상태를 관리합니다.",
        items: ["배합·제조", "공정 중 확인", "작업 기록"],
      },
      {
        title: "출하검사와 LOT 추적",
        summary:
          "완제품검사와 출하 전 확인을 통해 주요 공급품의 LOT 추적 관리를 유지합니다.",
        items: ["완제품검사", "출하 전 확인", "LOT 추적", "기록 관리"],
      },
      {
        title: "TDS·SDS·COA 제공 절차",
        summary:
          "자료는 제품명, 사용 목적, 요청 문서 종류를 확인한 뒤 내부 검토를 거쳐 개별 안내합니다.",
        items: ["TDS", "SDS", "COA", "요청 목적 확인"],
      },
    ],
  },
  knowledge: {
    key: "knowledge",
    title: "공정별로 찾아보는 기술자료",
    seoTitle: "기술자료 | PLACHEM VINA",
    description:
      "표면처리 공정관리, 불량 원인, 약품 안전·관리 자료를 기술 블로그와 요청 절차로 연결합니다.",
    eyebrow: "기술자료",
    lead: "공정관리, 불량 원인, 약품 안전과 품질관리에 필요한 기술자료를 공정별로 안내합니다.",
    ctaLabel: "자료 요청",
    ctaHref: "/ko/contact/",
    sections: [
      {
        title: "기술 블로그 연결",
        summary:
          "표면처리 공정과 불량 원인을 다룬 기술 블로그 글을 공정별 참고 자료로 연결합니다.",
        items: ["소재·도금", "전기도금", "불량 분석"],
      },
      {
        title: "공정별 자료 분류",
        summary:
          "자료는 전처리, 도금, 무전해도금, 아노다이징, 화성피막, 후처리, 품질관리 기준으로 정리합니다.",
        items: ["공정관리", "불량 원인", "안전자료", "품질문서"],
      },
      {
        title: "자료 요청",
        summary:
          "TDS·SDS·COA는 제품명과 사용 목적을 확인한 뒤 개별 제공 절차로 안내합니다.",
        items: ["제품명", "문서 종류", "사용 목적", "회신 연락처"],
      },
    ],
  },
  contact: {
    key: "contact",
    title: "공정 조건에 맞는 기술지원을 상담하세요",
    seoTitle: "기술문의 | PLACHEM VINA",
    description:
      "상담 가능한 내용, 준비하면 좋은 정보, 베트남 법인과 한국 연락처를 안내합니다.",
    eyebrow: "기술문의",
    lead: "제품군, 현재 공정, 증상, 요청 자료를 기준으로 기술지원 상담 범위를 확인할 수 있습니다.",
    ctaLabel: "제품·솔루션 보기",
    ctaHref: "/ko/solutions/",
    sections: [
      {
        title: "상담 가능한 내용",
        summary:
          "제품군 적용, 공정 조건, 불량 원인, 도금욕 관리, 신규 라인 적용, TDS·SDS·COA 자료 요청을 상담할 수 있습니다.",
        items: ["제품군 검토", "공정 문제", "자료 요청", "신규 적용"],
      },
      {
        title: "준비하면 좋은 정보",
        summary:
          "회사명, 담당자 연락처, 제품군, 현재 공정, 사용 중인 약품, 불량 사진 또는 증상 설명이 있으면 상담에 도움이 됩니다.",
        items: ["제품군", "공정", "증상", "요청 자료"],
      },
    ],
  },
};

const enPages: Record<StaticPageKey, StaticPageContent> = {
  about: {
    key: "about",
    title: "Korean formulation, manufactured in Vietnam",
    seoTitle: "About | PLACHEM VINA",
    description:
      "PLACHEM VINA is a surface treatment chemical manufacturer and technical support company based in Bắc Ninh, Vietnam since 2016.",
    eyebrow: "About",
    lead: "PLACHEM VINA combines Korean surface-treatment formulation experience with local manufacturing in Bắc Ninh to provide chemical supply, process review, and field technical support.",
    ctaLabel: "Technical inquiry",
    ctaHref: "/en/contact/",
    sections: [
      {
        title: "Company identity",
        summary:
          "PLACHEM VINA CO., LTD manufactures and supplies surface treatment chemicals and reviews process conditions with customer lines as a B2B technical partner.",
        items: [
          "Surface treatment chemicals",
          "Process condition review",
          "Field technical support",
        ],
      },
      {
        title: "Established manufacturing base",
        summary:
          "Since its establishment in 2016, PLACHEM VINA has operated with a manufacturing base in Bắc Ninh, Vietnam to support local process response.",
        items: [
          "Established in 2016",
          "Bắc Ninh manufacturing base",
          "Local supply response",
        ],
      },
      {
        title: "Business areas",
        summary:
          "Pretreatment, plating, electroless plating, anodizing, conversion coating, post-treatment, basic chemicals, and filtration equipment are organized as one process flow.",
        items: [
          "Product group supply",
          "Process review",
          "Document request support",
        ],
      },
      {
        title: "Korean technology and Vietnam response",
        summary:
          "Based on Korean formulation expertise, PLACHEM VINA reviews operating conditions, defect symptoms, and replenishment management issues at manufacturing sites in Vietnam.",
        items: [
          "Formulation review",
          "Field condition check",
          "Plating bath management support",
        ],
      },
    ],
  },
  solutions: {
    key: "solutions",
    title: "Surface treatment solutions across eight product groups",
    seoTitle: "Products & Solutions | PLACHEM VINA",
    description:
      "Eight product groups are organized for pretreatment, electroplating, electroless plating, anodizing, conversion coating, post-treatment, basic chemicals, and filtration equipment.",
    eyebrow: "Products & Solutions",
    lead: "Product groups are organized so process and control items can be reviewed before individual product names.",
    ctaLabel: "Process-based inquiry",
    ctaHref: "/en/contact/",
    sections: [
      {
        title: "Process-based product classification",
        summary:
          "Explore the process flow from initial surface condition to plating, coating, post-treatment, and supporting equipment.",
        items: getProductFamilies("en").map((item) => item.title),
      },
      {
        title: "Inquiry connection",
        summary:
          "Select the product group that matches your process, then review the current conditions, main defect, and required documents for technical consultation.",
        items: [
          "Product group",
          "Current process",
          "Main defect",
          "Requested document",
        ],
      },
    ],
  },
  technology: {
    key: "technology",
    title: "Technical support based on field conditions",
    seoTitle: "Technology Support | PLACHEM VINA",
    description:
      "Process diagnosis, analysis support, defect response, plating bath management, and new line or product application support are described.",
    eyebrow: "Technology Support",
    lead: "Surface treatment issues cannot be judged by chemical name alone. Pretreatment, plating bath management, filtration, rinsing, and post-treatment are reviewed together.",
    ctaLabel: "Consult process conditions",
    ctaHref: "/en/contact/",
    sections: [
      {
        title: "Process diagnosis",
        summary:
          "Current line conditions, defect timing, and recent changes are used to organize the check sequence.",
        items: [
          "Process check",
          "Pretreatment and plating bath conditions",
          "Rinsing and post-treatment",
          "Recent changes",
        ],
      },
      {
        title: "Analysis support",
        summary:
          "Plating bath and process control items are checked and connected to document requests or evaluation conditions when needed.",
        items: [
          "pH",
          "Metal concentration",
          "Temperature",
          "Agitation and filtration",
          "Replenishment history",
        ],
      },
      {
        title: "Defect response",
        summary:
          "Pitting, adhesion issues, color deviation, white rust, and stains are separated by process-stage cause groups.",
        items: [
          "Defect photos",
          "Location",
          "Frequency",
          "Operating conditions",
        ],
      },
      {
        title: "New application support",
        summary:
          "For a new line or product application, application purpose, required quality, and evaluation criteria are checked first.",
        items: [
          "Application purpose",
          "Process conditions",
          "Evaluation criteria",
          "Requested documents",
        ],
      },
    ],
  },
  quality: {
    key: "quality",
    title: "Quality management from raw material to shipment",
    seoTitle: "Quality Management | PLACHEM VINA",
    description:
      "Raw material receiving, manufacturing control, in-process inspection, shipment inspection, LOT traceability, and TDS/SDS/COA procedures are described.",
    eyebrow: "Quality Management",
    lead: "Quality management is organized as a flow from raw material check through manufacturing, inspection, shipment, and LOT management.",
    ctaLabel: "Request documents",
    ctaHref: "/en/contact/",
    sections: [
      {
        title: "Raw material receiving",
        summary:
          "Raw material specification, storage condition, and LOT information are checked before manufacturing.",
        items: [
          "Raw material specification",
          "Receiving check",
          "Storage condition",
          "LOT information",
        ],
      },
      {
        title: "Manufacturing control",
        summary:
          "During manufacturing, product condition is controlled using formulation conditions and in-process check items.",
        items: [
          "Formulation and manufacturing",
          "In-process check",
          "Work record",
        ],
      },
      {
        title: "Shipment inspection and LOT tracking",
        summary:
          "Final inspection and pre-shipment checks maintain LOT tracking for supplied products.",
        items: [
          "Final inspection",
          "Pre-shipment check",
          "LOT tracking",
          "Record management",
        ],
      },
      {
        title: "TDS/SDS/COA procedure",
        summary:
          "Document requests are handled after confirming the product name, intended use, and required document type.",
        items: ["TDS", "SDS", "COA", "Purpose confirmation"],
      },
    ],
  },
  knowledge: {
    key: "knowledge",
    title: "Technical resources by process",
    seoTitle: "Knowledge | PLACHEM VINA",
    description:
      "Technical resources for process control, defect causes, chemical safety, and quality management are connected to blog articles and document requests.",
    eyebrow: "Knowledge",
    lead: "Resources needed for process control, defect causes, chemical safety, and quality management are organized by process.",
    ctaLabel: "Request documents",
    ctaHref: "/en/contact/",
    sections: [
      {
        title: "Technical blog articles",
        summary:
          "Blog articles on surface treatment processes and defect causes are linked as process-based reference resources.",
        items: ["Materials & plating", "Electroplating", "Defect analysis"],
      },
      {
        title: "Process-based categories",
        summary:
          "Resources are organized by pretreatment, plating, electroless plating, anodizing, conversion coating, post-treatment, and quality management.",
        items: [
          "Process control",
          "Defect causes",
          "Safety documents",
          "Quality documents",
        ],
      },
      {
        title: "Document requests",
        summary:
          "TDS, SDS, and COA requests are guided after product name and purpose of use are checked.",
        items: [
          "Product name",
          "Document type",
          "Purpose of use",
          "Contact details",
        ],
      },
    ],
  },
  contact: {
    key: "contact",
    title: "Consult technical support for your process conditions",
    seoTitle: "Contact | PLACHEM VINA",
    description:
      "Consultation scope, helpful process information, Vietnam office contact, and Korea contact information are provided.",
    eyebrow: "Contact",
    lead: "Product group, current process, symptoms, and requested documents help define the technical support scope.",
    ctaLabel: "View products & solutions",
    ctaHref: "/en/solutions/",
    sections: [
      {
        title: "Consultation scope",
        summary:
          "Product group application, process conditions, defect causes, plating bath management, new line application, and TDS/SDS/COA requests can be discussed.",
        items: [
          "Product group review",
          "Process issue",
          "Document request",
          "New application",
        ],
      },
      {
        title: "Helpful information",
        summary:
          "Company name, contact person, product group, current process, chemical in use, defect photos, or symptom descriptions are helpful for consultation.",
        items: ["Product group", "Process", "Symptoms", "Requested documents"],
      },
    ],
  },
};

const viPages: Record<StaticPageKey, StaticPageContent> = {
  about: {
    key: "about",
    title: "Công thức Hàn Quốc, sản xuất tại Việt Nam",
    seoTitle: "Giới thiệu | PLACHEM VINA",
    description:
      "PLACHEM VINA là doanh nghiệp sản xuất hóa chất xử lý bề mặt và hỗ trợ kỹ thuật tại Bắc Ninh, Việt Nam từ năm 2016.",
    eyebrow: "Giới thiệu",
    lead: "PLACHEM VINA kết hợp kinh nghiệm công thức hóa chất xử lý bề mặt của Hàn Quốc với sản xuất tại Bắc Ninh để cung ứng hóa chất, rà soát công đoạn và hỗ trợ kỹ thuật hiện trường.",
    ctaLabel: "Tư vấn kỹ thuật",
    ctaHref: "/vi/contact/",
    sections: [
      {
        title: "Định vị công ty",
        summary:
          "PLACHEM VINA CO., LTD sản xuất và cung cấp hóa chất xử lý bề mặt, đồng thời rà soát điều kiện công đoạn cùng dây chuyền của khách hàng như một đối tác kỹ thuật B2B.",
        items: [
          "Hóa chất xử lý bề mặt",
          "Rà soát điều kiện công đoạn",
          "Hỗ trợ kỹ thuật hiện trường",
        ],
      },
      {
        title: "Thành lập và cơ sở sản xuất",
        summary:
          "Từ khi thành lập năm 2016, PLACHEM VINA vận hành với cơ sở sản xuất tại Bắc Ninh để hỗ trợ phản hồi công đoạn tại Việt Nam.",
        items: [
          "Thành lập năm 2016",
          "Cơ sở sản xuất Bắc Ninh",
          "Cung ứng tại Việt Nam",
        ],
      },
      {
        title: "Lĩnh vực kinh doanh",
        summary:
          "Tiền xử lý, mạ, mạ không điện, anod nhôm, lớp phủ chuyển hóa, hậu xử lý, hóa chất cơ bản và thiết bị lọc được sắp xếp theo dòng công đoạn.",
        items: [
          "Cung cấp theo nhóm sản phẩm",
          "Rà soát công đoạn",
          "Hỗ trợ yêu cầu tài liệu",
        ],
      },
      {
        title: "Công nghệ Hàn Quốc và đáp ứng tại Việt Nam",
        summary:
          "Dựa trên năng lực phát triển công thức hóa chất của Hàn Quốc, PLACHEM VINA xem xét điều kiện vận hành, triệu chứng lỗi và vấn đề quản lý bổ sung tại hiện trường sản xuất ở Việt Nam.",
        items: [
          "Rà soát công thức hóa chất",
          "Kiểm tra điều kiện hiện trường",
          "Hỗ trợ quản lý bể mạ",
        ],
      },
    ],
  },
  solutions: {
    key: "solutions",
    title: "Giải pháp xử lý bề mặt theo tám nhóm sản phẩm",
    seoTitle: "Sản phẩm & giải pháp | PLACHEM VINA",
    description:
      "Tám nhóm sản phẩm gồm tiền xử lý, mạ điện, mạ không điện, anod nhôm, lớp phủ chuyển hóa, hậu xử lý, hóa chất cơ bản và thiết bị lọc.",
    eyebrow: "Sản phẩm & giải pháp",
    lead: "Các nhóm sản phẩm được sắp xếp để có thể xem xét công đoạn và hạng mục quản lý trước tên sản phẩm riêng lẻ.",
    ctaLabel: "Tư vấn theo công đoạn",
    ctaHref: "/vi/contact/",
    sections: [
      {
        title: "Phân loại sản phẩm theo công đoạn",
        summary:
          "Khám phá dòng công đoạn từ điều kiện bề mặt ban đầu đến mạ, tạo lớp phủ, hậu xử lý và thiết bị hỗ trợ.",
        items: getProductFamilies("vi").map((item) => item.title),
      },
      {
        title: "Kết nối tư vấn",
        summary:
          "Chọn nhóm sản phẩm phù hợp với công đoạn, sau đó chuẩn bị thông tin về điều kiện hiện tại, lỗi chính và tài liệu cần thiết để được tư vấn kỹ thuật.",
        items: [
          "Nhóm sản phẩm",
          "Công đoạn hiện tại",
          "Lỗi chính",
          "Tài liệu yêu cầu",
        ],
      },
    ],
  },
  technology: {
    key: "technology",
    title: "Hỗ trợ kỹ thuật dựa trên điều kiện hiện trường",
    seoTitle: "Hỗ trợ kỹ thuật | PLACHEM VINA",
    description:
      "Chẩn đoán công đoạn, hỗ trợ phân tích, xử lý lỗi, quản lý bể mạ và hỗ trợ áp dụng dây chuyền hoặc sản phẩm mới.",
    eyebrow: "Hỗ trợ kỹ thuật",
    lead: "Vấn đề xử lý bề mặt không thể đánh giá chỉ bằng tên hóa chất. Tiền xử lý, quản lý bể mạ, lọc, rửa và hậu xử lý cần được xem xét cùng nhau.",
    ctaLabel: "Tư vấn điều kiện công đoạn",
    ctaHref: "/vi/contact/",
    sections: [
      {
        title: "Chẩn đoán công đoạn",
        summary:
          "Điều kiện dây chuyền hiện tại, thời điểm phát sinh lỗi và thay đổi gần đây được dùng để sắp xếp trình tự kiểm tra.",
        items: [
          "Kiểm tra công đoạn",
          "Điều kiện tiền xử lý và bể mạ",
          "Rửa và hậu xử lý",
          "Thay đổi gần đây",
        ],
      },
      {
        title: "Hỗ trợ phân tích",
        summary:
          "Dung dịch bể mạ và hạng mục quản lý công đoạn được kiểm tra, sau đó kết nối với yêu cầu tài liệu hoặc điều kiện đánh giá khi cần.",
        items: [
          "pH",
          "Nồng độ kim loại",
          "Nhiệt độ",
          "Khuấy và lọc",
          "Lịch sử bổ sung",
        ],
      },
      {
        title: "Xử lý lỗi",
        summary:
          "Lỗi rỗ, bám dính, sai lệch màu, gỉ trắng và vết bẩn được phân tách theo nhóm nguyên nhân của từng giai đoạn công đoạn.",
        items: [
          "Ảnh lỗi",
          "Vị trí phát sinh",
          "Tần suất",
          "Điều kiện vận hành",
        ],
      },
      {
        title: "Hỗ trợ áp dụng mới",
        summary:
          "Với dây chuyền hoặc sản phẩm áp dụng mới, mục đích áp dụng, chất lượng yêu cầu và tiêu chí đánh giá được kiểm tra trước.",
        items: [
          "Mục đích áp dụng",
          "Điều kiện công đoạn",
          "Tiêu chí đánh giá",
          "Tài liệu yêu cầu",
        ],
      },
    ],
  },
  quality: {
    key: "quality",
    title: "Quản lý chất lượng từ nguyên liệu đến xuất hàng",
    seoTitle: "Quản lý chất lượng | PLACHEM VINA",
    description:
      "Tiếp nhận nguyên liệu, quản lý sản xuất, kiểm tra trong công đoạn, kiểm tra xuất hàng, truy xuất LOT và quy trình TDS/SDS/COA.",
    eyebrow: "Quản lý chất lượng",
    lead: "Quản lý chất lượng được tổ chức như một dòng quy trình từ kiểm tra nguyên liệu đến sản xuất, kiểm tra, xuất hàng và quản lý LOT.",
    ctaLabel: "Yêu cầu tài liệu",
    ctaHref: "/vi/contact/",
    sections: [
      {
        title: "Tiếp nhận nguyên liệu",
        summary:
          "Thông số nguyên liệu, điều kiện bảo quản và thông tin LOT được kiểm tra trước khi sản xuất.",
        items: [
          "Thông số nguyên liệu",
          "Kiểm tra nhập hàng",
          "Điều kiện bảo quản",
          "Thông tin LOT",
        ],
      },
      {
        title: "Quản lý sản xuất",
        summary:
          "Trong sản xuất, tình trạng sản phẩm được quản lý theo điều kiện công thức và sản xuất cùng các hạng mục kiểm tra trong công đoạn.",
        items: [
          "Công thức hóa chất và sản xuất",
          "Kiểm tra trong công đoạn",
          "Hồ sơ công việc",
        ],
      },
      {
        title: "Kiểm tra xuất hàng và truy xuất LOT",
        summary:
          "Kiểm tra thành phẩm và kiểm tra trước xuất hàng duy trì truy xuất LOT cho sản phẩm cung cấp.",
        items: [
          "Kiểm tra thành phẩm",
          "Kiểm tra trước xuất hàng",
          "Truy xuất LOT",
          "Quản lý hồ sơ",
        ],
      },
      {
        title: "Quy trình TDS/SDS/COA",
        summary:
          "Tài liệu được hướng dẫn riêng sau khi xác nhận tên sản phẩm, mục đích sử dụng và loại tài liệu yêu cầu.",
        items: ["TDS", "SDS", "COA", "Xác nhận mục đích"],
      },
    ],
  },
  knowledge: {
    key: "knowledge",
    title: "Tài liệu kỹ thuật theo công đoạn",
    seoTitle: "Tài liệu | PLACHEM VINA",
    description:
      "Tài liệu về quản lý công đoạn, nguyên nhân lỗi, an toàn hóa chất và quản lý chất lượng được kết nối với bài viết kỹ thuật và yêu cầu tài liệu.",
    eyebrow: "Tài liệu",
    lead: "Các tài liệu cần cho quản lý công đoạn, nguyên nhân lỗi, an toàn hóa chất và quản lý chất lượng được sắp xếp theo công đoạn.",
    ctaLabel: "Yêu cầu tài liệu",
    ctaHref: "/vi/contact/",
    sections: [
      {
        title: "Bài viết kỹ thuật",
        summary:
          "Các bài viết về công đoạn xử lý bề mặt và nguyên nhân lỗi được liên kết như tài liệu tham khảo theo công đoạn.",
        items: ["Vật liệu & mạ", "Mạ điện", "Phân tích lỗi"],
      },
      {
        title: "Phân loại theo công đoạn",
        summary:
          "Tài liệu được sắp xếp theo tiền xử lý, mạ, mạ không điện, anod nhôm, lớp phủ chuyển hóa, hậu xử lý và quản lý chất lượng.",
        items: [
          "Quản lý công đoạn",
          "Nguyên nhân lỗi",
          "Tài liệu an toàn",
          "Tài liệu chất lượng",
        ],
      },
      {
        title: "Yêu cầu tài liệu",
        summary:
          "Yêu cầu TDS, SDS và COA được hướng dẫn sau khi kiểm tra tên sản phẩm và mục đích sử dụng.",
        items: [
          "Tên sản phẩm",
          "Loại tài liệu",
          "Mục đích sử dụng",
          "Liên hệ phản hồi",
        ],
      },
    ],
  },
  contact: {
    key: "contact",
    title: "Tư vấn hỗ trợ kỹ thuật theo điều kiện công đoạn",
    seoTitle: "Liên hệ | PLACHEM VINA",
    description:
      "Phạm vi tư vấn, thông tin công đoạn hữu ích, liên hệ pháp nhân Việt Nam và liên hệ Hàn Quốc được cung cấp.",
    eyebrow: "Liên hệ",
    lead: "Nhóm sản phẩm, công đoạn hiện tại, triệu chứng và tài liệu yêu cầu giúp xác định phạm vi hỗ trợ kỹ thuật.",
    ctaLabel: "Xem sản phẩm & giải pháp",
    ctaHref: "/vi/solutions/",
    sections: [
      {
        title: "Phạm vi tư vấn",
        summary:
          "Có thể trao đổi về áp dụng nhóm sản phẩm, điều kiện công đoạn, nguyên nhân lỗi, quản lý bể mạ, áp dụng dây chuyền mới và yêu cầu TDS/SDS/COA.",
        items: [
          "Rà soát nhóm sản phẩm",
          "Vấn đề công đoạn",
          "Yêu cầu tài liệu",
          "Áp dụng mới",
        ],
      },
      {
        title: "Thông tin hữu ích",
        summary:
          "Tên công ty, người liên hệ, nhóm sản phẩm, công đoạn hiện tại, hóa chất đang sử dụng, ảnh lỗi hoặc mô tả triệu chứng sẽ hữu ích cho tư vấn.",
        items: [
          "Nhóm sản phẩm",
          "Công đoạn",
          "Triệu chứng",
          "Tài liệu yêu cầu",
        ],
      },
    ],
  },
};

export const staticPages: Record<
  Locale,
  Record<StaticPageKey, StaticPageContent>
> = {
  ko: koPages,
  en: enPages,
  vi: viPages,
};

export function getStaticPage(locale: Locale, key: StaticPageKey) {
  return staticPages[locale][key];
}
