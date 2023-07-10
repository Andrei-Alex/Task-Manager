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
 *         background="rgba(0, 128, 0, 0.3)"
 *         textColor="#FFFFFF"
 *         onClick={handleClick}
 *       />
 * ```
 *
 * @param {string} text - Button text
 * @param {number} width - Button Width
 * @param {string} ButtonType - Button type
 * @param {number} containerStyle - Extend/overwrite container Style
 * @param {string} background - CSS property
 * @param {string} textColor - Text color
 * @param {function} onClick - Callback function
 * @return {JSX} Display Button
 */
export const Button: React.FC<IButton> = ({
  width = "100%",
  buttonType = "submit",
  containerStyle,
  text,
  background,
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
            background: background,
          color: textColor,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
