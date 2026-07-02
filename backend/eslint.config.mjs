import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react"; // If using React

export default [
  // 1. Tell ESLint which directories to completely ignore
  {
    ignores: ["dist/**", "build/**", "node_modules/**"]
  },
  // 2. Base Configuration for JS/Frontend
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // Enables browser variables like window and document
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules, // Framework defaults
      "no-unused-vars": "warn",                 // Warns about unused variables
      "no-console": ["warn", { allow: ["warn", "error"] }], // Restricts console.log
      "eqeqeq": "error"                         // Enforces strict type equality (===)
    },
  },
];
