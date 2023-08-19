"use server";
import React from "react";
import "../styles/Global.scss";
import { ILayouts } from "../../../libs/sharedTypes";
import { AppWrapper } from "@/containers";

const RootLayout: React.FC<ILayouts> = ({ children }) => {
  return (
    <AppWrapper>
      <body>{children}</body>
    </AppWrapper>
  );
};
export default RootLayout;
