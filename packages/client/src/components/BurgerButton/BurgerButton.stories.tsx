import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BurgerButton } from "./BurgerButton";

const meta: Meta<typeof BurgerButton> = {
  component: BurgerButton,
  title: "Components/BurgerButton",
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      name: "isOpen",
      type: {
        name: "boolean",
        required: false,
      },
      defaultValue: false,
      description: "Display burger or arrow",
      options: [true, false],
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof BurgerButton>;

export const Default: Story = {
  args: {},
};
