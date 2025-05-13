import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
      group: 'posts',
      useAsTitle: 'title',
      description: 'This is a blog collection' 
    },
    access: {
      read: () => true,
      create: () => true,
      update: () => true,
    },
    defaultSort: ['title'],
    labels: {
      singular: 'Blog Post',
      plural: 'Blog Posts',
    },
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