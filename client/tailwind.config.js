/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#212121",
        yRed:"#FF0000",
        lightText:"#ffffff80",
        cardBg:"#282828"
      },
      fontFamily:{
        roboto:["Roboto"]
      },
    },
  },
  plugins: [],
}