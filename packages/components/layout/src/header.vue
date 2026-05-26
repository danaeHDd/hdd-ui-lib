<template>
  <header class="hdd-layout__header" :style="{ height }">
    <slot />
  </header>
</template>

<script setup lang="ts">
interface HeaderProps {
  height?: string
}

withDefaults(defineProps<HeaderProps>(), {
  height: '60px'
})
</script>

<script lang="ts">
export default {
  name: 'HddHeader'
}
</script>

<style scoped>
</style>