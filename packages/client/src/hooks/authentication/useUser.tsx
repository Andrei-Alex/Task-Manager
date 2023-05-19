import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser, IAuth } from "@/providers";

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
