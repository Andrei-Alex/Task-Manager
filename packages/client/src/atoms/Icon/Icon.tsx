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
        return <HiMail size="small" color={color} />;
      case "MdOutlinePassword":
        return <MdOutlinePassword color={color} />;
      default:
        return null;
    }
  })();

  return <div style={{ height: `${size}px`, ...extraStyles }}>{icon}</div>;
};

export default Icon;
