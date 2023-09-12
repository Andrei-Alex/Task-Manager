import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { LayoutContext } from "@/providers";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Atoms/Modal",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Modal>;
const WithLayoutContext = () => {
  const [isVisible, setVisible] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const isMobile = true;
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
      }}
    >
      <LayoutContext.Provider value={[isMobile, isBurgerOpen, setIsBurgerOpen]}>
        <Modal
          isVisible={isVisible}
          visibilityHandler={() => setVisible(false)}
          customContainerStyles={{
            width: "250px",
            height: "300px",
          }}
        />
      </LayoutContext.Provider>
    </div>
  );
};

export const Default: Story = {
  name: "Default",
  render: () => <WithLayoutContext />,
  args: {
    closeIcon: "AiOutlineCloseCircle",
  },
};
