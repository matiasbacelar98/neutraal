import tailwindForms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      circularStd: ['Circular Std', 'sans-serif'],
    },
    fontSize: {
      xsm: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '2.25rem', // 36px
      '2xl': '3rem', // 48px
    },
    fontWeight: {
      book: '350',
      medium: '500',
      bold: '700',
    },
    colors: {
      text: '#1E1E1F',
      bg: '#F6F6FE',
      primary: '#434CE6',
      'primary-hover': '#1D27D8',
      disabled: '#7D80AC',
      'gray-light': '#C1C1E2',
      'gray-dark': '#ACACC3',
      error: '#EB2F2F',
      gray: {
        500: '#1E1E1F', // Select arrow color
      },
    },
    extend: {
      maxWidth: {
        mds: '25rem', // 400px
      },
    },
  },
  plugins: [tailwindForms],
};
