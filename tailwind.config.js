/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'verde-escuro': '#2E7D32',
        'verde-claro': '#A5D6A7',
        'amarelo-banana': '#FBC02D',
        'laranja': '#FB8C00',
        'vermelho-maca': '#E53935',
        'cinza-claro': '#F5F5F5',
        'cinza-texto': '#424242',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(-15px) rotate(240deg)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '100%' },
        }
      },
      boxShadow: {
        'natural': '0 20px 60px rgba(46, 125, 50, 0.25)',
        'card': '0 15px 40px rgba(46, 125, 50, 0.12)',
        'hover': '0 25px 60px rgba(46, 125, 50, 0.2)',
      }
    },
  },
  plugins: [],
}