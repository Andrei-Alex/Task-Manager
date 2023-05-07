export interface IButton {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  callback?: Function;
  width?: number;
  buttonType: "submit" | "button" | "reset" | undefined;
}
