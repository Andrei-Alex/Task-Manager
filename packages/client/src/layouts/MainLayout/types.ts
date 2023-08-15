import { children, Logo, NavElement } from "../../../../libs/sharedTypes";
import { IAppData } from "@/services/appData";

export interface IMainLayout {
  children: children;
  navElements: NavElement[];
  logo: Logo;
  appData: IAppData;
}
