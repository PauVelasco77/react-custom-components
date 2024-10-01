import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example";

const meta: Meta<typeof Example> = {
  title: "Table/Table",
  component: Example,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Basic: Story = {
  args: {},
};
