import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors : {
        primary: "#FF9500",
        secondary: "#F1F1F3",
        gray10: "#1A1A1A",
        gray15: "#262626",
        gray30: "#4C4C4D",
        gray35: "#59595A",
        white95: "#F1F1F3",
        orange90: "#FFEACC"
      }
    },
    container: {
      center: true,
      padding: '20px',
    }
  },
  plugins: [],
};
export default config;
