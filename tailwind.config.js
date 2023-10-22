/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#AD8FBF',
        yellow: '#FFF577',
        blue: '#0092A9',
        green: '#5C995C',
        orange: '#E08C1B',
        red: '#FFCEC8',
        cream: '#F8F2DC',
        cyan: '#93CACC',
      },
    },
  },
  plugins: [],
};
