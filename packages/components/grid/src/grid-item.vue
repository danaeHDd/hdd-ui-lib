<template>
  <div :class="gridItemClasses" :style="gridItemStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface GridItemProps {
  span?: number
  offset?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

const props = withDefaults(defineProps<GridItemProps>(), {
  span: 1,
  offset: 0,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0
})

const gridItemClasses = computed(() => {
  return ['hdd-grid__item']
})

const gridItemStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.span > 0) {
    style.gridColumn = `span ${props.span}`
  }
  
  if (props.offset > 0) {
    style.marginLeft = `${props.offset}%`
  }
  
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddGridItem'
}
</script>

<style scoped>
</style>