import { IAppData } from "@/services/appData";

export type ILogo = {
  logo: {
    name?: string;
    src?: string;
  };
  appData?: IAppData;
};
