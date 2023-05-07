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
 * @param {number} placeholder - Add placeholder text
 * @param {number} id - Add id (label and htmlFor)
 * @param {object} containerStyle - style object
 * @return {JSX} Display Label with conditional * and Input
 */
export const Input: React.FC<IInput> = ({
  label,
  required = false,
  width = 415,
  placeholder = "Ex. Placeholder",
  id,
  containerStyle,
  register,
}) => {
  return (
    <div
      className={styles.container}
      style={{ width: `${width}px`, ...containerStyle }}
    >
      <div className={styles.labelContainer}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <p className={styles.alert}> {required && " *"}</p>
      </div>
      <input
        className={styles.input}
        placeholder={placeholder}
        id={id}
        {...register}
      />
    </div>
  );
};

export default Input;
