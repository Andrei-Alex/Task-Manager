"use client";
import React from "react";
import { ReduxProvider } from "@/providers";
import { IAppWrapper } from ".";
import ConfigWrapper from "./ConfigWrapper";
/**
 * Client side component
 * The `AppWrapper` component serves as a wrapper for the application.
 * It encapsulates the main application components and provides them with Redux state management.
 *
 * @component
 * @param {React.ReactNode} props.children - The child components to be wrapped with ReduxProvider.
 * @returns {JSX.Element} The JSX representation of the AppWrapper component.
 */
export const AppWrapper: React.FC<IAppWrapper> = ({ children }) => {
  return (
    <ReduxProvider>
      <ConfigWrapper>{children}</ConfigWrapper>
    </ReduxProvider>
  );
};
