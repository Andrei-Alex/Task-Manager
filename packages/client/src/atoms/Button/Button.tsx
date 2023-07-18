import React from "react";
import { styles, IButton } from "./index";
import { Button as MantineButton } from '@mantine/core';

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
 *         onClick={handleClick}
 *       />
 * ```
 *
 * @param {string} text - Button text
 * @param {number} width - Button Width
 * @param {string} ButtonType - Button type
 * @param {number} containerStyle - Extend/overwrite container Style
 * @param {function} onClick - Callback function
 * @return {JSX} Display Button
 */
export const Button: React.FC<IButton> = ({
  width = "100%",
  type = "button",
  containerStyle,
  text,
  onClick = () => null,
  variant='filled',
  loading= false,
  disabled = false,
  size= 'md',
  gradient = { from: 'indigo', to: 'cyan' },
  color= 'lime',
  fullWidth=true,
}) => {
    const props = {type, loading, disabled, variant, size, color, gradient, fullWidth}

  return (
    <div style={{ width: width, ...containerStyle }}>
        <MantineButton onClick={()=>onClick()} {...props} fullWidth={true}  >{!loading && text}</MantineButton>
    </div>
  );
};

export default Button;
