/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
