"use client";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleTheme } from "@/providers";
import { SwitchButton } from "@/atoms";
export const ThemeSwitcher = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  return (
    <SwitchButton
      checked={isDarkMode}
      toggleHandler={() => {
        dispatch(toggleTheme(isDarkMode));
      }}
      mainIcon={
        <IconSun
          color={"white"}
          size="1.25rem"
          stroke={1.5}
          data-testid="lightModeIcon"
        />
      }
      secondaryIcon={
        <IconMoonStars
          color={"black"}
          size="1.25rem"
          stroke={1.5}
          data-testid="darkModeIcon"
        />
      }
    />
  );
};

export default ThemeSwitcher;
