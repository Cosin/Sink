<script setup lang="ts">
import { ArrowUpRight, BookOpen } from '@lucide/vue'
import { BilibiliIcon, YouTubeIcon } from 'vue3-simple-icons'

definePageMeta({ layout: false })

const { title, tagline, blog, youtube, bilibili } = useAppConfig()

function hostOf(url: string) {
  try {
    return new URL(url).host
  }
  catch {
    return url
  }
}

const links = computed(() => [
  blog && {
    key: 'blog',
    href: blog,
    label: '博客',
    detail: hostOf(blog),
    icon: BookOpen,
  },
  youtube && {
    key: 'youtube',
    href: youtube,
    label: 'YouTube 频道',
    detail: title,
    icon: YouTubeIcon,
  },
  bilibili && {
    key: 'bilibili',
    href: bilibili,
    label: 'B站频道',
    detail: title,
    icon: BilibiliIcon,
  },
].filter(Boolean) as { key: string, href: string, label: string, detail: string, icon: Component }[])
</script>

<template>
  <div
    lang="zh-CN"
    class="
      relative flex min-h-svh flex-col bg-background
      pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
      text-foreground
    "
  >
    <div class="absolute top-[calc(1rem+env(safe-area-inset-top))] right-4">
      <SwitchTheme />
    </div>

    <main
      class="
        mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center
        px-6 py-16
      "
    >
      <BrandMark size="lg" />
      <h1 class="mt-6 font-serif text-4xl font-bold tracking-widest">
        {{ title }}
      </h1>
      <p class="mt-3 text-sm tracking-wider text-muted-foreground">
        {{ tagline }}
      </p>

      <nav aria-label="链接" class="mt-10 flex w-full flex-col gap-3">
        <a
          v-for="link in links"
          :key="link.key"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="
            group flex items-center gap-4 rounded-2xl border bg-card px-5 py-4
            shadow-xs transition-colors
            hover:bg-muted
            focus-visible:ring-2 focus-visible:ring-ring
            focus-visible:outline-none
          "
        >
          <span
            class="
              flex size-10 items-center justify-center rounded-xl bg-muted
              group-hover:bg-background
            "
          >
            <component :is="link.icon" class="size-5" aria-hidden="true" />
          </span>
          <span class="flex flex-1 flex-col text-left">
            <span class="font-medium">{{ link.label }}</span>
            <span class="text-xs text-muted-foreground">{{ link.detail }}</span>
          </span>
          <ArrowUpRight
            class="
              size-4 text-muted-foreground transition-transform
              group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            "
            aria-hidden="true"
          />
        </a>
      </nav>
    </main>

    <footer class="px-6 pb-6">
      <PoweredBy />
    </footer>
  </div>
</template>
