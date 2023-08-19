import React from "react";
import { styles, IBurgerButton } from "./index";
import { Icon } from "@/atoms";
import isEqual from "lodash/isEqual";

/**
 * BurgerButton component.
 *
 * The BurgerButton component is a functional component that provides a customizable burger button icon.
 * It allows toggling the icon's appearance when clicked and can be used in conjunction with a callback function
 * to trigger the display of a menu or perform other toggle-related actions. This component empowers developers
 * to easily create and customize burger buttons for different purposes and styling requirements
 * within their React applications.
 *
 * ### Usage
 * ```
 *  <BurgerButton
 *  onClickHandler={() => console.log('Button clicked')}
 *  isOpen={true}
 *  iconColor="blue"
 *  iconSize={24}
 *  customStyles={{ marginRight: '10px' }}
 *  />
 * ```
 *
 * @component BurgerButton - render a burger button icon
 * @param {function} onClickHandler - The click event handler for the burger button. Default is a no-op function.
 * @param {boolean} isOpen - Indicates whether the burger button is in an open state (active). Default is false.
 * @param {string} iconColor - The color of the burger icon within the button. Default is "black".
 * @param {number} iconSize - The size of the burger icon within the button. Default is 22.
 * @param {React.CSSProperties} customStyles - Additional custom CSS styles for the burger button.
 * @returns {JSX.Element} The rendered BurgerButton component.
 */
export const BurgerButton: React.FC<Partial<IBurgerButton>> = ({
  onClickHandler = () => null,
  isOpen = false,
  iconColor = "black",
  iconSize = 22,
  customStyles = {},
}) => {
  return (
    <div
      className={styles.burgerButtonContainer}
      onClick={() => onClickHandler()}
      style={customStyles}
    >
      <Icon
        iconName={!isOpen ? "RxHamburgerMenu" : "IoIosArrowDown"}
        color={iconColor}
        size={iconSize}
      />
    </div>
  );
};

const arePropsEqual = (
  prevProps: Partial<IBurgerButton>,
  nextProps: Partial<IBurgerButton>
): boolean => {
  return isEqual(prevProps, nextProps);
};
export default React.memo(BurgerButton, arePropsEqual);
