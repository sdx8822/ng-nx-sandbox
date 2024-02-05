/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{html,js,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        sandbox: {
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
        pet: {
          'primary': '#E4D9D9',
          'secondary': '#ABD1ED',
          'accent': '#fcd34d',
          'neutral': '#ffffff',
          'base-100': '#ffffff',
          'info': '#d1d5db',
          'success': '#34d399',
          'warning': '#fb923c',
          'error': '#ef4444',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
