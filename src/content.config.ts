import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    url: z.string().url().optional(),
    repository: z.string().url().optional(),
    year: z.number().int().optional(),
  }),
})

export const collections = {
  projects,
}
