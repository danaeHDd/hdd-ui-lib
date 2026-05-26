<template>
  <header class="hdd-layout-header">
    <slot />
  </header>
</template>

<script setup lang="ts">
interface HeaderProps {
}

defineProps<HeaderProps>()
</script>

<script lang="ts">
export default {
  name: 'HddHeader'
}
</script>

<style scoped>
.hdd-layout-header {
  flex: 0 0 auto;
  background: var(--hdd-color-white);
  border-bottom: var(--hdd-border-width-sm) solid var(--hdd-border-color-default);
}
</style>