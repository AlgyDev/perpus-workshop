/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gray-25": "#FCFCFD",
        "primary-25": "#F1F2FD",
        "primary-500": "#2E3285",
        "primary-800": "#171942",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}
export default config;
