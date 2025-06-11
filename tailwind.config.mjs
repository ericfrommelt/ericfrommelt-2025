/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rockpants: "var(--rockpants)",
        chilldilla: "var(--chilldilla)",
        excalibur: "var(--excalibur)",
        chillout: "var(--chillout)",
        hawkworld: "var(--hawkworld)",
        greenmachine: "var(--greenmachine)",
        fadinglime: "var(--fadinglime)",
      },
    },
  },
  plugins: [],
};

export default config;
