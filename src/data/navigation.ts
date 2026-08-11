import type { Locale, NavItem, PageKey } from "../types";

export const localeLabels: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
  vi: "VI",
};

export const pagePaths: Record<PageKey, string> = {
  home: "",
  about: "about",
  solutions: "solutions",
  technology: "technology",
  quality: "quality",
  knowledge: "knowledge",
  contact: "contact",
};

export function localizedPath(locale: Locale, pageKey: PageKey): string {
  const path = pagePaths[pageKey];
  return path ? `/${locale}/${path}/` : `/${locale}/`;
}

export const navigation: Record<Locale, NavItem[]> = {
  ko: [
    { label: "회사소개", href: "/ko/about/" },
    { label: "제품·솔루션", href: "/ko/solutions/" },
    { label: "기술지원", href: "/ko/technology/" },
    { label: "품질관리", href: "/ko/quality/" },
    { label: "기술자료", href: "/ko/knowledge/" },
  ],
  en: [
    { label: "Company", href: "/en/about/" },
    { label: "Solutions", href: "/en/solutions/" },
    { label: "Support", href: "/en/technology/" },
    { label: "Quality", href: "/en/quality/" },
    { label: "Knowledge", href: "/en/knowledge/" },
  ],
  vi: [
    { label: "Giới thiệu", href: "/vi/about/" },
    { label: "Giải pháp", href: "/vi/solutions/" },
    { label: "Hỗ trợ", href: "/vi/technology/" },
    { label: "Chất lượng", href: "/vi/quality/" },
    { label: "Tài liệu", href: "/vi/knowledge/" },
  ],
};
