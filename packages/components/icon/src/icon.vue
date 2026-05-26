<template>
  <svg
    :class="iconClasses"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IconProps {
  size?: number | string
  color?: string
  viewBox?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
  viewBox: '0 0 24 24'
})

const iconClasses = computed(() => {
  return ['hdd-icon']
})
</script>

<script lang="ts">
export default {
  name: 'HddIcon'
}
</script>

<style scoped>
</style>