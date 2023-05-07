import axios, { AxiosError } from "axios";
import { IAuthRequest, IAuthResponse } from "./types";

export const authRequest = async (
  url: string,
  values: IAuthRequest
): Promise<IAuthResponse | AxiosError> => {
  try {
    const response = await axios.post(url, values);
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};
