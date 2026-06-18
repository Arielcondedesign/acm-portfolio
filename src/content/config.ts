import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    link: z.string().optional(),
    date: z.date().optional(),
    featured: z.boolean().optional(),

    // Nuevos campos para case study template
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
      icon: z.string().optional(),
    })).optional(),

    highlights: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),

    tools: z.array(z.object({
      name: z.string(),
      category: z.string().optional(),
    })).optional(),

    testimonial: z.string().optional(),
    testimonialAuthor: z.string().optional(),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    role: z.string(),
    duration: z.string().optional(),
    tools: z.string(),
    platforms: z.string(),
    tags: z.array(z.string()),
    order: z.number().optional(),
    featured: z.boolean().default(true),
    published: z.boolean().default(true),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  portfolio: portfolioCollection,
};
