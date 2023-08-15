import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "Atoms/Logo",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    logo: { name: "Kanban" },
    appData: {
      clientVersion: "1.6.8",
      server: { dbName: "dev", serverVersion: "1.9.6" },
    },
  },
};
