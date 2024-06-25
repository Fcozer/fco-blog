import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'blue' : '#008080',
        'off-white': '#f2f2f2',
        'gray': '#dcdcdc',

      },
    },
  },  
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
