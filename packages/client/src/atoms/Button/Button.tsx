import React from "react";
import { styles, IButton } from "./index";

/**
 * Simple Button.
 *
 * ## Usage
 * ```jsx
 * <button>
 *  text
 * <button>
 * ```
 * @param {string} text - Button text
 * @param {number} width - Button Width
 * @param {string} backgroundColor - Background color
 * @param {string} textColor - Text color
 * @param {function} callback - Callback function
 * @return {JSX} Display Button
 */
export const Button: React.FC<IButton> = ({
  width = "300",
  text,
  backgroundColor = "#828FA3",
  textColor,
  callback = () => null,
}) => {
  return (
    <button
      onClick={() => callback()}
      className={styles.container}
      style={{
        width: `${width}px`,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
