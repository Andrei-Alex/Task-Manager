import React from "react";
import { IHeader, styles } from "./index";
import { LinkList } from "../../../atoms";
import { Logo } from "@/atoms";
import { AuthButtons } from "@/components";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ThemeSwitcher";
const Header: React.FC<IHeader> = ({ logo, navElements, appData }) => {
  return (
    <header className={styles.header}>
      <Logo logo={logo} appData={appData} />
      <div>
        <nav className={styles.leftNav}>
          <LinkList listElements={navElements} />
          <ThemeSwitcher />
        </nav>
        <AuthButtons />
      </div>
    </header>
  );
};
export default Header;
