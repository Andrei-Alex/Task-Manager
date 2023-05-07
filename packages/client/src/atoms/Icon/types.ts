import { CustomStyles } from "../../../../libs/sharedTypes/styles";

export type Icons = "HiMail" | "MdOutlinePassword" | undefined;
export interface IIcon {
  extraStyles?: CustomStyles;
  iconName: Icons;
  size?: number;
  color?: string;
}
