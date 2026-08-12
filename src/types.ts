export type Locale = "ko" | "en" | "vi";

export type PageKey =
  | "home"
  | "about"
  | "solutions"
  | "technology"
  | "quality"
  | "knowledge"
  | "contact";

export type NavItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type ProductFamily = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  materials: string;
  process: string;
  cta: string;
};

export type ProductDetail = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  materials: string[];
  processes: string[];
  checks: string[];
  support: string[];
  cta: string;
};

export type SolutionItem = {
  title: string;
  summary: string;
  checks: string[];
};

export type BlogLink = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  meta: string;
  summary: string;
  date: string;
  cta: string;
};

export type PageSection = {
  eyebrow?: string;
  title: string;
  summary: string;
  items?: string[];
};

export type StaticPageContent = {
  key: Exclude<PageKey, "home">;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  ctaLabel: string;
  ctaHref: string;
  sections: PageSection[];
};
