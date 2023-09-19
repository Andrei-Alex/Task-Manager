import React, { useCallback, useContext, useMemo } from "react";
import { IModal, styles } from "./index";
import { LayoutContext } from "@/providers";
import { stopPropagation } from "@/utils";
import { Icon } from "@/atoms";
import { useMobileMenuModalStyles } from "@/hooks/layout/useMobileMenuModalStyles";

/**
 * Modal
 * The Modal component is a reusable React component for displaying modal dialogs with customizable content.
 * It provides options for controlling visibility, customizing styles, and adding header and footer elements.
 *
 * ## Usage
 * ```
 *  <Modal
 *        isVisible={isModalVisible}
 *        visibilityHandler={hideModal}
 *         customContainerStyles={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
 *        headerElements={<h2>Modal Header</h2>}
 *        footerElements={<ThemeSwitcher />}
 *       >
 * ```
 *
 * @component Modal
 * @param {Object} props - The component's props.
 * @param {boolean} props.isVisible - Determines whether the modal is visible or not.
 * @param {Function} props.visibilityHandler - A function to handle the modal's visibility.
 * @param {React.ReactNode} props.children - The content to display within the modal's body.
 * @param {React.ReactNode} props.headerElements - Custom elements to display in the modal's header.
 * @param {React.ReactNode} props.footerElements - Custom elements to display in the modal's footer.
 * @param {Object} props.customContainerStyles - Custom CSS styles to apply to the modal container.
 * @param {string} props.closeIcon - The name of the icon to use for the close button.
 * @param {string} props.bodyPositionX - Horizontal alignment of the modal body (default: "center").
 * @param {string} props.bodyPositionY - Vertical alignment of the modal body (default: "center").
 * @param {Object} props.bodyCustomStyles - Custom CSS styles to apply to the modal body.
 * @param {string} props.footerPositionX - Horizontal alignment of the modal footer (default: "center").
 * @param {string} props.footerPositionY - Vertical alignment of the modal footer (default: "end").
 * @param {Object} props.footerCustomStyles - Custom CSS styles to apply to the modal footer.
 * @param {string} props.modalID - Testing for testing.
 * @returns {React.ReactElement|null} The rendered Modal component.
 *
 *   @example
 *
 *  <Modal
 *    isVisible={isModalVisible}
 *    visibilityHandler={hideModal}
 *    customContainerStyles={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
 *    headerElements={<h2>Modal Header</h2>}
 *    footerElements={<ThemeSwitcher />}
 *    closeIcon="AiOutlineCloseCircle"
 *  >
 *    {* Your content goes here *}
 *  </Modal>
 *
 */

export const Modal: React.FC<IModal> = ({
  isVisible,
  visibilityHandler,
  children,
  headerElements,
  footerElements,
  customContainerStyles = {},
  closeIcon = "AiOutlineCloseCircle",
  bodyPositionX = "center",
  bodyPositionY = "center",
  bodyCustomStyles = {},
  footerPositionX = "center",
  footerPositionY = "end",
  footerCustomStyles = {},
  modalID = "ModalTestID",
}) => {
  const [isMobile, isBurgerOpen, setIsBurgerOpen] = useContext(LayoutContext);
  const close = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      setIsBurgerOpen && isBurgerOpen && setIsBurgerOpen(isBurgerOpen);
      visibilityHandler(false);
    },
    [visibilityHandler]
  );
  const { footerStyles, bodyStyles } = useMobileMenuModalStyles(
    bodyPositionX,
    bodyPositionY,
    bodyCustomStyles,
    footerPositionX,
    footerPositionY,
    footerCustomStyles
  );

  if (isVisible && isMobile) {
    return (
      <div
        className={styles.modalContainer}
        data-testID={modalID}
        style={customContainerStyles}
        onClick={close}
      >
        <div className={styles.modal} onClick={stopPropagation}>
          <div className={styles.close} onClick={close}>
            <span>
              <Icon iconName={closeIcon} />
            </span>
          </div>
          <div className={"header"}>{headerElements}</div>
          <div className={styles.body} style={bodyStyles}>
            {children}
          </div>
          <div className={styles.footer} style={footerStyles}>
            {footerElements}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
