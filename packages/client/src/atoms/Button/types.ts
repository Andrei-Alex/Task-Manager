import { CustomStyles } from "../../../../libs/sharedTypes/styles";
import {types} from "sass";
import Color = types.Color;

export interface IButton {
  text: string;
  background?: string | undefined;
  textColor?: string;
  onClick?: Function;
  width?: number;
  buttonType: "submit" | "button" | "reset" | undefined;
  containerStyle?: CustomStyles;
}
