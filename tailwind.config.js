/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        valid: "green",
        invalid: "red"
      }
    },
    fontFamily: {
      quickSand: ["Quicksand", "sans-serif"],
      Rajdhani: ["Rajdhani", "sans-serif"],
      Megrim: ["Megrim", "sans-serif"],
      

    }
  },
  variants: {
    extend: {
      // borderColor : ['valid', 'invalid'],
      textColor : ['valid', 'invalid'],
    },
  },
  plugins: [],
}