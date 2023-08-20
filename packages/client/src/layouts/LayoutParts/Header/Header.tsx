"use client";
import React, { useState } from "react";
import { IHeader, styles } from "./index";
import { LinkList } from "../../../atoms";
import { Logo } from "@/atoms";
import { AuthButtons, BurgerButton } from "@/components";
import { useWindowWidth } from "@/hooks";
const Header: React.FC<IHeader> = ({ logo, navElements, appData }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile] = useWindowWidth();
  return (
    <header className={styles.header}>
      <Logo logo={logo} appData={appData} />
      <div>
        {isMobile ? (
          <BurgerButton
            isOpen={isBurgerOpen}
            onClickHandler={() => {
              setIsBurgerOpen(!isBurgerOpen);
            }}
          />
        ) : (
          <>
            <nav className={styles.leftNav}>
              <LinkList listElements={navElements} />
            </nav>
            <AuthButtons />
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
