import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'telegram-white': 'var(--telegram-bg-color)',
        'telegram-black': 'var(--telegram-text-color)',
        'telegram-hint': 'var(--telegram-hint-color)',
        'telegram-link': 'var(--telegram-link-color)',
        'telegram-primary': 'var(--telegram-button-color)',
        'telegram-primary-text': 'var(--telegram-button-text-color)',
        'telegram-secondary-white': 'var(--telegram-secondary-bg-color)',
      },
    },
  },
  plugins: [],
};
export default config;
