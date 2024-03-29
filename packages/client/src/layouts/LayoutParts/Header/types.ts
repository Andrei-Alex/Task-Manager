import { Logo, NavElement } from "../../../../../libs/sharedTypes";
import { IAppData } from "@/services/appData";

export interface IHeader {
  navElements?: NavElement[];
  appData: IAppData;
  logo: Logo;
  mobileMenuVisibility: boolean;
  mobileMenuVisibilityHandler: (arg: boolean) => void;
}
