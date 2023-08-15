"use client";
import React from "react";
import { IHeader, styles } from "./index";
import Link from "next/link";
import { LinkList } from "../../atoms";
import { useLogout } from "../../hooks";
import { Logo } from "@/atoms";
const Header: React.FC<IHeader> = ({ logo, navElements, appData }) => {
  const { haveProfile, logout } = useLogout();

  return (
    <header className={styles.header}>
      <Logo logo={logo} appData={appData} />
      <div>
        <nav className={styles.leftNav}>
          <LinkList listElements={navElements} />
        </nav>
        <nav>
          <ul>
            {!haveProfile ? (
              <>
                <li>
                  <Link href={"/auth/register"}>Register</Link>
                </li>
                <li>
                  <Link href={"/auth/login"}>Login</Link>
                </li>
              </>
            ) : (
              <Link
                onClick={() => {
                  logout();
                }}
                href="/auth/login"
              >
                Logout
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
