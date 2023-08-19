import { children } from "../../../../libs/sharedTypes";

export interface IAppWrapper {
  children: children;
}
export interface IConfigWrapper {
  children: children;
  lang: "en" | "fr" | "ro";
}
