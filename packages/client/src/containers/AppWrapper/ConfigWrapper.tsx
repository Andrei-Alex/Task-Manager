"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ITheme, RootState } from "@/providers";
import { IConfigWrapper } from ".";
import "../../styles/Global.scss";
import { useUser } from "@/hooks/authentication/useUser";

/**
 * ConfigWrapper Component
 *
 * This component serves as a wrapper that configures certain aspects of the application's behavior based on provided props.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} [props.lang="en"] - The language code for the HTML element and webApp.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * @returns {React.ReactElement} A React element representing the configured HTML wrapper.
 */
const ConfigWrapper: React.FC<Partial<IConfigWrapper>> = ({
  lang = "en",
  children,
}) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty(
      "--theme-mode",
      isDarkMode ? "darkMode" : "lightMode"
    );
  }, [isDarkMode]);

  useUser();
  return (
    <html lang={lang} className={`${isDarkMode ? "darkMode" : "lightMode"}`}>
      {children}
    </html>
  );
};

export default React.memo(ConfigWrapper);
