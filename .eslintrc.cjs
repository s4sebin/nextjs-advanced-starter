module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
  ],
  globals: {
    document: false,
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "jest",
    "typescript-sort-keys",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": ["error", { varsIgnorePattern: "^React$", args: "none" }],
    "simple-import-sort/imports": "error",
    "prettier/prettier": ["error", { singleQuote: false }],
    quotes: [2, "double", { avoidEscape: true }],
    "react/react-in-jsx-scope": "off",
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^React$", args: "none" },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // `react` first, `next` second, then packages starting with a character
          ["^react$", "^next", "^[a-z]"],
          // Packages starting with `@`
          ["^@"],
          // Packages starting with `~`
          ["^~"],
          // Imports starting with `../`
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Imports starting with `./`
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports
          ["^.+\\.s?css$"],
          // Side effect imports
          ["^\\u0000"],
        ],
      },
    ],
  },
};
