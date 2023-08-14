import { AxiosResponse } from "axios";

export type appData = {
  serverVersion: string;
};
export interface IAppData {
  data: AxiosResponse<appData>;
}
