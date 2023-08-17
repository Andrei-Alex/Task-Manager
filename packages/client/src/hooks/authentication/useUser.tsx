"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser, IAuth } from "@/providers";

/**
 * * A custom hook for managing user data and authentication token.
 *  * It retrieves user information and token from the Redux store and local storage,
 *  * updating the Redux store with the stored values.
 *  *
 *  * @function
 *  * @returns {Object} An object containing the user data and authentication token.
 *  *
 **/
export const useUser = () => {
  const user = useSelector((state: IAuth) => state.auth.user);
  const token = useSelector((state: IAuth) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      return;
    }
    dispatch(setToken(localStorage.getItem("access_token")));
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      return;
    }
    dispatch(setUser(localStorage.getItem("user")));
  }, []);

  return { user, token };
};
