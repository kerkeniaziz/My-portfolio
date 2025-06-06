/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.kerkeniaziz.ovh', // ✅ Replace with your own domain
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    outDir: './public', // 👈 Important for static export
  };
  