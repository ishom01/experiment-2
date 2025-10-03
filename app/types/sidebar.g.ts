export {}
declare global {
  interface BaseSidebarItem {
    id: string;
    icon?: string | null;
    label: string;
  }

  interface SidebarItem extends BaseSidebarItem {
    href?: string;
  }

  interface SidebarGroup extends BaseSidebarItem {
    children?: SidebarItem[];
  }

  type SidebarMenu = (SidebarItem | SidebarGroup)[];
}