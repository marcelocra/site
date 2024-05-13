import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    tags: z.array(z.string()).optional(),

    heroImage: z.string().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

const timeline = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    year: z.number(),
    logo: z.string(),
    position: z.number(),
  }),
});

export const collections = { blog, timeline };
