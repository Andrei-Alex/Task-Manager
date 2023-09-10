import React, { useCallback, useContext } from "react";
import { IModal, styles } from ".";
import { LayoutContext } from "@/providers";
import { stopPropagation } from "@/utils";
import { Icon } from "@/atoms";

export const Modal: React.FC<IModal> = ({
  isVisible,
  visibilityHandler,
  children,
  headerElements,
  footerElements,
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
      <div className={styles.modalContainer} onClick={close}>
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
