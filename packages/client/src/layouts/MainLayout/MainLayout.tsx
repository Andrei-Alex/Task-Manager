"use client";
import React from "react";
import { IMainLayout, styles } from "./index";
import { Header } from "@/components";
import { logo } from "@/constants";
const MainLayout: React.FC<IMainLayout> = ({
  children,
  appData,
  navElements,
}) => {
  return (
    <>
      <Header logo={logo} appData={appData} navElements={navElements} />
      <main className={styles.main}>{children}</main>
    </>
  );
};
export default MainLayout;
