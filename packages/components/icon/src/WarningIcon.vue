<template>
  <svg
    :class="iconClasses"
    :width="size"
    :height="size"
    viewBox="0 0 74 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M40 40V26.5625H33.4375V40H40ZM40 53.2812V46.5625H33.4375V53.2812H40ZM0 63.2812L36.7188 0L73.4375 63.2812H0Z" 
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface WarningIconProps {
  size?: number | string
  color?: string
}

const props = withDefaults(defineProps<WarningIconProps>(), {
  size: 24,
  color: 'currentColor'
})

const iconClasses = computed(() => {
  return ['hdd-icon', 'hdd-icon--warning']
})
</script>

<script lang="ts">
export default {
  name: 'HddWarningIcon'
}
</script>

<style scoped>
</style>
