import { children } from "../../../../libs/sharedTypes";
import { Flex } from "@/utils";
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
  bodyPositionX?: Flex;
  bodyPositionY?: Flex;
  bodyCustomStyles?: CSSProperties;
  footerCustomStyles?: CSSProperties;
  footerPositionX?: Flex;
  footerPositionY?: Flex;
  modalID?: string;
}
