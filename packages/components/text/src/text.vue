<template>
  <component
    :is="tag"
    :class="textClasses"
    :style="textStyle"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface TextProps {
  type?: 'title' | 'body' | 'secondary'
  tag?: string
  color?: string
  bold?: boolean
  italic?: boolean
  delete?: boolean
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<TextProps>(), {
  type: 'body',
  tag: 'span',
  color: '',
  bold: false,
  italic: false,
  delete: false,
  size: 'base'
})

const textClasses = computed(() => {
  return [
    'hdd-text',
    `hdd-text--${props.type}`,
    `hdd-text--${props.size}`,
    {
      'hdd-text--bold': props.bold,
      'hdd-text--italic': props.italic,
      'hdd-text--delete': props.delete
    }
  ]
})

const textStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    style.color = props.color
  }
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddText'
}
</script>

<style scoped>
</style>
