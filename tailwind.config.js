/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      primary: "#f24c37",
      secondary: "#f24c37",
      brandYellow: "#fdc62e",
      brandGreend: "#2dcc6f",
      brandBlue: "#1376f4",
      brandWhite: "#eeeeee"
      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}