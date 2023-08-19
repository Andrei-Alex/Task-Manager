import React from "react";
import { HiMail } from "react-icons/hi";
import { MdOutlinePassword } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { Icons, IIcon } from ".";

/**
 * The Icon component is a versatile and reusable React component designed to render different
 * icons based on the specified iconName.
 * Leveraging the power of the react-icons library, it provides a simple and intuitive way to
 * incorporate icons into a React applications.
 *
 * With a straightforward usage, you can easily customize the appearance of the icons by adjusting
 * the color and size props.
 *
 * To enhance flexibility, the Icon component accepts an optional extraStyles prop
 * allowing you to apply additional styling to the icon container. This feature ensures seamless
 * integration into the application's design and layout.
 *
 * To optimize performance, the component is efficiently memoized using React.Memo along with a custom
 * comparison function. This ensures that unnecessary re-renders are minimized, resulting in a smoother
 * and more responsive user experience.
 *
 * ## Usage
 * ```JSX
 *    <Icon iconName="HiMail" color="blue" size={24} />
 * ```
 *
 * @component Icon
 * @param {Object} extraStyles - Additional styles to be applied to the icon container.
 * @param {string} iconName - The name of the icon to be rendered.
 * @param {string} color - The color of the icon. Defaults to "black".
 * @param {number} size - The size of the icon in pixels. Defaults to 16.
 * @returns {JSX.Element} - The rendered icon component.
 *
 */
export const Icon: React.FC<IIcon> = ({
  extraStyles,
  iconName,
  color = "black",
  size = 16,
}) => {
  const icon = (() => {
    switch (iconName as Icons) {
      case "HiMail":
        return <HiMail size={size} color={color} data-testid="HiMail-icon" />;
      case "MdOutlinePassword":
        return (
          <MdOutlinePassword
            size={size}
            color={color}
            data-testid="MdOutlinePassword-icon"
          />
        );
      case "RxHamburgerMenu":
        return (
          <RxHamburgerMenu
            size={size}
            color={color}
            data-testid="RxHamburgerMenu-icon"
          />
        );
      case "IoIosArrowDown":
        return (
          <IoIosArrowDown
            size={size}
            color={color}
            data-testid="IoIosArrowDown-icon"
          />
        );

      default:
        return null;
    }
  })();

  return <div style={{ height: `${size}px`, ...extraStyles }}>{icon}</div>;
};

function PropsAreEqual(prevProps: IIcon, nextProps: IIcon) {
  return (
    JSON.stringify(prevProps.extraStyles) ===
      JSON.stringify(nextProps.extraStyles) &&
    prevProps.iconName === nextProps.iconName &&
    prevProps.color === nextProps.color &&
    prevProps.size === nextProps.size
  );
}

export default React.memo(Icon, PropsAreEqual);
