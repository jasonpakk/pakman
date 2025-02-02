import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Add Prettier integration
    extends: [
      "plugin:prettier/recommended", // Integrate Prettier with ESLint
    ],
    rules: {
      "react/react-in-jsx-scope": "off", // Disable React scope rule
    },
  },
];
