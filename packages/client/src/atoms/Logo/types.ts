import { IAppData } from "@/services/appData";
import { Logo } from "../../../../libs/sharedTypes";

export interface ILogo {
  logo: Logo;
  appData?: IAppData;
}
