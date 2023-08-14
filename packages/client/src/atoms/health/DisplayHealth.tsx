import styles from "./DisplayHealth.module.scss";
import { HealthData, IHealthResponse } from "../../services";
import React from "react";

/**
 * The DisplayHealth component takes a single prop:
 * status (string): The health status information to be displayed.
 * If provided, it will be shown in the component. If not provided (or set to null or undefined),
 * the component will display the default message "No status."
 *
 * The DisplayHealth component is memoized using React.memo, which means it will only re-render if
 * its props have changed.
 *
 * ## Usage
 * ```jsx
 * <DisplayHealth status={healthStatus} />
 * ```
 * @Component DisplayHealth - Render  health status
 * @param {string} status - Fetched status as string
 * @return {JSX} Display text in JSX elements
 */
export const DisplayHealth = ({ status }: HealthData) => {
  return (
    <div className={styles["container"]}>
      <p>Status:</p>
      <p>{status || "No status"}</p>
    </div>
  );
};

export default React.memo(DisplayHealth);
