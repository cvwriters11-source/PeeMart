/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16181d",
        paper: "#f4f4f4",
        blue: "#1d4e9e",
        navy: "#12356e",
        red: "#c81e20",
        stone: {
          100: "#f7f7f7",
          300: "#d4d4d4",
          700: "#3c4450",
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
}
