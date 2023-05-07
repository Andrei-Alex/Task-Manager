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
 * @param {string} ButtonType - Button type
 * @param {number} containerStyle - Extend/overwrite container Style
 * @param {string} backgroundColor - Background color
 * @param {string} textColor - Text color
 * @param {function} onClick - Callback function
 * @return {JSX} Display Button
 */
export const Button: React.FC<IButton> = ({
  width = "415",
  buttonType = "submit",
  containerStyle,
  text,
  backgroundColor = "#828FA3",
  textColor,
  onClick = () => null,
}) => {
  return (
    <div style={{ ...containerStyle }}>
      <button
        type={buttonType}
        onClick={() => onClick()}
        className={styles.button}
        style={{
          width: `${width}px`,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
