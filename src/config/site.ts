export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cyber-Teacher-CRM",
  description: "CRM система для репетиторов",
  navItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Цены",
      href: "/pricing",
    },
    {
      label: "Блог",
      href: "/blog",
    },
    {
      label: "Описание",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {

  },
};
