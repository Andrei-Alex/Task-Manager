import MainLayout from "@/layouts/MainLayout/MainLayout";
import React from "react";
import type { Metadata } from "next";
import { appDataServerSideInstance, logo, navElements } from "@/constants";
import { AsyncComponent, ILayouts } from "../../../../libs/sharedTypes";
import { getHealth } from "@/services";

export const metadata: Metadata = {
  title: "Kanban Home page",
  description: "Manage your board",
};

const Layout: ({ children }: ILayouts) => AsyncComponent = async ({
  children,
}) => {
  const res = await appDataServerSideInstance({});

  return (
    <MainLayout logo={logo} navElements={navElements}>
      {children}
    </MainLayout>
  );
};
export default Layout;
