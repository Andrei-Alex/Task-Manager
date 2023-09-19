import { LayoutContext } from "@/providers";
import { useState } from "react";
import { Modal } from "@/atoms";

export const WithMockLayoutContext = () => {
  const [isVisible, setVisible] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const isMobile = true;
  return (
    <LayoutContext.Provider value={[isMobile, isBurgerOpen, setIsBurgerOpen]}>
      <Modal
        isVisible={isVisible}
        visibilityHandler={() => setVisible(false)}
        customContainerStyles={{
          width: "250px",
          height: "300px",
        }}
        footerElements={"Footer"}
      >
        Body
      </Modal>
    </LayoutContext.Provider>
  );
};
