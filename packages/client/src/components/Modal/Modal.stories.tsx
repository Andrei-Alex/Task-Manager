import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Modal } from "./Modal";
import { WithMockLayoutContext } from "@/__MOCK__";

//@todo: Search for a way to keep args and use HOC
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  name: "Default",
  render: () => <WithMockLayoutContext />,
  args: {
    closeIcon: "AiOutlineCloseCircle",
  },
};
