import React from "react";
import { styles, IButton } from "./index";

/**
 * Render a button with custom styles
 *
 * ## Usage
 *
 * ```JSX
 *       <Button
 *         width="200px"
 *         buttonType="button"
 *         containerStyle={{ marginTop: '10px' }}
 *         text="Click me!"
 *         backgroundColor="#FF0000"
 *         textColor="#FFFFFF"
 *         onClick={handleClick}
 *       />
 * ```
 *
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
  width = "100%",
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
          width: `${width}`,
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
