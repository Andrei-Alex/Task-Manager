"use client";
import React, { useState } from "react";
import { IHeader, styles } from "./index";
import { LinkList } from "../../../atoms";
import { Logo } from "@/atoms";
import { AuthButtons, BurgerButton } from "@/components";
import { useWindowWidth } from "@/hooks";
import Link from "next/link";
const Header: React.FC<IHeader> = ({ logo, navElements, appData }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile] = useWindowWidth();
  return (
    <header className={styles.header}>
      <Link href={"/home"}>
        <Logo logo={logo} appData={appData} />
      </Link>
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
            <AuthButtons />
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
