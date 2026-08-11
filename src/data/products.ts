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

export const processLabels: Record<Locale, Record<ProductSlug, string>> = {
  ko: {
    pretreatment: "전처리",
    electroplating: "전기도금",
    "electroless-plating": "무전해도금",
    "aluminum-anodizing": "알루미늄 아노다이징",
    "conversion-coating": "화성피막",
    "post-treatment-specialty": "후처리·특수약품",
    "basic-chemicals": "기초화학약품",
    "filtration-equipment": "여과장비·관련 설비",
  },
  en: {
    pretreatment: "Pretreatment",
    electroplating: "Electroplating",
    "electroless-plating": "Electroless plating",
    "aluminum-anodizing": "Aluminum anodizing",
    "conversion-coating": "Conversion coating",
    "post-treatment-specialty": "Post-treatment & specialty chemicals",
    "basic-chemicals": "Basic chemicals",
    "filtration-equipment": "Filtration equipment & related systems",
  },
  vi: {
    pretreatment: "Tiền xử lý",
    electroplating: "Mạ điện",
    "electroless-plating": "Mạ không điện",
    "aluminum-anodizing": "Anod nhôm",
    "conversion-coating": "Lớp phủ chuyển hóa",
    "post-treatment-specialty": "Hậu xử lý & hóa chất chuyên dụng",
    "basic-chemicals": "Hóa chất cơ bản",
    "filtration-equipment": "Thiết bị lọc & hệ thống liên quan",
  },
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

const enProducts: ProductDetail[] = [
  {
    slug: "pretreatment",
    title: "Pretreatment",
    summary:
      "Degreasing, cleaning, pickling, etching, and desmut prepare the starting condition for downstream plating and coating processes.",
    overview:
      "Pretreatment is organized around confirmed process items so the following plating or coating step can start from a controlled surface condition.",
    materials: ["Degreasing", "Cleaning", "Pickling", "Etching", "Desmut"],
    processes: ["Degreasing", "Cleaning", "Pickling", "Etching", "Desmut"],
    checks: [
      "Concentration",
      "Temperature",
      "Treatment time",
      "Rinsing condition",
      "Surface condition",
    ],
    support: [
      "Pretreatment sequence review",
      "Defect cause check",
      "Control item review",
    ],
    cta: "Pretreatment inquiry",
  },
  {
    slug: "electroplating",
    title: "Electroplating",
    summary:
      "Nickel, copper, tin, zinc, chromium, silver, and gold plating processes are reviewed together with plating bath management.",
    overview:
      "Pitting, thickness variation, adhesion issues, and color deviation are reviewed in relation to plating bath management.",
    materials: [
      "Nickel",
      "Copper",
      "Tin",
      "Zinc",
      "Chromium",
      "Silver",
      "Gold",
    ],
    processes: [
      "Nickel",
      "Copper",
      "Tin",
      "Zinc",
      "Chromium",
      "Silver",
      "Gold",
    ],
    checks: [
      "pH",
      "Metal concentration",
      "Current density",
      "Agitation",
      "Filtration",
      "Temperature",
    ],
    support: [
      "Plating bath analysis",
      "Operating condition review",
      "Defect photo-based consultation",
    ],
    cta: "Electroplating inquiry",
  },
  {
    slug: "electroless-plating",
    title: "Electroless plating",
    summary:
      "Electroless nickel and electroless copper processes are reviewed with plating bath stability in mind.",
    overview:
      "This process is managed around reduction reaction and bath stability rather than current distribution.",
    materials: ["Electroless nickel", "Electroless copper"],
    processes: ["Electroless nickel", "Electroless copper"],
    checks: [
      "pH",
      "Temperature",
      "Metal concentration",
      "Reducing agent condition",
      "Bath stability",
    ],
    support: [
      "Plating bath control items",
      "Reduction reaction check",
      "Defect cause review",
    ],
    cta: "Electroless plating inquiry",
  },
  {
    slug: "aluminum-anodizing",
    title: "Aluminum anodizing",
    summary:
      "Chemical polishing, etching, desmut, anodizing, dyeing, sealing, and nickel leach-out removal are covered.",
    overview:
      "Pretreatment response, film formation, color, and sealing conditions are reviewed as one process flow.",
    materials: [
      "Chemical polishing",
      "Etching",
      "Desmut",
      "Anodizing",
      "Dyeing",
      "Sealing",
      "Nickel leach-out removal",
    ],
    processes: [
      "Chemical polishing",
      "Etching",
      "Desmut",
      "Anodizing",
      "Dyeing",
      "Sealing",
      "Nickel leach-out removal",
    ],
    checks: [
      "Pretreatment condition",
      "Film condition",
      "Dyeing condition",
      "Sealing condition",
    ],
    support: [
      "Pretreatment condition review",
      "Color deviation consultation",
      "Sealing condition check",
    ],
    cta: "Anodizing inquiry",
  },
  {
    slug: "conversion-coating",
    title: "Conversion coating",
    summary:
      "Phosphate, zincate, and chromate conversion coating processes are organized by process item.",
    overview:
      "The process is reviewed with attention to surface condition, rinsing, and drying before and after coating.",
    materials: ["Phosphate", "Zincate", "Chromate"],
    processes: ["Phosphate", "Zincate", "Chromate"],
    checks: [
      "Surface condition",
      "pH",
      "Temperature",
      "Treatment time",
      "Rinsing",
      "Drying",
    ],
    support: [
      "Coating process review",
      "Before/after condition check",
      "Defect cause review",
    ],
    cta: "Conversion coating inquiry",
  },
  {
    slug: "post-treatment-specialty",
    title: "Post-treatment & specialty chemicals",
    summary:
      "Anti-tarnish, coating, specialty cleaning, and removers are handled as post-treatment and specialty chemical categories.",
    overview:
      "This stage is reviewed as a way to maintain previous process quality through rinsing, drying, and pre-storage conditions.",
    materials: ["Anti-tarnish", "Coating", "Specialty cleaning", "Removers"],
    processes: ["Anti-tarnish", "Coating", "Specialty cleaning", "Removers"],
    checks: [
      "Previous process condition",
      "Chemical residue",
      "Rinsing",
      "Drying",
      "Storage condition",
    ],
    support: [
      "Post-treatment condition review",
      "Tarnish and stain cause check",
      "Process adjustment suggestion",
    ],
    cta: "Post-treatment inquiry",
  },
  {
    slug: "basic-chemicals",
    title: "Basic chemicals",
    summary:
      "Sulfuric acid, hydrochloric acid, nitric acid, and caustic soda are supplied for surface treatment line operation.",
    overview:
      "Raw material specifications, storage conditions, and LOT management are checked to support stable supply.",
    materials: [
      "Sulfuric acid",
      "Hydrochloric acid",
      "Nitric acid",
      "Caustic soda",
    ],
    processes: [
      "Raw material supply",
      "Replenishment control",
      "Specification check",
    ],
    checks: [
      "Specification sheet",
      "LOT",
      "Storage condition",
      "Incoming check",
    ],
    support: [
      "Raw material specification check",
      "Handling condition review",
      "LOT trace support",
    ],
    cta: "Basic chemicals inquiry",
  },
  {
    slug: "filtration-equipment",
    title: "Filtration equipment & related systems",
    summary:
      "Filtration equipment for surface treatment and plating processes is reviewed with process conditions.",
    overview:
      "Filtration conditions and equipment application are checked to reduce particulate defects and plating bath contamination.",
    materials: [
      "Filtration equipment for surface treatment and plating processes",
    ],
    processes: [
      "Filtration equipment for surface treatment and plating processes",
    ],
    checks: [
      "Filtration volume",
      "Filter replacement cycle",
      "Plating bath contamination",
      "Equipment check",
    ],
    support: [
      "Filtration condition review",
      "Bath management and equipment factor separation",
      "Equipment application review",
    ],
    cta: "Filtration equipment inquiry",
  },
];

const viProducts: ProductDetail[] = [
  {
    slug: "pretreatment",
    title: "Tiền xử lý",
    summary:
      "Tẩy dầu, làm sạch, tẩy axit, ăn mòn và khử smut giúp chuẩn bị điều kiện ban đầu cho các công đoạn mạ và tạo lớp phủ.",
    overview:
      "Công đoạn tiền xử lý được trình bày theo các hạng mục đã xác nhận để công đoạn mạ hoặc tạo lớp phủ tiếp theo bắt đầu từ bề mặt được kiểm soát.",
    materials: ["Tẩy dầu", "Làm sạch", "Tẩy axit", "Ăn mòn", "Khử smut"],
    processes: ["Tẩy dầu", "Làm sạch", "Tẩy axit", "Ăn mòn", "Khử smut"],
    checks: [
      "Nồng độ",
      "Nhiệt độ",
      "Thời gian xử lý",
      "Tình trạng rửa",
      "Tình trạng bề mặt",
    ],
    support: [
      "Rà soát trình tự tiền xử lý",
      "Kiểm tra nguyên nhân lỗi",
      "Xem xét hạng mục quản lý",
    ],
    cta: "Tư vấn tiền xử lý",
  },
  {
    slug: "electroplating",
    title: "Mạ điện",
    summary:
      "Các công đoạn mạ niken, đồng, thiếc, kẽm, crom, bạc và vàng được xem xét cùng với quản lý bể mạ.",
    overview:
      "Lỗi rỗ, sai lệch chiều dày, bám dính và sai lệch màu được xem xét trong mối liên hệ với quản lý bể mạ.",
    materials: ["Niken", "Đồng", "Thiếc", "Kẽm", "Crom", "Bạc", "Vàng"],
    processes: ["Niken", "Đồng", "Thiếc", "Kẽm", "Crom", "Bạc", "Vàng"],
    checks: [
      "pH",
      "Nồng độ kim loại",
      "Mật độ dòng điện",
      "Khuấy",
      "Lọc",
      "Nhiệt độ",
    ],
    support: [
      "Phân tích dung dịch bể mạ",
      "Rà soát điều kiện vận hành",
      "Tư vấn theo ảnh lỗi",
    ],
    cta: "Tư vấn mạ điện",
  },
  {
    slug: "electroless-plating",
    title: "Mạ không điện",
    summary:
      "Công đoạn niken hóa học và đồng hóa học được xem xét theo hướng ổn định bể mạ.",
    overview:
      "Công đoạn này tập trung vào phản ứng khử và độ ổn định của bể mạ thay vì phân bố dòng điện.",
    materials: ["Niken hóa học", "Đồng hóa học"],
    processes: ["Niken hóa học", "Đồng hóa học"],
    checks: [
      "pH",
      "Nhiệt độ",
      "Nồng độ kim loại",
      "Tình trạng chất khử",
      "Độ ổn định bể mạ",
    ],
    support: [
      "Hạng mục quản lý bể mạ",
      "Kiểm tra phản ứng khử",
      "Rà soát nguyên nhân lỗi",
    ],
    cta: "Tư vấn mạ không điện",
  },
  {
    slug: "aluminum-anodizing",
    title: "Anod nhôm",
    summary:
      "Bao gồm đánh bóng hóa học, ăn mòn, khử smut, anod hóa, nhuộm màu, bịt kín và loại bỏ niken leach-out.",
    overview:
      "Điều kiện tiền xử lý, hình thành màng, màu và bịt kín được xem xét như một dòng công đoạn liên tục.",
    materials: [
      "Đánh bóng hóa học",
      "Ăn mòn",
      "Khử smut",
      "Anod hóa",
      "Nhuộm màu",
      "Bịt kín",
      "Loại bỏ niken leach-out",
    ],
    processes: [
      "Đánh bóng hóa học",
      "Ăn mòn",
      "Khử smut",
      "Anod hóa",
      "Nhuộm màu",
      "Bịt kín",
      "Loại bỏ niken leach-out",
    ],
    checks: [
      "Điều kiện tiền xử lý",
      "Tình trạng màng",
      "Điều kiện nhuộm màu",
      "Điều kiện bịt kín",
    ],
    support: [
      "Rà soát điều kiện tiền xử lý",
      "Tư vấn sai lệch màu",
      "Kiểm tra điều kiện bịt kín",
    ],
    cta: "Tư vấn anod nhôm",
  },
  {
    slug: "conversion-coating",
    title: "Lớp phủ chuyển hóa",
    summary:
      "Các công đoạn phốt phát, zincate và cromat được trình bày theo hạng mục xử lý.",
    overview:
      "Công đoạn được xem xét cùng tình trạng bề mặt, rửa và sấy trước cũng như sau khi tạo lớp phủ.",
    materials: ["Phốt phát", "Zincate", "Cromat"],
    processes: ["Phốt phát", "Zincate", "Cromat"],
    checks: [
      "Tình trạng bề mặt",
      "pH",
      "Nhiệt độ",
      "Thời gian xử lý",
      "Rửa",
      "Sấy",
    ],
    support: [
      "Rà soát công đoạn tạo lớp phủ",
      "Kiểm tra điều kiện trước/sau",
      "Rà soát nguyên nhân lỗi",
    ],
    cta: "Tư vấn lớp phủ chuyển hóa",
  },
  {
    slug: "post-treatment-specialty",
    title: "Hậu xử lý & hóa chất chuyên dụng",
    summary:
      "Chống biến màu, phủ bảo vệ, làm sạch chuyên dụng và chất tẩy loại bỏ thuộc nhóm hậu xử lý và hóa chất chuyên dụng.",
    overview:
      "Giai đoạn này được xem xét để duy trì chất lượng công đoạn trước thông qua rửa, sấy và điều kiện trước khi lưu kho.",
    materials: [
      "Chống biến màu",
      "Phủ bảo vệ",
      "Làm sạch chuyên dụng",
      "Chất tẩy loại bỏ",
    ],
    processes: [
      "Chống biến màu",
      "Phủ bảo vệ",
      "Làm sạch chuyên dụng",
      "Chất tẩy loại bỏ",
    ],
    checks: [
      "Tình trạng công đoạn trước",
      "Hóa chất còn dư",
      "Rửa",
      "Sấy",
      "Điều kiện lưu kho",
    ],
    support: [
      "Rà soát điều kiện hậu xử lý",
      "Kiểm tra nguyên nhân biến màu và vết bẩn",
      "Đề xuất điều chỉnh công đoạn",
    ],
    cta: "Tư vấn hậu xử lý",
  },
  {
    slug: "basic-chemicals",
    title: "Hóa chất cơ bản",
    summary:
      "Axit sulfuric, axit hydrochloric, axit nitric và xút ăn da được cung cấp cho vận hành dây chuyền xử lý bề mặt.",
    overview:
      "Thông số nguyên liệu, điều kiện bảo quản và quản lý LOT được kiểm tra để hỗ trợ nguồn cung ổn định.",
    materials: [
      "Axit sulfuric",
      "Axit hydrochloric",
      "Axit nitric",
      "Xút ăn da",
    ],
    processes: ["Cung cấp nguyên liệu", "Quản lý bổ sung", "Kiểm tra thông số"],
    checks: [
      "Phiếu thông số",
      "LOT",
      "Điều kiện bảo quản",
      "Kiểm tra nhập hàng",
    ],
    support: [
      "Kiểm tra thông số nguyên liệu",
      "Rà soát điều kiện xử lý",
      "Hỗ trợ truy xuất LOT",
    ],
    cta: "Tư vấn hóa chất cơ bản",
  },
  {
    slug: "filtration-equipment",
    title: "Thiết bị lọc & hệ thống liên quan",
    summary:
      "Thiết bị lọc cho công đoạn xử lý bề mặt và mạ được xem xét cùng điều kiện công đoạn.",
    overview:
      "Điều kiện lọc và khả năng áp dụng thiết bị được kiểm tra nhằm giảm lỗi hạt và ô nhiễm bể mạ.",
    materials: ["Thiết bị lọc cho công đoạn xử lý bề mặt và mạ"],
    processes: ["Thiết bị lọc cho công đoạn xử lý bề mặt và mạ"],
    checks: [
      "Lưu lượng lọc",
      "Chu kỳ thay lõi lọc",
      "Ô nhiễm bể mạ",
      "Kiểm tra thiết bị",
    ],
    support: [
      "Rà soát điều kiện lọc",
      "Phân tách yếu tố bể mạ và thiết bị",
      "Rà soát áp dụng thiết bị",
    ],
    cta: "Tư vấn thiết bị lọc",
  },
];

export const products: Record<Locale, ProductDetail[]> = {
  ko: koProducts,
  en: enProducts,
  vi: viProducts,
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
