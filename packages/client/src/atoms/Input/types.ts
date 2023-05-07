import { CustomStyles } from "../../../../libs/sharedTypes/styles";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IInput {
  label: string;
  required?: boolean;
  width?: number;
  placeholder?: string;
  id: string;
  containerStyle?: CustomStyles;
  register: UseFormRegisterReturn<string>;
}
