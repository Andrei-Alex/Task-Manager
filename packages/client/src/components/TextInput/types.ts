import { CustomStyles } from "../../utils/types/styles";
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
  onChangeHandler?: () => void;
  type?: string,
  dataTestId?: string;
  [key: string]: (() => void) | string | boolean | CustomStyles | undefined;
}
