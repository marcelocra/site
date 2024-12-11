import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const datetimeWithOffset = z
  .string()
  .date()
  .or(z.string().datetime({ offset: true }));

const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),

  createdDate: datetimeWithOffset,
  pubDate: datetimeWithOffset,
  updatedDate: datetimeWithOffset.optional(),

  tags: z.array(z.string()).optional(),

  heroImage: z.string().optional(),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),

  draft: z.boolean().optional(),
  writing: z.boolean().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
  schema: BlogSchema,
});
export type Blog = z.infer<typeof BlogSchema>;

const timeline = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/timeline" }),
  schema: z.object({
    name: z.string(),
    year: z.number(),
    logo: z.string(),
    position: z.number(),
  }),
});

export const collections = { blog, timeline };
