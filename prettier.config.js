/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
}

module.exports = config
