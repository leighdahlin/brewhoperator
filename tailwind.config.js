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
      white: "#FFFFFF",
      black: "#000000",
      "soft-white": "#F5F3EF",
      brown: "#624528",
      gray:"#F7F7F7",
      border: "#DDDDDD",
      "dark-golden": "#DEB407",
      error: "#FF0000",
      foggyGrey: "#6A6A6A",
      transparent: 'transparent',
    },
    boxShadow: {
      nav: "0 2px 4px rgba(0,0,0,0.18)",
      search: "0 3px 10px rgba(0 0 0/0.1)",
    }
  },
  plugins: [],
}

