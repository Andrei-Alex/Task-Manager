import React, { useContext } from "react";
import { IModal, styles } from ".";
import { LayoutContext } from "@/providers";
import { stopPropagation } from "@/utils";

export const Modal: React.FC<IModal> = ({
  isVisible,
  visibilityHandler,
  children,
  headerElements,
  footerElements,
}) => {
  const [isMobile] = useContext(LayoutContext);
  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    visibilityHandler(false);
  };
  if (isVisible && isMobile) {
    return (
      <div className={styles.modalContainer} onClick={close}>
        <div className={styles.modal} onClick={stopPropagation}>
          <div className={styles.close} onClick={close}>
            <span>x</span>
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
