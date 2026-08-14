import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = await getCollection('blog');
  const paths = ['', 'about/', 'archive/', 'experience/', 'projects/', ...posts.map((post) => `blog/${post.id}/`)];
  const body = paths
    .map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`)
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
