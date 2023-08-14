import { AxiosError } from "axios";
import { appDateInstance } from "@/constants";
import { appData, IAppData } from "@/services/appData/types";

export const getAppData = async (): Promise<appData | AxiosError> => {
  try {
    const response = await appDateInstance({});
    return response.data;
  } catch (error) {
    console.error(error);
    return error as AxiosError;
  }
};
