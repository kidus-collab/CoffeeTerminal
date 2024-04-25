/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat": ["Montserrat", "sans-serif"]
      },
      colors:{
        headerColor: "rgba(60, 15, 15, 1)",
        headerTextColor: "rgba(227, 237, 107, 1)"
      }
    },
  },
  plugins: [],
}