import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'slug',
        type: 'text',
      },
      {
        name: 'excerpt',
        type: 'text',
      },
      {
        name: 'content',
        type: 'richText',
      },
      {
        name: 'category',
        type: 'text',
      },
      {
        name: 'image',
        type: 'text',
      },
      {
        name: 'createdAt',
        type: 'date',
      },
      {
        name: 'readTime',
        type: 'text',
      },
    ],
  };