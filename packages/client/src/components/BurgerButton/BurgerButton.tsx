import React from "react";
import { styles, IBurgerButton } from "./index";
import { Icon } from "@/atoms";

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

export default BurgerButton;
