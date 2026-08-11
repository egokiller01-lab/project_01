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
    summary:
      "소재마다 다른 산화막과 표면 반응성을 비교하고, 밀착 불량을 줄이기 위한 전처리 점검 항목을 정리합니다.",
    date: "2026.07.17",
    cta: "기술글 읽기",
  },
  {
    title: "도금액 교반 방식 하나 바꿨는데 결함이 달라지는 이유",
    href: "https://blog.plachem.biz/plating-agitation-defects-quality/",
    meta: "전기도금",
    summary:
      "공기교반·기계교반·순환여과가 피트, 얼룩, 버닝과 도금 두께에 미치는 영향을 현장 관점에서 설명합니다.",
    date: "2026.07.09",
    cta: "기술글 읽기",
  },
  {
    title: "피트가 났다고 바로 활성탄부터 돌리면 안 됩니다",
    href: "https://blog.plachem.biz/plating-pitting-filtration-carbon-treatment/",
    meta: "불량 분석",
    summary:
      "피트와 흐림 발생 시 여과로 해결할 문제와 활성탄 처리가 필요한 문제를 구분하는 진단 순서를 안내합니다.",
    date: "2026.07.07",
    cta: "기술글 읽기",
  },
  {
    title: "도금 불량은 랙에서 먼저 시작됩니다",
    href: "https://blog.plachem.biz/plating-rack-design-defects/",
    meta: "공정 설계",
    summary:
      "랙의 접촉저항, 전류분포, 액 흐름과 기포 배출이 접점 자국과 두께 편차에 미치는 영향을 정리합니다.",
    date: "2026.07.06",
    cta: "기술글 읽기",
  },
];

const enBlogs: BlogLink[] = [
  {
    title:
      "Why plating difficulty differs for iron, copper, aluminum, and stainless steel",
    href: "https://blog.plachem.biz/material-plating-difficulty-guide/",
    meta: "Materials & plating",
    summary:
      "A field guide to substrate-specific oxide films, surface reactivity, pretreatment, and adhesion checks.",
    date: "17 Jul 2026",
    cta: "Read article",
  },
  {
    title: "Why a change in plating bath agitation can change defect behavior",
    href: "https://blog.plachem.biz/plating-agitation-defects-quality/",
    meta: "Electroplating",
    summary:
      "How air agitation, mechanical mixing, and circulation influence pits, stains, burning, and deposit thickness.",
    date: "9 Jul 2026",
    cta: "Read article",
  },
  {
    title: "Why activated carbon is not always the first answer to pitting",
    href: "https://blog.plachem.biz/plating-pitting-filtration-carbon-treatment/",
    meta: "Defect analysis",
    summary:
      "A diagnostic sequence for separating filtration problems from cases that may require activated-carbon treatment.",
    date: "7 Jul 2026",
    cta: "Read article",
  },
  {
    title: "Why plating defects often begin at the rack",
    href: "https://blog.plachem.biz/plating-rack-design-defects/",
    meta: "Process design",
    summary:
      "How contact resistance, current distribution, solution flow, and gas release affect contact marks and thickness variation.",
    date: "6 Jul 2026",
    cta: "Read article",
  },
];

