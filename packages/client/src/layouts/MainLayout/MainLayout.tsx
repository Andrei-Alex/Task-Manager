"use client";
import React from "react";
import { IMainLayout, styles } from "./index";
import { Header } from "@/components";
const MainLayout: React.FC<IMainLayout> = ({ children, logo, navElements }) => {
  return (
    <>
      <Header logo={logo} navElements={navElements} />
      <main className={styles.main}>{children}</main>
    </>
  );
};
export default MainLayout;
