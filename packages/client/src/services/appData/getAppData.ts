import { AxiosError } from "axios";
import { appDataServerSideInstance, appDateInstance } from "@/constants";
import { AppDataServer, IAppData } from "@/services/appData/types";

export const getAppData = async (): Promise<AppDataServer | AxiosError> => {
  try {
    const response = await appDateInstance({});
    return response.data;
  } catch (error) {
    console.error(error);
    return error as AxiosError;
  }
};

export const getServerSideAppData = async () => {
  try {
    const response = await appDataServerSideInstance({});
    return response.data;
  } catch (error) {
    console.error(error);
    return error as AxiosError;
  }
};
