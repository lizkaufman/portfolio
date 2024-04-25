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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "codingbumblebee-yellow": "#f8e71c",
        "codingbumblebee-grey": "#434343",
        "codingbumblebee-blue": "#6fcdff",
        "codingbumblebee-green": "#89b99d",
        "codingbumblebee-brown": "#50361f",
        "codingbumblebee-dark-grey": "#171717",
      },
    },
  },
  plugins: [],
};
export default config;
