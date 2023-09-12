import { children } from "../../../../../libs/sharedTypes";

export interface ILayoutContext {
  children: children[];
  values?: Values;
}
export type LayoutContextValues = [
  isMobile: boolean,
  isBurgerOpen: boolean,
  setIsBurgerOpen: (arg: boolean) => void,
  values?: Values
];
export type Values = unknown[] | [];
