import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // base ignore
  {
    ignores: ["dist", "node_modules"],
  },

  // main config
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // -------- base --------
      "prettier/prettier": "error",

      // -------- typescript --------
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",

      // -------- imports --------
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],

      // -------- NestJS specific --------

      "max-lines-per-function": [
        "warn",
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "class",
          format: ["PascalCase"],
          suffix: ["Dto", "Entity", "Service", "Controller"],
        },
      ],

      "@typescript-eslint/no-unsafe-assignment": "warn",

      "@typescript-eslint/require-await": "warn",

      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

  prettierConfig,
];
