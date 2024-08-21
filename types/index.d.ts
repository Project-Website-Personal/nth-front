type Route = {
  path: string;
  title?: string;
  isPublic?: boolean;
};

type Routes = {
  [key: string]: Route;
};

type MenuItem = {
    label: string;
    link: string;
    icon?: string;
};

type DropdownItem = {
    label: string;
    link?: string;
    icon?: string;
    action?: () => void | string;
};

type CardItem = {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
};

type Dialog = {
  label: string;
  link: string;
  icon?: string;
};

