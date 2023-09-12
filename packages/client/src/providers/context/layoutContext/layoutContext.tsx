import React, { createContext, useState } from "react";
import { useWindowWidth } from "@/hooks";
import type {
  ILayoutContext,
  LayoutContextValues,
} from "@/providers/context/layoutContext/types";

export const LayoutContext = createContext<LayoutContextValues | []>([]);
export const LayoutProvider: React.FC<ILayoutContext> = ({
  children,
  values = [],
}) => {
  const [isMobile] = useWindowWidth();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <LayoutContext.Provider
      value={[isMobile, isBurgerOpen, setIsBurgerOpen, { ...values }]}
    >
      {children}
    </LayoutContext.Provider>
  );
};
