import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { DESCRIPTION, TITLE } from "../libs/constants";

export async function GET(context) {
  return rss({
    title: TITLE,
    description: DESCRIPTION,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>pt-br</language>`,
  });
}
