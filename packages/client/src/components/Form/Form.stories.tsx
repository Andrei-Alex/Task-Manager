import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Form from "./Form";
import { inputs, schema } from ".";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Components/Form",
  tags: ["autodocs"],
  argTypes: {
    inputs: {
      name: "inputs",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: null,
      description: "Inputs params",
      control: {
        type: "object",
      },
    },

    submitHandler: {
      name: "submitHandler",
      type: {
        name: "string",
        required: true,
      },
      description: "Submit Handler",
      control: {
        type: null,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    inputs: inputs,
    title: "Login",
    resolverSchema: schema,
    submitHandler: () => null,
  },
};
