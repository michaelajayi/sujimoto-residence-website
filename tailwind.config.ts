import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ['"Work Sans"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "eb-garamond": ["EB Garamond", "serif"],
      },
      animation: {
        pulse: "pulse 1.5s infinite",
      },
      keyframes: {
        pulse: {
          "0%": { boxShadow: "#d5897b 0 0 0 0" },
          "75%": { boxShadow: "#d5897b00 0 0 0 16px" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-left-overlay":
          "linear-gradient(90deg,rgba(0, 0, 0, 1) 2%,rgba(0, 0, 0, 0.65) 20%,transparent 40%)",
        "banner-bottom-overlay":
          "linear-gradient(0deg,rgba(0, 0, 0, 1) 5%,rgba(0, 0, 0, 0.65) 30%,transparent 95.31%);",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["group-hover"],
    },
  },
  plugins: [],
};
export default config;
