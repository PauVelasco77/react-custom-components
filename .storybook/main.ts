import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-css-modules",
    "@storybook/addon-backgrounds",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  features: {
    backgroundsStoryGlobals: true,
  },
};
export default config;
