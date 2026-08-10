import type { BlogLink, Locale, PageKey, StaticPageContent } from "../types";
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
  establishedKo: "2016년 4월 13일",
  establishedEn: "April 13, 2016",
  establishedVi: "13/04/2016",
  regionKo: "베트남 박닌성",
  regionEn: "Bac Ninh Province, Vietnam",
  regionVi: "Tỉnh Bắc Ninh, Việt Nam",
  site: "Que Vo Industrial Zone, Bac Ninh, Vietnam",
  vietnamPhone: "0222-395-2060",
  koreaAddressKo: "경기도 안산시 단원구 산단로 341",
  koreaAddressEn: "341 Sandan-ro, Danwon-gu, Ansan-si, Gyeonggi-do, Korea",
  koreaPhone: "031-495-6688",
};

export const verifiedBlogLinks: Record<Locale, BlogLink[]> = {
  ko: [
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
  en: [
    {
      title:
        "Why plating difficulty differs by steel, copper, aluminum, and stainless steel",
      href: "https://blog.plachem.biz/material-plating-difficulty-guide/",
      meta: "Korean technical article",
    },
    {
      title: "How agitation changes plating defects",
      href: "https://blog.plachem.biz/plating-agitation-defects-quality/",
      meta: "Korean technical article",
    },
    {
      title: "Pitting, filtration, and carbon treatment checks",
      href: "https://blog.plachem.biz/plating-pitting-filtration-carbon-treatment/",
      meta: "Korean technical article",
    },
  ],
  vi: [
    {
      title: "Vì sao độ khó mạ khác nhau theo từng vật liệu",
      href: "https://blog.plachem.biz/material-plating-difficulty-guide/",
      meta: "Bài kỹ thuật tiếng Hàn",
    },
    {
      title: "Khuấy bể mạ và sự thay đổi của lỗi bề mặt",
      href: "https://blog.plachem.biz/plating-agitation-defects-quality/",
      meta: "Bài kỹ thuật tiếng Hàn",
    },
    {
      title: "Kiểm tra rỗ mạ, lọc và xử lý carbon",
      href: "https://blog.plachem.biz/plating-pitting-filtration-carbon-treatment/",
      meta: "Bài kỹ thuật tiếng Hàn",
    },
  ],
};

export const pageLabels: Record<
  Locale,
  Record<
    PageKey,
    {
      title: string;
      short: string;
    }
  >
> = {
  ko: {
    home: { title: "홈", short: "홈" },
    about: { title: "회사소개", short: "회사소개" },
    solutions: { title: "제품·솔루션", short: "솔루션" },
    technology: { title: "기술지원", short: "기술지원" },
    quality: { title: "품질관리", short: "품질관리" },
    knowledge: { title: "기술자료", short: "기술자료" },
    contact: { title: "기술문의", short: "문의" },
  },
  en: {
    home: { title: "Home", short: "Home" },
    about: { title: "About", short: "Company" },
    solutions: { title: "Products & Solutions", short: "Solutions" },
    technology: { title: "Technology Support", short: "Support" },
    quality: { title: "Quality Management", short: "Quality" },
    knowledge: { title: "Knowledge Hub", short: "Knowledge" },
    contact: { title: "Technical Inquiry", short: "Contact" },
  },
  vi: {
    home: { title: "Trang chủ", short: "Trang chủ" },
    about: { title: "Giới thiệu", short: "Giới thiệu" },
    solutions: { title: "Sản phẩm & giải pháp", short: "Giải pháp" },
    technology: { title: "Hỗ trợ kỹ thuật", short: "Hỗ trợ" },
    quality: { title: "Quản lý chất lượng", short: "Chất lượng" },
    knowledge: { title: "Tài liệu kỹ thuật", short: "Tài liệu" },
    contact: { title: "Liên hệ kỹ thuật", short: "Liên hệ" },
  },
};

export const staticPages: Record<
  Locale,
  Record<StaticPageKey, StaticPageContent>
> = {
  ko: {
    about: {
      key: "about",
      title: "PLACHEM VINA CO., LTD",
      seoTitle: "회사소개 | PLACHEM VINA",
      description:
        "PLACHEM VINA는 2016년 설립된 베트남 박닌성 기반의 표면처리약품 제조·유통 및 공정 기술지원 기업입니다.",
      eyebrow: "Company",
      lead: "한국의 약품 설계·배합 기술과 베트남 현지 제조·기술지원을 결합해 제조 현장의 표면처리 공정 안정화를 지원합니다.",
      ctaLabel: "기술문의",
      ctaHref: "/ko/contact/",
      sections: [
        {
          title: "회사 개요",
          summary:
            "PLACHEM VINA CO., LTD는 2016년 4월 13일 설립되었으며 베트남 박닌성 Que Vo Industrial Zone을 생산 거점으로 운영합니다.",
          items: [
            "표면처리약품 제조·유통",
            "공정 기술지원",
            "제품 판매와 기술지원의 결합",
          ],
        },
        {
          title: "사업 방향",
          summary:
            "전처리, 도금, 무전해도금, 아노다이징, 화성피막, 방청, 기자재까지 공정 흐름에 맞춘 솔루션을 제공합니다.",
          items: ["한국 포뮬레이션 기술", "베트남 현지 제조", "현장 조건 검토"],
        },
        {
          title: "현지 대응 역량",
          summary:
            "고객 공정의 소재, bath 조건, 불량 증상, 요청 자료를 함께 확인해 실무적인 기술 검토로 연결합니다.",
          items: [
            "샘플 평가 지원",
            "공정 조건 검토",
            "주요 공급품 LOT 추적 관리",
          ],
        },
      ],
    },
    solutions: {
      key: "solutions",
      title: "8개 제품군과 공정별 솔루션",
      seoTitle: "제품·솔루션 | PLACHEM VINA",
      description:
        "탈지·전처리부터 도금, 아노다이징, 화성피막, 일반 화학약품, 여과장비까지 표면처리 제품군을 공정 중심으로 안내합니다.",
      eyebrow: "Products & Solutions",
      lead: "제품명보다 적용 공정, 소재, 관리 항목을 먼저 확인할 수 있도록 8개 제품군을 정리했습니다.",
      ctaLabel: "공정별 기술문의",
      ctaHref: "/ko/contact/",
      sections: [
        {
          title: "공정 중심 탐색",
          summary:
            "전처리, 도금, 후처리, 품질관리 장비를 하나의 공정 흐름 안에서 연결해 검토합니다.",
          items: getProductFamilies("ko").map((item) => item.title),
        },
        {
          title: "상담 준비 항목",
          summary:
            "소재, 현재 공정, 사용 약품, 불량 증상, 요청 문서를 정리하면 기술 검토가 빨라집니다.",
          items: ["소재", "공정", "불량 내용", "TDS·SDS·COA 요청"],
        },
      ],
    },
    technology: {
      key: "technology",
      title: "현장 공정에 맞춘 기술지원",
      seoTitle: "기술지원 | PLACHEM VINA",
      description:
        "공정 진단, 약품 선정, bath 분석과 관리, 불량 원인 검토, 현장 기술지원 범위를 안내합니다.",
      eyebrow: "Technology Support",
      lead: "표면처리 문제는 약품만으로 판단하기 어렵습니다. 소재, 전처리, bath 관리, 여과, 수세, 후처리를 함께 봅니다.",
      ctaLabel: "공정 조건 상담",
      ctaHref: "/ko/contact/",
      sections: [
        {
          title: "공정 진단",
          summary:
            "현재 라인 조건과 발생 증상을 기준으로 원인축을 분류하고 확인 순서를 정리합니다.",
          items: ["소재 확인", "bath 조건", "전처리·후처리", "최근 변경 사항"],
        },
        {
          title: "약품 선정과 적용 검토",
          summary:
            "고객 공정에 맞춰 제품군을 좁히고 샘플 평가 또는 자료 요청으로 연결합니다.",
          items: ["적용 목적", "평가 조건", "관리 항목", "회신 언어"],
        },
        {
          title: "불량 원인 검토",
          summary:
            "피트, 밀착 불량, 색상 편차, 백청, 얼룩 등 증상을 공정 단계별로 나눠 확인합니다.",
          items: ["불량 사진", "발생 시점", "라인 조건", "관리 기록"],
        },
      ],
    },
    quality: {
      key: "quality",
      title: "품질관리와 기술지원 흐름",
      seoTitle: "품질관리 | PLACHEM VINA",
      description:
        "원료 확인, 배합·제조 관리, 공정 중 확인, 출하 전 검사, LOT 추적, 고객 피드백 흐름을 안내합니다.",
      eyebrow: "Quality Management",
      lead: "확인된 품질관리 흐름을 중심으로 표면처리약품 공급과 기술지원의 신뢰성을 설명합니다.",
      ctaLabel: "자료 요청",
      ctaHref: "/ko/contact/",
      sections: [
        {
          title: "제조 전 확인",
          summary:
            "원료와 사양을 확인하고 제조 조건에 맞는 관리 항목을 정리합니다.",
          items: ["원료 확인", "사양 확인", "보관 조건"],
        },
        {
          title: "제조와 출하 관리",
          summary:
            "배합·제조 과정과 출하 전 확인을 통해 주요 공급품의 LOT 추적 관리를 유지합니다.",
          items: ["배합·제조 관리", "공정 중 확인", "출하 전 검사", "LOT 추적"],
        },
        {
          title: "고객 피드백",
          summary:
            "현장 적용 후 피드백을 기술지원과 연결해 공정 조건 재검토에 활용합니다.",
          items: ["불량 상담", "자료 요청", "샘플 평가", "후속 검토"],
        },
      ],
    },
    knowledge: {
      key: "knowledge",
      title: "표면처리 기술자료 연결",
      seoTitle: "기술자료 | PLACHEM VINA",
      description:
        "표면처리 공정관리, 불량 원인과 개선, 약품 안전·관리 자료를 기술 블로그와 연결합니다.",
      eyebrow: "Knowledge Hub",
      lead: "기술 블로그의 확인된 글만 연결하며 WordPress 콘텐츠는 이번 작업에서 수정하지 않습니다.",
      ctaLabel: "관련 공정 문의",
      ctaHref: "/ko/contact/",
      sections: [
        {
          title: "자료 분류",
          summary:
            "공정, 소재, 불량 유형을 기준으로 필요한 기술자료를 찾을 수 있게 구성합니다.",
          items: ["표면처리 공정관리", "불량 원인과 개선", "약품 안전·관리"],
        },
        {
          title: "블로그 연결 기준",
          summary:
            "실제 존재가 확인된 글만 연결하고, 제품 상세 페이지와 공정 문의 CTA로 이어지게 합니다.",
          items: verifiedBlogLinks.ko.map((item) => item.title),
        },
      ],
    },
    contact: {
      key: "contact",
      title: "기술문의와 연락처",
      seoTitle: "기술문의 | PLACHEM VINA",
      description:
        "PLACHEM VINA의 확인된 연락처와 기술문의 준비 항목을 안내합니다. 실제 문의 전송 기능은 이번 Phase에 포함하지 않습니다.",
      eyebrow: "Technical Inquiry",
      lead: "공정, 소재, 증상, 요청 자료를 정리해 연락하면 기술 검토와 자료 요청 흐름으로 연결할 수 있습니다.",
      ctaLabel: "제품·솔루션 보기",
      ctaHref: "/ko/solutions/",
      sections: [
        {
          title: "베트남 법인",
          summary: `${companyFacts.site} / 전화 ${companyFacts.vietnamPhone}`,
          items: ["표면처리약품 제조·유통", "현지 기술지원", "자료 요청 접수"],
        },
        {
          title: "한국 본사 연락처",
          summary: `${companyFacts.koreaAddressKo} / 전화 ${companyFacts.koreaPhone}`,
          items: ["약품 설계·배합 기술", "기술 검토 협의", "제품 자료 확인"],
        },
        {
          title: "문의 전 준비 항목",
          summary:
            "실제 전송 폼은 후속 Phase에서 구현합니다. 이번 화면은 확인된 연락수단과 상담 준비 항목만 제공합니다.",
          items: ["회사명", "담당자명", "공정", "소재", "증상 또는 요청 문서"],
        },
      ],
    },
  },
  en: {
    about: {
      key: "about",
      title: "PLACHEM VINA CO., LTD",
      seoTitle: "About | PLACHEM VINA",
      description:
        "PLACHEM VINA is a surface treatment chemical manufacturing, distribution, and technical support company based in Bac Ninh, Vietnam.",
      eyebrow: "Company",
      lead: "PLACHEM combines Korean chemical design and formulation know-how with local manufacturing and technical support in Vietnam.",
      ctaLabel: "Technical inquiry",
      ctaHref: "/en/contact/",
      sections: [
        {
          title: "Company profile",
          summary:
            "PLACHEM VINA CO., LTD was established on April 13, 2016 and operates from Que Vo Industrial Zone in Bac Ninh Province, Vietnam.",
          items: [
            "Surface treatment chemicals",
            "Manufacturing and distribution",
            "Product supply with technical support",
          ],
        },
        {
          title: "Business direction",
          summary:
            "The product range follows practical process needs from pretreatment and plating to anodizing, conversion coating, corrosion protection, and equipment supplies.",
          items: [
            "Korean formulation technology",
            "Local manufacturing in Vietnam",
            "Field condition review",
          ],
        },
        {
          title: "Local response",
          summary:
            "PLACHEM reviews substrate, bath conditions, defect symptoms, and document needs before technical response.",
          items: [
            "Sample evaluation support",
            "Process condition review",
            "LOT tracking for key supplied items",
          ],
        },
      ],
    },
    solutions: {
      key: "solutions",
      title: "Eight product families for surface treatment",
      seoTitle: "Products & Solutions | PLACHEM VINA",
      description:
        "Browse eight product families for pretreatment, plating, anodizing, conversion coating, general chemicals, and equipment supplies.",
      eyebrow: "Products & Solutions",
      lead: "The product structure is organized by process, substrate, and control items so engineers can find the right starting point quickly.",
      ctaLabel: "Process inquiry",
      ctaHref: "/en/contact/",
      sections: [
        {
          title: "Process-based navigation",
          summary:
            "Pretreatment, plating, post-treatment, and quality equipment are connected in one process view.",
          items: getProductFamilies("en").map((item) => item.title),
        },
        {
          title: "Inquiry preparation",
          summary:
            "Prepare substrate, current process, existing chemical, defect details, and requested documents before consultation.",
          items: [
            "Substrate",
            "Process",
            "Defect details",
            "TDS/SDS/COA request",
          ],
        },
      ],
    },
    technology: {
      key: "technology",
      title: "Technical support matched to field process",
      seoTitle: "Technology Support | PLACHEM VINA",
      description:
        "Technical support for process diagnosis, chemical selection, bath analysis, defect review, and field application checks.",
      eyebrow: "Technology Support",
      lead: "Surface treatment issues are reviewed through substrate, pretreatment, bath control, filtration, rinsing, and post-treatment together.",
      ctaLabel: "Discuss process conditions",
      ctaHref: "/en/contact/",
      sections: [
        {
          title: "Process diagnosis",
          summary:
            "Line conditions and symptoms are organized into practical root-cause groups and checking steps.",
          items: [
            "Substrate",
            "Bath condition",
            "Pretreatment and post-treatment",
            "Recent changes",
          ],
        },
        {
          title: "Chemical selection",
          summary:
            "Product families are narrowed by customer process and connected to sample review or document requests.",
          items: [
            "Application purpose",
            "Evaluation condition",
            "Control item",
            "Reply language",
          ],
        },
        {
          title: "Defect review",
          summary:
            "Pitting, poor adhesion, color variation, white rust, and stains are reviewed by process stage.",
          items: ["Defect photo", "Timing", "Line condition", "Control record"],
        },
      ],
    },
    quality: {
      key: "quality",
      title: "Quality management and technical support flow",
      seoTitle: "Quality Management | PLACHEM VINA",
      description:
        "Quality flow covering raw material checks, manufacturing control, in-process checks, release checks, LOT tracking, and customer feedback.",
      eyebrow: "Quality Management",
      lead: "PLACHEM explains supply reliability through practical quality management flow without unsupported certification claims.",
      ctaLabel: "Request documents",
      ctaHref: "/en/contact/",
      sections: [
        {
          title: "Before manufacturing",
          summary:
            "Raw materials and specifications are reviewed before manufacturing control items are set.",
          items: [
            "Raw material check",
            "Specification review",
            "Storage condition",
          ],
        },
        {
          title: "Manufacturing and release",
          summary:
            "Manufacturing control and release checks support LOT tracking for key supplied items.",
          items: [
            "Mixing and manufacturing control",
            "In-process check",
            "Release check",
            "LOT tracking",
          ],
        },
        {
          title: "Customer feedback",
          summary:
            "Field feedback is connected to technical support and process condition review.",
          items: [
            "Defect consultation",
            "Document request",
            "Sample evaluation",
            "Follow-up review",
          ],
        },
      ],
    },
    knowledge: {
      key: "knowledge",
      title: "Technical knowledge hub",
      seoTitle: "Knowledge Hub | PLACHEM VINA",
      description:
        "Technical resources for surface treatment process control, defect causes, improvement checks, and chemical handling.",
      eyebrow: "Knowledge Hub",
      lead: "Only verified technical blog articles are linked. WordPress content is not modified in this phase.",
      ctaLabel: "Ask about a related process",
      ctaHref: "/en/contact/",
      sections: [
        {
          title: "Resource categories",
          summary:
            "Resources are organized by process, substrate, and defect type.",
          items: [
            "Surface treatment process control",
            "Defect causes and improvement",
            "Chemical safety and management",
          ],
        },
        {
          title: "Blog connection",
          summary:
            "Verified Korean technical posts are linked as reference material for engineers.",
          items: verifiedBlogLinks.en.map((item) => item.title),
        },
      ],
    },
    contact: {
      key: "contact",
      title: "Technical inquiry and contact",
      seoTitle: "Technical Inquiry | PLACHEM VINA",
      description:
        "Verified contact channels and inquiry preparation items for PLACHEM VINA. Online form submission is not included in this phase.",
      eyebrow: "Technical Inquiry",
      lead: "Prepare process, substrate, symptom, and requested documents before contacting PLACHEM for technical review.",
      ctaLabel: "View products",
      ctaHref: "/en/solutions/",
      sections: [
        {
          title: "Vietnam office",
          summary: `${companyFacts.site} / Phone ${companyFacts.vietnamPhone}`,
          items: [
            "Surface treatment chemicals",
            "Local technical support",
            "Document request intake",
          ],
        },
        {
          title: "Korea office",
          summary: `${companyFacts.koreaAddressEn} / Phone ${companyFacts.koreaPhone}`,
          items: [
            "Chemical design and formulation",
            "Technical review",
            "Product document check",
          ],
        },
        {
          title: "Before inquiry",
          summary:
            "A live submission form is planned for a later phase. This page shows verified contact channels and preparation items only.",
          items: [
            "Company name",
            "Contact person",
            "Process",
            "Substrate",
            "Symptom or requested document",
          ],
        },
      ],
    },
  },
  vi: {
    about: {
      key: "about",
      title: "PLACHEM VINA CO., LTD",
      seoTitle: "Giới thiệu | PLACHEM VINA",
      description:
        "PLACHEM VINA là doanh nghiệp sản xuất, phân phối hóa chất xử lý bề mặt và hỗ trợ kỹ thuật tại Bắc Ninh, Việt Nam.",
      eyebrow: "Company",
      lead: "PLACHEM kết hợp kỹ thuật thiết kế, phối trộn hóa chất của Hàn Quốc với sản xuất và hỗ trợ kỹ thuật tại Việt Nam.",
      ctaLabel: "Liên hệ kỹ thuật",
      ctaHref: "/vi/contact/",
      sections: [
        {
          title: "Thông tin công ty",
          summary:
            "PLACHEM VINA CO., LTD được thành lập ngày 13/04/2016 và hoạt động tại Khu công nghiệp Quế Võ, tỉnh Bắc Ninh, Việt Nam.",
          items: [
            "Hóa chất xử lý bề mặt",
            "Sản xuất và phân phối",
            "Cung ứng sản phẩm kèm hỗ trợ kỹ thuật",
          ],
        },
        {
          title: "Định hướng kinh doanh",
          summary:
            "Danh mục sản phẩm đi theo nhu cầu quy trình từ tiền xử lý, mạ, anodizing đến xử lý chuyển hóa, chống ăn mòn và vật tư thiết bị.",
          items: [
            "Công nghệ formulation Hàn Quốc",
            "Sản xuất tại Việt Nam",
            "Xem xét điều kiện hiện trường",
          ],
        },
        {
          title: "Đáp ứng tại Việt Nam",
          summary:
            "PLACHEM xem xét vật liệu, điều kiện bể, triệu chứng lỗi và nhu cầu tài liệu trước khi phản hồi kỹ thuật.",
          items: [
            "Hỗ trợ đánh giá mẫu",
            "Xem xét điều kiện quy trình",
            "Quản lý truy xuất LOT cho hạng mục cung ứng chính",
          ],
        },
      ],
    },
    solutions: {
      key: "solutions",
      title: "Tám nhóm sản phẩm xử lý bề mặt",
      seoTitle: "Sản phẩm & giải pháp | PLACHEM VINA",
      description:
        "Tám nhóm sản phẩm cho tiền xử lý, mạ, anodizing, xử lý chuyển hóa, hóa chất thông dụng và thiết bị vật tư.",
      eyebrow: "Products & Solutions",
      lead: "Cấu trúc sản phẩm được sắp xếp theo quy trình, vật liệu và hạng mục quản lý để kỹ sư dễ chọn điểm bắt đầu.",
      ctaLabel: "Liên hệ theo quy trình",
      ctaHref: "/vi/contact/",
      sections: [
        {
          title: "Tìm kiếm theo quy trình",
          summary:
            "Tiền xử lý, mạ, xử lý sau mạ và thiết bị kiểm soát chất lượng được kết nối trong một luồng quy trình.",
          items: getProductFamilies("vi").map((item) => item.title),
        },
        {
          title: "Chuẩn bị thông tin tư vấn",
          summary:
            "Chuẩn bị vật liệu, quy trình hiện tại, hóa chất đang dùng, nội dung lỗi và tài liệu cần yêu cầu.",
          items: [
            "Vật liệu",
            "Quy trình",
            "Nội dung lỗi",
            "Yêu cầu TDS/SDS/COA",
          ],
        },
      ],
    },
    technology: {
      key: "technology",
      title: "Hỗ trợ kỹ thuật theo quy trình hiện trường",
      seoTitle: "Hỗ trợ kỹ thuật | PLACHEM VINA",
      description:
        "Hỗ trợ chẩn đoán quy trình, lựa chọn hóa chất, phân tích và quản lý bể, xem xét nguyên nhân lỗi và điều kiện áp dụng.",
      eyebrow: "Technology Support",
      lead: "Vấn đề xử lý bề mặt cần được xem xét cùng lúc theo vật liệu, tiền xử lý, quản lý bể, lọc, rửa và xử lý sau.",
      ctaLabel: "Trao đổi điều kiện quy trình",
      ctaHref: "/vi/contact/",
      sections: [
        {
          title: "Chẩn đoán quy trình",
          summary:
            "Điều kiện dây chuyền và triệu chứng được nhóm thành các hướng nguyên nhân và bước kiểm tra thực tế.",
          items: [
            "Vật liệu",
            "Điều kiện bể",
            "Tiền xử lý và xử lý sau",
            "Thay đổi gần đây",
          ],
        },
        {
          title: "Lựa chọn hóa chất",
          summary:
            "Nhóm sản phẩm được thu hẹp theo quy trình khách hàng và kết nối với đánh giá mẫu hoặc yêu cầu tài liệu.",
          items: [
            "Mục đích áp dụng",
            "Điều kiện đánh giá",
            "Hạng mục quản lý",
            "Ngôn ngữ phản hồi",
          ],
        },
        {
          title: "Xem xét nguyên nhân lỗi",
          summary:
            "Rỗ mạ, bám dính kém, lệch màu, gỉ trắng và vết bẩn được xem xét theo từng công đoạn.",
          items: [
            "Ảnh lỗi",
            "Thời điểm phát sinh",
            "Điều kiện dây chuyền",
            "Nhật ký quản lý",
          ],
        },
      ],
    },
    quality: {
      key: "quality",
      title: "Quản lý chất lượng và luồng hỗ trợ kỹ thuật",
      seoTitle: "Quản lý chất lượng | PLACHEM VINA",
      description:
        "Luồng chất lượng gồm kiểm tra nguyên liệu, quản lý sản xuất, kiểm tra trong quá trình, kiểm tra trước xuất hàng, truy xuất LOT và phản hồi khách hàng.",
      eyebrow: "Quality Management",
      lead: "PLACHEM trình bày độ tin cậy cung ứng bằng quy trình quản lý chất lượng thực tế, không dùng tuyên bố chứng nhận chưa xác nhận.",
      ctaLabel: "Yêu cầu tài liệu",
      ctaHref: "/vi/contact/",
      sections: [
        {
          title: "Trước sản xuất",
          summary:
            "Nguyên liệu và thông số được xem xét trước khi thiết lập hạng mục quản lý sản xuất.",
          items: [
            "Kiểm tra nguyên liệu",
            "Xem xét thông số",
            "Điều kiện bảo quản",
          ],
        },
        {
          title: "Sản xuất và xuất hàng",
          summary:
            "Quản lý sản xuất và kiểm tra trước xuất hàng hỗ trợ truy xuất LOT cho hạng mục cung ứng chính.",
          items: [
            "Quản lý phối trộn và sản xuất",
            "Kiểm tra trong quá trình",
            "Kiểm tra trước xuất hàng",
            "Truy xuất LOT",
          ],
        },
        {
          title: "Phản hồi khách hàng",
          summary:
            "Phản hồi hiện trường được kết nối với hỗ trợ kỹ thuật và xem xét điều kiện quy trình.",
          items: [
            "Tư vấn lỗi",
            "Yêu cầu tài liệu",
            "Đánh giá mẫu",
            "Xem xét tiếp theo",
          ],
        },
      ],
    },
    knowledge: {
      key: "knowledge",
      title: "Tài liệu kỹ thuật xử lý bề mặt",
      seoTitle: "Tài liệu kỹ thuật | PLACHEM VINA",
      description:
        "Tài liệu về quản lý quy trình xử lý bề mặt, nguyên nhân lỗi, cải thiện và quản lý an toàn hóa chất.",
      eyebrow: "Knowledge Hub",
      lead: "Chỉ liên kết các bài kỹ thuật đã xác nhận. Nội dung WordPress không được chỉnh sửa trong giai đoạn này.",
      ctaLabel: "Hỏi về quy trình liên quan",
      ctaHref: "/vi/contact/",
      sections: [
        {
          title: "Phân loại tài liệu",
          summary:
            "Tài liệu được tổ chức theo quy trình, vật liệu và loại lỗi.",
          items: [
            "Quản lý quy trình xử lý bề mặt",
            "Nguyên nhân lỗi và cải thiện",
            "An toàn và quản lý hóa chất",
          ],
        },
        {
          title: "Liên kết blog",
          summary:
            "Các bài kỹ thuật tiếng Hàn đã xác nhận được liên kết làm tài liệu tham khảo cho kỹ sư.",
          items: verifiedBlogLinks.vi.map((item) => item.title),
        },
      ],
    },
    contact: {
      key: "contact",
      title: "Liên hệ kỹ thuật",
      seoTitle: "Liên hệ kỹ thuật | PLACHEM VINA",
      description:
        "Kênh liên hệ đã xác nhận và thông tin cần chuẩn bị khi liên hệ PLACHEM VINA. Chức năng gửi biểu mẫu trực tuyến chưa nằm trong giai đoạn này.",
      eyebrow: "Technical Inquiry",
      lead: "Chuẩn bị quy trình, vật liệu, triệu chứng và tài liệu cần yêu cầu trước khi liên hệ để được xem xét kỹ thuật.",
      ctaLabel: "Xem sản phẩm",
      ctaHref: "/vi/solutions/",
      sections: [
        {
          title: "Văn phòng Việt Nam",
          summary: `${companyFacts.site} / Điện thoại ${companyFacts.vietnamPhone}`,
          items: [
            "Hóa chất xử lý bề mặt",
            "Hỗ trợ kỹ thuật tại Việt Nam",
            "Tiếp nhận yêu cầu tài liệu",
          ],
        },
        {
          title: "Liên hệ Hàn Quốc",
          summary: `${companyFacts.koreaAddressEn} / Điện thoại ${companyFacts.koreaPhone}`,
          items: [
            "Thiết kế và formulation hóa chất",
            "Xem xét kỹ thuật",
            "Kiểm tra tài liệu sản phẩm",
          ],
        },
        {
          title: "Trước khi liên hệ",
          summary:
            "Biểu mẫu gửi trực tuyến sẽ được triển khai ở giai đoạn sau. Trang này chỉ hiển thị kênh liên hệ đã xác nhận và thông tin cần chuẩn bị.",
          items: [
            "Tên công ty",
            "Người phụ trách",
            "Quy trình",
            "Vật liệu",
            "Triệu chứng hoặc tài liệu yêu cầu",
          ],
        },
      ],
    },
  },
};

export function getStaticPage(locale: Locale, key: StaticPageKey) {
  return staticPages[locale][key];
}
