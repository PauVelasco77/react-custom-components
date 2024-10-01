import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "../toggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "ToggleSwitch",
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Basic: Story = {
  args: {
    onChange: (selectedOption: string) => console.log(selectedOption),
    options: ["Option 1", "Option 2"],
  },
};
