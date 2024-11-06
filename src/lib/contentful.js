// lib/contentful.js
import { createClient } from 'contentful';


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchProjects() {
  const response = await client.getEntries({
    content_type: 'projects', // Replace 'project' with your actual content type ID
  });
  return response.items;
}

export async function fetchBlogPosts(limit = 100) {
  const response = await client.getEntries({
    content_type: 'blogPost', // Replace 'blogPost' with the exact Contentful content type ID
    order: '-fields.publishDate', // Sort by publish date in descending order
    limit,
  });
  return response.items;
}

export async function fetchBlogPostBySlug(slug) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0] || null;
}