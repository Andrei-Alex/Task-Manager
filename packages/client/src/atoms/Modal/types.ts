import { children } from "../../../../libs/sharedTypes";
import { CSSProperties } from "react";

export interface IModal {
  isVisible: boolean;
  visibilityHandler: (arg: boolean) => void;
  children?: children;
  headerElements?: children;
  footerElements?: children;
  customStyles?: CSSProperties;
}
