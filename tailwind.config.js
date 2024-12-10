/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        secondary: '#FFD700',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 165, 0, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};