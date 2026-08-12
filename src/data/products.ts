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
      "소재별 탈지·산세·에칭·디스머트·활성화 조건을 정리해 후속 도금과 피막의 밀착 기반을 만듭니다.",
    overview:
      "전처리는 표면처리 불량의 출발점을 결정합니다. 소재의 산화막과 오염 상태를 확인하고, 세정력·표면 활성·수세 품질을 하나의 공정 흐름으로 관리합니다.",
    materials: [
      "철·강",
      "구리·구리합금",
      "알루미늄·알루미늄합금",
      "아연·아연도금 표면",
      "니켈 하지층",
    ],
    processes: [
      "용제·알칼리 탈지",
      "전해탈지",
      "산세·산세정",
      "에칭·디스머트",
      "활성화·촉매화",
      "수세·carry-over 관리",
    ],
    checks: [
      "표면 청정도·water-break",
      "약품 농도와 pH",
      "욕 온도와 처리 시간",
      "소재별 에칭·활성화 반응",
      "수세수 수질과 carry-over",
      "스머트·잔류물",
      "후속 도금 전 표면 상태",
    ],
    issues: [
      {
        symptom: "박리·밀착 불량",
        causes: "불완전 탈지, 과도하거나 부족한 산세, 산화막 잔류",
        action: "water-break, 전처리 순서, 활성화와 수세 상태부터 확인",
      },
      {
        symptom: "피트·입자",
        causes: "표면 입자, 수세 오염, 전처리욕의 고형물과 carry-over",
        action: "세정욕 오염도, 수세 교환, 여과 상태를 분리 점검",
      },
      {
        symptom: "얼룩·변색",
        causes: "잔류 약품, 불균일 세정, 수세 후 건조 지연",
        action: "마지막 수세 수질과 공정 간 대기시간을 확인",
      },
      {
        symptom: "스머트·거친 표면",
        causes: "합금 성분에 맞지 않는 에칭·디스머트 조건",
        action: "소재 합금과 농도·온도·시간의 조합을 재검토",
      },
    ],
    support: [
      "소재별 전처리 순서와 약품 적용성 검토",
      "밀착·피트·얼룩의 전처리 원인 분류",
      "농도·온도·시간·수세 관리표 정리",
      "후속 도금·피막과 연결한 현장 조건 점검",
    ],
    cta: "전처리 기술문의",
  },
  {
    slug: "electroplating",
    title: "전기도금",
    summary:
      "구리·니켈·주석·아연·크롬·은·금 도금욕을 전류 조건, 첨가제, 교반과 여과까지 연결해 관리합니다.",
    overview:
      "전기도금 품질은 욕 조성만으로 결정되지 않습니다. 전류밀도 분포, 양극 상태, 첨가제 균형, 교반·여과와 오염 이력을 함께 확인해 두께와 외관 편차의 원인을 좁힙니다.",
    materials: [
      "철·강",
      "구리·구리합금",
      "아연계 표면",
      "니켈 하지층",
      "커넥터·전자접점",
    ],
    processes: [
      "구리 도금",
      "니켈 도금",
      "주석 도금",
      "아연·크롬 도금",
      "은 도금",
      "금 도금",
      "후처리·변색방지",
    ],
    checks: [
      "pH·온도·금속농도",
      "전류밀도와 전압",
      "양극 면적·상태",
      "광택제·첨가제 균형",
      "공기·기계 교반",
      "순환여과와 입자",
      "Hull Cell 시험",
      "도금두께·내식성",
    ],
    issues: [
      {
        symptom: "버닝·거칠음",
        causes: "과전류, 금속농도 부족, 교반 불균일, 첨가제 불균형",
        action: "전류밀도 범위와 Hull Cell 고전류부, 교반 상태를 비교",
      },
      {
        symptom: "피트·핀홀",
        causes: "입자·유기 오염, 기포 부착, 여과 부족",
        action: "연속여과, 탈지 carry-over, 활성탄 처리 필요성을 구분",
      },
      {
        symptom: "두께·광택 편차",
        causes: "전류 분포, 치구 접촉, 양극 배치, 첨가제 편차",
        action: "부품 위치별 두께와 전압·전류 변화를 함께 기록",
      },
      {
        symptom: "변색·내식성 저하",
        causes: "피막 두께 부족, 수세 잔류, 후처리·건조 조건 불량",
        action: "두께, 최종 수세, 후처리 농도와 건조 이력을 확인",
      },
    ],
    support: [
      "도금욕 분석 결과와 보충 이력 검토",
      "Hull Cell·불량 시편 기반 원인 분류",
      "전류밀도·교반·양극·여과 조건 점검",
      "피트·버닝·두께·색상 편차 개선 방향 제안",
    ],
    cta: "전기도금 기술문의",
  },
  {
    slug: "electroless-plating",
    title: "무전해도금",
    summary:
      "무전해 니켈·구리의 금속농도, 환원제, pH, 온도와 욕부하를 관리해 석출속도와 욕 안정성을 유지합니다.",
    overview:
      "무전해도금은 외부 전류 대신 화학 환원 반응으로 피막을 형성합니다. 전처리·활성화부터 성분 보충, 욕 노화, 오염과 여과까지 반응 균형을 중심으로 검토합니다.",
    materials: [
      "철·강",
      "구리·구리합금",
      "알루미늄·알루미늄합금",
      "촉매화 비전도체",
      "전자·정밀부품",
    ],
    processes: [
      "무전해 니켈",
      "무전해 구리",
      "알루미늄 징케이트 전처리",
      "활성화·촉매화",
      "후처리·열처리",
    ],
    checks: [
      "pH와 욕 온도",
      "니켈·구리 금속농도",
      "환원제·착화제 상태",
      "욕부하와 석출속도",
      "보충량·turnover·욕 노화",
      "전처리·활성화 상태",
      "입자·금속 불순물과 여과",
    ],
    issues: [
      {
        symptom: "미도금·부분 석출",
        causes: "활성화 부족, 표면 오염, 낮은 반응성, 욕 조성 이탈",
        action: "전처리·촉매화 상태와 pH·온도·주성분을 순서대로 확인",
      },
      {
        symptom: "석출속도·두께 저하",
        causes: "금속·환원제 부족, pH·온도 저하, 욕 노화",
        action: "분석값과 시간당 두께, 보충·turnover 이력을 비교",
      },
      {
        symptom: "거칠음·입자",
        causes: "욕 내 분해 입자, 이물, 여과 부족, 탱크 벽 석출",
        action: "입자 발생 위치, 순환여과와 탱크 청정 상태를 점검",
      },
      {
        symptom: "욕 분해·과반응",
        causes: "과열, 국부 pH 상승, 과보충, 촉매성 오염",
        action: "온도 균일성, 보충 방식, 금속 오염과 욕부하를 확인",
      },
    ],
    support: [
      "욕 분석과 보충 기준 정리",
      "석출속도·욕부하·turnover 관리 검토",
      "미도금·거칠음·욕 분해 원인 분류",
      "소재별 전처리·활성화 조건 점검",
    ],
    cta: "무전해도금 기술문의",
  },
  {
    slug: "aluminum-anodizing",
    title: "알루미늄 아노다이징",
    summary:
      "합금별 화학연마·에칭·디스머트부터 아노다이징, 염색, 봉공과 니켈 리치아웃 제거까지 관리합니다.",
    overview:
      "알루미늄 합금 성분과 전처리 반응은 피막 외관과 색상에 직접 영향을 줍니다. 피막 형성 조건, 염색 흡착, 봉공 품질을 전 공정 데이터로 연결해 확인합니다.",
    materials: [
      "알루미늄 및 알루미늄합금",
      "알루미늄 판재·정밀 가공품",
      "정밀 가공품",
      "외관·장식 부품",
      "기능성 산화피막 부품",
    ],
    processes: [
      "화학연마",
      "알칼리 에칭",
      "디스머트",
      "황산 아노다이징",
      "염색",
      "열수·니켈계 봉공",
      "니켈 리치아웃 제거",
    ],
    checks: [
      "합금과 표면가공 상태",
      "에칭량·디스머트 반응",
      "산 농도·온도·전류밀도",
      "전압·시간·피막두께",
      "염료 농도·pH·온도",
      "봉공 온도·시간·수질",
      "색상·내식성·봉공 품질",
    ],
    issues: [
      {
        symptom: "피트·백점",
        causes: "소재 결함, 염화물·입자 오염, 과도한 에칭",
        action: "소재 LOT, 전처리욕, 수세수와 아노다이징욕 오염을 비교",
      },
      {
        symptom: "색상 편차",
        causes: "피막두께, 염료 상태, pH·온도·시간, 수세 편차",
        action: "위치별 피막두께와 염색·봉공 기록을 함께 확인",
      },
      {
        symptom: "스머트·표면 얼룩",
        causes: "합금 성분에 맞지 않는 에칭·디스머트, 수세 잔류",
        action: "합금별 전처리 조건과 디스머트 종료점을 재검토",
      },
      {
        symptom: "봉공·내식성 부족",
        causes: "봉공 온도·시간 부족, 수질·욕 오염, 과도한 리치아웃",
        action: "봉공욕 분석, 수질, 처리시간과 품질시험 결과를 대조",
      },
    ],
    support: [
      "알루미늄 합금별 전처리 조건 검토",
      "피막두께·색상·봉공 관리항목 정리",
      "피트·백점·색차·얼룩 원인 분류",
      "염색·봉공·니켈 리치아웃 제거 조건 점검",
    ],
    cta: "아노다이징 기술문의",
  },
  {
    slug: "conversion-coating",
    title: "화성피막",
    summary:
      "철·아연·알루미늄 표면의 인산염·크로메이트·징케이트 피막을 전처리와 후속 공정까지 연결해 검토합니다.",
    overview:
      "화성피막은 금속 표면과 처리액의 화학 반응으로 보호층 또는 후속 도금·도장의 기반을 형성합니다. 청정도, 욕 조건, 수세와 건조가 피막 균일성과 내식성을 좌우합니다.",
    materials: [
      "철·강",
      "아연·아연도금 표면",
      "알루미늄·알루미늄합금",
      "구리·구리합금",
      "도장·도금 전 소재",
    ],
    processes: [
      "인산염 피막",
      "크로메이트 피막",
      "알루미늄 화성처리",
      "징케이트 전처리",
      "도장·도금 전 피막",
    ],
    checks: [
      "표면 청정도와 활성",
      "pH·농도·온도",
      "처리 시간",
      "수세수와 carry-over",
      "피막 중량·외관",
      "건조 조건",
      "내식성·밀착성",
    ],
    issues: [
      {
        symptom: "피막 불균일·미형성",
        causes: "표면 오염, 활성 부족, 농도·pH·온도 이탈",
        action: "전처리 청정도와 처리액 분석값을 먼저 대조",
      },
      {
        symptom: "밀착 불량",
        causes: "과도한 피막, 수세 잔류, 건조·후속 공정 지연",
        action: "피막 중량과 수세·건조·대기시간을 확인",
      },
      {
        symptom: "내식성 부족",
        causes: "피막 두께·중량 부족, 불완전 봉공, 표면 결함",
        action: "피막 품질과 후처리, 부위별 부식 양상을 비교",
      },
    ],
    support: [
      "소재별 화성처리 공정과 약품 적용성 검토",
      "pH·농도·온도·피막 중량 관리 점검",
      "밀착·외관·내식성 문제의 원인 분류",
      "전처리·수세·건조·후속공정 연결 검토",
    ],
    cta: "화성피막 기술문의",
  },
  {
    slug: "post-treatment-specialty",
    title: "후처리·특수약품",
    summary:
      "변색방지, 보호코팅, 특수 세정·제거 공정으로 도금 후 외관, 내식성과 보관 안정성을 보완합니다.",
    overview:
      "후처리는 완성된 피막의 성능을 유지하는 마지막 관리 단계입니다. 도금 직후의 표면 상태, 잔류 약품, 수세·건조와 보관 환경을 함께 확인합니다.",
    materials: [
      "구리·구리합금",
      "은 도금 표면",
      "니켈·주석 도금 표면",
      "전자접점·커넥터",
      "외관·기능성 부품",
    ],
    processes: [
      "변색방지·passivation",
      "투명 보호코팅",
      "특수 세정",
      "산화물·피막 제거",
      "도금 후 수세·건조",
    ],
    checks: [
      "전공정 피막 상태",
      "약품 농도·pH·온도",
      "처리 시간",
      "수세와 잔류물",
      "건조 온도·시간",
      "취급·포장·보관 환경",
      "색상·내식성·접촉 성능",
    ],
    issues: [
      {
        symptom: "변색·tarnish",
        causes: "보호피막 부족, 잔류 약품, 습기·황계 가스 노출",
        action: "처리 농도·시간, 최종 수세와 포장·보관 조건을 확인",
      },
      {
        symptom: "얼룩·water mark",
        causes: "수세수 오염, 배수 불량, 건조 지연",
        action: "최종 수세 수질과 부품 방향, 건조 시작시간을 점검",
      },
      {
        symptom: "코팅 밀착 불량",
        causes: "표면 오염, 과도한 잔류물, 건조·경화 부족",
        action: "도금 후 표면 상태와 코팅 전 대기·건조 조건을 확인",
      },
      {
        symptom: "내식성·보관성 저하",
        causes: "피막 불균일, 취급 오염, 포장재·환경 부적합",
        action: "불량 발생 시점과 LOT별 포장·보관 이력을 비교",
      },
    ],
    support: [
      "도금 종류별 후처리 적용 조건 검토",
      "변색·얼룩·코팅 밀착 문제 원인 분류",
      "수세·건조·포장·보관 관리항목 정리",
      "특수 세정·제거 공정의 전후 영향 점검",
    ],
    cta: "후처리·특수약품 문의",
  },
  {
    slug: "basic-chemicals",
    title: "기초화학약품",
    summary:
      "황산·염산·질산·가성소다 등 표면처리 라인의 기본 약품을 사양, 농도, 보충과 LOT 기준으로 관리합니다.",
    overview:
      "기초화학약품은 탈지, 산세, 에칭, 도금욕 조성·보충과 화성처리에 폭넓게 사용됩니다. 원료 사양과 실제 공정농도를 구분하고, 보관·취급·LOT 이력을 관리합니다.",
    materials: [
      "황산",
      "염산",
      "질산",
      "가성소다",
      "표면처리용 산·알칼리 원료",
    ],
    processes: [
      "탈지·세정",
      "산세·활성화",
      "알루미늄 에칭·디스머트",
      "도금욕 조성·보충",
      "화성피막",
      "pH 조정",
    ],
    checks: [
      "원료 규격·순도·농도",
      "입고 LOT와 성적서",
      "공정욕 실제 농도·pH",
      "보충량과 분석 이력",
      "불순물·오염 가능성",
      "재질 적합 보관·이송",
      "표시·취급·안전자료",
    ],
    issues: [
      {
        symptom: "공정농도·pH 변동",
        causes: "원료 농도 편차, 과부족 보충, drag-out·증발 영향",
        action: "입고 사양과 분석값, 보충량·욕량 기록을 대조",
      },
      {
        symptom: "스머트·잔류물",
        causes: "불순물 축적, 소재와 맞지 않는 산·알칼리 조건",
        action: "원료 LOT, 공정욕 오염과 소재별 반응을 비교",
      },
      {
        symptom: "밀착·내식성 편차",
        causes: "전처리 농도 이탈, 수세 carry-over, 원료 오염",
        action: "불량 LOT의 원료·보충·수세 이력을 추적",
      },
    ],
    support: [
      "용도별 원료 사양과 적용 공정 확인",
      "농도·pH·보충·분석 기준 정리",
      "LOT·입고·보관·사용 이력 관리 지원",
      "공정 이상과 원료 요인의 연관성 검토",
    ],
    cta: "기초화학약품 문의",
  },
  {
    slug: "filtration-equipment",
    title: "여과장비·관련 설비",
    summary:
      "도금욕의 입자·슬러지·유기 오염을 관리하도록 순환여과, 필터와 활성탄 처리 조건을 공정별로 검토합니다.",
    overview:
      "여과는 펌프 용량만으로 선택하지 않습니다. 욕량과 요구 회전수, 약품·온도에 맞는 재질, 여재 정밀도, 압력 변화와 교체주기를 함께 설계해야 합니다.",
    materials: [
      "도금욕 순환여과기",
      "필터 카트리지·여재",
      "내약품 펌프·배관",
      "활성탄 처리 시스템",
      "탱크·교반 관련 설비",
    ],
    processes: [
      "구리·니켈·주석 도금",
      "귀금속 도금",
      "무전해도금",
      "화성피막",
      "활성탄 처리",
      "욕 정화·이송",
    ],
    checks: [
      "욕량 대비 유량·회전수",
      "펌프·하우징 재질",
      "사용 온도와 약품 적합성",
      "여재 종류·정밀도",
      "압력·유량 변화",
      "카트리지 교체주기",
      "활성탄 투입·접촉·제거",
      "누설·배관·예방정비",
    ],
    issues: [
      {
        symptom: "피트·입자성 불량",
        causes: "여과량 부족, 여재 파손·포화, 탱크 슬러지 재유입",
        action: "유량·압력과 여재 상태, 입자 발생 위치를 확인",
      },
      {
        symptom: "도금 두께·외관 편차",
        causes: "순환·교반 불균일, 흡입·토출 위치 부적합",
        action: "탱크 내 흐름과 부품 위치별 품질 차이를 비교",
      },
      {
        symptom: "흐림·변색 지속",
        causes: "유기 오염, 단순 입자여과만 수행, 활성탄 제거 불완전",
        action: "Hull Cell 결과로 활성탄 처리 필요성과 후단여과를 구분",
      },
      {
        symptom: "유량 저하·누설",
        causes: "필터 막힘, 펌프 마모, 재질 부적합, 배관 저항 증가",
        action: "차압·유량 기록과 씰·배관·카트리지 교체이력을 점검",
      },
    ],
    support: [
      "욕량·공정조건 기반 여과 방식 검토",
      "입자 불량과 유기 오염 원인 분리",
      "여재·활성탄·펌프·재질 적용성 확인",
      "교체주기·압력·유량 예방관리 항목 정리",
    ],
    cta: "여과장비 기술문의",
  },
];

