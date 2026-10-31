<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'lg' }>(), { size: 'sm' })
</script>

<template>
  <span
    aria-hidden="true"
    class="
      inline-flex shrink-0 items-center justify-center bg-foreground font-serif
      font-bold text-background select-none
    "
    :class="size === 'lg' ? 'size-16 rounded-2xl text-4xl' : `
      size-8 rounded-lg text-lg
    `"
  >花</span>
</template>
