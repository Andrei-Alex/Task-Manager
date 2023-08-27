"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { IHeader, styles } from "./index";
import { Logo } from "@/atoms";
import { AuthButtons, BurgerButton } from "@/components";
import { LayoutContext } from "@/providers";

const Header: React.FC<IHeader> = ({ logo, appData }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile] = useContext(LayoutContext);

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
