import { children } from "../../../../libs/sharedTypes";
import { CSSProperties } from "react";
import { Icons } from "@/atoms/Icon";

export interface IModal {
  isVisible: boolean;
  visibilityHandler: (arg: boolean) => void;
  children?: children;
  headerElements?: children;
  footerElements?: children;
  customContainerStyles?: CSSProperties;
  closeIcon?: Icons;
}
