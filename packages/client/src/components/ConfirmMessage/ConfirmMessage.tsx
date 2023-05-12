import React from "react";
import { styles, IConfirmMessage } from "./index";
const ConfirmMessage: React.FC<IConfirmMessage> = ({ success, error }) => {
  return (
    <div>
      {success ? (
        <p className={styles.success}>{success}</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : null}
    </div>
  );
};
export default ConfirmMessage;
