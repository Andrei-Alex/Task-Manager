import { children, Logo, NavElement } from "../../../../libs/sharedTypes";

export interface IMainLayout {
  children: children;
  navElements: NavElement[];
  logo: Logo;
}
