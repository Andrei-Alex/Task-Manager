import React from "react";
import { styles, IConfirmMessage } from "./index";
/**
 *
 * The ConfirmMessage component is a React functional component designed to display confirmation messages in a user interface.
 * It receives two optional props, `success` and `error`, and renders the appropriate message based on the provided prop.
 * The component is memoized using `React.memo` to optimize rendering performance.
 *
 * ## Usage
 * ```jsx
 *   <ConfirmMessage success={successMsg} error={errorMsg}/>
 * ```
 *
 *
 * @component ConfirmMessage
 * @param {Object} props - The props object containing the following properties:
 * @param {string} [props.success] - A string that represents the success message to be displayed.
 * @param {string} [props.error] - A string that represents the error message to be displayed.
 *
 * @returns {JSX.Element|null} - Returns JSX element containing the success or error message, or null if neither prop is provided.
 *
 *
 */


export const ConfirmMessage: React.FC<IConfirmMessage> = ({ success, error }) => {
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
export default React.memo(ConfirmMessage);
