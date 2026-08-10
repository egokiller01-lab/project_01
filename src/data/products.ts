import type { Locale, ProductDetail, ProductFamily } from "../types";

const slugs = [
  "degreasing-cleaning-pretreatment",
  "electroplating",
  "electroless-plating",
  "aluminum-anodizing",
  "zinc-zinc-nickel-chromate",
  "conversion-corrosion-coating",
  "general-chemicals-non-ferrous-metals",
  "filtration-equipment-supplies",
] as const;

export type ProductSlug = (typeof slugs)[number];

export const productSlugs = [...slugs];

export const products: Record<Locale, ProductDetail[]> = {
  ko: [
    {
      slug: "degreasing-cleaning-pretreatment",
      title: "탈지·세정·전처리",
      summary: "도금 전 표면 상태와 밀착 안정화를 위한 전처리 제품군입니다.",
      overview:
        "소재 표면의 유분, 산화막, 잔류 오염을 정리해 후속 표면처리 공정의 시작 조건을 안정화합니다.",
      materials: ["철강", "동 및 동합금", "알루미늄", "스테인리스"],
      processes: ["탈지", "세정", "산세", "활성화", "디스머트"],
      checks: ["농도", "온도", "처리 시간", "수세 상태", "소재 표면 상태"],
      support: ["전처리 순서 검토", "불량 원인축 정리", "샘플 평가 조건 제안"],
      cta: "전처리 기술문의",
    },
    {
      slug: "electroplating",
      title: "전기도금",
      summary: "도금 bath 관리와 피트, 두께 편차, 밀착 문제 상담을 지원합니다.",
      overview:
        "전류, bath 상태, 여과, 교반 조건을 함께 확인해 금속 도금 품질의 반복성을 높입니다.",
      materials: ["철강", "동합금", "정밀 금속 부품", "전자 부품"],
      processes: ["니켈 도금", "동 도금", "주석 도금", "아연 도금"],
      checks: ["pH", "금속 농도", "전류밀도", "교반", "여과", "온도"],
      support: ["bath 관리 항목 제안", "Hull Cell 평가", "불량 사진 기반 상담"],
      cta: "도금 기술문의",
    },
    {
      slug: "electroless-plating",
      title: "무전해도금",
      summary: "복잡 형상과 특수 소재의 화학 도금 안정화를 지원합니다.",
      overview:
        "전류 분포 영향이 적은 화학 도금 공정에서 소재 활성화와 bath 안정성을 함께 점검합니다.",
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
      summary: "알루미늄 전처리부터 염색과 봉공 품질 안정화를 지원합니다.",
      overview:
        "알루미늄 합금별 전처리 반응과 산화피막, 염색, 봉공 조건을 연결해 품질 편차를 줄입니다.",
      materials: [
        "압출 알루미늄",
        "가공 알루미늄",
        "주조 알루미늄",
        "알루미늄 합금",
      ],
      processes: ["탈지", "에칭", "디스머트", "아노다이징", "염색", "봉공"],
      checks: [
        "합금 종류",
        "전처리 조건",
        "피막 상태",
        "염색 조건",
        "봉공 조건",
      ],
      support: ["합금별 전처리 검토", "색상 편차 상담", "봉공 조건 점검"],
      cta: "아노다이징 문의",
    },
    {
      slug: "zinc-zinc-nickel-chromate",
      title: "아연·아연니켈·크로메이트",
      summary: "철강 부품의 방청 도금과 후처리 조건 점검을 지원합니다.",
      overview:
        "철강 부품의 방청 목적에 맞춰 아연계 도금, 후처리, 건조 조건의 관리 포인트를 정리합니다.",
      materials: ["철강", "체결류", "산업용 금속 부품", "방청 목적 부품"],
      processes: ["아연 도금", "아연니켈 도금", "3가 후처리", "방청 후처리"],
      checks: ["전처리", "도금 두께", "합금비", "후처리", "건조 조건"],
      support: ["방청 공정 선택 검토", "후처리 조건 점검", "백청 불량 상담"],
      cta: "방청 도금 문의",
    },
    {
      slug: "conversion-corrosion-coating",
      title: "화성피막·방청·코팅",
      summary: "내식성, 도장 밀착, 변색 방지를 위한 표면처리 솔루션입니다.",
      overview:
        "금속 표면의 피막 형성과 후공정 안정성을 위해 전처리, 수세, 건조 조건을 함께 봅니다.",
      materials: ["철강", "알루미늄", "마그네슘", "스테인리스", "아연계 소재"],
      processes: ["전환피막", "인산염", "패시베이션", "흑색산화", "방청 처리"],
      checks: ["표면 상태", "pH", "온도", "처리 시간", "수세", "건조"],
      support: ["소재별 피막 선택", "도장 밀착 상담", "방청 조건 점검"],
      cta: "화성피막 문의",
    },
    {
      slug: "general-chemicals-non-ferrous-metals",
      title: "일반 화학약품·비철금속",
      summary:
        "표면처리 공정에 필요한 일반 화학 원료와 비철금속 원료 공급 범주입니다.",
      overview:
        "공정 원료의 사양, 보관, LOT 관리를 확인해 표면처리 라인의 공급 안정성을 지원합니다.",
      materials: [
        "산·알칼리류",
        "금속염",
        "동계 원료",
        "아연계 원료",
        "니켈계 원료",
      ],
      processes: ["원료 공급", "보충 관리", "사양 확인", "대체 원료 검토"],
      checks: ["사양서", "LOT", "보관 조건", "유효기간", "입고 검사"],
      support: [
        "원료 사양 확인",
        "취급 조건 검토",
        "주요 공급품 LOT 추적 관리",
      ],
      cta: "원료 공급 문의",
    },
    {
      slug: "filtration-equipment-supplies",
      title: "여과장비·기자재",
      summary:
        "도금·전처리 라인의 여과, 온도 관리, 시험·점검 기자재를 지원합니다.",
      overview:
        "도금액 오염, 입자성 불량, 온도 편차를 줄이기 위한 여과와 공정 보조 기자재를 제안합니다.",
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
      support: [
        "여과 조건 검토",
        "bath 관리와 장비 요인 분리",
        "시험 조건 안내",
      ],
      cta: "기자재 문의",
    },
  ],
  en: [
    {
      slug: "degreasing-cleaning-pretreatment",
      title: "Degreasing, Cleaning & Pretreatment",
      summary:
        "Pretreatment products for stable surface condition before plating.",
      overview:
        "These solutions help remove oil, oxide, and residues so the next surface treatment step starts from a controlled surface.",
      materials: ["Steel", "Copper alloys", "Aluminum", "Stainless steel"],
      processes: [
        "Degreasing",
        "Cleaning",
        "Pickling",
        "Activation",
        "Desmutting",
      ],
      checks: [
        "Concentration",
        "Temperature",
        "Treatment time",
        "Rinsing",
        "Surface condition",
      ],
      support: [
        "Pretreatment sequence review",
        "Defect cause mapping",
        "Sample evaluation setup",
      ],
      cta: "Pretreatment inquiry",
    },
    {
      slug: "electroplating",
      title: "Electroplating",
      summary:
        "Support for bath control and defect consultation in electroplating.",
      overview:
        "PLACHEM reviews current, bath condition, filtration, and agitation to improve repeatability in metal plating.",
      materials: [
        "Steel",
        "Copper alloys",
        "Precision metal parts",
        "Electronic parts",
      ],
      processes: [
        "Nickel plating",
        "Copper plating",
        "Tin plating",
        "Zinc plating",
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
        "Bath control review",
        "Hull Cell evaluation",
        "Defect photo consultation",
      ],
      cta: "Plating inquiry",
    },
    {
      slug: "electroless-plating",
      title: "Electroless Plating",
      summary:
        "Support for chemical plating stability on complex shapes and special substrates.",
      overview:
        "These processes are reviewed through substrate activation, bath stability, and practical operating checks.",
      materials: [
        "Metal parts",
        "PCB-related substrates",
        "Plastics",
        "Complex components",
      ],
      processes: [
        "Electroless nickel",
        "Electroless copper",
        "Substrate activation",
        "Immersion treatment",
      ],
      checks: [
        "pH",
        "Temperature",
        "Metal concentration",
        "Reducing agent status",
        "Bath stability",
      ],
      support: [
        "Substrate suitability review",
        "Bath checklist",
        "Sample test planning",
      ],
      cta: "Electroless inquiry",
    },
    {
      slug: "aluminum-anodizing",
      title: "Aluminum Anodizing",
      summary:
        "Support for aluminum pretreatment, dyeing, and sealing stability.",
      overview:
        "The process connects alloy-specific pretreatment with oxide film, color, and sealing condition control.",
      materials: [
        "Extruded aluminum",
        "Machined aluminum",
        "Cast aluminum",
        "Aluminum alloys",
      ],
      processes: [
        "Degreasing",
        "Etching",
        "Desmutting",
        "Anodizing",
        "Dyeing",
        "Sealing",
      ],
      checks: [
        "Alloy type",
        "Pretreatment",
        "Film condition",
        "Dyeing",
        "Sealing",
      ],
      support: [
        "Alloy pretreatment review",
        "Color variation consultation",
        "Sealing condition checks",
      ],
      cta: "Anodizing inquiry",
    },
    {
      slug: "zinc-zinc-nickel-chromate",
      title: "Zinc, Zinc-Nickel & Chromate",
      summary:
        "Support for corrosion-protection plating and post-treatment checks.",
      overview:
        "PLACHEM organizes control points for zinc-based plating, post-treatment, and drying by corrosion-protection purpose.",
      materials: [
        "Steel",
        "Fasteners",
        "Industrial metal parts",
        "Corrosion-protection parts",
      ],
      processes: [
        "Zinc plating",
        "Zinc-nickel plating",
        "Trivalent post-treatment",
        "Corrosion-protection treatment",
      ],
      checks: [
        "Pretreatment",
        "Plating thickness",
        "Alloy ratio",
        "Post-treatment",
        "Drying",
      ],
      support: [
        "Process selection review",
        "Post-treatment checks",
        "White rust consultation",
      ],
      cta: "Corrosion protection inquiry",
    },
    {
      slug: "conversion-corrosion-coating",
      title: "Conversion Coating, Corrosion Protection & Coating Support",
      summary:
        "Surface treatment support for corrosion resistance, paint adhesion, and discoloration prevention.",
      overview:
        "Pretreatment, rinsing, and drying are reviewed together to support coating formation and downstream stability.",
      materials: [
        "Steel",
        "Aluminum",
        "Magnesium",
        "Stainless steel",
        "Zinc-based substrates",
      ],
      processes: [
        "Conversion coating",
        "Phosphate",
        "Passivation",
        "Black oxide",
        "Corrosion protection",
      ],
      checks: [
        "Surface condition",
        "pH",
        "Temperature",
        "Treatment time",
        "Rinsing",
        "Drying",
      ],
      support: [
        "Coating selection review",
        "Paint adhesion consultation",
        "Corrosion protection checks",
      ],
      cta: "Conversion coating inquiry",
    },
    {
      slug: "general-chemicals-non-ferrous-metals",
      title: "General Chemicals & Non-Ferrous Metals",
      summary:
        "General chemical raw materials and non-ferrous metal supply categories for surface treatment processes.",
      overview:
        "Specification, storage, and LOT control are reviewed to support stable supply for surface treatment lines.",
      materials: [
        "Acids and alkalis",
        "Metal salts",
        "Copper raw materials",
        "Zinc raw materials",
        "Nickel raw materials",
      ],
      processes: [
        "Raw material supply",
        "Replenishment control",
        "Specification review",
        "Alternative material review",
      ],
      checks: [
        "Specification",
        "LOT",
        "Storage",
        "Shelf life",
        "Incoming inspection",
      ],
      support: [
        "Specification review",
        "Handling condition review",
        "LOT tracking for key supplied items",
      ],
      cta: "Raw material inquiry",
    },
    {
      slug: "filtration-equipment-supplies",
      title: "Filtration Equipment & Process Supplies",
      summary:
        "Filtration, temperature control, testing, and process supplies for plating and pretreatment lines.",
      overview:
        "Equipment and supplies are selected around bath contamination, particle defects, and temperature control needs.",
      materials: [
        "Plating lines",
        "Pretreatment lines",
        "Cleaning lines",
        "Testing areas",
      ],
      processes: [
        "Circulation filtration",
        "Carbon treatment",
        "Temperature control",
        "Hull Cell test",
        "Bath check",
      ],
      checks: [
        "Flow rate",
        "Filter replacement",
        "Temperature stability",
        "Sensor condition",
        "Test condition",
      ],
      support: [
        "Filtration review",
        "Bath and equipment cause separation",
        "Test condition guidance",
      ],
      cta: "Equipment inquiry",
    },
  ],
  vi: [
    {
      slug: "degreasing-cleaning-pretreatment",
      title: "Tẩy dầu, làm sạch & tiền xử lý",
      summary: "Nhóm sản phẩm tiền xử lý giúp ổn định bề mặt trước khi mạ.",
      overview:
        "Giải pháp giúp loại dầu, oxide và cặn bám để công đoạn xử lý bề mặt tiếp theo bắt đầu ổn định.",
      materials: ["Thép", "Hợp kim đồng", "Nhôm", "Inox"],
      processes: ["Tẩy dầu", "Làm sạch", "Tẩy gỉ", "Hoạt hóa", "Desmutting"],
      checks: ["Nồng độ", "Nhiệt độ", "Thời gian", "Rửa", "Tình trạng bề mặt"],
      support: [
        "Xem xét trình tự tiền xử lý",
        "Phân loại nguyên nhân lỗi",
        "Đề xuất điều kiện đánh giá mẫu",
      ],
      cta: "Tư vấn tiền xử lý",
    },
    {
      slug: "electroplating",
      title: "Mạ điện",
      summary: "Hỗ trợ quản lý bể mạ và tư vấn lỗi trong quy trình mạ điện.",
      overview:
        "PLACHEM xem xét dòng điện, trạng thái bể, lọc và khuấy để cải thiện tính ổn định của mạ kim loại.",
      materials: [
        "Thép",
        "Hợp kim đồng",
        "Chi tiết kim loại chính xác",
        "Linh kiện điện tử",
      ],
      processes: ["Mạ niken", "Mạ đồng", "Mạ thiếc", "Mạ kẽm"],
      checks: [
        "pH",
        "Nồng độ kim loại",
        "Mật độ dòng",
        "Khuấy",
        "Lọc",
        "Nhiệt độ",
      ],
      support: [
        "Xem xét quản lý bể",
        "Đánh giá Hull Cell",
        "Tư vấn qua ảnh lỗi",
      ],
      cta: "Tư vấn mạ điện",
    },
    {
      slug: "electroless-plating",
      title: "Mạ hóa học / mạ không điện",
      summary:
        "Hỗ trợ ổn định mạ hóa học cho chi tiết phức tạp và vật liệu đặc thù.",
      overview:
        "Quy trình được xem xét thông qua hoạt hóa vật liệu, độ ổn định bể và các điểm kiểm tra vận hành.",
      materials: [
        "Chi tiết kim loại",
        "Vật liệu liên quan PCB",
        "Nhựa",
        "Chi tiết hình dạng phức tạp",
      ],
      processes: [
        "Mạ niken hóa học",
        "Mạ đồng hóa học",
        "Hoạt hóa vật liệu",
        "Xử lý nhúng",
      ],
      checks: [
        "pH",
        "Nhiệt độ",
        "Nồng độ kim loại",
        "Chất khử",
        "Độ ổn định bể",
      ],
      support: [
        "Xem xét khả năng áp dụng",
        "Checklist quản lý bể",
        "Lập điều kiện thử mẫu",
      ],
      cta: "Tư vấn mạ hóa học",
    },
    {
      slug: "aluminum-anodizing",
      title: "Anodizing nhôm",
      summary: "Hỗ trợ ổn định tiền xử lý nhôm, nhuộm màu và sealing.",
      overview:
        "Quy trình liên kết tiền xử lý theo hợp kim với quản lý màng oxide, màu sắc và điều kiện sealing.",
      materials: ["Nhôm ép", "Nhôm gia công", "Nhôm đúc", "Hợp kim nhôm"],
      processes: [
        "Tẩy dầu",
        "Etching",
        "Desmutting",
        "Anodizing",
        "Nhuộm màu",
        "Sealing",
      ],
      checks: [
        "Loại hợp kim",
        "Tiền xử lý",
        "Tình trạng màng",
        "Nhuộm màu",
        "Sealing",
      ],
      support: [
        "Xem xét tiền xử lý theo hợp kim",
        "Tư vấn lệch màu",
        "Kiểm tra điều kiện sealing",
      ],
      cta: "Tư vấn anodizing",
    },
    {
      slug: "zinc-zinc-nickel-chromate",
      title: "Mạ kẽm, kẽm-niken & chromate",
      summary: "Hỗ trợ mạ chống ăn mòn và kiểm tra điều kiện xử lý sau mạ.",
      overview:
        "Các điểm quản lý của mạ kẽm, xử lý sau mạ và sấy được sắp xếp theo mục đích chống ăn mòn.",
      materials: [
        "Thép",
        "Bulong",
        "Chi tiết kim loại công nghiệp",
        "Chi tiết cần chống ăn mòn",
      ],
      processes: [
        "Mạ kẽm",
        "Mạ kẽm-niken",
        "Xử lý hóa trị ba",
        "Xử lý chống ăn mòn",
      ],
      checks: [
        "Tiền xử lý",
        "Độ dày mạ",
        "Tỷ lệ hợp kim",
        "Xử lý sau mạ",
        "Sấy",
      ],
      support: [
        "Xem xét lựa chọn quy trình",
        "Kiểm tra xử lý sau mạ",
        "Tư vấn lỗi trắng",
      ],
      cta: "Tư vấn mạ chống ăn mòn",
    },
    {
      slug: "conversion-corrosion-coating",
      title: "Xử lý chuyển hóa, chống ăn mòn & hỗ trợ phủ",
      summary:
        "Hỗ trợ xử lý bề mặt để tăng chống ăn mòn, bám dính sơn và hạn chế đổi màu.",
      overview:
        "Tiền xử lý, rửa và sấy được xem xét cùng nhau để ổn định lớp xử lý và công đoạn sau.",
      materials: ["Thép", "Nhôm", "Magie", "Inox", "Vật liệu nền kẽm"],
      processes: [
        "Xử lý chuyển hóa",
        "Phosphate",
        "Passivation",
        "Black oxide",
        "Chống ăn mòn",
      ],
      checks: [
        "Tình trạng bề mặt",
        "pH",
        "Nhiệt độ",
        "Thời gian",
        "Rửa",
        "Sấy",
      ],
      support: [
        "Xem xét lựa chọn lớp xử lý",
        "Tư vấn bám dính sơn",
        "Kiểm tra điều kiện chống ăn mòn",
      ],
      cta: "Tư vấn xử lý chuyển hóa",
    },
    {
      slug: "general-chemicals-non-ferrous-metals",
      title: "Hóa chất thông dụng & kim loại màu",
      summary:
        "Nhóm nguyên liệu hóa chất và kim loại màu dùng cho quy trình xử lý bề mặt.",
      overview:
        "Thông số, bảo quản và LOT được kiểm tra để hỗ trợ nguồn cung ổn định cho dây chuyền xử lý bề mặt.",
      materials: [
        "Axit và kiềm",
        "Muối kim loại",
        "Nguyên liệu đồng",
        "Nguyên liệu kẽm",
        "Nguyên liệu niken",
      ],
      processes: [
        "Cung ứng nguyên liệu",
        "Quản lý bổ sung",
        "Kiểm tra thông số",
        "Xem xét vật liệu thay thế",
      ],
      checks: [
        "Thông số",
        "LOT",
        "Bảo quản",
        "Hạn sử dụng",
        "Kiểm tra nhập kho",
      ],
      support: [
        "Xem xét thông số",
        "Kiểm tra điều kiện xử lý",
        "Quản lý truy xuất LOT cho hạng mục cung ứng chính",
      ],
      cta: "Tư vấn nguyên liệu",
    },
    {
      slug: "filtration-equipment-supplies",
      title: "Thiết bị lọc & vật tư quy trình",
      summary:
        "Hỗ trợ lọc, kiểm soát nhiệt độ, thử nghiệm và vật tư cho dây chuyền mạ và tiền xử lý.",
      overview:
        "Thiết bị và vật tư được xem xét theo nhu cầu kiểm soát nhiễm bẩn bể, lỗi hạt và nhiệt độ.",
      materials: [
        "Dây chuyền mạ",
        "Dây chuyền tiền xử lý",
        "Dây chuyền làm sạch",
        "Khu vực thử nghiệm",
      ],
      processes: [
        "Lọc tuần hoàn",
        "Xử lý carbon",
        "Kiểm soát nhiệt độ",
        "Thử Hull Cell",
        "Kiểm tra bể",
      ],
      checks: [
        "Lưu lượng",
        "Chu kỳ thay lọc",
        "Ổn định nhiệt độ",
        "Tình trạng cảm biến",
        "Điều kiện thử",
      ],
      support: [
        "Xem xét điều kiện lọc",
        "Tách nguyên nhân bể và thiết bị",
        "Hướng dẫn điều kiện thử",
      ],
      cta: "Tư vấn thiết bị",
    },
  ],
};

export function getProductFamilies(locale: Locale): ProductFamily[] {
  return products[locale].map((product) => ({
    slug: product.slug,
    title: product.title,
    summary: product.summary,
    href: `/${locale}/solutions/${product.slug}/`,
    materials: product.materials.join(", "),
    process: product.processes.slice(0, 4).join(", "),
    cta: product.cta,
  }));
}

export function getProduct(locale: Locale, slug: string) {
  return products[locale].find((product) => product.slug === slug);
}
