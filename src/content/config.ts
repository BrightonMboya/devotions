import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

const prayers = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		novenaName: z.string().default("A Prayer Title")
	})
})

export const collections = {
	'blog': blog,
	'prayers': prayers
};
