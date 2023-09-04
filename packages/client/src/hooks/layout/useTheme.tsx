import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleTheme } from "@/providers";
import { useEffect } from "react";
import { THEME } from "@/constants";

const useTheme = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isDarkMode === null) {
      if (!localStorage.getItem(THEME)) {
        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          dispatch(toggleTheme(true));
        }
        if (window.matchMedia("(prefers-color-scheme: light)")) {
          dispatch(toggleTheme(false));
        }
      } else {
        localStorage.getItem(THEME) === "dark"
          ? dispatch(toggleTheme(true))
          : dispatch(toggleTheme(false));
      }
    }
  }, []);
  return { isDarkMode };
};
