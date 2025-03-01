import {coverageConfigDefaults, defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import {resolve} from "path";
import {peerDependencies} from "./package.json";
import {libInjectCss} from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["**/*.stories.ts", "**/*.test.tsx", ".storybook/**/*"],
    }),
    //dts({
    //  include: ["src/**/*.ts", "src/**/*.tsx"],
    //  exclude: ["src/**/*.test.tsx", "src/**/*.stories.tsx"],
    //  insertTypesEntry: true,
    //  tsconfigPath: "./tsconfig.app.json",
    //  rollupTypes: true,
    //}),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "pau-react-custom-components",
      fileName: "rcc",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.ts"),
      },
      external: Object.keys(peerDependencies),
      output: {globals: {react: "React", "react-dom": "ReactDOM"}},
    },
  },
  test: {
    globals: true, // Enables global `test`, `expect`, etc.
    environment: "jsdom", // 👈 Ensures a browser-like environment
    setupFiles: "./setupTests.ts", // 👈 Ensures setupTests.ts is loaded
    coverage: {
      // 👇 Add this
      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/.storybook/**",
        // 👇 This pattern must align with the `stories` property of your `.storybook/main.ts` config
        "**/*.stories.*",
        // 👇 This pattern must align with the output directory of `storybook build`
        "**/storybook-static/**",
      ],
    },
  },
});
