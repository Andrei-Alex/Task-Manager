import { CSSProperties } from "react";

/**
 * Sets the value of a CSS property related to flexbox layout based on a specified input string.
 *
 * @param {string} input - A string that specifies the desired alignment value. It can be "start", "end", or any other value (default).
 * @param {string} key - The name of the CSS property to be set in the output object.
 * @param {CSSProperties} output - An object representing a set of CSS properties. The key property will be modified based on the input value.
 *
 * @returns {CSSProperties} An updated CSSProperties object with the specified property set according to the input value.
 *
 */
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
