import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.marcelocra.dev",
  integrations: [mdx(), sitemap(), tailwind(), solidJs()],
  output: "server",
  adapter: deno(),
});
