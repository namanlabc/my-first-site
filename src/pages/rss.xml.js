import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const sortedBlog = blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const siteUrl = new URL(import.meta.env.BASE_URL, context.site ?? 'https://naman.blog/');
  const escapeXml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

  const items = sortedBlog.map((post) => `
    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${new URL(`blog/${post.id}/`, siteUrl).href}</link>
      <guid isPermaLink="true">${new URL(`blog/${post.id}/`, siteUrl).href}</guid>
      <pubDate>${new Date(post.data.pubDate).toUTCString()}</pubDate>
      <description>${escapeXml(post.data.description)}</description>
    </item>
  `).join('').trim();

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Naman's Notes</title>
  <link>${siteUrl.href}</link>
  <description>Notes on building things, the internet, stories, and figuring life out.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${new URL('rss.xml', siteUrl).href}" rel="self" type="application/rss+xml" />
  ${items}
</channel>
</rss>
`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
