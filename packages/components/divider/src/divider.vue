<template>
  <div :class="dividerClasses" :style="dividerStyle" v-bind="$attrs">
    <span v-if="$slots.default" class="hdd-divider__text">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface DividerProps {
  direction?: 'horizontal' | 'vertical'
  contentPosition?: 'left' | 'center' | 'right'
  dashed?: boolean
  borderColor?: string
  textColor?: string
  margin?: string
}

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  contentPosition: 'center',
  dashed: false
})

const slots = useSlots()

const dividerClasses = computed(() => {
  return [
    'hdd-divider',
    `hdd-divider--${props.direction}`,
    {
      'hdd-divider--dashed': props.dashed,
      [`hdd-divider--${props.contentPosition}`]: slots.default
    }
  ]
})

const dividerStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.borderColor) {
    style['--hdd-divider-color'] = props.borderColor
  }
  
  if (props.textColor) {
    style.color = props.textColor
  }
  
  if (props.margin) {
    style.margin = props.margin
  }
  
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddDivider'
}
</script>

<style scoped>
</style>