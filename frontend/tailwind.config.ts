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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#cf4520",
        secondary: "#b31b1b",
      },
      fontFamily: {
        sans: ['1898Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;