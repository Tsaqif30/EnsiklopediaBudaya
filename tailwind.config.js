/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './JAWA/*.{html,js}', './SUMATERA/*.{html,js}'],
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
        Sumatera: '#1D1B16',
      },
    },
  },
  plugins: [],
};
