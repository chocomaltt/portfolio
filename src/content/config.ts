import {defineCollection, z} from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        type: z.string(),
        role: z.string().nullable().optional(),
        hasImage: z.boolean().default(true),
        date: z.coerce.date(),
        description: z.string(),
        demo: z.string().url().nullable().default(null),
        sourceModel: z.string().url().nullable().default(null),
        sourceClient: z.string().url().nullable().default(null),
        sourceServer: z.string().url().nullable().default(null),
        sourceColab: z.string().url().nullable().default(null),
        stack: z.array(z.string()),
        contributors: z.array(z.object({
            role: z.string(),
            name: z.string(),
            link: z.string().url().nullable().default(null),
        })).optional()
    }),
});

export const collections = {
    projects: projectCollection,
};