const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx", flowbite.content()],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {}
  },
  plugins: [flowbite.plugin()]
}
