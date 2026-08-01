import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const sortedBlog = blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  // Determine site URL safely
  const baseUrl = context.site ? context.site.toString() : 'https://namanlabc.github.io';
  const baseSubpath = import.meta.env.BASE_URL || '';
  
  // Combine base URL and subpath, clean up trailing slash on base URL if needed
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanSubpath = baseSubpath.startsWith('/') ? baseSubpath : `/${baseSubpath}`;
  const siteUrl = (cleanBase + cleanSubpath).replace(/\/$/, ''); // Ensure no double/trailing slashes

  const items = sortedBlog.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${siteUrl}/blog/${post.id}/</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.id}/</guid>
      <pubDate>${new Date(post.data.pubDate).toUTCString()}</pubDate>
      <description><![CDATA[${post.data.description}]]></description>
    </item>
  `).join('').trim();

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Luffy's Notes</title>
  <link>${siteUrl}/</link>
  <description>Notes on building things, the internet, stories, and figuring life out.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
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
