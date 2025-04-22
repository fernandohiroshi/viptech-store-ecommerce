import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
  },

  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier",
      "plugin:@typescript-eslint/recommended",
      "plugin:tailwindcss/recommended",
    ],
    plugins: ["import", "@typescript-eslint", "tailwindcss"],
    parser: "@typescript-eslint/parser",
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            {
              pattern: "@/components/**",
              group: "internal",
              position: "after",
            },
            { pattern: "@/lib/**", group: "internal", position: "after" },
            { pattern: "@/app/**", group: "internal", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      quotes: ["error", "double"],
      semi: ["error", "never"],
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "tailwindcss/classnames-order": "error",
    },
  }),
]

export default eslintConfig