const enProducts: ProductDetail[] = [
  {
    slug: "pretreatment",
    title: "Pretreatment",
    summary:
      "Substrate-specific degreasing, pickling, etching, desmut and activation establish a clean, active surface for subsequent plating and coating.",
    overview:
      "Pretreatment often determines where a surface-finishing defect begins. Oxide and contamination are assessed while cleaning efficiency, surface activation and rinsing quality are controlled as one process flow.",
    materials: [
      "Steel and iron",
      "Copper and copper alloys",
      "Aluminum and its alloys",
      "Zinc and zinc-plated surfaces",
      "Nickel underlayers",
    ],
    processes: [
      "Solvent and alkaline degreasing",
      "Electrocleaning",
      "Pickling and acid cleaning",
      "Etching and desmut",
      "Activation and catalyzation",
      "Rinsing and carry-over control",
    ],
    checks: [
      "Surface cleanliness and water-break",
      "Chemical concentration and pH",
      "Bath temperature and treatment time",
      "Substrate-specific etching and activation",
      "Rinse-water quality and carry-over",
      "Smut and surface residue",
      "Surface condition before plating",
    ],
    issues: [
      {
        symptom: "Peeling or poor adhesion",
        causes: "Incomplete degreasing, over/under-pickling or residual oxide",
        action:
          "Check water-break, process sequence, activation and rinsing first",
      },
      {
        symptom: "Pitting or particles",
        causes:
          "Surface particles, contaminated rinse or solids carried from pretreatment",
        action:
          "Separate bath contamination, rinse renewal and filtration factors",
      },
      {
        symptom: "Stain or discoloration",
        causes:
          "Chemical residue, uneven cleaning or delayed drying after rinsing",
        action: "Review final-rinse quality and waiting time between stages",
      },
      {
        symptom: "Smut or rough surface",
        causes: "Etch/desmut conditions unsuitable for the alloy",
        action: "Recheck the alloy against concentration, temperature and time",
      },
    ],
    support: [
      "Substrate-specific pretreatment sequence and chemistry review",
      "Classification of pretreatment causes behind adhesion, pitting and stains",
      "Control sheet for concentration, temperature, time and rinsing",
      "On-site review linked to the next plating or coating stage",
    ],
    cta: "Pretreatment inquiry",
  },
  {
    slug: "electroplating",
    title: "Electroplating",
    summary:
      "Copper, nickel, tin, zinc, chromium, silver and gold baths are managed together with current, additives, agitation and filtration.",
    overview:
      "Bath composition alone does not determine electroplating quality. Current-density distribution, anode condition, additive balance, agitation, filtration and contamination history are reviewed together.",
    materials: [
      "Steel and iron",
      "Copper and copper alloys",
      "Zinc-based surfaces",
      "Nickel underlayers",
      "Connectors and electrical contacts",
    ],
    processes: [
      "Copper plating",
      "Nickel plating",
      "Tin plating",
      "Zinc and chromium plating",
      "Silver plating",
      "Gold plating",
      "Passivation and anti-tarnish",
    ],
    checks: [
      "pH, temperature and metal concentration",
      "Current density and voltage",
      "Anode area and condition",
      "Brightener and additive balance",
      "Air or mechanical agitation",
      "Circulation, filtration and particles",
      "Hull Cell testing",
      "Thickness and corrosion performance",
    ],
    issues: [
      {
        symptom: "Burning or roughness",
        causes:
          "Excess current, low metal, poor agitation or additive imbalance",
        action:
          "Compare the current range with the Hull Cell high-current area",
      },
      {
        symptom: "Pits or pinholes",
        causes: "Particles, organics, attached gas bubbles or weak filtration",
        action:
          "Separate filtration, cleaner carry-over and carbon-treatment needs",
      },
      {
        symptom: "Thickness or brightness variation",
        causes:
          "Current distribution, rack contact, anode layout or additive variation",
        action:
          "Record thickness by position together with voltage and current",
      },
      {
        symptom: "Tarnish or low corrosion resistance",
        causes: "Low thickness, rinse residue or poor post-treatment/drying",
        action:
          "Check thickness, final rinse, post-treatment and drying records",
      },
    ],
    support: [
      "Bath analysis and replenishment-history review",
      "Cause classification using Hull Cell panels and defect samples",
      "Current, agitation, anode and filtration review",
      "Corrective direction for pits, burning, thickness and color variation",
    ],
    cta: "Electroplating inquiry",
  },
  {
    slug: "electroless-plating",
    title: "Electroless plating",
    summary:
      "Metal, reducer, pH, temperature and bath loading are controlled to maintain deposition rate and stability in electroless nickel and copper.",
    overview:
      "Electroless deposits form by chemical reduction rather than external current. Pretreatment and activation are reviewed with replenishment, bath aging, contamination and filtration around reaction balance.",
    materials: [
      "Steel and iron",
      "Copper and copper alloys",
      "Aluminum and its alloys",
      "Catalyzed non-conductors",
      "Electronic and precision parts",
    ],
    processes: [
      "Electroless nickel",
      "Electroless copper",
      "Zincate pretreatment for aluminum",
      "Activation and catalyzation",
      "Post-treatment and heat treatment",
    ],
    checks: [
      "pH and bath temperature",
      "Nickel or copper concentration",
      "Reducer and complexant condition",
      "Bath loading and deposition rate",
      "Replenishment, turnover and bath age",
      "Pretreatment and activation",
      "Particles, metallic impurities and filtration",
    ],
    issues: [
      {
        symptom: "No or partial deposition",
        causes:
          "Weak activation, contamination, low reactivity or off-spec bath",
        action:
          "Check pretreatment/catalyzation before pH, temperature and components",
      },
      {
        symptom: "Low rate or thickness",
        causes: "Low metal/reducer, low pH/temperature or aged bath",
        action:
          "Compare analysis, hourly thickness and replenishment/turnover history",
      },
      {
        symptom: "Roughness or particles",
        causes:
          "Decomposition particles, contamination, weak filtration or plate-out",
        action:
          "Locate the particle source and inspect filtration and tank cleanliness",
      },
      {
        symptom: "Bath decomposition",
        causes:
          "Overheating, local pH rise, overfeed or catalytic contamination",
        action:
          "Check temperature uniformity, feeding, metallic impurities and loading",
      },
    ],
    support: [
      "Bath-analysis and replenishment criteria",
      "Deposition-rate, loading and turnover review",
      "Cause classification for skip plating, roughness and decomposition",
      "Substrate-specific pretreatment and activation review",
    ],
    cta: "Electroless plating inquiry",
  },
  {
    slug: "aluminum-anodizing",
    title: "Aluminum anodizing",
    summary:
      "Alloy-specific chemical polishing, etching and desmut are managed through anodizing, dyeing, sealing and nickel leach-out removal.",
    overview:
      "Alloy composition and pretreatment response directly affect film appearance and color. Film formation, dye adsorption and sealing quality are reviewed through full-process data.",
    materials: [
      "Aluminum and aluminum alloys",
      "Aluminum sheet and machined parts",
      "Precision-machined parts",
      "Decorative components",
      "Functional oxide-film parts",
    ],
    processes: [
      "Chemical polishing",
      "Alkaline etching",
      "Desmut",
      "Sulfuric-acid anodizing",
      "Dyeing",
      "Hot-water or nickel sealing",
      "Nickel leach-out removal",
    ],
    checks: [
      "Alloy and machined surface",
      "Etch amount and desmut reaction",
      "Acid, temperature and current density",
      "Voltage, time and film thickness",
      "Dye concentration, pH and temperature",
      "Sealing temperature, time and water",
      "Color, corrosion and sealing quality",
    ],
    issues: [
      {
        symptom: "Pits or white spots",
        causes:
          "Base-metal defects, chloride/particle contamination or over-etching",
        action:
          "Compare material lot, pretreatment, rinse and anodizing-bath contamination",
      },
      {
        symptom: "Color variation",
        causes:
          "Film thickness, dye condition, pH, temperature, time or rinse variation",
        action: "Review positional thickness with dyeing and sealing records",
      },
      {
        symptom: "Smut or surface stain",
        causes: "Etch/desmut mismatch to alloy or rinse residue",
        action: "Recheck alloy-specific pretreatment and desmut endpoint",
      },
      {
        symptom: "Poor sealing or corrosion",
        causes:
          "Low sealing time/temperature, water/bath contamination or excessive leach-out",
        action:
          "Compare sealing analysis, water, time and quality-test results",
      },
    ],
    support: [
      "Alloy-specific pretreatment review",
      "Film, color and sealing control plan",
      "Cause classification for pits, white spots, color shift and stain",
      "Dyeing, sealing and nickel leach-out review",
    ],
    cta: "Anodizing inquiry",
  },
  {
    slug: "conversion-coating",
    title: "Conversion coating",
    summary:
      "Phosphate, chromate and zincate treatments for steel, zinc and aluminum are reviewed with pretreatment and downstream processes.",
    overview:
      "Conversion coatings create a protective layer or a base for subsequent plating or painting through surface reactions. Cleanliness, bath condition, rinsing and drying determine uniformity and corrosion resistance.",
    materials: [
      "Steel and iron",
      "Zinc and zinc-plated surfaces",
      "Aluminum and its alloys",
      "Copper and copper alloys",
      "Substrates before painting or plating",
    ],
    processes: [
      "Phosphate coating",
      "Chromate conversion",
      "Aluminum conversion treatment",
      "Zincate pretreatment",
      "Pre-paint or pre-plate coating",
    ],
    checks: [
      "Surface cleanliness and activation",
      "pH, concentration and temperature",
      "Treatment time",
      "Rinse quality and carry-over",
      "Coating weight and appearance",
      "Drying condition",
      "Corrosion and adhesion",
    ],
    issues: [
      {
        symptom: "Uneven or missing film",
        causes:
          "Contamination, weak activation or off-spec pH/concentration/temperature",
        action: "Compare pretreatment cleanliness with bath analysis first",
      },
      {
        symptom: "Poor adhesion",
        causes: "Excess film, rinse residue, drying or downstream delay",
        action: "Review coating weight, rinsing, drying and waiting time",
      },
      {
        symptom: "Low corrosion resistance",
        causes: "Insufficient film, incomplete sealing or surface defects",
        action:
          "Compare coating quality, post-treatment and localized corrosion",
      },
    ],
    support: [
      "Substrate-specific process and chemistry review",
      "pH, concentration, temperature and coating-weight controls",
      "Cause classification for adhesion, appearance and corrosion",
      "Review of pretreatment, rinse, drying and downstream stages",
    ],
    cta: "Conversion coating inquiry",
  },
  {
    slug: "post-treatment-specialty",
    title: "Post-treatment & specialty chemicals",
    summary:
      "Anti-tarnish, protective coatings and specialty cleaning/removal processes improve appearance, corrosion resistance and storage stability after plating.",
    overview:
      "Post-treatment is the final control stage that preserves the finished deposit. Surface condition immediately after plating, chemical residue, rinsing, drying and storage are reviewed together.",
    materials: [
      "Copper and copper alloys",
      "Silver-plated surfaces",
      "Nickel- and tin-plated surfaces",
      "Contacts and connectors",
      "Decorative and functional parts",
    ],
    processes: [
      "Anti-tarnish and passivation",
      "Transparent protective coating",
      "Specialty cleaning",
      "Oxide or coating removal",
      "Post-plate rinsing and drying",
    ],
    checks: [
      "Condition of the plated surface",
      "Concentration, pH and temperature",
      "Treatment time",
      "Rinsing and residue",
      "Drying temperature and time",
      "Handling, packing and storage",
      "Color, corrosion and contact performance",
    ],
    issues: [
      {
        symptom: "Tarnish or discoloration",
        causes:
          "Weak protection, residue, humidity or sulfur-bearing atmosphere",
        action: "Check concentration/time, final rinse, packing and storage",
      },
      {
        symptom: "Stain or water mark",
        causes: "Contaminated rinse, poor drainage or delayed drying",
        action:
          "Review final-rinse water, part orientation and drying start time",
      },
      {
        symptom: "Poor coating adhesion",
        causes: "Contamination, excess residue or insufficient drying/curing",
        action:
          "Check post-plate surface and wait/dry conditions before coating",
      },
      {
        symptom: "Low corrosion or storage life",
        causes: "Uneven film, handling contamination or unsuitable packaging",
        action:
          "Compare the failure time with lot, packing and storage history",
      },
    ],
    support: [
      "Post-treatment conditions by deposit type",
      "Cause classification for tarnish, stain and coating adhesion",
      "Rinse, dry, pack and store control plan",
      "Upstream/downstream impact of specialty cleaning and removal",
    ],
    cta: "Post-treatment inquiry",
  },
  {
    slug: "basic-chemicals",
    title: "Basic chemicals",
    summary:
      "Sulfuric, hydrochloric and nitric acids, caustic soda and other line chemicals are managed by specification, concentration, replenishment and lot.",
    overview:
      "Basic chemicals serve cleaning, pickling, etching, bath make-up, replenishment and conversion treatment. Raw-material specification is distinguished from actual bath concentration, with storage, handling and lot history controlled.",
    materials: [
      "Sulfuric acid",
      "Hydrochloric acid",
      "Nitric acid",
      "Caustic soda",
      "Acid and alkaline raw materials for finishing",
    ],
    processes: [
      "Cleaning and degreasing",
      "Pickling and activation",
      "Aluminum etch and desmut",
      "Bath make-up and replenishment",
      "Conversion coating",
      "pH adjustment",
    ],
    checks: [
      "Raw-material grade, purity and concentration",
      "Incoming lot and certificate",
      "Actual bath concentration and pH",
      "Replenishment and analysis history",
      "Impurity and contamination risk",
      "Compatible storage and transfer materials",
      "Labeling, handling and safety documents",
    ],
    issues: [
      {
        symptom: "Bath concentration or pH drift",
        causes:
          "Raw-material variation, incorrect feed, drag-out or evaporation",
        action:
          "Compare incoming specification, bath analysis, feed and volume records",
      },
      {
        symptom: "Smut or residue",
        causes:
          "Impurity buildup or acid/alkali condition mismatched to substrate",
        action:
          "Compare raw-material lot, bath contamination and substrate response",
      },
      {
        symptom: "Adhesion or corrosion variation",
        causes:
          "Pretreatment concentration, rinse carry-over or raw-material contamination",
        action:
          "Trace raw-material, replenishment and rinse history of affected lots",
      },
    ],
    support: [
      "Raw-material specification and process-use confirmation",
      "Concentration, pH, replenishment and analysis criteria",
      "Lot, incoming, storage and usage trace support",
      "Review of links between process variation and raw-material factors",
    ],
    cta: "Basic chemicals inquiry",
  },
  {
    slug: "filtration-equipment",
    title: "Filtration equipment & related systems",
    summary:
      "Circulation, filters and carbon-treatment conditions are reviewed by process to control particles, sludge and organic contamination in plating baths.",
    overview:
      "Filtration is not selected by pump capacity alone. Bath volume and turnover, chemical/temperature compatibility, media rating, pressure change and replacement cycle must be designed together.",
    materials: [
      "Plating-bath filter systems",
      "Filter cartridges and media",
      "Chemical-resistant pumps and piping",
      "Carbon-treatment systems",
      "Tank and agitation equipment",
    ],
    processes: [
      "Copper, nickel and tin plating",
      "Precious-metal plating",
      "Electroless plating",
      "Conversion coating",
      "Activated-carbon treatment",
      "Bath purification and transfer",
    ],
    checks: [
      "Flow and turnover for bath volume",
      "Pump and housing material",
      "Chemical and temperature compatibility",
      "Media type and retention rating",
      "Pressure and flow trend",
      "Cartridge replacement cycle",
      "Carbon dose, contact and removal",
      "Leak, piping and preventive maintenance",
    ],
    issues: [
      {
        symptom: "Pits or particle defects",
        causes:
          "Low filtration, damaged/saturated media or returned tank sludge",
        action:
          "Check flow, pressure, media and the location where particles originate",
      },
      {
        symptom: "Thickness or appearance variation",
        causes:
          "Uneven circulation/agitation or poor suction/discharge location",
        action: "Compare tank flow with quality differences by part position",
      },
      {
        symptom: "Persistent haze or discoloration",
        causes:
          "Organic contamination, particle-only filtration or incomplete carbon removal",
        action:
          "Use Hull Cell results to separate carbon-treatment and post-filtration needs",
      },
      {
        symptom: "Low flow or leakage",
        causes:
          "Clogging, pump wear, material incompatibility or high piping resistance",
        action:
          "Review pressure/flow trends and seal, piping and cartridge history",
      },
    ],
    support: [
      "Filtration review based on bath volume and process",
      "Separation of particle and organic contamination",
      "Media, carbon, pump and material compatibility",
      "Replacement, pressure and flow preventive-control plan",
    ],
    cta: "Filtration equipment inquiry",
  },
];

