/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      circularStd: ['Circular Std', 'sans-serif'],
    },
    fontWeight: {
      book: '350',
      bold: '700',
    },
  },
  plugins: [],
};
