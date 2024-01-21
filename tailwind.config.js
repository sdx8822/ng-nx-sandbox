/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{html,js,ts}'
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#0f766e',
          'secondary': '#0369a1',
          'accent': '#ffffff',
          'neutral': '#ffffff',
          'base-100': '#ffffff',
          'info': '#d1d5db',
          'success': '#6ee7b7',
          'warning': '#fbbf24',
          'error': '#dc2626',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
