import React from "react";
import { IHeader, styles } from "./index";
import Link from "next/link";
const Header: React.FC<IHeader> = ({ logo, navElements }) => {
  return (
    <header className={styles.header}>
      <div>{logo.src ? <image href={logo.src} /> : <h1>logo.name</h1>}</div>
      <div>
        <nav className={styles.leftNav}>
          <ul className={styles.list}>
            {navElements.map((navElement: any) => (
              <li key={navElement.id}>
                <Link href={navElement.navigateTo}>{navElement.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link href={"register"}>Register</Link>
            </li>
            <li>
              <Link href={"login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
