import type { Meta, StoryObj } from "@storybook/react";
import Switch from "../switch";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {},
};

export const Advanced: Story = {
  args: {
    variant: "advanced",
  },
};

export const WithText: Story = {
  args: {
    selectedOption: "On",
    unselectedOption: "Off",
  },
};

export const WithLongText: Story = {
  args: {
    selectedOption: "First option",
    unselectedOption: "Second option",
  },
};

export const WithLabelText: Story = {
  decorators: [
    (Story) => (
      <>
        <label htmlFor="switch">Switch button label</label>
        <Story />
      </>
    ),
  ],
  args: {
    selectedOption: "First option",
    unselectedOption: "Second option",
    id: "switch",
  },
};
