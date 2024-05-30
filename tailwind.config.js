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
      maxWidth: {
        full: "100%",
      },
      colors: {
        merino: {
          50: "#f8f6f4",
          100: "#eeeae3",
          200: "#ded6ca",
          300: "#c9bba8",
          400: "#b39c84",
          500: "#a3866c",
          600: "#967660",
          700: "#7d6151",
          800: "#675045",
          900: "#54433a",
          950: "#2c221e",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
