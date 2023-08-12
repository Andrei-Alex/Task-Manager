import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";
import { setError } from "@/providers";

export const withAuth = (Component: React.FC) => {
  return () => {
    const router = useRouter();
    const { logged, error } = useAuth();
    useEffect(() => {
      if ((!logged && logged !== null) || error) {
        setError(error);
        router.push("/login");
        return;
      }
      setError(null);
    }, [logged, error]);

    if (logged) return <Component />;
    return null;
  };
};
