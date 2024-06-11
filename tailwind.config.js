/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nectarine: ['Nectarine'],
      }
    },
    colors: {
      black: "#000000",
      "soft-white": "#F5F3EF",
    },
  },
  plugins: [],
}

