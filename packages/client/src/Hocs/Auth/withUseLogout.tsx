import React from "react";
import { useLogout } from "@/hooks";
import { IAuthButtons } from "@/components/AuthButtons";

/**
 * withUseLogout Higher-Order Component (HOC)
 *
 * This Higher-Order Component (HOC) wraps a given component with the `useLogout` hook functionality,
 * providing it with the `haveProfile` and `logout` props. It enhances the component by adding conditional
 * rendering and functionality.
 *
 * @function
 * @param {React.FC<Partial<IAuthButtons>>} Component - The component to be wrapped.
 * @returns {React.FC} A new component with `useLogout` functionality injected as props.
 */
export const withUseLogout = (Component: React.FC<Partial<IAuthButtons>>) => {
  return () => {
    const { haveProfile, logout } = useLogout();
    return <Component haveProfile={haveProfile} logout={logout} />;
  };
};
