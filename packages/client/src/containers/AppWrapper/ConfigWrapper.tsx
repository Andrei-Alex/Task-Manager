"use client";
import React from "react";
import { IConfigWrapper } from ".";
import "../../styles/Global.scss";
import { useUser } from "@/hooks/authentication/useUser";
import { useTheme } from "@/hooks";

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
export const ConfigWrapper: React.FC<Partial<IConfigWrapper>> = ({
  lang = "en",
  children,
}) => {
  const { isDarkMode } = useTheme();
  useUser();
  return (
    <html lang={lang} className={`${isDarkMode ? "darkMode" : "lightMode"}`}>
      {children}
    </html>
  );
};

export default React.memo(ConfigWrapper);
