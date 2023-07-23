import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Input} from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "Label",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "Default input",
      description: "Display text",
      control: {
        type: "text",
      },
    },
    required: {
      name: "Required",
      type: {
        name: "boolean",
        required: false,
      },
      defaultValue: false,
      description: "If true add *",
      control: {
        type: "boolean",
      },
    },
    width: {
      name: "Width value ",
      type: {
        name: "number",
        required: false,
      },
      defaultValue: 415,
      description: "Set container width",
      control: {
        range: true,
        min: 450,
        max: 1000,
      },
    },
    placeholder: {
      name: "Placeholder",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "Default input",
      description: "Set placeholder",
      control: {
        type: "text",
      },
    },
    id: {
      name: "id",
      type: {
        name: "string",
        required: true,
      },
      description: "Input ID",
      control: {
        type: "text",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Label",
    required: false,
    icon: "HiMail",
  },
};
