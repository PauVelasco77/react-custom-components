import React from "react";
import type { Preview } from "@storybook/react";
import "../lib/styles/index.css";
import "./storybook.setup";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Dark or Light mode",
      defaultValue: "light",
      toolbar: {
        title: "light",
        defaultValue: "light",
        items: [
          {
            value: "light",
            title: "LIGHT",
            icon: "sun",
          },
          {
            value: "dark",
            title: "DARK",
            icon: "moon",
          },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      console.log("theme", theme);
      return (
        <div className={theme} theme-mode={theme}>
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
  },
};

export default preview;
