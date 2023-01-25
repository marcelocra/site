import fs from "node:fs";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import deno from "@astrojs/deno";
import svelte from "@astrojs/svelte";

const BASE_URL = "https://marcelocra.dev/";
const mdPagesPath = fs
  .readdirSync("./src/pages/blog")
  .map((page) => `${BASE_URL}/blog/${page.slice(0, -3)}`);

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  integrations: [
    mdx(),
    sitemap({
      customPages: [`${BASE_URL}/`, `${BASE_URL}/about`, ...mdPagesPath],
    }),
    tailwind(),
    solidJs(),
    svelte(),
  ],
  output: "server",
  adapter: deno(),
});
