import { AxiosError } from "axios";
import { IAuthRequest, IAuthResponse } from "./types";
import { loginInstance } from "@/constants/";

/**
 * Login Request
 * @param {object} values Username and password
 * @returns {string | object} token or AxiosError
 **/
export const authRequest = async (
  values: IAuthRequest
): Promise<IAuthResponse | AxiosError> => {
  try {
    const response = await loginInstance("/login", { params: { ...values } });
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};
