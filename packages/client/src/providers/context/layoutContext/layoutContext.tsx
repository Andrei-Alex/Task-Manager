import React, { createContext } from "react";
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
  return (
    <LayoutContext.Provider value={[isMobile, ...values]}>
      {children}
    </LayoutContext.Provider>
  );
};
