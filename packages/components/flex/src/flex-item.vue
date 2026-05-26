<template>
  <div :class="flexItemClasses" :style="flexItemStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FlexItemProps {
  flex?: number | string
  grow?: number | boolean
  shrink?: number | boolean
  basis?: string
  align?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
}

const props = withDefaults(defineProps<FlexItemProps>(), {
  flex: '0 1 auto',
  grow: 0,
  shrink: 1,
  basis: 'auto',
  align: 'auto'
})

const flexItemClasses = computed(() => {
  return ['hdd-flex__item']
})

const flexItemStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (typeof props.flex === 'string') {
    style.flex = props.flex
  } else if (typeof props.flex === 'number') {
    style.flex = `${props.flex}`
  }
  
  if (typeof props.grow === 'number') {
    style.flexGrow = String(props.grow)
  } else if (typeof props.grow === 'boolean') {
    style.flexGrow = props.grow ? '1' : '0'
  }
  
  if (typeof props.shrink === 'number') {
    style.flexShrink = String(props.shrink)
  } else if (typeof props.shrink === 'boolean') {
    style.flexShrink = props.shrink ? '1' : '0'
  }
  
  if (props.basis !== 'auto') {
    style.flexBasis = props.basis
  }
  
  if (props.align !== 'auto') {
    style.alignSelf = props.align
  }
  
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddFlexItem'
}
</script>

<style scoped>
</style>