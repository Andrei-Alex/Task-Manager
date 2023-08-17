"use client";
import { useEffect, useState } from "react";
import { AUTH_EMAIL, AUTH_KEY } from "@/constants";
import { userRequest } from "@/services";
import { AxiosError } from "axios";

/**
 * A custom hook for managing user authentication status and related errors.
 * It checks for authentication data in localStorage and updates the authentication status accordingly.
 *
 * @function
 * @returns {Object} An object containing the user's authentication status and related error information.
 *
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
