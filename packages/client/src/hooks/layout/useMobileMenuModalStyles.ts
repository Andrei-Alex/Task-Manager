import { CSSProperties, useMemo } from "react";
import { setFlex } from "@/utils";

/**
 * useMobileMenuModalStyles
 * A custom React hook for generating CSS styles for a mobile menu modal's body and footer.
 * It allows you to easily configure the alignment and customize the styles of the modal's body and footer.
 *
 * @function useMobileMenuModalStyles
 * @param {string} bodyPositionX - Horizontal alignment of the modal body.
 * @param {string} bodyPositionY - Vertical alignment of the modal body.
 * @param {CSSProperties} bodyCustomStyles - Custom CSS styles to apply to the modal body.
 * @param {string} footerPositionX - Horizontal alignment of the modal footer.
 * @param {string} footerPositionY - Vertical alignment of the modal footer.
 * @param {CSSProperties} footerCustomStyles - Custom CSS styles to apply to the modal footer.
 * @returns {Object} An object containing CSS styles for the modal's footer and body.
 */
export const useMobileMenuModalStyles = (
  bodyPositionX: string,
  bodyPositionY: string,
  bodyCustomStyles: CSSProperties,
  footerPositionX: string,
  footerPositionY: string,
  footerCustomStyles: CSSProperties
): { footerStyles: CSSProperties; bodyStyles: CSSProperties } => {
  const footerStyles = useMemo(() => {
    let result: CSSProperties = {};
    result = setFlex(footerPositionX, "justifyContent", result);
    result = setFlex(footerPositionY, "alignItems", result);
    return { ...result, ...footerCustomStyles };
  }, [footerPositionX, footerPositionY]);

  const bodyStyles = useMemo(() => {
    let result: CSSProperties = {};
    result = setFlex(bodyPositionX, "justifyContent", result);
    result = setFlex(bodyPositionY, "alignItems", result);
    return { ...result, ...bodyCustomStyles };
  }, [footerPositionX, footerPositionY]);

  return { footerStyles, bodyStyles };
};
