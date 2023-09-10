import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
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
const withLayoutContext = (StoryFn: typeof Modal) => {
  const isMobile = true;
  return (
    <div style={{ width: "250px", height: "500px" }}>
      <LayoutContext.Provider value={[isMobile]}>
        <StoryFn isVisible={true} visibilityHandler={() => null} />
      </LayoutContext.Provider>
    </div>
  );
};
export const Default: Story = {
  args: {
    isVisible: true,
  },
  decorators: [withLayoutContext],
};
