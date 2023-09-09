import React, { useContext } from "react";
import { IModal, styles } from ".";
import { LayoutContext } from "@/providers";

export const Modal: React.FC<IModal> = ({
  isVisible,
  visibilityHandler,
  children,
  headerElements,
  footerElements,
}) => {
  const [isMobile] = useContext(LayoutContext);
  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    visibilityHandler(false);
    e.stopPropagation();
  };
  if (isVisible && isMobile) {
    return (
      <div className={styles.modalContainer} onClick={(e) => close(e)}>
        <div className={styles.modal}>
          <div className={"close"} onClick={(e) => close(e)}>
            x
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
