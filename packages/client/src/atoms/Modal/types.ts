import { children } from "../../../../libs/sharedTypes";

export interface IModal {
  isVisible: boolean;
  visibilityHandler: (arg: boolean) => void;
  children?: children;
  headerElements?: children;
  footerElements?: children;
}
