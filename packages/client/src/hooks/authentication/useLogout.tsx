"use client";
import { useEffect, useState } from "react";
import { AUTH_EMAIL, AUTH_KEY } from "@/constants";
export const useLogout = () => {
  const [haveProfile, setHaveProfile] = useState(false);
  useEffect(() => {
    const profile = !!localStorage.getItem(AUTH_EMAIL);
    setHaveProfile(profile);
  }, []);

  const logout = () => {
    localStorage.removeItem(AUTH_EMAIL);
    localStorage.removeItem(AUTH_KEY);
  };

  return { haveProfile, setHaveProfile, logout };
};
