import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
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
    backgroundColor: {
      name: "Background color",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "#828FA3",
      description: "Background color",
      control: {
        type: "text",
      },
    },
    textColor: {
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
    onClick: {
      name: "onClick",
      type: {
        name: "function",
        required: false,
      },
      description: "onClick callback function",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Click me",
    textColor: "white",
  },
};
