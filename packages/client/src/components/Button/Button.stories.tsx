import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    text: {
      name: "Button text",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "Click",
      description: "Display text",
      control: {
        type: "text",
      },
    },
    background: {
      name: "Background color",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "green",
      description: "Background color",
      control: {
        type: "text",
      },
    },
    color: {
      name: "Text color",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "white",
      description: "Text color",
      control: {
        type: "text",
      },
    },
    additionalText: {
      name: "Additional text",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: false,
      description: "Display additional Text",
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Click",
    background: "green",
    color: "white",
    additionalText: false,
  },
};
