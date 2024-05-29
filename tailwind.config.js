/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: {
          50: "#fff6ec",
          100: "#ffecd3",
          200: "#ffd4a5",
          300: "#ffb56d",
          400: "#ff8a32",
          500: "#ff690a",
          600: "#ff4f00",
          700: "#cc3602",
          800: "#a12b0b",
          900: "#82260c",
          950: "#461004",
        },
      },
    },
  },
  plugins: [],
};