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
  establishedKo: "2016년",
  establishedEn: "2016",
  establishedVi: "2016",
  regionKo: "베트남 박닌",
  regionEn: "Bac Ninh, Vietnam",
  regionVi: "Bac Ninh, Việt Nam",
  site: "Bac Ninh, Vietnam",
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
  en: [],
  vi: [],
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
    title: "한국 기술과 베트남 현장을 연결하는 표면처리약품 제조사",
    seoTitle: "회사소개 | PLACHEM VINA",
    description:
      "PLACHEM VINA는 2016년 설립된 베트남 박닌 기반의 표면처리약품 제조·공급 및 현장 기술지원 기업입니다.",
    eyebrow: "회사소개",
    lead: "PLACHEM VINA는 한국 포뮬레이션 기술과 베트남 현지 제조 기반을 연결해 표면처리 현장의 약품 공급과 공정 안정화를 지원합니다.",
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
        items: ["포뮬레이션 검토", "현장 조건 확인", "욕관리 지원"],
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
    lead: "개별 제품명보다 공정, 소재, 관리 항목을 먼저 확인할 수 있도록 제품군을 정리했습니다.",
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
        items: ["대상 소재", "현재 공정", "주요 불량", "요청 자료"],
      },
    ],
  },
  technology: {
    key: "technology",
    title: "현장 조건을 함께 보는 기술지원",
    seoTitle: "기술지원 | PLACHEM VINA",
    description:
      "공정 진단, 분석 지원, 불량 대응, 욕관리, 신규 라인 및 제품 적용 지원 범위를 안내합니다.",
    eyebrow: "기술지원",
    lead: "표면처리 문제는 약품명 하나로 판단하기 어렵습니다. 소재, 전처리, bath 관리, 여과, 수세, 후처리를 함께 봅니다.",
    ctaLabel: "공정 조건 상담",
    ctaHref: "/ko/contact/",
    sections: [
      {
        title: "공정 진단",
        summary:
          "소재와 현재 라인 조건, 불량 발생 시점, 최근 변경 사항을 기준으로 확인 순서를 정리합니다.",
        items: [
          "소재 확인",
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
          "신규 라인이나 제품 적용 전에는 대상 소재, 요구 품질, 평가 조건을 먼저 확인합니다.",
        items: ["적용 목적", "대상 소재", "평가 기준", "요청 문서"],
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
    lead: "품질관리는 검사 항목을 나열하는 일이 아니라, 원료 확인부터 고객 적용 후 피드백까지 추적 가능한 흐름을 만드는 일입니다.",
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
        items: ["완제품검사", "출하 전 확인", "LOT 추적", "고객 피드백"],
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
    title: "검증된 기술자료만 연결합니다",
    seoTitle: "기술자료 | PLACHEM VINA",
    description:
      "표면처리 공정관리, 불량 원인, 약품 안전·관리 자료를 기술 블로그와 요청 절차로 연결합니다.",
    eyebrow: "기술자료",
    lead: "준비되지 않은 자료를 다운로드처럼 보이게 만들지 않습니다. 공개 가능한 글과 요청 가능한 자료 범위를 분리합니다.",
    ctaLabel: "자료 요청",
    ctaHref: "/ko/contact/",
    sections: [
      {
        title: "기술 블로그 연결",
        summary:
          "기존 WordPress 기술 블로그의 검증된 글만 외부 링크로 연결합니다. 블로그 자체는 이번 작업에서 변경하지 않습니다.",
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
    title: "공정 정보를 정리해 기술문의를 보내주세요",
    seoTitle: "기술문의 | PLACHEM VINA",
    description:
      "문의 가능한 내용, 접수 전 준비 정보, 연락처와 위치를 안내합니다. 실제 전송 기능은 이번 단계에서 제외합니다.",
    eyebrow: "기술문의",
    lead: "문의 전에 소재, 공정, 현재 증상, 요청 자료를 정리하면 제품군 검토와 기술 회신이 빨라집니다.",
    ctaLabel: "제품·솔루션 보기",
    ctaHref: "/ko/solutions/",
    sections: [
      {
        title: "문의 가능한 내용",
        summary:
          "제품군 적용, 공정 조건, 불량 원인, 욕관리, 신규 라인 적용, TDS·SDS·COA 자료 요청을 상담할 수 있습니다.",
        items: ["제품군 검토", "공정 문제", "자료 요청", "신규 적용"],
      },
      {
        title: "접수 전 준비 정보",
        summary:
          "회사명, 담당자 연락처, 대상 소재, 현재 공정, 사용 중인 약품, 불량 사진 또는 증상 설명을 준비해 주세요.",
        items: ["소재", "공정", "증상", "요청 자료"],
      },
      {
        title: "이번 검수 화면의 범위",
        summary:
          "현재 검수 화면에서는 전송 폼과 첨부파일 입력창을 노출하지 않습니다. 실제 온라인 접수는 대표 승인 이후 별도 연결합니다.",
        items: [
          "전송 기능 제외",
          "첨부 업로드 제외",
          "문의 API 유지",
          "대표 승인 후 연결",
        ],
      },
    ],
  },
};

function fallbackPages(locale: Exclude<Locale, "ko">) {
  const isEn = locale === "en";

  return Object.fromEntries(
    staticPageKeys.map((key) => [
      key,
      {
        ...koPages[key],
        title: isEn
          ? "Korean content under review"
          : "Nội dung tiếng Hàn đang được duyệt",
        seoTitle: `${pageLabels[locale][key].title} | PLACHEM VINA`,
        description: isEn
          ? "This multilingual route is preserved. Final translation will be prepared after Korean approval."
          : "Đường dẫn đa ngôn ngữ được giữ. Bản dịch cuối sẽ thực hiện sau khi tiếng Hàn được duyệt.",
        eyebrow: "Korean Preview",
        lead: isEn
          ? "The Korean homepage renewal is being completed first. EN/VI final copy is intentionally pending."
          : "Trang tiếng Hàn được hoàn thiện trước. Nội dung EN/VI cuối cùng đang được giữ lại.",
        ctaLabel: isEn ? "View Korean page" : "Xem trang tiếng Hàn",
        ctaHref: "/ko/",
        sections: [
          {
            title: isEn ? "Translation pending" : "Đang chờ dịch",
            summary: isEn
              ? "The page remains available so navigation and deployment structure are not broken."
              : "Trang vẫn khả dụng để không làm hỏng cấu trúc điều hướng và triển khai.",
            items: isEn
              ? ["Korean approval first", "No final translation yet"]
              : ["Duyệt tiếng Hàn trước", "Chưa dịch cuối cùng"],
          },
        ],
      },
    ]),
  ) as Record<StaticPageKey, StaticPageContent>;
}

export const staticPages: Record<
  Locale,
  Record<StaticPageKey, StaticPageContent>
> = {
  ko: koPages,
  en: fallbackPages("en"),
  vi: fallbackPages("vi"),
};

export function getStaticPage(locale: Locale, key: StaticPageKey) {
  return staticPages[locale][key];
}
