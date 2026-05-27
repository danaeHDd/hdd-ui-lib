<template>
  <svg
    :class="iconClasses"
    :width="size"
    :height="size"
    viewBox="0 0 74 64"
    :style="iconStyle"
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
  rotate?: number
  flip?: 'horizontal' | 'vertical' | 'both'
  spin?: boolean
}

const props = withDefaults(defineProps<WarningIconProps>(), {
  size: 24,
  color: 'currentColor',
  rotate: 0,
  flip: '',
  spin: false
})

const iconClasses = computed(() => {
  return [
    'hdd-icon',
    'hdd-icon--warning',
    {
      'hdd-icon--spin': props.spin
    }
  ]
})

const iconStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.rotate !== 0) {
    style.transform = `rotate(${props.rotate}deg)`
  }
  
  if (props.flip) {
    let flipTransform = ''
    if (props.flip === 'horizontal' || props.flip === 'both') {
      flipTransform += ' scaleX(-1)'
    }
    if (props.flip === 'vertical' || props.flip === 'both') {
      flipTransform += ' scaleY(-1)'
    }
    style.transform = (style.transform || '') + flipTransform
  }
  
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddWarningIcon'
}
</script>

<style scoped>
@keyframes hdd-icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hdd-icon {
  display: inline-block;
  vertical-align: middle;
}

.hdd-icon--spin {
  animation: hdd-icon-spin 1s linear infinite;
}
</style>
