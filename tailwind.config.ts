import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0A3D",
          950: "#04041F",
          900: "#0A0A3D",
          800: "#10105E",
          700: "#1A1A8A",
        },
        royal: {
          DEFAULT: "#3535F3",
          light: "#6D6DFF",
          soft: "#DADBFF",
        },
        lav: {
          DEFAULT: "#EEF0FB",
          dark: "#E0E3F6",
        },
        ink: {
          DEFAULT: "#0B0B2B",
          soft: "#46466B",
          muted: "#7A7AA0",
        },
        // Theme-aware tokens, defined as RGB triplets in globals.css
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          soft: "rgb(var(--fg-soft) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
        },
        accent: "rgb(var(--accent) / <alpha-value>)",
        surf: "rgb(var(--surf) / <alpha-value>)",
        alt: "rgb(var(--alt) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        page: "rgb(var(--page) / <alpha-value>)",
        footer: "rgb(var(--footer) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(30, 30, 120, 0.25)",
        glow: "0 0 40px rgba(80, 80, 255, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
