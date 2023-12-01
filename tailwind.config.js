/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#af2ca0",
        secondary: "#27283d",
      },
      fontFamily: {
        cursive: ["Sriracha", "Parisienne", "cursive"],
      },
    },
  },
  plugins: [],
};
