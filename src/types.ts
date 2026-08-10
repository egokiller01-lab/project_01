export type Locale = "ko" | "en" | "vi";

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
  meta: string;
};
