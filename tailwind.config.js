/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#072140'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      lineHeight: {
        3.5: '0.875rem'
      },
      letterSpacing: {
        small: '0.2px'
      },
      maxWidth: {
        362: '90.5rem'
      },
      spacing: {
        3.5: '0.875rem',
        13.5: '3.375rem'
      }
    },
  },
  plugins: [],
}
