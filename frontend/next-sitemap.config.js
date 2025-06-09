/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://arcade-hub-zeta.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/secret-page', '/testing-only'], // remove if you want everything
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
