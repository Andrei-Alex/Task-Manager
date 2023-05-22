import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { authRequest, IAuthRequest } from "@/services";
import { useRouter } from "next/router";
import { DataType, ErrorType } from "./types";
import { setToken } from "@/providers/redux/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";
/**
 * if data
 * Set access token in both localStorage and redux
 * **/
export function useLogin() {
  const [data, setData] = useState<DataType>(null);
  const [error, setError] = useState<ErrorType>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem("access_token", data.access_token);
      dispatch(setToken(data.access_token));
      setTimeout(() => {
        router.push("home");
      }, 3000);
    } else if (error) {
      localStorage.removeItem("access_token");
    }
  }, [data, error]);
  const login = async (values: IAuthRequest) => {
    const response = await authRequest(values);
    if (response instanceof AxiosError) {
      setError(response);
    } else {
      setData(response);
      //const user = await userRequest(response);
      setError(null);
    }
  };

  return { data, error, login };
}
