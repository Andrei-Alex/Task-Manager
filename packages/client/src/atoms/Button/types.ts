import { CustomStyles } from "../../utils/types/styles";

export interface IButton {
  text: string;
  onClick?: () => void;
  width?: number;
  type: "submit" | "button" | "reset" | undefined;
  containerStyle?: CustomStyles;
  variant?:
    | "outline"
    | "white"
    | "light"
    | "default"
    | "filled"
    | "gradient"
    | "subtle";
  loading?: boolean;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  gradient?: { from: string; to: string };
  fullWidth?: boolean;
}
