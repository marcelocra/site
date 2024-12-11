import { getCollection } from "astro:content";

export async function getPosts() {
  return (
    await getCollection("blog", ({ data }) => {
      return import.meta.env.PROD ? data.draft !== true : true;
    })
  ).sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );
}
