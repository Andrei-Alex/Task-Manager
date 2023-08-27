"use client";
import { useCallback, useEffect, useState } from "react";
import { AUTH_EMAIL, AUTH_KEY } from "@/constants";
/**
 * A custom hook for handling user logout functionality and tracking profile status.
 * It checks for a user profile in localStorage, provides methods to manage the profile,
 * and facilitates user logout by clearing authentication data from localStorage.
 *
 * @function
 * @returns {Object} An object containing profile status, methods to manage the profile, and a logout function.
 */
export const useLogout = () => {
  const [haveProfile, setHaveProfile] = useState(false);
  useEffect(() => {
    const profile = !!localStorage.getItem(AUTH_EMAIL);
    setHaveProfile(profile);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_EMAIL);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  return { haveProfile, setHaveProfile, logout };
};
