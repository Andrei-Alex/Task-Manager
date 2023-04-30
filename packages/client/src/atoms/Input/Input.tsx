import React from "react";
import { styles, IInput } from ".";

/**
 * Simple Input.
 *
 * ## Usage
 * ```jsx
 * <Label>{Text *}</Label>
 * <Input />
 * ```
 * @param {string} label - Text label
 * @param {boolean} required - If true add *
 * @param {number} width - If true add *
 * @return {JSX} Display Label with conditional * and Input
 */
export const Input: React.FC<IInput> = ({
  label,
  required = false,
  width = 415,
  placeholder = "Ex. Placeholder",
}) => {
  return (
    <div className={styles.container} style={{ width: `${width}px` }}>
      <div className={styles.labelContainer}>
        <text className={styles.label}>{label}</text>
        <text> {required && " *"}</text>
      </div>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
