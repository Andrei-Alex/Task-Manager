import { IAuthResponse } from "@/services";
import { AxiosError } from "axios";

export type ConfirmMessage = {
  successMsg: string | null;
  errorMsg: string | null;
};

export type DataType = IAuthResponse | null;
export type ErrorType = AxiosError | null;
