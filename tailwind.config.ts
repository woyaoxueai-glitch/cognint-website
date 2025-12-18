// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'], // 为 Montserrat 字体添加变量
        'fira-mono': ['var(--font-fira-mono)'], // 为 Fira Mono 字体添加变量
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'pulse-slow': 'pulse-slow 6s infinite ease-in-out',
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 60s linear infinite',
        'fade-in-out': 'fade-in-out 10s infinite ease-in-out', // Added for particles
      }
    },
  },
  plugins: [],
};
export default config;