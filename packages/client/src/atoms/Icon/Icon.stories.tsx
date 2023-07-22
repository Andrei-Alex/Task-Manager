import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Icon} from "./Icon";

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: "Atoms/Icon",
    tags: ["autodocs"],
    argTypes: {
        iconName: {
            name: "Select icon",
            description: "Display Icon",
            control: {
                type: 'radio',
            },
        },
    },

};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        extraStyles: {},
        iconName : "HiMail",
        color: "black",
        size: 16,
    },
};
