import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {LinkList} from "./LinkList";

const meta: Meta<typeof LinkList> = {
    component: LinkList,
    title: "Atoms/LinkList",
    tags: ["autodocs"],
    argTypes: {
    },

};
export default meta;
type Story = StoryObj<typeof LinkList>;

export const Default: Story = {
    args: {
        listElements: [
            {id: 'Home',name: 'Home', navigateTo:'home'},
            {id: 'Board',name: 'Board', navigateTo:'board'},
            {id: 'Login',name: 'Login', navigateTo:'login'}
        ]
    },
};

