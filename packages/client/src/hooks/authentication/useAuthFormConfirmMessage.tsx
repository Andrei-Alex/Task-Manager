"use client";
import { useEffect, useState } from "react";
import { ConfirmMessage, DataType, ErrorType } from "./types";

/**
 * A custom hook that generates a confirmation message based on authentication form results.
 * It takes the form data and error from an authentication process and generates success
 * and error messages accordingly.
 *
 * @function
 * @param {Object} data - The data from the authentication form, indicating success.
 * @param {Object} error - The error object from the authentication form, indicating failure.
 * @returns {Object} An object containing the generated confirmation messages and a function to update them.
 */
export const useAuthFormConfirmMessage = (data: DataType, error: ErrorType) => {
  const [confirmMessage, setConfirmMessage] = useState<ConfirmMessage>({
    successMsg: null,
    errorMsg: null,
  });
  useEffect(() => {
    let successMsg = data ? "Success" : null;
    let errorMsg = error ? error.message : null;
    setConfirmMessage({ successMsg, errorMsg });
  }, [data, error]);

  return { confirmMessage, setConfirmMessage };
};
