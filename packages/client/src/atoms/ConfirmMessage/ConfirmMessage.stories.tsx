import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ConfirmMessage } from "./ConfirmMessage";

const meta: Meta<typeof ConfirmMessage> = {
  component: ConfirmMessage,
  title: "Atoms/ConfirmMessage",
  tags: ["autodocs"],
  argTypes: {
    success: {
      name: "Success",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "",
      description: "Display success message",
      control: {
        type: "text",
      },
    },
    error: {
      name: "Error",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "",
      description: "Display error message",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ConfirmMessage>;

export const Success: Story = {
  args: {
    success:"Success !!!",
    error: null,
  },
};
export const Error: Story = {
  args: {
    success: null,
    error:"Error 404 !!!"
  },
};
