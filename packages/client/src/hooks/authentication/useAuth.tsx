import { useEffect, useState } from "react";
import { AUTH_EMAIL, AUTH_KEY } from "@/constants";
import { userRequest } from "@/services";
import { AxiosError } from "axios";

/**
 * useAuth
 * Check if the token is correct
 * @return {boolean} logged
 * @return {Object} AxiosError
 */
export const useAuth = () => {
  const [logged, setLogged] = useState<boolean | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem(AUTH_KEY) !== null) {
        const response = await userRequest(localStorage.getItem(AUTH_KEY));
        if (response instanceof AxiosError) {
          setError(response);
        } else {
          if (response.email) {
            localStorage.setItem(AUTH_EMAIL, response.email);
            setLogged(true);
            setError(null);
          }
        }
      } else {
        localStorage.removeItem(AUTH_KEY);
        setLogged(false);
      }
    })();
  }, []);

  return { logged, error };
};
