import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Button} from "./Button";

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
    onClick: {
      name: "onClick",
      type: {
        name: "function",
        required: false,
      },
      description: "onClick callback function",
    },
    width: {
      name: "width",
      type: {
        name: "function",
        required: false,
      },
      description: "button width",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant:'gradient',
    gradient:{from: 'blue', to: "purple"},
    type:"submit",
    color: 'blue',
    text: "Click me",
  },
};
