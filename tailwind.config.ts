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
        statBlockRed: "#7A200D",
        statBlockBG: "#FDF1DC",
        statBlockOrange: "#E69A28",
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
      headers: ['EB Garamond', 'serif'],
      statblockHeader: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
export default config;
