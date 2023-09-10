import React from "react";
export const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();
};
