import React from "react";
import { HiMail } from "react-icons/hi";
import { MdOutlinePassword } from "react-icons/md";
import { Icons, IIcon } from ".";

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
      default:
        return null;
    }
  })();

  return <div style={{ height: `${size}px`, ...extraStyles }}>{icon}</div>;
};

function PropsAreEqual(prevProps: IIcon, nextProps: IIcon) {
  return JSON.stringify(prevProps.extraStyles) === JSON.stringify(nextProps.extraStyles)
      && prevProps.iconName === nextProps.iconName
      && prevProps.color === nextProps.color
      && prevProps.size === nextProps.size
}
export default React.memo(Icon, PropsAreEqual);
