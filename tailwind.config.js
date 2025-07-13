/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#8A1538',      // NPC maroon
        accent: '#B79C3B',       // NPC gold
        neutralText: '#4B4B4B',  // Neutral gray
        bgLight: '#F7F7F7',      // Light background
      },
    },
  },
  plugins: [],
};
