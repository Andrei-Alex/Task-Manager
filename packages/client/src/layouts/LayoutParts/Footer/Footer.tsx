"use client";
import React, { useContext } from "react";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ThemeSwitcher";
import { styles } from ".";
import { LayoutContext } from "@/providers";

const Footer: React.FC = () => {
  const [isMobile] = useContext(LayoutContext);
  return (
    <footer className={styles.footer}>
      <div>{!isMobile && <ThemeSwitcher />}</div>
    </footer>
  );
};

export default Footer;
