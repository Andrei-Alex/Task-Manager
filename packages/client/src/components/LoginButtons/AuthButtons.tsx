import Link from "next/link";
import React from "react";
import { IAuthButtons } from ".";
import { withUseLogout } from "@/Hocs";

const AuthButtons: React.FC<Partial<IAuthButtons>> = ({
  haveProfile,
  logout,
  registerPath = "/auth/register",
  loginPath = "/auth/login",
}) => {
  return (
    <nav>
      <ul>
        {!haveProfile ? (
          <>
            <li>
              <Link href={registerPath}>Register</Link>
            </li>
            <li>
              <Link href={loginPath}>Login</Link>
            </li>
          </>
        ) : (
          <Link
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

export default withUseLogout(AuthButtons);
