import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleTheme } from "@/providers";
import { useEffect } from "react";
import { THEME } from "@/constants";

export const useTheme = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isDarkMode === null) {
      if (!localStorage.getItem(THEME)) {
        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          dispatch(toggleTheme(true));
          localStorage.setItem(THEME, "dark");
        } else if (window.matchMedia("(prefers-color-scheme: light)")) {
          dispatch(toggleTheme(false));
          localStorage.setItem(THEME, "light");
        }
      } else {
        if (localStorage.getItem(THEME) === "dark") {
          dispatch(toggleTheme(true));
        } else {
          dispatch(toggleTheme(false));
        }
      }
    }
  }, []);
  return { isDarkMode };
};
