import type { Locale, NavItem } from "../types";

export const localeLabels: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
  vi: "VI",
};

export const navigation: Record<Locale, NavItem[]> = {
  ko: [
    { label: "회사소개", href: "/ko/#company" },
    { label: "솔루션", href: "/ko/#solutions" },
    { label: "기술지원", href: "/ko/#technology" },
    { label: "품질관리", href: "/ko/#quality" },
    { label: "기술자료", href: "/ko/#knowledge" },
  ],
  en: [
    { label: "Company", href: "/en/#company" },
    { label: "Solutions", href: "/en/#solutions" },
    { label: "Support", href: "/en/#technology" },
    { label: "Quality", href: "/en/#quality" },
    { label: "Knowledge", href: "/en/#knowledge" },
  ],
  vi: [
    { label: "Giới thiệu", href: "/vi/#company" },
    { label: "Giải pháp", href: "/vi/#solutions" },
    { label: "Hỗ trợ", href: "/vi/#technology" },
    { label: "Chất lượng", href: "/vi/#quality" },
    { label: "Tài liệu", href: "/vi/#knowledge" },
  ],
};
