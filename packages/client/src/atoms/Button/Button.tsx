import React from "react";
import { styles, IButton } from "./index";
import { Button as MantineButton } from '@mantine/core';

/**
 * The Button component is a versatile and reusable React component that provides
 * a customizable button element with various properties and styles.
 * It empowers developers to easily create and customize buttons for different purposes
 * and styling requirements within their React applications.
 * With the Button component, you can easily create visually appealing and interactive buttons,
 * tailored to the application's specific requirements.
 *
 * The Button component utilizes the React.Memo higher-order component (HOC) along with a custom
 * comparison function to optimize its rendering performance.
 *
 * ## Usage
 *
 * ```JSX
 *       <Button
 *         width="200px"
 *         type="submit"
 *         containerStyle={{ marginBottom: '10px' }}
 *         text="Submit"
 *         onClick={handleClick}
 *         variant="filled"
 *         loading={false}
 *         disabled={false}
 *         size="md"
 *         gradient={{ from: 'indigo', to: 'cyan' }}
 *         color="purple"
 *         fullWidth={true}
 *       />
 * ```
 * @Component Button - render a Mantine button
 * @param {string} width - The width of the button. Default is "100%".
 * @param {string} type - The type of the button. Default is "button".
 * @param {object} containerStyle - Additional CSS styles for the container element.
 * @param {string} text - The text content of the button.
 * @param {function} onClick - The click event handler for the button. Default is a no-op function.
 * @param {string} variant - The variant of the button. Default is 'filled'.
 * @param {boolean} loading - Indicates whether the button is in a loading state. Default is false.
 * @param {boolean} disabled - Indicates whether the button is disabled. Default is false.
 * @param {string} size - The size of the button. Default is 'md'.
 * @param {object} gradient - The gradient styles for the button. Default is { from: 'indigo', to: 'cyan' }.
 * @param {string} color - The color of the button. Default is 'lime'.
 * @param {boolean} fullWidth - Indicates whether the button should take up the full width. Default is true.
 * @returns {ReactNode} The rendered Button component.
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
    <div className={styles.button} style={{ width: width, ...containerStyle }}>
        <MantineButton onClick={()=> {
          !loading && onClick()
        }} {...props} fullWidth={true}  >{!loading && text}</MantineButton>
    </div>
  );
};

function PropsAreEqual(prevProps: IButton, nextProps: IButton) {
  if (
      prevProps.width !== nextProps.width ||
      prevProps.type !== nextProps.type ||
      prevProps.text !== nextProps.text ||
      prevProps.variant !== nextProps.variant ||
      prevProps.loading !== nextProps.loading ||
      prevProps.disabled !== nextProps.disabled ||
      prevProps.size !== nextProps.size ||
      prevProps.color !== nextProps.color ||
      prevProps.fullWidth !== nextProps.fullWidth
  ) {
    return false;
  }
  if (
      JSON.stringify(prevProps.gradient) !== JSON.stringify(nextProps.gradient)
  ) {
    return false;
  }
  if (prevProps.onClick !== nextProps.onClick) {
    return false;
  }
  return true;
}
export default React.memo(Button, PropsAreEqual);
