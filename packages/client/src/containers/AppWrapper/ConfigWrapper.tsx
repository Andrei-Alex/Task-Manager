"use client";
import React from "react";
import { useSelector } from "react-redux";
import { ITheme } from "@/providers";
import { IConfigWrapper, styles } from ".";

const ConfigWrapper: React.FC<Partial<IConfigWrapper>> = ({
  lang = "en",
  children,
}) => {
  const isDarkMode = useSelector((state: ITheme) => state.theme.isDarkMode);
  return (
    <html
      lang={lang}
      className={`${isDarkMode ? styles.darkMode : styles.lightMode}`}
    >
      {children}
    </html>
  );
};

export default React.memo(ConfigWrapper);
