import React from "react";
import { styles, IInput } from "./index";
import { Icon } from "../../atoms";

/**
 * Simple Input.
 *
 * ## Usage
 * ```jsx
 * <Label>{Text *}</Label>
 * <Input />
 * ```
 * @param {string} icon Icon name
 * @param {string} label Text label
 * @param {boolean} required If true add *
 * @param {number} width If true add *
 * @param {number} placeholder Add placeholder text
 * @param {number} id Add id (label and htmlFor)
 * @param {object} containerStyle style object
 * @param {object} register react-hook-form object
 * @param {function} onChangeHandler onChange handler
 * @return {JSX} Display Label with conditional * and Input
 */
export const Input: React.FC<IInput> = ({
  icon,
  label,
  required = false,
  width = "100%",
  placeholder = "Ex. Placeholder",
  id,
  containerStyle,
  register,
  onChangeHandler,
}) => {
  return (
    <div className={styles.container} style={{ ...containerStyle }}>
      <div className={styles.labelContainer}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <p className={styles.alert}> {required && " *"}</p>
      </div>
      <div className={styles.inputContainer}>
        {icon ? (
          <i className={styles.iconContainer}>
            <Icon iconName={icon} color={"rgba(205,0,185,1)"} size={22} />
          </i>
        ) : null}
        <input
          onKeyDown={() => {
            if (onChangeHandler) {
              onChangeHandler();
            }
          }}
          className={styles.input}
          style={{ width: width }}
          placeholder={placeholder}
          id={id}
          {...register}
        />
      </div>
    </div>
  );
};

export default Input;
