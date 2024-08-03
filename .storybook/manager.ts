import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import dark from "./themes/dark";
import light from "./themes/light";

addons.setConfig({
  theme: {
    ...themes.normal,
    ...dark,
    ...light,
  },
});
