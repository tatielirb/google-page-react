export interface MenuItemProps {
  link: string;
  title: string;
  classNameLink?: string;
}

export interface NavProps {
  items: MenuItemProps[];
}
