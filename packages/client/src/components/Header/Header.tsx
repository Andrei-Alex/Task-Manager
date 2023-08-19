import React from "react";
import { IHeader, styles } from "./index";
import Link from "next/link";
import { LinkList } from "../../atoms";
import { useLogout } from "../../hooks";
import { Logo } from "@/atoms";
import { AuthButtons } from "@/components";
import { withUseLogout } from "@/Hocs";
const Header: React.FC<IHeader> = ({ logo, navElements, appData }) => {
  return (
    <header className={styles.header}>
      <Logo logo={logo} appData={appData} />
      <div>
        <nav className={styles.leftNav}>
          <LinkList listElements={navElements} />
        </nav>
        <AuthButtons />
      </div>
    </header>
  );
};
export default Header;
