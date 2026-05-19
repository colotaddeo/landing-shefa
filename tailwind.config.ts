import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        shefa: {
          dark:   "#08080d",
          card:   "#0f0f16",
          border: "#1e1e28",
          text:   "#e8eef0",
          muted:  "#586470",
          accent: "#30BCDB",
          hover:  "#4DCDE8",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
