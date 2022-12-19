/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(292deg, rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 0.85) 100%)',
        'custom-nav': 'url(https://www.tum.de/fileadmin/_processed_/8/7/csm_Hyperloop_Heddergott_219_629c2dc92f.jpg)'
      },
      colors: {
        'dark-blue': '#072140',
        'primary': '#3070B3',
        'grey-8': '#E8ECEF',
        'grey-6': '#CDD4DB',
        'yellow-gold': '#FED702'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        10.5: '2.625rem'
      },
      lineHeight: {
        3.5: '0.875rem',
        13.2: '3.3rem',
        7.5: '1.875rem'
      },
      letterSpacing: {
        small: '0.2px'
      },
      maxWidth: {
        362: '90.5rem'
      },
      spacing: {
        3.5: '0.875rem',
        13.5: '3.375rem',
        175: '43.75rem',
        '1/10': '10%'
      }
    },
  },
  plugins: [],
}
