import { AxiosError } from "axios";
import { appDataServerSideInstance, appDateInstance } from "@/constants";
import { AppDataServer } from "@/services/appData/types";

/**
 * This function fetches Back-end data using the appDataServerSideInstance.
 * @returns {Promise<Object|AxiosError>} A Promise that resolves to the fetched data or an AxiosError in case of an error.
 */
export const getAppData = async (): Promise<AppDataServer | AxiosError> => {
  try {
    const response = await appDateInstance({});
    return response.data;
  } catch (error) {
    console.error(error);
    return error as AxiosError;
  }
};

/**
 * This function fetches Next server-side data using the appDataServerSideInstance.
 * @returns {Promise<Object|AxiosError>} A Promise that resolves to the fetched data or an AxiosError in case of an error.
 */
export const getServerSideAppData = async () => {
  try {
    const response = await appDataServerSideInstance({});
    return response.data;
  } catch (error) {
    console.error(error);
    return error as AxiosError;
  }
};
