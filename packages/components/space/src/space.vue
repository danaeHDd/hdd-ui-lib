<template>
  <div :class="spaceClasses" :style="spaceStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface SpaceProps {
  direction?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  customSize?: string
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  wrap?: boolean
  fill?: boolean
}

const props = withDefaults(defineProps<SpaceProps>(), {
  direction: 'horizontal',
  size: 'md',
  customSize: '',
  align: 'center',
  wrap: false,
  fill: false
})

const spaceClasses = computed(() => {
  return [
    'hdd-space',
    `hdd-space--${props.direction}`,
    `hdd-space--${props.align}`,
    {
      'hdd-space--wrap': props.wrap,
      'hdd-space--fill': props.fill
    }
  ]
})

const spaceStyle = computed(() => {
  const style: Record<string, string> = {}
  
  const sizeMap = {
    sm: 'var(--hdd-spacing-2)',
    md: 'var(--hdd-spacing-4)',
    lg: 'var(--hdd-spacing-6)',
    xl: 'var(--hdd-spacing-8)'
  }
  
  const gapValue = props.customSize || sizeMap[props.size]
  
  if (props.wrap) {
    // 换行模式下，两个方向都需要间距
    style.gap = gapValue
  } else if (props.direction === 'horizontal') {
    style.columnGap = gapValue
  } else {
    style.rowGap = gapValue
  }
  
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddSpace'
}
</script>

<style scoped>
</style>
