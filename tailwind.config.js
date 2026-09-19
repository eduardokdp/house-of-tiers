/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF3E7',
          dark: '#F1E3C9',
          deep: '#E9D5AC',
        },
        espresso: {
          DEFAULT: '#3B2A1E',
          light: '#6B4A35',
          soft: '#8A6B52',
        },
        blush: {
          DEFAULT: '#F0D3C9',
          dark: '#E3B5A6',
        },
        butter: {
          DEFAULT: '#EFD9A0',
          dark: '#E2C476',
        },
        ivory: '#FFFDF8',
      },
      fontFamily: {
        script: ['"Mrs Saint Delafield"', 'cursive'],
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(59, 42, 30, 0.25)',
        card: '0 4px 24px -8px rgba(59, 42, 30, 0.18)',
      },
      borderRadius: {
        blob: '255px 15px 225px 15px/15px 225px 15px 255px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drip: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s ease-out both',
        drip: 'drip 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
