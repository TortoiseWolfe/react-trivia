/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        copper: { DEFAULT: "#B87333", dark: "#A85C22" },
        bronze: { DEFAULT: "#CD7F32", dark: "#A85C28" },
        gold:   { DEFAULT: "#D4AF37",  dark: "#A67C27" },
        ivory:  { DEFAULT: "#FFFFF0",     dark: "#ECECEC" },
      },
      fontFamily: {
        special: ["Special Elite", "cursive"],
        arbutus: ["Arbutus Slab", "serif"],
        cinzel:  ["Cinzel", "serif"],
      },
      fontSize: {
        base: '18px'
      },
    },
  },
  plugins: [],
};
