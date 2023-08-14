import { HealthData } from ".";
import { healthInstance } from "@/constants";
import { AxiosError, AxiosResponse } from "axios";

export const getHealth = async (): Promise<HealthData | AxiosError> => {
  try {
    const response = await healthInstance({});
    return response.data;
  } catch (error) {
    console.error("Fetch Failed :", error);
    return error as AxiosError;
  }
};
