import {useCallback, useEffect, useState} from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { DataType, ErrorType } from "./types";
import { useDispatch } from "react-redux";
import { authRequest, IAuthRequest, userRequest } from "@/services";
import { setToken, setUser } from "@/providers/redux/AuthSlice/AuthSlice";

/**
 * The useLogin hook is a custom React hook designed to facilitate user authentication and login functionalities within a React application.
 * It handles the process of authenticating users, managing access tokens and user data, and handling potential errors during the login flow.
 *
 * Usage:
 *
 * To utilize the useLogin hook, import it into the functional component, and invoke it.
 * The returned login function can be called when a user attempts to log in, passing the appropriate login credentials.
 * Upon successful login, the data and userData properties will hold the relevant response data, and any errors will be captured in the error property.
 *
 * The hook automatically manages access tokens by storing them in localStorage and synchronizing the state with the Redux store using the dispatch
 * function provided by react-redux.
 * Additionally, the hook facilitates automatic navigation to the "home" page after a successful login, with a slight delay of 1 seconds before redirection.
 *
 * Ensure that you handle error conditions appropriately in your application, such as displaying error messages to the user or taking appropriate actions
 * based on the nature of the error.
 *
 * @return {object} data Axios response if credentials are correct
 * @return {object} error Axios error if 400 - 500
 * @return {object} userData Axios response if token is valid
 * @return {function} login handle login
 * **/
export function useLogin() {
  const [data, setData] = useState<DataType>(null);
  const [error, setError] = useState<ErrorType>(null);
  const [userData, setUserData] = useState<DataType>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem("access_token", data.access_token);
      dispatch(setToken(data.access_token));
    } else if (error) {
      localStorage.removeItem("access_token");
    }
  }, [data, error]);

  useEffect(() => {
    if (userData?.email) {
      localStorage.setItem("userEmail", userData.email);
      dispatch(setUser(userData));
      setTimeout(() => {
        router.push("home");
      }, 1000);
    } else if (error) {
      localStorage.removeItem("userEmail");
    }
  }, [userData, error]);


  const login = useCallback(async (values: IAuthRequest) => {
    const response = await authRequest(values);
    if (response instanceof AxiosError) {
      setError(response);
    } else {
      setData(response);
      const user = await userRequest(response);
      if (user instanceof AxiosError) {
        setError(user);
      } else {
        setUserData(user);
        setError(null);
      }
    }
   }, []);

  return { data, error, userData, login };
}
