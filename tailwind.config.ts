import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: { colors: { bg:"#0B0B0C", card:"#111214", text:"#EDEEF0", muted:"#ACB0B8", accent:"#5B9DFF", accent2:"#7AE3B1" }, borderRadius:{'2xl':'1rem'} }
  },
  plugins: [],
} satisfies Config;
