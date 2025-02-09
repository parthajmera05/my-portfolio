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
        neonGreen: "#39FF14",
        neonPink: "#FF1493",
        neonBlue: "#1E90FF",
        neonCyan: "#00FFFF",
        neonPurple: "#8A2BE2",
        darkBg: "#0A0A0A",
      },
    },
  },
  plugins: [],
} satisfies Config;
