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
      backgrounds: {
        values: [
          // 👇 Default values
          { name: "Dark", value: "var(--color-surface-100)" },
          { name: "light", value: "#F7F9F2" },
          // 👇 Add your own
          { name: "Maroon", value: "#400" },
        ],
        // 👇 Specify which background is shown by default
        default: "Maroon",
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
