import MainLayout from "@/layouts/MainLayout/MainLayout";
import { logo, navElements } from "@/constants";
import React from "react";
import type { Metadata } from "next";
import { ILayouts } from "../../../../libs/sharedTypes";

export const metadata: Metadata = {
  title: "Kanban Home page",
  description: "Manage your board",
};

const Layout: React.FC<ILayouts> = ({ children }) => {
  console.log("server");
  return (
    <MainLayout logo={logo} navElements={navElements}>
      {children}
    </MainLayout>
  );
};
export default Layout;
