import React, { useEffect } from "react";
import { Decorator } from "@storybook/react";

export type ThemeMode = "light" | "dark";

const ThemeDecorator: Decorator = (Story, context) => {
  useEffect(() => {
    const theme = context.globals.theme as ThemeMode;

    document.body.setAttribute("theme-mode", theme);
  }, [context.globals.theme]);

  return <Story />;
};
export default ThemeDecorator;
