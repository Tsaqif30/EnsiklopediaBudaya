/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './JAWA/sukuJawa.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
        Jawa: ['Playfair Display'],
      },
      colors: {
        Ijo: '#007367',
      },
    },
  },
  plugins: [],
};
