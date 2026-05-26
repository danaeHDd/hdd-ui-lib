<template>
  <footer class="hdd-layout__footer" :style="{ height }">
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
</style>