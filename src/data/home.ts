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
  products: ProductFamily[];
  solutions: SolutionItem[];
  blogs: BlogLink[];
  footerNote: string;
};

const productSlugs = {
  pretreatment: "degreasing-cleaning-pretreatment",
  electroplating: "electroplating",
  electroless: "electroless-plating",
  anodizing: "aluminum-anodizing",
  zinc: "zinc-zinc-nickel-chromate",
  conversion: "conversion-corrosion-coating",
  chemicals: "general-chemicals-non-ferrous-metals",
  filtration: "filtration-equipment-supplies",
};

export const homeContent: Record<Locale, HomeContent> = {
  ko: {
    seoTitle: "PLACHEM VINA | 표면처리 화학 솔루션",
    description:
      "한국 포뮬레이션 기술과 베트남 현지 제조를 기반으로 표면처리 공정 안정화와 현장 기술지원을 제공합니다.",
    heroEyebrow: "Surface Treatment Chemical Solutions",
    heroTitle: "표면처리 공정 안정화를 위한 현장형 화학 솔루션",
    heroSummary:
      "PLACHEM VINA는 한국의 포뮬레이션 기술, 베트남 현지 제조, 현장 기술지원을 결합해 전처리, 도금, 아노다이징, 화성피막 공정을 지원합니다.",
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
      knowledge: "기술자료 연결",
      contact: "문의 CTA",
    },
    products: [
      {
        title: "탈지·세정·전처리",
        summary: "도금 전 표면 상태와 밀착 안정화를 위한 전처리 제품군입니다.",
        href: `/ko/solutions/${productSlugs.pretreatment}/`,
        materials: "철강, 동, 알루미늄, 스테인리스",
        process: "탈지, 세정, 산세, 활성화",
        cta: "전처리 상담",
      },
      {
        title: "전기도금",
        summary:
          "도금 bath 관리와 피트, 두께 편차, 밀착 문제 상담을 지원합니다.",
        href: `/ko/solutions/${productSlugs.electroplating}/`,
        materials: "철강, 동합금, 정밀 금속",
        process: "니켈, 동, 주석, 아연 도금",
        cta: "도금 상담",
      },
      {
        title: "무전해도금",
        summary: "복잡 형상과 특수 소재의 화학 도금 안정화를 지원합니다.",
        href: `/ko/solutions/${productSlugs.electroless}/`,
        materials: "금속, PCB 관련 소재, 플라스틱",
        process: "무전해 니켈, 무전해 동",
        cta: "무전해 상담",
      },
      {
        title: "알루미늄 아노다이징",
        summary: "알루미늄 전처리부터 염색과 봉공 품질 안정화를 지원합니다.",
        href: `/ko/solutions/${productSlugs.anodizing}/`,
        materials: "압출·가공·주조 알루미늄",
        process: "에칭, 디스머트, 아노다이징, 봉공",
        cta: "아노다이징 상담",
      },
      {
        title: "아연·아연니켈·크로메이트",
        summary: "철강 부품의 방청 도금과 후처리 조건 점검을 지원합니다.",
        href: `/ko/solutions/${productSlugs.zinc}/`,
        materials: "철강, 체결류, 산업용 금속 부품",
        process: "아연, 아연니켈, 3가 후처리",
        cta: "방청 도금 상담",
      },
      {
        title: "화성피막·방청·코팅",
        summary: "내식성, 도장 밀착, 변색 방지를 위한 표면처리 솔루션입니다.",
        href: `/ko/solutions/${productSlugs.conversion}/`,
        materials: "철강, 알루미늄, 마그네슘, 스테인리스",
        process: "전환피막, 인산염, 패시베이션",
        cta: "화성피막 상담",
      },
      {
        title: "일반 화학약품·비철금속",
        summary:
          "표면처리 공정에 필요한 일반 화학 원료와 비철금속 원료 공급 범주입니다.",
        href: `/ko/solutions/${productSlugs.chemicals}/`,
        materials: "공정 원료",
        process: "원료 공급, 보충 관리",
        cta: "원료 문의",
      },
      {
        title: "여과장비·기자재",
        summary:
          "도금·전처리 라인의 여과, 온도 관리, 시험·점검 기자재를 지원합니다.",
        href: `/ko/solutions/${productSlugs.filtration}/`,
        materials: "도금·전처리 라인",
        process: "여과, 활성탄 처리, bath 점검",
        cta: "기자재 상담",
      },
    ],
    solutions: [
      {
        title: "공정 조건 점검",
        summary: "소재, 전처리, bath, 수세, 후처리 조건을 함께 확인합니다.",
        checks: ["소재", "공정", "불량 유형"],
      },
      {
        title: "샘플 평가 지원",
        summary: "제품 적용 전 평가 조건과 필요한 자료를 정리합니다.",
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
    footerNote: "전화·이메일 대체 동선은 후속 승인 후 확정합니다.",
  },
  en: {
    seoTitle: "PLACHEM VINA | Surface Treatment Chemical Solutions",
    description:
      "Surface treatment chemical solutions combining Korean formulation technology, local manufacturing in Vietnam, and field technical support.",
    heroEyebrow: "Surface Treatment Chemical Solutions",
    heroTitle:
      "Practical chemical solutions for stable surface treatment processes",
    heroSummary:
      "PLACHEM VINA combines Korean formulation technology, local manufacturing in Vietnam, and field support for pretreatment, plating, anodizing, and conversion coating.",
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
      knowledge: "Knowledge Links",
      contact: "Inquiry CTA",
    },
    products: [],
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
          "Prepare evaluation conditions and required information before product trials.",
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
      "Phone and email fallback paths will be confirmed in a later approval step.",
  },
  vi: {
    seoTitle: "PLACHEM VINA | Giải pháp hóa chất xử lý bề mặt",
    description:
      "Giải pháp hóa chất xử lý bề mặt dựa trên công nghệ formulation Hàn Quốc, sản xuất tại Việt Nam và hỗ trợ kỹ thuật hiện trường.",
    heroEyebrow: "Surface Treatment Chemical Solutions",
    heroTitle:
      "Giải pháp hóa chất thực tiễn cho quy trình xử lý bề mặt ổn định",
    heroSummary:
      "PLACHEM VINA kết hợp công nghệ formulation Hàn Quốc, sản xuất tại Việt Nam và hỗ trợ hiện trường cho tiền xử lý, mạ, anodizing và xử lý chuyển hóa.",
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
      knowledge: "Liên kết tài liệu",
      contact: "CTA liên hệ",
    },
    products: [],
    solutions: [
      {
        title: "Kiểm tra điều kiện quy trình",
        summary: "Xem xét vật liệu, tiền xử lý, bể xử lý, rửa và xử lý sau.",
        checks: ["Vật liệu", "Quy trình", "Loại lỗi"],
      },
      {
        title: "Hỗ trợ đánh giá mẫu",
        summary:
          "Chuẩn bị điều kiện đánh giá và thông tin cần thiết trước khi thử sản phẩm.",
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
      "Kênh điện thoại và email thay thế sẽ được xác nhận ở bước phê duyệt sau.",
  },
};

const translatedProducts: Pick<
  ProductFamily,
  "title" | "summary" | "materials" | "process" | "cta"
>[][] = [
  [
    {
      title: "Degreasing, Cleaning & Pretreatment",
      summary:
        "Pretreatment products for stabilizing surface condition before plating.",
      materials: "Steel, copper, aluminum, stainless steel",
      process: "Degreasing, cleaning, pickling, activation",
      cta: "Pretreatment inquiry",
    },
    {
      title: "Electroplating",
      summary:
        "Support for bath control and defect consultation in electroplating.",
      materials: "Steel, copper alloys, precision metals",
      process: "Nickel, copper, tin, zinc plating",
      cta: "Plating inquiry",
    },
    {
      title: "Electroless Plating",
      summary:
        "Support for chemical plating stability on complex geometries and special substrates.",
      materials: "Metals, PCB-related substrates, plastics",
      process: "Electroless nickel, electroless copper",
      cta: "Electroless inquiry",
    },
    {
      title: "Aluminum Anodizing",
      summary:
        "Support for aluminum pretreatment, dyeing, and sealing stability.",
      materials: "Extruded, machined, cast aluminum",
      process: "Etching, desmutting, anodizing, sealing",
      cta: "Anodizing inquiry",
    },
    {
      title: "Zinc, Zinc-Nickel & Chromate",
      summary:
        "Support for corrosion-protection plating and post-treatment checks.",
      materials: "Steel, fasteners, industrial metal parts",
      process: "Zinc, zinc-nickel, trivalent post-treatment",
      cta: "Corrosion protection inquiry",
    },
    {
      title: "Conversion Coating, Corrosion Protection & Coating Support",
      summary:
        "Surface treatment support for corrosion resistance, paint adhesion, and discoloration prevention.",
      materials: "Steel, aluminum, magnesium, stainless steel",
      process: "Conversion coating, phosphate, passivation",
      cta: "Conversion coating inquiry",
    },
    {
      title: "General Chemicals & Non-Ferrous Metals",
      summary:
        "General chemical raw materials and non-ferrous metal supply categories for surface treatment processes.",
      materials: "Process raw materials",
      process: "Raw material supply, replenishment control",
      cta: "Raw material inquiry",
    },
    {
      title: "Filtration Equipment & Process Supplies",
      summary:
        "Filtration, temperature control, testing, and process supplies for plating and pretreatment lines.",
      materials: "Plating and pretreatment lines",
      process: "Filtration, carbon treatment, bath checks",
      cta: "Equipment inquiry",
    },
  ],
  [
    {
      title: "Tẩy dầu, làm sạch & tiền xử lý",
      summary: "Nhóm sản phẩm tiền xử lý giúp ổn định bề mặt trước khi mạ.",
      materials: "Thép, đồng, nhôm, inox",
      process: "Tẩy dầu, làm sạch, tẩy gỉ, hoạt hóa",
      cta: "Tư vấn tiền xử lý",
    },
    {
      title: "Mạ điện",
      summary: "Hỗ trợ quản lý bể mạ và tư vấn lỗi trong quy trình mạ điện.",
      materials: "Thép, hợp kim đồng, kim loại chính xác",
      process: "Mạ niken, đồng, thiếc, kẽm",
      cta: "Tư vấn mạ",
    },
    {
      title: "Mạ hóa học / mạ không điện",
      summary:
        "Hỗ trợ ổn định mạ hóa học cho chi tiết hình dạng phức tạp và vật liệu đặc thù.",
      materials: "Kim loại, vật liệu liên quan PCB, nhựa",
      process: "Mạ niken hóa học, mạ đồng hóa học",
      cta: "Tư vấn mạ hóa học",
    },
    {
      title: "Anodizing nhôm",
      summary: "Hỗ trợ ổn định tiền xử lý nhôm, nhuộm màu và sealing.",
      materials: "Nhôm ép, nhôm gia công, nhôm đúc",
      process: "Etching, desmutting, anodizing, sealing",
      cta: "Tư vấn anodizing",
    },
    {
      title: "Mạ kẽm, kẽm-niken & chromate",
      summary: "Hỗ trợ mạ chống ăn mòn và kiểm tra điều kiện xử lý sau mạ.",
      materials: "Thép, bulong, chi tiết kim loại công nghiệp",
      process: "Mạ kẽm, kẽm-niken, xử lý sau mạ hóa trị ba",
      cta: "Tư vấn chống ăn mòn",
    },
    {
      title: "Xử lý chuyển hóa, chống ăn mòn & hỗ trợ phủ",
      summary:
        "Hỗ trợ xử lý bề mặt để tăng chống ăn mòn, bám dính sơn và hạn chế đổi màu.",
      materials: "Thép, nhôm, magie, inox",
      process: "Xử lý chuyển hóa, phosphate, passivation",
      cta: "Tư vấn xử lý chuyển hóa",
    },
    {
      title: "Hóa chất thông dụng & kim loại màu",
      summary:
        "Nhóm nguyên liệu hóa chất và kim loại màu dùng cho quy trình xử lý bề mặt.",
      materials: "Nguyên liệu quy trình",
      process: "Cung ứng nguyên liệu, quản lý bổ sung",
      cta: "Tư vấn nguyên liệu",
    },
    {
      title: "Thiết bị lọc & vật tư quy trình",
      summary:
        "Hỗ trợ lọc, kiểm soát nhiệt độ, thử nghiệm và vật tư cho dây chuyền mạ và tiền xử lý.",
      materials: "Dây chuyền mạ và tiền xử lý",
      process: "Lọc, xử lý carbon, kiểm tra bể",
      cta: "Tư vấn thiết bị",
    },
  ],
];

(["en", "vi"] as const).forEach((locale, localeIndex) => {
  homeContent[locale].products = homeContent.ko.products.map(
    (product, productIndex) => ({
      ...product,
      ...translatedProducts[localeIndex][productIndex],
      href: product.href.replace("/ko/", `/${locale}/`),
    }),
  );
});
