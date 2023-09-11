import React, { useCallback, useContext } from "react";
import { IModal, styles } from ".";
import { LayoutContext } from "@/providers";
import { stopPropagation } from "@/utils";
import { Icon } from "@/atoms";

/**
 * Modal
 * The Modal component is a reusable React component for displaying modal dialogs with customizable content.
 * It provides options for controlling visibility, customizing styles, and adding header and footer elements.
 *
 *
 * ## Usage
 * ```
 *  <Modal
 *        isVisible={isModalVisible}
 *        visibilityHandler={hideModal}
 *        customStyles={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
 *        headerElements={<h2>Modal Header</h2>}
 *        footerElements={<ThemeSwitcher />}
 *       >
 * ```
 * @component Modal
 * @param {Object} props - The component's props.
 * @param {boolean} props.isVisible - Determines whether the modal is visible or not.
 * @param {Function} props.visibilityHandler - A function to handle the modal's visibility.
 * @param {React.ReactNode} props.children - The content to display within the modal's body.
 * @param {React.ReactNode} props.headerElements - Custom elements to display in the modal's header.
 * @param {React.ReactNode} props.footerElements - Custom elements to display in the modal's footer.
 * @param {Object} props.customStyles - Custom CSS styles to apply to the modal container.
 * @returns {React.ReactElement|null} The rendered Modal component.
 *
 *
 *
 */

export const Modal: React.FC<IModal> = ({
  isVisible,
  visibilityHandler,
  children,
  headerElements,
  footerElements,
  customStyles = {},
}) => {
  const [isMobile] = useContext(LayoutContext);
  const close = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      visibilityHandler(false);
    },
    [visibilityHandler]
  );
  if (isVisible && isMobile) {
    return (
      <div
        className={styles.modalContainer}
        style={customStyles}
        onClick={close}
      >
        <div className={styles.modal} onClick={stopPropagation}>
          <div className={styles.close} onClick={close}>
            <span>
              <Icon iconName={"AiOutlineCloseCircle"} />
            </span>
          </div>
          <div className={"header"}>{headerElements}</div>
          <div className={"body"}>{children}</div>
          <div className={"footer"}>{footerElements}</div>
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
