/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
  syne: ['Outfit', 'sans-serif'],   // headings
  dm:   ['Plus Jakarta Sans', 'sans-serif'],  // body
},
      colors: {
        accent: '#00d4ff',
        accent2: '#7c3aed',
        accent3: '#06ffa5',
      }
    },
  },
  plugins: [],
}
