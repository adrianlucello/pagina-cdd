/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cdd-pink': '#e4379b',
      },
      fontFamily: {
        'pixter': ['pixter-granular', 'sans-serif'],
        'skpupok': ['SKPupok-Solid', 'sans-serif'],
        'autom': ['Autom-Bold', 'sans-serif'],
        'extenda': ['extenda-extendable', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

