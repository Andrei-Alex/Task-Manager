"use client";
import React from "react";
import { IMainLayout, styles } from "./index";
import { Header } from "@/components";
const MainLayout: React.FC<IMainLayout> = ({ children, logo, navElements }) => {
  console.log("client");
  return (
    <>
      <Header logo={logo} navElements={navElements} />
      <main className={styles.main}>{children}</main>
    </>
  );
};
export default MainLayout;
