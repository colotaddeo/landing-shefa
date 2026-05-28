import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        shefa: {
          dark:   "var(--shefa-dark)",
          card:   "var(--shefa-card)",
          border: "var(--shefa-border)",
          text:   "var(--shefa-text)",
          muted:  "var(--shefa-muted)",
          accent: "var(--shefa-accent)",
          hover:  "var(--shefa-hover)",
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
