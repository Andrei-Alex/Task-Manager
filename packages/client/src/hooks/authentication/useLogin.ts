import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { authRequest, IAuthRequest } from "@/services";
import { useRouter } from "next/router";
import { DataType, ErrorType } from "./types";

export function useLogin(url: string) {
  const [data, setData] = useState<DataType>(null);
  const [error, setError] = useState<ErrorType>(null);
  const router = useRouter();

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem("access_token", data.access_token);
      setTimeout(() => {
        router.push("home");
      }, 3000);
    } else if (error) {
      localStorage.removeItem("access_token");
    }
  }, [data, error]);
  const login = (values: IAuthRequest) => {
    authRequest(url, values)
      .then((response) => {
        if (response instanceof AxiosError) {
          setError(response);
        } else {
          setData(response);
          setError(null);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { data, error, login };
}
