import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AuthButtons } from "./AuthButtons";

const meta: Meta<typeof AuthButtons> = {
  component: AuthButtons,
  title: "Components/AuthButtons",
  tags: ["autodocs"],
  argTypes: {
    registerPath: {
      control: {
        type: "text",
      },
    },
    loginPath: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AuthButtons>;

export const Default: Story = {
  args: {
    haveProfile: false,
  },
};
export const Logged: Story = {
  args: {
    haveProfile: true,
  },
};
