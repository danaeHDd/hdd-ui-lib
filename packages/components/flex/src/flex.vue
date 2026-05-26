<template>
  <div :class="flexClasses" :style="flexStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  gap?: number | string
  gutter?: number | string
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

const props = withDefaults(defineProps<FlexProps>(), {
  direction: 'row',
  align: 'stretch',
  justify: 'flex-start',
  gap: 0,
  gutter: 0,
  wrap: 'nowrap'
})

const flexClasses = computed(() => {
  return ['hdd-flex']
})

const flexStyle = computed(() => {
  const style: Record<string, string> = {
    display: 'flex',
    flexDirection: props.direction,
    alignItems: props.align,
    justifyContent: props.justify,
    flexWrap: props.wrap
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
  name: 'HddFlex'
}
</script>

<style scoped>
</style>