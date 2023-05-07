import { CustomStyles } from "../../../../libs/sharedTypes/styles";
import { UseFormRegisterReturn } from "react-hook-form";
import type { Icons } from "../../atoms/Icon";
export interface IInput {
  label: string;
  required?: boolean;
  width?: string;
  placeholder?: string;
  id: string;
  containerStyle?: CustomStyles;
  register?: UseFormRegisterReturn<string>;
  icon?: Icons;
}
