<script setup lang="ts">
const { upstream, github } = useAppConfig()
</script>

<template>
  <p class="text-center text-xs text-muted-foreground/70">
    Powered by
    <a
      :href="upstream"
      target="_blank"
      rel="noopener noreferrer"
      class="
        underline-offset-4
        hover:text-foreground hover:underline
      "
    >Sink</a>
    (AGPL-3.0) ·
    <a
      :href="github"
      target="_blank"
      rel="noopener noreferrer"
      class="
        underline-offset-4
        hover:text-foreground hover:underline
      "
    >Source</a>
  </p>
</template>
