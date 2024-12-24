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
        shadowColor: "#fcfbf8",
        lightText: "#e8235f",
        headingText: "#eb334e",
        footerBg: "#191D28",
      },
      backgroundImage: {
        "banner-image": "url('/assets/images/banner-image.jpeg')",
      },
      boxShadow: {
        "custom-sm":
          "0 0 8px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.01)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
