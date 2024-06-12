import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#141414',
          text: '#e1e3e6',
        },
        secondary: {
          bg: '#232324',
          text: '#b0b1b6',
        },
        tertiary: {
          text: '#76787a',
        },
        accent: {
          blue: '#0047bb',
          red: '#db4546',
          green: '#25824f',
          yellow: '#ffb649',
        },
        border: {
          primary: '#363738',
        },
      },
      padding: {
        '40': '4rem',
        '30': '3rem',
        '3.2': '3.2rem',
        '2.4': '2.4rem',
        '1.6': '1.6rem',
        '1.2': '1.2rem',
        '1.0': '1.0rem',
        '0.8': '0.8rem',
        '0.6': '0.6rem',
      },
      margin: {
        '200': '20rem',
      },
      borderWidth: {
        '1': '0.1rem',
      },
      borderRadius: {
        '4': '0.4rem',
        '1.2': '1.2rem',
        '1.6': '1.6rem',
        '1.8': '1.8rem',
        '100': '100%',
      },
      fontSize: {
        h5: [
          '2.4rem',
          {
            lineHeight: '3.2rem',
            fontWeight: '400',
          },
        ],
        sub1: [
          '1.6rem',
          {
            lineHeight: '2.4rem',
            fontWeight: '400',
          },
        ],
        sub2: [
          '1.4rem',
          {
            lineHeight: '2.4rem',
            fontWeight: '500',
          },
        ],
        '14': '1.4rem',
        '48': '4.8rem',
      },
      gap: {
        '8': '0.8rem',
        '1.6': '1.6rem',
        '2.4': '2.4rem',
        '48': '4.8rem',
      },
      width: {
        '2.4': '2.4rem',
        '16': '16rem',
        '32.8': '32.8rem',
        '962': '96.2rem',
        '1494': '149.4rem',
      },
      height: {
        '2.4': '2.4rem',
        '16': '16rem',
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      maxWidth: {
        '60.6': '60.6rem',
        '50': '50rem',
      },
      screens: {
        xxs: { max: '360px' },
        sm: { max: '640px' },
      },
    },
  },
  plugins: [],
};
export default config;
