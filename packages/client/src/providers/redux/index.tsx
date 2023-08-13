"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/providers";
import { ILayouts } from "../../../../libs/sharedTypes";

export { default as store } from "./store";
export * from "./AuthSlice";
export * from "./AuthSlice/AuthSlice";
export const ReduxProvider: React.FC<ILayouts> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
