import { CustomStyles } from "../../../../libs/sharedTypes/styles";

export interface IInput {
  label: string;
  required?: boolean;
  width?: number;
  placeholder?: string;
  id: string;
  containerStyle?: CustomStyles;
}
