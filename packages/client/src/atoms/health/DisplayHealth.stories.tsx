import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { DisplayHealth } from "./DisplayHealth";

const meta: Meta<typeof DisplayHealth> = {
  component: DisplayHealth,
  title: "Atoms/Health",
  tags: ["autodocs"],
  argTypes: {
    status: {
      name: "Status",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "ok",
      description: "Display text",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof DisplayHealth>;

export const Default: Story = {
  args: {
    status: 200,
  },
};
