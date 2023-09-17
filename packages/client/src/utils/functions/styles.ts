import { CSSProperties } from "react";

export const setFlex = (input: string, key: string, output: CSSProperties) => {
  switch (input) {
    case "end":
      output = { ...output, [key]: "flex-end" };
      break;
    case "start":
      output = { ...output, [key]: "flex-start" };
      break;
    default:
      output = { ...output, [key]: "center" };
      break;
  }
  return output;
};
