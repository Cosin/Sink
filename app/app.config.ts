export default defineAppConfig({
  title: '花墨世界',
  tagline: '花墨世界 · 短链接',
  description: '花墨世界的个人短链接：博客、YouTube 与 B 站频道入口。',
  blog: 'https://sssis.me',
  youtube: 'https://www.youtube.com/@ihuamo',
  bilibili: 'https://space.bilibili.com/244064881',
  github: 'https://github.com/Cosin/Sink',
  upstream: 'https://github.com/miantiao-me/sink',
  image: '/og.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
