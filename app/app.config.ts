export default defineAppConfig({
  title: '花墨世界',
  tagline: '花墨世界 · 短链接',
  description: '花墨世界的个人短链接：博客与 YouTube 频道入口。',
  blog: 'https://sssis.me',
  youtube: 'https://www.youtube.com/@ihuamo',
  github: 'https://github.com/Cosin/Sink',
  upstream: 'https://github.com/miantiao-me/sink',
  image: '/og.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
