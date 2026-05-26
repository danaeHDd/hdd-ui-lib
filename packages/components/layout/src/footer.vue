<template>
  <footer class="hdd-layout-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script setup lang="ts">
interface FooterProps {
  height?: string
}

withDefaults(defineProps<FooterProps>(), {
  height: '60px'
})
</script>

<script lang="ts">
export default {
  name: 'HddFooter'
}
</script>

<style scoped>
.hdd-layout-footer {
  flex: 0 0 auto;
  background: var(--hdd-color-white);
  border-top: var(--hdd-border-width-sm) solid var(--hdd-border-color-default);
}
</style>