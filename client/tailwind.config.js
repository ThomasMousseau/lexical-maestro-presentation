/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      navBackColor: colors.black,
      BackgroundColor: colors.white,
      grey: '#d8d8d8',
    },
    extend: {},
  },
  plugins: [],
};
