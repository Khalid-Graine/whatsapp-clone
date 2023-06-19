// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#111B21",
        "icon-color": "#d1d7db",
        "primary-color": "#E9EDEF",
        "secondary-color": "#8696A0",
        "input-background": "#202c33",
        "text-input": "#D1D7DB",
        "background-message-he": "#202C33", 
        "background-message-me": "#005C4B",
        "active": "#2A3942",
        "primary-hover": "red",

      }, 
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
        Gloock: ["Gloock, sans-serif"]
      }
    },
  },
  plugins: [],
}
