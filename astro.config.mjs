import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://marcelocra.dev",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "en"],
    fallback: {
      en: "pt-br",
    },
  },
});
