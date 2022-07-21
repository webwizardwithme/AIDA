/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const config = require('./src/assets/tokens/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  purge: ['./src/**/*.@(tsx|mdx)'],
  ...config,
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        primary: ['Roboto', ...fontFamily.sans],
        // primary: ['Inter', ...fontFamily.sans],
      },
      fontSize: {
        'tiny': '.875rem'
      },
      ...config.theme.extend,
      inset: { '0': '0' },
      padding: { '0': '0' }
    },
  },
};