const viBlogs: BlogLink[] = [
  {
    title: "Vì sao độ khó khi mạ khác nhau giữa sắt, đồng, nhôm và inox",
    href: "https://blog.plachem.biz/vi/do-kho-ma-thep-dong-nhom-inox/",
    meta: "Vật liệu & mạ",
    summary:
      "So sánh màng oxide, tính phản ứng bề mặt và các hạng mục tiền xử lý cần kiểm tra để giảm lỗi bám dính.",
    date: "17.07.2026",
    cta: "Đọc bài kỹ thuật",
  },
  {
    title: "Vì sao thay đổi khuấy bể mạ có thể làm thay đổi lỗi chất lượng",
    href: "https://blog.plachem.biz/vi/khuay-dung-dich-ma-loi-be-mat/",
    meta: "Mạ điện",
    summary:
      "Phân tích ảnh hưởng của khuấy khí, khuấy cơ học và lọc tuần hoàn đến rỗ, vết ố, cháy mạ và chiều dày.",
    date: "09.07.2026",
    cta: "Đọc bài kỹ thuật",
  },
  {
    title: "Vì sao không nên xử lý rỗ mạ bằng than hoạt tính ngay từ đầu",
    href: "https://blog.plachem.biz/vi/dung-voi-chay-than-hoat-tinh-khi-thay-ro-ma/",
    meta: "Phân tích lỗi",
    summary:
      "Trình tự chẩn đoán giúp phân biệt vấn đề cần lọc với trường hợp cần cân nhắc xử lý bằng than hoạt tính.",
    date: "07.07.2026",
    cta: "Đọc bài kỹ thuật",
  },
  {
    title: "Lỗi mạ thường bắt đầu từ rack",
    href: "https://blog.plachem.biz/vi/loi-ma-bat-dau-tu-rack-vet-tiep-xuc-lech-do-day/",
    meta: "Thiết kế công đoạn",
    summary:
      "Giải thích ảnh hưởng của điện trở tiếp xúc, phân bố dòng điện, dòng dung dịch và thoát khí đến vết tiếp xúc và lệch chiều dày.",
    date: "06.07.2026",
    cta: "Đọc bài kỹ thuật",
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

const enHome: HomeContent = {
  seoTitle: "PLACHEM VINA | Precision Surface Treatment Chemical Solutions",
  description:
    "PLACHEM VINA provides surface treatment chemical solutions through Korean formulation expertise combined with Vietnam-based manufacturing and technical support.",
  heroEyebrow: "KOREAN FORMULATION · VIETNAM MANUFACTURING",
  heroTitleLines: ["Chemical solutions", "for stable"],
  heroAccent: "surface treatment processes",
  heroSummary:
    "Korean formulation expertise combined with Vietnam-based manufacturing and technical support helps improve quality at customer production sites.",
  primaryCtas: [
    {
      label: "View products & solutions",
      href: "/en/solutions/",
      variant: "primary",
    },
    { label: "Technical inquiry", href: "/en/contact/", variant: "secondary" },
  ],
  strengths: [
    "2016 / Established",
    "BẮC NINH / Local manufacturing & supply",
    "FIELD SUPPORT / Technical support",
  ],
  valueFlow: [
    "Process analysis",
    "Supply of suitable chemicals",
    "On-site stabilization support",
  ],
  sectionLabels: {
    value: "The value PLACHEM provides",
    solutions: "Four core solution areas",
    technology: "Field technical support",
    quality: "Manufacturing and quality flow",
    knowledge: "Technical resources and inquiry",
  },
  sectionSummaries: {
    value:
      "Before supplying chemicals, we review product group, process, defect symptoms, and management records to connect supply with process stabilization.",
    solutions:
      "Core solution areas are organized around the major surface treatment process stages. The full product groups are available on the Products & Solutions page.",
    technology:
      "From plating bath analysis to condition adjustment and follow-up checks, issues are narrowed down step by step.",
    quality:
      "Supply reliability is managed through a manufacturing and inspection flow from raw material check to LOT management.",
    knowledge:
      "Technical resources for process control, defect causes, chemical safety, and quality management are organized by process.",
  },
  featuredProducts: [
    {
      slug: "pretreatment",
      title: "Pretreatment",
      summary:
        "Degreasing, cleaning, pickling, etching, and desmut prepare the starting condition for surface treatment.",
      href: "/en/solutions/",
      materials: "Pretreatment",
      process: "Degreasing · Cleaning · Pickling",
      cta: "Products & Solutions",
    },
    {
      slug: "plating",
      title: "Plating & electroless plating",
      summary:
        "Electroplating and electroless plating are reviewed together with plating bath management and defect causes.",
      href: "/en/solutions/",
      materials: "Electroplating · Electroless plating",
      process: "Nickel · Copper · Tin · Electroless nickel",
      cta: "Products & Solutions",
    },
    {
      slug: "anodizing-conversion",
      title: "Anodizing & conversion coating",
      summary:
        "Aluminum pretreatment, dyeing, sealing, phosphate, zincate, and chromate processes are connected as one process flow.",
      href: "/en/solutions/",
      materials: "Anodizing · Conversion coating",
      process: "Anodizing · Sealing · Conversion coating",
      cta: "Products & Solutions",
    },
    {
      slug: "post-treatment",
      title: "Post-treatment & specialty chemicals",
      summary:
        "Anti-tarnish, coating, specialty cleaning, and removers support downstream process stability.",
      href: "/en/solutions/",
      materials: "Post-treatment",
      process: "Anti-tarnish · Coating · Specialty cleaning",
      cta: "Products & Solutions",
    },
  ],
  supportFlow: [
    {
      title: "Plating bath analysis",
      summary:
        "pH, metal concentration, temperature, agitation, and filtration are checked as analysis items.",
      checks: ["pH", "Metal concentration", "Temperature"],
    },
    {
      title: "Defect cause review",
      summary:
        "Pitting, adhesion issues, color deviation, white rust, and stains are separated by process stage.",
      checks: ["Photos", "Timing", "Operating conditions"],
    },
    {
      title: "Condition adjustment and stabilization",
      summary:
        "Chemical replenishment, plating bath management, and new process application are connected with follow-up checks.",
      checks: ["Replenishment", "Plating bath management", "Follow-up"],
    },
  ],
  qualitySteps: [
    "Raw material check",
    "Manufacturing",
    "In-process inspection",
    "Final inspection",
    "LOT management",
  ],
  blogs: enBlogs,
  footerNote:
    "Surface treatment chemicals manufacturing and field technical support.",
};

const viHome: HomeContent = {
  seoTitle: "PLACHEM VINA | Giải pháp hóa chất xử lý bề mặt chính xác",
  description:
    "PLACHEM VINA cung cấp giải pháp hóa chất xử lý bề mặt dựa trên năng lực phát triển công thức hóa chất của Hàn Quốc, sản xuất tại Việt Nam và hỗ trợ kỹ thuật hiện trường.",
  heroEyebrow: "KOREAN FORMULATION · VIETNAM MANUFACTURING",
  heroTitleLines: ["Tạo sự ổn định", "cho công đoạn"],
  heroAccent: "xử lý bề mặt",
  heroSummary:
    "Năng lực phát triển công thức hóa chất của Hàn Quốc kết hợp với sản xuất tại Việt Nam và hỗ trợ kỹ thuật hiện trường giúp nâng cao chất lượng tại dây chuyền sản xuất của khách hàng.",
  primaryCtas: [
    {
      label: "Xem sản phẩm & giải pháp",
      href: "/vi/solutions/",
      variant: "primary",
    },
    { label: "Tư vấn kỹ thuật", href: "/vi/contact/", variant: "secondary" },
  ],
  strengths: [
    "2016 / Thành lập",
    "BẮC NINH / Sản xuất & cung ứng tại Việt Nam",
    "HỖ TRỢ HIỆN TRƯỜNG / Hỗ trợ kỹ thuật",
  ],
  valueFlow: [
    "Phân tích công đoạn",
    "Cung cấp hóa chất phù hợp",
    "Hỗ trợ ổn định tại hiện trường",
  ],
  sectionLabels: {
    value: "Giá trị PLACHEM cung cấp",
    solutions: "Bốn nhóm giải pháp chính",
    technology: "Hỗ trợ kỹ thuật hiện trường",
    quality: "Quy trình sản xuất & chất lượng",
    knowledge: "Tài liệu kỹ thuật và tư vấn",
  },
  sectionSummaries: {
    value:
      "Trước khi cung cấp hóa chất, chúng tôi xem xét nhóm sản phẩm, công đoạn, triệu chứng lỗi và hồ sơ quản lý để kết nối cung ứng với ổn định công đoạn.",
    solutions:
      "Các giải pháp chính được sắp xếp theo trục công đoạn của xử lý bề mặt. Toàn bộ nhóm sản phẩm được trình bày tại trang Sản phẩm & giải pháp.",
    technology:
      "Từ phân tích bể mạ đến điều chỉnh điều kiện và kiểm tra lại, nguyên nhân vấn đề được thu hẹp theo từng bước.",
    quality:
      "Độ tin cậy cung ứng được quản lý qua quy trình sản xuất và kiểm tra từ nguyên liệu đến quản lý LOT.",
    knowledge:
      "Tài liệu về quản lý công đoạn, nguyên nhân lỗi, an toàn hóa chất và quản lý chất lượng được hướng dẫn theo từng công đoạn.",
  },
  featuredProducts: [
    {
      slug: "pretreatment",
      title: "Tiền xử lý",
      summary:
        "Tẩy dầu, làm sạch, tẩy axit, ăn mòn và khử smut giúp chuẩn bị điều kiện ban đầu cho xử lý bề mặt.",
      href: "/vi/solutions/",
      materials: "Tiền xử lý",
      process: "Tẩy dầu · Làm sạch · Tẩy axit",
      cta: "Sản phẩm & giải pháp",
    },
    {
      slug: "plating",
      title: "Mạ điện & mạ không điện",
      summary:
        "Mạ điện và mạ không điện được xem xét cùng với quản lý bể mạ và nguyên nhân lỗi.",
      href: "/vi/solutions/",
      materials: "Mạ điện · Mạ không điện",
      process: "Niken · Đồng · Thiếc · Niken hóa học",
      cta: "Sản phẩm & giải pháp",
    },
    {
      slug: "anodizing-conversion",
      title: "Anod nhôm & lớp phủ chuyển hóa",
      summary:
        "Tiền xử lý nhôm, nhuộm màu, bịt kín, phốt phát, zincate và cromat được kết nối theo dòng công đoạn.",
      href: "/vi/solutions/",
      materials: "Anod nhôm · Lớp phủ chuyển hóa",
      process: "Anod hóa · Bịt kín · Lớp phủ chuyển hóa",
      cta: "Sản phẩm & giải pháp",
    },
    {
      slug: "post-treatment",
      title: "Hậu xử lý & hóa chất chuyên dụng",
      summary:
        "Chống biến màu, phủ bảo vệ, làm sạch chuyên dụng và chất tẩy loại bỏ hỗ trợ ổn định công đoạn sau.",
      href: "/vi/solutions/",
      materials: "Hậu xử lý",
      process: "Chống biến màu · Phủ bảo vệ · Làm sạch chuyên dụng",
      cta: "Sản phẩm & giải pháp",
    },
  ],
  supportFlow: [
    {
      title: "Phân tích bể mạ",
      summary:
        "pH, nồng độ kim loại, nhiệt độ, khuấy và lọc được kiểm tra như các hạng mục phân tích.",
      checks: ["pH", "Nồng độ kim loại", "Nhiệt độ"],
    },
    {
      title: "Rà soát nguyên nhân lỗi",
      summary:
        "Lỗi rỗ, bám dính, sai lệch màu, gỉ trắng và vết bẩn được phân loại theo từng giai đoạn công đoạn.",
      checks: ["Ảnh", "Thời điểm phát sinh", "Điều kiện vận hành"],
    },
    {
      title: "Điều chỉnh điều kiện và ổn định",
      summary:
        "Bổ sung hóa chất, quản lý bể mạ và áp dụng công đoạn mới được kết nối với bước kiểm tra lại.",
      checks: ["Bổ sung", "Quản lý bể mạ", "Kiểm tra lại"],
    },
  ],
  qualitySteps: [
    "Kiểm tra nguyên liệu",
    "Sản xuất",
    "Kiểm tra trong công đoạn",
    "Kiểm tra thành phẩm",
    "Quản lý LOT",
  ],
  blogs: viBlogs,
  footerNote: "Sản xuất hóa chất xử lý bề mặt và hỗ trợ kỹ thuật hiện trường.",
};

export const homeContent: Record<Locale, HomeContent> = {
  ko: koHome,
  en: enHome,
  vi: viHome,
};
