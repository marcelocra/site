import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { DESCRIPTION, TITLE } from "../libs/constants";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: TITLE,
    description: DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}
