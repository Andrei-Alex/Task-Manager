"use client";
import { useEffect, useState } from "react";
import { ConfirmMessage, DataType, ErrorType } from "./types";

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
