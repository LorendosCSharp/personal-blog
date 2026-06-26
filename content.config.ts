import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        imageSrc: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
      })
    })
  }
})