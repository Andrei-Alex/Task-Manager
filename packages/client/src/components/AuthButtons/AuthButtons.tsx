import Link from "next/link";
import React from "react";
import { IAuthButtons, styles } from ".";
import { withUseLogout } from "@/Hocs";
import isEqual from "lodash/isEqual";

export const AuthButtons: React.FC<Partial<IAuthButtons>> = ({
  haveProfile,
  logout,
  registerPath = "/auth/register",
  loginPath = "/auth/login",
}) => {
  return (
    <nav className={styles.authNav}>
      <ul>
        {!haveProfile ? (
          <>
            <li>
              <Link className={styles.link} href={registerPath}>
                Register
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={loginPath}>
                Login
              </Link>
            </li>
          </>
        ) : (
          <Link
            className={styles.link}
            onClick={() => {
              if (logout) {
                logout();
              }
            }}
            href={loginPath}
          >
            Logout
          </Link>
        )}
      </ul>
    </nav>
  );
};

const arePropsEqual = (
  prevProps: Partial<IAuthButtons>,
  nextProps: Partial<IAuthButtons>
) => {
  return (
    prevProps.haveProfile === nextProps.haveProfile &&
    isEqual(prevProps.logout, nextProps.logout) &&
    prevProps.registerPath === nextProps.registerPath &&
    prevProps.loginPath === nextProps.loginPath
  );
};
export default withUseLogout(React.memo(AuthButtons, arePropsEqual));
