module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
  ],
  plugins: ["html"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs", ".ts", ".d.ts"] },
    },
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        "quote-props": ["error", "always"],
        "comma-dangle": ["error", "never"],
      },
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "version",
              "description",
              "keywords",
              "license",
              "repository",
              "funding",
              "author",
              "type",
              "files",
              "exports",
              "main",
              "module",
              "unpkg",
              "bin",
              "scripts",
              "husky",
              "lint-staged",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "devDependencies",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
        ],
      },
    },
  ],
  rules: {
    // import
    "import/no-unresolved": "off",
  },
};
