import React from "react";
import { useAuth } from "@/hooks";

export const withAuth = (Component: React.FC) => {
  return () => {
    const { logged } = useAuth();
    if (!logged) {
      return null;
    }
    return <Component />;
  };
};
