import React from "react";
import { IModal } from ".";

export const Modal: React.FC<Partial<IModal>> = ({
  isVisible,
  visibilityHandler,
  children,
  headerElements,
  footerElements,
}) => {
  if (isVisible) {
    return (
      <div className={"modal"}>
        <div
          className={"close"}
          onClick={() => visibilityHandler && visibilityHandler()}
        >
          x
        </div>
        <div className={"header"}>{headerElements}</div>
        <div className={"body"}>{children}</div>
        <div className={"footer"}>{footerElements}</div>
      </div>
    );
  }
  return null;
};
