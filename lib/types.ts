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
};
