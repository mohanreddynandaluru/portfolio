/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#7c3aed',
        'accent-light': '#3b82f6',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-light': 'rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'card-entrance': 'cardEntrance 0.6s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        cardEntrance: {
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideIn: {
          'to': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
} 