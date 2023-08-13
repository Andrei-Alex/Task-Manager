import { ILayouts } from "../../../../libs/sharedTypes";
import { Metadata } from "next";
import React from "react";
import { styles } from ".";

export const metadata: Metadata = {
  title: "Authentication Page",
  description: "Authenticate yourself",
};
const AuthenticationLayout: React.FC<ILayouts> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
export default AuthenticationLayout;
