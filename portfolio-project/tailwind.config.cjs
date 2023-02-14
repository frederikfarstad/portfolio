/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ModerneSans: ["ModerneSans", "sans-serif"],
      }
    },
  },
  plugins: [],
}