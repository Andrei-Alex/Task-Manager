import { children } from "../../../../libs/sharedTypes";

export interface IModal {
  isVisible: boolean;
  visibilityHandler: () => void;
  children: children;
  headerElements: children;
  footerElements: children;
}
