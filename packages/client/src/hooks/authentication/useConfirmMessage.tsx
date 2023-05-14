import { useEffect, useState } from "react";
import { ConfirmMessage, DataType, ErrorType } from "./types";

export const useConfirmMessage = (data: DataType, error: ErrorType) => {
  const [confirmMessage, setConfirmMessage] = useState<ConfirmMessage>({
    successMsg: null,
    errorMsg: null,
  });
  useEffect(() => {
    let successMsg = data?.access_token ? "Success" : null;
    let errorMsg = error ? error.message : null;
    setConfirmMessage({ successMsg, errorMsg });
  }, [data, error]);

  return { confirmMessage, setConfirmMessage };
};
