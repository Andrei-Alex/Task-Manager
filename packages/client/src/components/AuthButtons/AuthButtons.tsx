import Link from "next/link";
import React from "react";
import { IAuthButtons, styles } from ".";
import { withUseLogout } from "@/Hocs";
import isEqual from "lodash/isEqual";

/**
 * AuthButtons Component
 *
 * Display authentication-related links based on the user's authentication status.
 * This component renders Register and Login links for unauthenticated users and a Logout link for authenticated users.
 * It supports custom paths and logout functionality. Utilizes React.memo for optimal rendering performance and a custom
 * props comparison function.
 *
 * ### Usage
 * ```jsx
 * <AuthButtons
 * haveProfile={true}
 * logout={() => logoutHandler()}
 * />
 *
 * ```
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.haveProfile - Indicates whether the user has a profile (authenticated).
 * @param {Function} [props.logout] - The function to execute when the Logout link is clicked.
 * @param {string} [props.registerPath="/auth/register"] - The path for the Register link.
 * @param {string} [props.loginPath="/auth/login"] - The path for the Login link.
 * @param {Object} props.customNavStyles - Custom nav (container) styles.
 * @param {Object} props.customListStyles - Custom list (ul) styles.
 * @returns {React.ReactElement} A navigation component displaying authentication links.
 */
export const AuthButtons: React.FC<Partial<IAuthButtons>> = ({
  haveProfile,
  logout,
  registerPath = "/auth/register",
  loginPath = "/auth/login",
  customNavStyles = {},
  customListStyles = {},
}) => {
  return (
    <nav className={styles.authNav} style={customNavStyles}>
      <ul style={customListStyles}>
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
    isEqual(prevProps.customNavStyles, nextProps.customNavStyles) &&
    isEqual(prevProps.logout, nextProps.logout) &&
    prevProps.registerPath === nextProps.registerPath &&
    prevProps.loginPath === nextProps.loginPath
  );
};
export default withUseLogout(React.memo(AuthButtons, arePropsEqual));
