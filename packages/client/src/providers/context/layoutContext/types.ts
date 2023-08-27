import { children } from "../../../../../libs/sharedTypes";

export interface ILayoutContext {
  children: children[];
  values?: Values;
}
export type LayoutContextValues = boolean[] | Values;
export type Values = unknown[] | [];
