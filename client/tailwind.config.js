/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      navBackColor: "#3174af",
      BackgroundColor: "#23272e"
    },
    extend: {},
  },
  plugins: [],
};
