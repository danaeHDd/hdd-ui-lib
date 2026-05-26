<template>
  <main class="hdd-layout-content">
    <slot />
  </main>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
export default {
  name: 'HddContent'
}
</script>

<style scoped>
.hdd-layout-content {
  flex: 1 1 auto;
  padding: var(--hdd-spacing-4);
  background: var(--hdd-color-neutral-05);
  overflow: auto;
}
</style>