import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import { setError } from "@/providers";

export const withAuth = (Component: React.FC) => {
  return () => {
    const router = useRouter();
    const { logged, error } = useAuth();
    if (!logged) {
      setError(error);
      router.push("/login");
      return null;
    }
    setError(null);
    return <Component />;
  };
};
