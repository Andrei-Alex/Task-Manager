import React from "react";
import { useLogout } from "@/hooks";
import { IAuthButtons } from "@/components/LoginButtons";

export const withUseLogout = (Component: React.FC<Partial<IAuthButtons>>) => {
  return () => {
    const { haveProfile, logout } = useLogout();
    return <Component haveProfile={haveProfile} logout={logout} />;
  };
};
