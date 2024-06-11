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
        accent: '#0047bb',
        border: {
          primary: '#363738',
        },
      },
      padding: {
        '2.4': '2.4rem',
        '1.6': '1.6rem',
        '0.8': '0.8rem',
        '0.6': '0.6rem',
      },
      borderRadius: {
        '4': '0.4rem',
        '1.8': '1.8rem',
        '100': '100%',
      },
      fontSize: {
        '14': '1.4rem',
      },
      gap: {
        '8': '0.8rem',
      },
      width: {
        '2.4': '2.4rem',
      },
      height: {
        '2.4': '2.4rem',
      },
    },
  },
  plugins: [],
};
export default config;
