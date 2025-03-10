import type {Meta, StoryObj} from "@storybook/react";

import {Button} from "./button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
    variant: {
      control: {type: "radio"},
    },
    isLoading: {
      control: {type: "boolean"},
    },
    className: {
      control: {disable: true},
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "I am a button",
  },
};

export const Disabled: Story = {
  args: {
    children: "I am a button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "I am a button",
    isLoading: true,
  },
};
