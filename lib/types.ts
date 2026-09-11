export type NavItem = {
  label: string;
  href?: string;
  exact?: boolean;
  children?: Array<{
    label: string;
    href: string;
    exact?: boolean;
  }>;
};

export interface MessageBannerEntry {
  id: string;
  message: string;
  dismissible?: boolean;
}

export interface PageFields {
  title: string;
  slug: string;
  sections?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: {
    fields?: {
      file?: { url?: string };
      title?: string;
    };
  };
}

export interface CSSStyle {
  fields: {
    description?: string;
    tailwindClasses?: string;
    css?: Record<string, string>;
  };
}