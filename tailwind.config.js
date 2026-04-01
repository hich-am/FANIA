/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Off-white
        foreground: '#1A1A1A', // Off-black
        accent: '#5C3E84',     // Elegant Purple
        divider: '#E5E5E5',    // Light gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean sans-serif
        serif: ['Playfair Display', 'serif'], // Elegant serif
      },
    },
  },
  plugins: [],
}
