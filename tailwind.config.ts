import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#141414',
          text: '#e1e3e6',
        },
        accent: '#0047bb',
      },
      padding: {
        '2.4': '2.4rem',
        '1.6': '1.6rem',
      },
      borderRadius: {
        '4': '0.4rem',
      },
      fontSize: {
        '14': '1.4rem',
      },
      gap: {
        '8': '0.8rem',
      },
    },
  },
  plugins: [],
};
export default config;
