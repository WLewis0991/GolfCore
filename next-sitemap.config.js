/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://golfcore.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/_next/*', '/static/*'],
  additionalPaths: async () => [
    { loc: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/sign-in', changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() },
    { loc: '/sign-up', changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/sign-in', '/sign-up', '/api/', '/dashboard/', '/rounds/', '/history/', '/courses/'] },
    ],
  },
};