import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";
import { setError } from "@/providers";

/**
 * A higher-order component (HOC) for adding authentication protection to a component.
 * It ensures that the wrapped component is only rendered when the user is logged in,
 * otherwise it redirects to the login page.
 *
 * @function
 * @param {React.FC} Component - The component to be wrapped with authentication protection.
 * @returns {React.FC|null} The wrapped component or null, depending on the authentication status.
 *
 * **/
export const withAuth = (Component: React.FC) => {
  return () => {
    const router = useRouter();
    const { logged, error } = useAuth();
    useEffect(() => {
      if ((!logged && logged !== null) || error) {
        setError(error);
        router.push("/auth/login");
        return;
      }
      setError(null);
    }, [logged, error]);

    if (logged) return <Component />;
    return null;
  };
};
