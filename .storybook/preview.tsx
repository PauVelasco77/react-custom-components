import React from "react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../lib/styles/index.css";
import ThemeDecorator from "./decorators/themeDecorator";

const preview: Preview = {
  decorators: [(Story, context) => ThemeDecorator(Story, context)],
  parameters: {
    docs: {
      theme: themes.light,
    },
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
};

export default preview;
