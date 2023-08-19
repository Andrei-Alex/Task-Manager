import { CSSProperties } from "react";

export interface IBurgerButton {
  onClickHandler: () => void;
  isOpen: boolean;
  iconColor: string;
  iconSize: number;
  customStyles: CSSProperties;
}
