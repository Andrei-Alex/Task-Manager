import { useState } from "react";
import { AxiosError } from "axios";
import { authRequest, IAuthRequest } from "@/services";

function useLogin(url: string) {
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = (values: IAuthRequest) => {
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

  return { data, error, fetchData };
}

export default useLogin;
