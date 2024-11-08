import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E8E8E8", // Light Gray for background
        primary: "#2B2D42", // Dark Slate for primary elements
        accent: "#48CAE4", // Teal accent for buttons and links
        text: "#1A1A1A", // Off-Black for text
        muted: "#FAFAFA", // Snow White, for areas needing a subtle background
      },
    },
  },
  plugins: [],
};

export default config;
