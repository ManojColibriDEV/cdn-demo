/** @type {import('tailwindcss').Config} */
export default {
  important: '#auth', // Scope to widget container to override external styles
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a64d9a',
        'primary-hover': '#8b3d7f',
        teal: '#33bfb6',
        'teal-light': '#b2dfdb',
        'teal-dark': '#126c66',
      },
      fontFamily: {
        'brandon': ['Brandon Grotesque Bold', 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}
