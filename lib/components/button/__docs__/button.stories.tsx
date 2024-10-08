import type { Meta, StoryObj } from "@storybook/react";
import Button from "../button";
import CustomIcon from "../../../icons/components/customIcon/customIcon";
import Loader from "../../../icons/components/loader/loader";

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    children: "Button Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Button Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Button Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Button Link",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Button Small",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Button Medium",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Button Large",
    size: "large",
  },
};

export const Icon: Story = {
  args: {
    children: (
      <CustomIcon iconName="ChevronRight" width="1.25rem" height="1.25rem" />
    ),
    size: "icon",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <CustomIcon
          iconName="Envelope"
          fill="currentColor"
          width="16px"
          height="16px"
        />
        Login with Email
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader fill="currentColor" width="16px" height="16px" />
        Please Wait
      </>
    ),
    disabled: true,
  },
};

export const AsChild: Story = {
  args: {
    children: "Button as Child",
    asChild: true,
  },
};
