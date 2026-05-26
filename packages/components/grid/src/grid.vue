<template>
  <div :class="gridClasses" :style="gridStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface GridProps {
  cols?: number | string
  gutter?: number | string
  gap?: number | string
}

const props = withDefaults(defineProps<GridProps>(), {
  cols: 12,
  gutter: 0,
  gap: 0
})

const gridClasses = computed(() => {
  return ['hdd-grid']
})

const gridStyle = computed(() => {
  const style: Record<string, string> = {
    display: 'grid'
  }
  
  if (typeof props.cols === 'number') {
    style.gridTemplateColumns = `repeat(${props.cols}, 1fr)`
  } else {
    style.gridTemplateColumns = props.cols
  }
  
  const gapValue = props.gap || props.gutter
  
  if (typeof gapValue === 'number') {
    style.gap = `${gapValue}px`
  } else {
    style.gap = gapValue
  }
  
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddGrid'
}
</script>

<style scoped>
</style>