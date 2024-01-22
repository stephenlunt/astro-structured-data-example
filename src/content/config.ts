import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            createdAt: z.coerce.date(),
            updatedAt: z.coerce.date().optional(),
            author: z.object({
                name: z.string(),
                bio: z.string(),
                profileUrl: z.string(),
            }),
            heroImage: z.object({
                url: image(),
                alt: z.string(),
            }),
        }),
});

export const collections = { blog };
