import type { Meta, StoryObj } from "@storybook/react";
import Select from "../select";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    children: "Button Secondary",
    options: [
      {
        value: "1",
        children: "Option 1",
      },
      {
        value: "2",
        children: "Option 2",
      },
    ],
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Choose an option",
    options: [
      {
        value: "1",
        children: "Option 1",
      },
      {
        value: "2",
        children: "Option 2",
      },
    ],
  },
};

export const WithFixedPlaceholder: Story = {
  args: {
    defaultValue: "",
    options: [
      {
        disabled: true,
        value: "",
        children: "Choose an option",
      },
      {
        value: "1",
        children: "Option 1",
      },
      {
        value: "2",
        children: "Option 2",
      },
    ],
  },
};
