/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:{ 
        100 : "#3C737B",
        200 : "#498C95",
        300 : "#699F9B",
        400 : "#8AB1A4",
        500 : "#ABC3B1",
        600 : "#CAD5C2",
        700 : "#E6E7D9",
        800 : "#FFFBF2",
        },
      },
    },
  },
  plugins: [],
}
