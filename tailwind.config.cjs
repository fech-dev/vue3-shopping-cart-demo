/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,vue}', './index.html'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem 0',
      },
    },
  },
  plugins: [require('daisyui')],
};
