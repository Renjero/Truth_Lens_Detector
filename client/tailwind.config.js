/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf8f7",
          100: "#d7eeec",
          500: "#08777a",
          600: "#066568",
          700: "#075457",
          navy: "#102a36"
        }
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16, 42, 54, 0.08)"
      }
    }
  },
  plugins: []
};