const viProducts: ProductDetail[] = [
  {
    slug: "pretreatment",
    title: "Tiền xử lý",
    summary:
      "Điều kiện tẩy dầu, tẩy axit, ăn mòn, khử smut và hoạt hóa theo từng vật liệu tạo nền bám dính cho công đoạn mạ và tạo màng tiếp theo.",
    overview:
      "Tiền xử lý thường quyết định điểm bắt đầu của lỗi bề mặt. Lớp oxit và nhiễm bẩn được kiểm tra, đồng thời hiệu quả làm sạch, hoạt hóa và chất lượng rửa được quản lý như một dòng công đoạn.",
    materials: [
      "Sắt và thép",
      "Đồng và hợp kim đồng",
      "Nhôm và hợp kim nhôm",
      "Kẽm và bề mặt mạ kẽm",
      "Lớp lót niken",
    ],
    processes: [
      "Tẩy dầu dung môi và kiềm",
      "Tẩy dầu điện hóa",
      "Tẩy axit và làm sạch axit",
      "Ăn mòn và khử smut",
      "Hoạt hóa và xúc tác",
      "Rửa và kiểm soát kéo theo",
    ],
    checks: [
      "Độ sạch và water-break",
      "Nồng độ hóa chất và pH",
      "Nhiệt độ và thời gian",
      "Phản ứng ăn mòn/hoạt hóa theo vật liệu",
      "Chất lượng nước rửa và kéo theo",
      "Smut và cặn bề mặt",
      "Bề mặt trước khi mạ",
    ],
    issues: [
      {
        symptom: "Bong tróc hoặc bám dính kém",
        causes: "Tẩy dầu chưa đủ, tẩy axit quá/thiếu hoặc còn oxit",
        action: "Kiểm tra water-break, trình tự, hoạt hóa và rửa trước",
      },
      {
        symptom: "Rỗ hoặc hạt",
        causes: "Hạt trên bề mặt, nước rửa bẩn hoặc chất rắn kéo theo",
        action: "Tách riêng yếu tố bể, thay nước rửa và lọc",
      },
      {
        symptom: "Vết ố hoặc biến màu",
        causes: "Hóa chất còn dư, làm sạch không đều hoặc sấy chậm",
        action: "Kiểm tra nước rửa cuối và thời gian chờ giữa các công đoạn",
      },
      {
        symptom: "Smut hoặc bề mặt thô",
        causes: "Điều kiện ăn mòn/khử smut không phù hợp hợp kim",
        action: "Rà soát hợp kim với nồng độ, nhiệt độ và thời gian",
      },
    ],
    support: [
      "Rà soát trình tự và hóa chất theo vật liệu",
      "Phân loại nguyên nhân bám dính, rỗ và vết ố",
      "Lập hạng mục nồng độ, nhiệt độ, thời gian và rửa",
      "Kiểm tra liên kết với công đoạn mạ/tạo màng tiếp theo",
    ],
    cta: "Tư vấn tiền xử lý",
  },
  {
    slug: "electroplating",
    title: "Mạ điện",
    summary:
      "Bể mạ đồng, niken, thiếc, kẽm, crom, bạc và vàng được quản lý cùng dòng điện, phụ gia, khuấy và lọc.",
    overview:
      "Thành phần bể không phải yếu tố duy nhất quyết định chất lượng. Phân bố mật độ dòng, anốt, cân bằng phụ gia, khuấy, lọc và lịch sử nhiễm bẩn được xem xét đồng thời.",
    materials: [
      "Sắt và thép",
      "Đồng và hợp kim đồng",
      "Bề mặt nền kẽm",
      "Lớp lót niken",
      "Đầu nối và tiếp điểm điện",
    ],
    processes: [
      "Mạ đồng",
      "Mạ niken",
      "Mạ thiếc",
      "Mạ kẽm và crom",
      "Mạ bạc",
      "Mạ vàng",
      "Thụ động hóa và chống biến màu",
    ],
    checks: [
      "pH, nhiệt độ và nồng độ kim loại",
      "Mật độ dòng và điện áp",
      "Diện tích và tình trạng anốt",
      "Cân bằng chất bóng/phụ gia",
      "Khuấy khí hoặc cơ khí",
      "Tuần hoàn, lọc và hạt",
      "Thử Hull Cell",
      "Chiều dày và chống ăn mòn",
    ],
    issues: [
      {
        symptom: "Cháy hoặc thô",
        causes:
          "Dòng quá cao, thiếu kim loại, khuấy kém hoặc mất cân bằng phụ gia",
        action: "So sánh dải dòng với vùng dòng cao trên tấm Hull Cell",
      },
      {
        symptom: "Rỗ hoặc lỗ kim",
        causes: "Hạt, hữu cơ, bọt khí bám hoặc lọc yếu",
        action: "Tách yếu tố lọc, kéo theo chất tẩy và xử lý than hoạt tính",
      },
      {
        symptom: "Sai lệch chiều dày/độ bóng",
        causes: "Phân bố dòng, tiếp xúc gá, bố trí anốt hoặc phụ gia",
        action: "Ghi chiều dày theo vị trí cùng điện áp và dòng",
      },
      {
        symptom: "Biến màu hoặc chống ăn mòn kém",
        causes: "Màng mỏng, cặn rửa hoặc hậu xử lý/sấy kém",
        action: "Kiểm tra chiều dày, rửa cuối, hậu xử lý và hồ sơ sấy",
      },
    ],
    support: [
      "Xem xét phân tích bể và lịch sử bổ sung",
      "Phân loại nguyên nhân bằng Hull Cell và mẫu lỗi",
      "Kiểm tra dòng, khuấy, anốt và lọc",
      "Định hướng cải thiện rỗ, cháy, chiều dày và màu",
    ],
    cta: "Tư vấn mạ điện",
  },
  {
    slug: "electroless-plating",
    title: "Mạ không điện",
    summary:
      "Kim loại, chất khử, pH, nhiệt độ và tải bể được kiểm soát để duy trì tốc độ kết tủa và độ ổn định của niken/đồng hóa học.",
    overview:
      "Mạ không điện tạo lớp phủ bằng phản ứng khử hóa học. Tiền xử lý và hoạt hóa được xem xét cùng bổ sung, lão hóa bể, nhiễm bẩn và lọc theo cân bằng phản ứng.",
    materials: [
      "Sắt và thép",
      "Đồng và hợp kim đồng",
      "Nhôm và hợp kim nhôm",
      "Vật liệu không dẫn đã xúc tác",
      "Linh kiện điện tử và chính xác",
    ],
    processes: [
      "Niken hóa học",
      "Đồng hóa học",
      "Zincate cho nhôm",
      "Hoạt hóa và xúc tác",
      "Hậu xử lý và nhiệt luyện",
    ],
    checks: [
      "pH và nhiệt độ bể",
      "Nồng độ niken hoặc đồng",
      "Chất khử và chất tạo phức",
      "Tải bể và tốc độ kết tủa",
      "Bổ sung, turnover và tuổi bể",
      "Tiền xử lý và hoạt hóa",
      "Hạt, tạp kim loại và lọc",
    ],
    issues: [
      {
        symptom: "Không mạ hoặc mạ cục bộ",
        causes: "Hoạt hóa yếu, nhiễm bẩn, phản ứng thấp hoặc bể lệch chuẩn",
        action: "Kiểm tra tiền xử lý/xúc tác trước pH, nhiệt độ và thành phần",
      },
      {
        symptom: "Tốc độ hoặc chiều dày thấp",
        causes: "Thiếu kim loại/chất khử, pH/nhiệt độ thấp hoặc bể già",
        action: "So sánh phân tích, chiều dày theo giờ và lịch sử bổ sung",
      },
      {
        symptom: "Thô hoặc có hạt",
        causes: "Hạt phân hủy, nhiễm bẩn, lọc yếu hoặc kết tủa trên thành bể",
        action: "Xác định nguồn hạt, kiểm tra lọc và vệ sinh bể",
      },
      {
        symptom: "Phân hủy bể",
        causes: "Quá nhiệt, tăng pH cục bộ, bổ sung quá mức hoặc nhiễm xúc tác",
        action: "Kiểm tra độ đều nhiệt, cách bổ sung, tạp kim loại và tải bể",
      },
    ],
    support: [
      "Tiêu chuẩn phân tích và bổ sung bể",
      "Rà soát tốc độ, tải và turnover",
      "Phân loại nguyên nhân không mạ, thô và phân hủy",
      "Kiểm tra tiền xử lý/hoạt hóa theo vật liệu",
    ],
    cta: "Tư vấn mạ không điện",
  },
  {
    slug: "aluminum-anodizing",
    title: "Anod nhôm",
    summary:
      "Đánh bóng hóa học, ăn mòn và khử smut theo hợp kim được quản lý xuyên suốt anod, nhuộm, bịt lỗ và loại bỏ niken leach-out.",
    overview:
      "Thành phần hợp kim và phản ứng tiền xử lý ảnh hưởng trực tiếp đến ngoại quan và màu màng. Sự hình thành màng, hấp phụ thuốc nhuộm và chất lượng bịt lỗ được xem xét bằng dữ liệu toàn công đoạn.",
    materials: [
      "Nhôm và hợp kim nhôm",
      "Tấm nhôm và chi tiết gia công",
      "Chi tiết gia công chính xác",
      "Chi tiết trang trí",
      "Chi tiết màng oxit chức năng",
    ],
    processes: [
      "Đánh bóng hóa học",
      "Ăn mòn kiềm",
      "Khử smut",
      "Anod axit sulfuric",
      "Nhuộm màu",
      "Bịt lỗ nước nóng hoặc niken",
      "Loại bỏ niken leach-out",
    ],
    checks: [
      "Hợp kim và bề mặt gia công",
      "Lượng ăn mòn và phản ứng desmut",
      "Axit, nhiệt độ và mật độ dòng",
      "Điện áp, thời gian và chiều dày màng",
      "Nồng độ thuốc nhuộm, pH, nhiệt độ",
      "Nhiệt độ, thời gian và nước bịt lỗ",
      "Màu, chống ăn mòn và chất lượng bịt lỗ",
    ],
    issues: [
      {
        symptom: "Rỗ hoặc đốm trắng",
        causes: "Khuyết tật vật liệu, nhiễm clorua/hạt hoặc ăn mòn quá mức",
        action: "So sánh lô vật liệu, tiền xử lý, nước rửa và bể anod",
      },
      {
        symptom: "Sai lệch màu",
        causes: "Chiều dày màng, thuốc nhuộm, pH, nhiệt độ, thời gian hoặc rửa",
        action: "Xem chiều dày theo vị trí cùng hồ sơ nhuộm và bịt lỗ",
      },
      {
        symptom: "Smut hoặc vết bề mặt",
        causes: "Điều kiện etch/desmut không hợp kim hoặc cặn rửa",
        action: "Rà soát tiền xử lý theo hợp kim và điểm kết thúc desmut",
      },
      {
        symptom: "Bịt lỗ/chống ăn mòn kém",
        causes: "Thiếu nhiệt/thời gian, nước/bể bẩn hoặc leach-out quá mức",
        action: "So sánh phân tích bể, nước, thời gian và kết quả thử",
      },
    ],
    support: [
      "Rà soát tiền xử lý theo hợp kim",
      "Lập quản lý màng, màu và bịt lỗ",
      "Phân loại rỗ, đốm trắng, lệch màu và vết ố",
      "Kiểm tra nhuộm, bịt lỗ và loại bỏ niken",
    ],
    cta: "Tư vấn anod nhôm",
  },
  {
    slug: "conversion-coating",
    title: "Lớp phủ chuyển hóa",
    summary:
      "Phốt phát, cromat và zincate cho sắt, kẽm, nhôm được xem xét cùng tiền xử lý và công đoạn tiếp theo.",
    overview:
      "Lớp phủ chuyển hóa tạo màng bảo vệ hoặc nền cho mạ/sơn nhờ phản ứng bề mặt. Độ sạch, điều kiện bể, rửa và sấy quyết định độ đồng đều và chống ăn mòn.",
    materials: [
      "Sắt và thép",
      "Kẽm và bề mặt mạ kẽm",
      "Nhôm và hợp kim nhôm",
      "Đồng và hợp kim đồng",
      "Vật liệu trước sơn hoặc mạ",
    ],
    processes: [
      "Phốt phát",
      "Cromat",
      "Chuyển hóa nhôm",
      "Zincate tiền xử lý",
      "Màng trước sơn hoặc mạ",
    ],
    checks: [
      "Độ sạch và hoạt hóa",
      "pH, nồng độ và nhiệt độ",
      "Thời gian xử lý",
      "Nước rửa và kéo theo",
      "Khối lượng màng và ngoại quan",
      "Điều kiện sấy",
      "Chống ăn mòn và bám dính",
    ],
    issues: [
      {
        symptom: "Màng không đều hoặc không hình thành",
        causes: "Nhiễm bẩn, hoạt hóa yếu hoặc pH/nồng độ/nhiệt độ lệch",
        action: "So sánh độ sạch tiền xử lý với phân tích bể trước",
      },
      {
        symptom: "Bám dính kém",
        causes: "Màng quá dày, cặn rửa, sấy hoặc chờ công đoạn sau",
        action: "Kiểm tra khối lượng màng, rửa, sấy và thời gian chờ",
      },
      {
        symptom: "Chống ăn mòn kém",
        causes: "Màng thiếu, bịt kín chưa đủ hoặc khuyết tật bề mặt",
        action: "So sánh chất lượng màng, hậu xử lý và vị trí ăn mòn",
      },
    ],
    support: [
      "Rà soát quy trình/hóa chất theo vật liệu",
      "Quản lý pH, nồng độ, nhiệt độ và khối lượng màng",
      "Phân loại bám dính, ngoại quan và ăn mòn",
      "Kiểm tra tiền xử lý, rửa, sấy và công đoạn sau",
    ],
    cta: "Tư vấn lớp phủ chuyển hóa",
  },
  {
    slug: "post-treatment-specialty",
    title: "Hậu xử lý & hóa chất chuyên dụng",
    summary:
      "Chống biến màu, phủ bảo vệ và làm sạch/loại bỏ chuyên dụng giúp cải thiện ngoại quan, chống ăn mòn và độ ổn định bảo quản sau mạ.",
    overview:
      "Hậu xử lý là bước quản lý cuối để giữ chất lượng lớp mạ. Bề mặt sau mạ, cặn hóa chất, rửa, sấy và bảo quản được xem xét đồng thời.",
    materials: [
      "Đồng và hợp kim đồng",
      "Bề mặt mạ bạc",
      "Bề mặt mạ niken/thiếc",
      "Tiếp điểm và đầu nối",
      "Chi tiết trang trí và chức năng",
    ],
    processes: [
      "Chống biến màu và thụ động",
      "Phủ bảo vệ trong suốt",
      "Làm sạch chuyên dụng",
      "Loại bỏ oxit hoặc màng",
      "Rửa và sấy sau mạ",
    ],
    checks: [
      "Tình trạng lớp mạ",
      "Nồng độ, pH và nhiệt độ",
      "Thời gian xử lý",
      "Rửa và cặn",
      "Nhiệt độ/thời gian sấy",
      "Thao tác, đóng gói và bảo quản",
      "Màu, ăn mòn và tiếp xúc điện",
    ],
    issues: [
      {
        symptom: "Biến màu hoặc tarnish",
        causes: "Bảo vệ yếu, cặn, độ ẩm hoặc khí chứa lưu huỳnh",
        action: "Kiểm tra nồng độ/thời gian, rửa cuối, đóng gói và bảo quản",
      },
      {
        symptom: "Vết ố hoặc vệt nước",
        causes: "Nước rửa bẩn, thoát nước kém hoặc sấy chậm",
        action: "Xem nước rửa cuối, hướng đặt chi tiết và thời điểm sấy",
      },
      {
        symptom: "Lớp phủ bám kém",
        causes: "Nhiễm bẩn, cặn quá mức hoặc sấy/đóng rắn thiếu",
        action: "Kiểm tra bề mặt sau mạ và điều kiện chờ/sấy trước phủ",
      },
      {
        symptom: "Khả năng bảo quản thấp",
        causes: "Màng không đều, nhiễm bẩn thao tác hoặc bao gói không phù hợp",
        action: "So sánh thời điểm lỗi với lô, đóng gói và lịch sử lưu kho",
      },
    ],
    support: [
      "Điều kiện hậu xử lý theo loại lớp mạ",
      "Phân loại biến màu, vết ố và bám dính",
      "Lập quản lý rửa, sấy, đóng gói và bảo quản",
      "Kiểm tra ảnh hưởng trước/sau của làm sạch và loại bỏ",
    ],
    cta: "Tư vấn hậu xử lý",
  },
  {
    slug: "basic-chemicals",
    title: "Hóa chất cơ bản",
    summary:
      "Axit sulfuric, hydrochloric, nitric, xút và hóa chất nền được quản lý theo quy cách, nồng độ, bổ sung và lô.",
    overview:
      "Hóa chất cơ bản được dùng cho làm sạch, tẩy axit, ăn mòn, pha/bổ sung bể và chuyển hóa. Quy cách nguyên liệu được phân biệt với nồng độ thực tế trong bể, đồng thời quản lý bảo quản, thao tác và lịch sử lô.",
    materials: [
      "Axit sulfuric",
      "Axit hydrochloric",
      "Axit nitric",
      "Xút",
      "Nguyên liệu axit và kiềm cho xử lý bề mặt",
    ],
    processes: [
      "Làm sạch và tẩy dầu",
      "Tẩy axit và hoạt hóa",
      "Ăn mòn/khử smut nhôm",
      "Pha và bổ sung bể",
      "Lớp phủ chuyển hóa",
      "Điều chỉnh pH",
    ],
    checks: [
      "Cấp, độ tinh khiết và nồng độ",
      "Lô nhập và chứng nhận",
      "Nồng độ thực tế và pH bể",
      "Bổ sung và lịch sử phân tích",
      "Rủi ro tạp chất/nhiễm bẩn",
      "Vật liệu bảo quản/chuyển phù hợp",
      "Nhãn, thao tác và tài liệu an toàn",
    ],
    issues: [
      {
        symptom: "Nồng độ hoặc pH dao động",
        causes: "Nguyên liệu biến động, bổ sung sai, kéo theo hoặc bay hơi",
        action: "So sánh quy cách đầu vào, phân tích, bổ sung và thể tích",
      },
      {
        symptom: "Smut hoặc cặn",
        causes: "Tích tụ tạp chất hoặc điều kiện axit/kiềm không hợp vật liệu",
        action: "So sánh lô nguyên liệu, nhiễm bể và phản ứng vật liệu",
      },
      {
        symptom: "Bám dính/chống ăn mòn thay đổi",
        causes: "Nồng độ tiền xử lý, kéo theo nước rửa hoặc nguyên liệu bẩn",
        action: "Truy xuất nguyên liệu, bổ sung và rửa của lô lỗi",
      },
    ],
    support: [
      "Xác nhận quy cách và công đoạn sử dụng",
      "Tiêu chuẩn nồng độ, pH, bổ sung và phân tích",
      "Hỗ trợ truy xuất lô, nhập, bảo quản và sử dụng",
      "Rà soát liên hệ giữa biến động công đoạn và nguyên liệu",
    ],
    cta: "Tư vấn hóa chất cơ bản",
  },
  {
    slug: "filtration-equipment",
    title: "Thiết bị lọc & hệ thống liên quan",
    summary:
      "Tuần hoàn, bộ lọc và xử lý than hoạt tính được xem xét theo công đoạn để kiểm soát hạt, bùn và nhiễm hữu cơ trong bể mạ.",
    overview:
      "Không thể chọn hệ lọc chỉ theo công suất bơm. Thể tích và vòng tuần hoàn, độ tương thích hóa chất/nhiệt độ, cấp lọc, biến động áp suất và chu kỳ thay phải được thiết kế cùng nhau.",
    materials: [
      "Hệ lọc bể mạ",
      "Lõi và vật liệu lọc",
      "Bơm/đường ống chịu hóa chất",
      "Hệ xử lý than hoạt tính",
      "Thiết bị bể và khuấy",
    ],
    processes: [
      "Mạ đồng, niken và thiếc",
      "Mạ kim loại quý",
      "Mạ không điện",
      "Lớp phủ chuyển hóa",
      "Xử lý than hoạt tính",
      "Làm sạch và chuyển dung dịch",
    ],
    checks: [
      "Lưu lượng và vòng tuần hoàn",
      "Vật liệu bơm/housing",
      "Tương thích hóa chất và nhiệt độ",
      "Loại và cấp giữ của vật liệu lọc",
      "Xu hướng áp suất/lưu lượng",
      "Chu kỳ thay lõi",
      "Liều, tiếp xúc và loại bỏ than",
      "Rò rỉ, đường ống và bảo trì",
    ],
    issues: [
      {
        symptom: "Rỗ hoặc lỗi hạt",
        causes: "Lọc yếu, vật liệu lọc hỏng/bão hòa hoặc bùn quay lại",
        action: "Kiểm tra lưu lượng, áp suất, lõi và vị trí phát sinh hạt",
      },
      {
        symptom: "Sai lệch chiều dày/ngoại quan",
        causes: "Tuần hoàn/khuấy không đều hoặc vị trí hút/xả kém",
        action: "So sánh dòng chảy trong bể với chất lượng theo vị trí",
      },
      {
        symptom: "Mờ hoặc biến màu kéo dài",
        causes: "Nhiễm hữu cơ, chỉ lọc hạt hoặc loại than chưa đủ",
        action: "Dùng Hull Cell tách nhu cầu xử lý than và lọc sau xử lý",
      },
      {
        symptom: "Lưu lượng thấp hoặc rò rỉ",
        causes: "Tắc, bơm mòn, vật liệu không hợp hoặc trở lực đường ống",
        action: "Xem xu hướng áp/lưu lượng và lịch sử seal, ống, lõi",
      },
    ],
    support: [
      "Rà soát lọc theo thể tích bể và công đoạn",
      "Tách nhiễm hạt và nhiễm hữu cơ",
      "Kiểm tra lõi, than, bơm và vật liệu",
      "Lập quản lý phòng ngừa thay lõi, áp suất và lưu lượng",
    ],
    cta: "Tư vấn thiết bị lọc",
  },
];

export const products: Record<Locale, ProductDetail[]> = {
  ko: koProducts,
  en: enProducts,
  vi: viProducts,
};

export const getProduct = (locale: Locale, slug: ProductSlug) =>
  products[locale].find((item) => item.slug === slug);

export const getProductFamilies = (locale: Locale): ProductFamily[] =>
  products[locale].map((product) => ({
    slug: product.slug,
    title: product.title,
    summary: product.summary,
    href: `/${locale}/products/${product.slug}/`,
    materials: product.materials.slice(0, 3).join(" · "),
    process: product.processes.slice(0, 3).join(" · "),
    cta: product.cta,
  }));
