import React from "react";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ThemeSwitcher";
import { styles } from ".";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
