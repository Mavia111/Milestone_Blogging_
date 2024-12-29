import { v4 as uuidv4 } from 'uuid';

export const Blogs = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'blogId',
      title: 'Blog ID',
      type: 'number',
      description: 'Auto-incremented unique identifier for the blog.',
    },
    {
      name: 'heading',
      title: 'Blog Heading',
      type: 'string',
      description: 'The title or heading of the blog.',
    
    },
    {
      name: 'content',
      title: 'Complete Blog Content',
      type: 'array',
      description: 'The full content of the blog post with rich text support.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the image.',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Blog Image',
      type: 'image',
      description: 'An image associated with the blog post.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the image.',
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      description: 'A short summary of the blog post.',
     
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags or categories associated with the blog post.',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'The date and time when the blog post was published.',
    },
    {
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for SEO purposes.',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'string',
          description: 'Description for SEO purposes.',
        },
        {
          name: 'metaKeywords',
          title: 'Meta Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Keywords for SEO purposes.',
        },
      ],
    },
  ],
};

export async function generateBlogId(client: { fetch: (arg0: string) => any; }, doc: { _id: string; }) {
  if (!doc._id.startsWith('drafts.')) {
    const query = `*[_type == "blog"] | order(blogId desc)[0]{ blogId }`;
    const lastBlog = await client.fetch(query);
    return lastBlog?.blogId ? lastBlog.blogId + 1 : 1; // Increment or start at 1
  } else {
    return uuidv4(); // Use UUID for drafts
  }}
