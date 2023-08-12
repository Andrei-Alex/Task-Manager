import React from "react";
import { styles, IInput } from "./index";
import { Icon } from "../../atoms";
import { Input } from "@mantine/core";

/**
 * The TextInput component is a custom React functional component designed to render an input field
 * with various optional features such as an icon, label, and validation.
 * This component is designed to be highly flexible and can be easily integrated into various React applications.
 *
 * The TextInput component is wrapped in React.memo, which is a higher-order component used for performance optimization.
 * It prevents unnecessary re-renders of the TextInput component when the props remain the same.
 * The PropsAreEqual function is used as the second argument to React.memo and customizes the comparison of props.
 *
 * The PropsAreEqual function compares the prevProps and nextProps to determine if the component should re-render.
 * It checks for specific prop changes like onChangeHandler and register to trigger a re-render when these functions change.
 * For all other props, it performs a shallow comparison to ensure that their values have not changed.
 *
 * ## Usage
 * ```jsx
 *   <TextInput
 *         icon="icon-name"
 *         label="TextInput Label"
 *         required={true}
 *         width="300px"
 *         placeholder="Enter your input here"
 *         id="input-id" //
 *         containerStyle={{ border: '1px solid #ccc', borderRadius: '4px' }}
 *         register={register}
 *         onChangeHandler={handleInputChange}
 *       />
 * ```
 * TODO: Create Tooltip
 * @param {string} icon Icon name
 * @param {string} label Text label
 * @param {boolean} required If true add *
 * @param {number} width If true add *
 * @param {number} placeholder Add placeholder text
 * @param {number} id Add id (label and htmlFor)
 * @param {object} containerStyle style object
 * @param {object} register react-hook-form object
 * @param {function} onChangeHandler onChange handler
 * @return {JSX} Display Label with conditional * and TextInput
 */
export const TextInput: React.FC<IInput> = ({
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
        <Input
          onKeyDown={() => {
            if (onChangeHandler) {
              onChangeHandler();
            }
          }}
          icon={<Icon iconName={icon} color={"rgba(205,0,185,1)"} size={22} />}
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

function PropsAreEqual(prevProps: IInput, nextProps: IInput) {
  if (
    prevProps.onChangeHandler?.toString() !==
      nextProps.onChangeHandler?.toString() ||
    prevProps?.register?.toString() !== nextProps?.register?.toString()
  ) {
    return false;
  }
  for (const [key] of Object.entries(prevProps)) {
    if (prevProps[key] !== "register" && prevProps[key] !== "onChangeHandler") {
      if (prevProps[key] !== nextProps[key]) return false;
    }
  }
  return true;
}

export default React.memo(TextInput, PropsAreEqual);
