import type { Config } from "tailwindcss";

export default {
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
        "first": "#f7d9e3",
        "second": "#a7d4c5",
        "third": "#cde9ed",
        "fourth": "#f7a8c8",
        "fifth": "#f5b168",
      },
    },
  },
  plugins: [],
} satisfies Config;
