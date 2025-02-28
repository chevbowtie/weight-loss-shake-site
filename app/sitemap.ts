export default function sitemap() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://weight-loss-shake-site-hrc9.vercel.app/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    </urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}