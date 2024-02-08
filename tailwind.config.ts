import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1D2727",
        gold: "#EEAE4D",
        cream: "#FFE99C",
        light: "#F5F5F5",
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
      headers: ['EB Garamond', 'serif'],
    },
  },
  plugins: [],
};
export default config;
