import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightSky: "#0284C7",
        skyColor: "#1DA1F2",
        shadowColor: "##fcfbf8",
      },
      backgroundImage: {
        "banner-image": "url('/assets/images/banner-image.jpeg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
