"use client";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { DataType, ErrorType } from "./types";
import { IRegisterRequest, registerRequest } from "@/services";

/**
 * Create new user
 * Redirect to login page if successful
 * @return {object} data Axios response (status, userName and email)
 * @return {object} error Axios error if 400 - 500
 * @return {function} register handle register request
 * **/
export function useRegister() {
  const [data, setData] = useState<DataType>(null);
  const [error, setError] = useState<ErrorType>(null);
  const router = useRouter();

  const register = async (values: IRegisterRequest) => {
    const response = await registerRequest(values);
    if (response instanceof AxiosError) {
      setError(response);
    } else {
      setData(response);
      setTimeout(() => {
        router.push("auth/login");
      }, 3000);
    }
  };

  return { data, error, register };
}
