import { CustomStyles } from "../../utils/types/styles";

export type Icons =
  | "HiMail"
  | "MdOutlinePassword"
  | "RxHamburgerMenu"
  | "IoIosArrowDown"
  | "AiOutlineCloseCircle"
  | undefined;
export interface IIcon {
  extraStyles?: CustomStyles;
  iconName: Icons;
  size?: number;
  color?: string;
}
