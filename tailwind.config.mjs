import daisyui from "daisyui";
import twTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // Disable dark mode to prevent UI colors from being affected by system preferences
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [daisyui, twTypography],
  daisyui: {
    // Use only light theme to prevent theme switching
    themes: ["light"],
  },
};
