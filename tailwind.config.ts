import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        linear: "linear-gradient(155deg, #383638 2.06%, #0B0B0B 33.08%)",
        skeleton: "linear-gradient(90deg, #ddd, #f8f8f8, #ddd)",
      },
      animation: {
        skeleton: "skeleton 1s infinite linear",
      },
      keyframes: {
        skeleton: {
          to: {
            backgroundPosition: "-200%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
