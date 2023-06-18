import React from "react";
import { styles, IAuthenticationLayout } from "./index";
const AuthenticationLayout: React.FC<IAuthenticationLayout> = ({
  children,
}) => {
  return (
    <>
      <main className={styles.page}>{children}</main>
    </>
  );
};
export default AuthenticationLayout;
