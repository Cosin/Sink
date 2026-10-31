export default defineAppConfig({
  title: 'Sink',
  github: 'https://github.com/Cosin/Sink',
  upstream: 'https://github.com/miantiao-me/sink',
  license: 'https://github.com/Cosin/Sink/blob/master/LICENSE',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: '/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
