import { AxiosError } from "axios";
import {
  IAuthRequest,
  IAuthResponse,
  IRegisterRequest,
  LocalStorageToken,
} from "./types";
import { loginInstance, userInstance, registerInstance } from "@/constants/";

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
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};

/**
 * User Request
 * @param {object} loginResponse Object with Token
 * @returns {string | object} token or AxiosError
 **/
export const userRequest = async (
  loginResponse: Partial<IAuthResponse | LocalStorageToken>
): Promise<IAuthResponse | AxiosError> => {
  try {
    const response = await userInstance("/profile", {
      headers: {
        Authorization: `Bearer ${
          typeof loginResponse === "object"
            ? loginResponse?.access_token
            : loginResponse
        }`,
      },
    });
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};

/**
 * User Register
 * @param {object} values Form data
 * @returns {string | object} status and user (email and full name) or AxiosError
 **/
export const registerRequest = async (
  values: IRegisterRequest
): Promise<IAuthResponse | AxiosError> => {
  try {
    const response = await registerInstance("/register", {
      data: {
        full_name: values.fullName,
        email: values.username,
        password: values.password,
      },
    });
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};
