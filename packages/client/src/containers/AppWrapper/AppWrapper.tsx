"use client";
import React from "react";
import { ReduxProvider } from "@/providers";
import { ILayouts } from "../../../../libs/sharedTypes";
export const AppWrapper: React.FC<ILayouts> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};
