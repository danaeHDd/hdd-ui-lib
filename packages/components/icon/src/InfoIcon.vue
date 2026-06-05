<template>
  <svg
    :class="iconClasses"
    :width="size"
    :height="size"
    viewBox="0 0 67 67"
    :style="iconStyle"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M36.5625 36.5625V16.5625H30V36.5625H36.5625ZM36.5625 50V43.2812H30V50H36.5625ZM9.6875 9.84375C16.25 3.28125 24.1146 0 33.2812 0C42.4479 0 50.2604 3.28125 56.7188 9.84375C63.2812 16.3021 66.5625 24.1146 66.5625 33.2812C66.5625 42.4479 63.2812 50.3125 56.7188 56.875C50.2604 63.3333 42.4479 66.5625 33.2812 66.5625C24.1146 66.5625 16.25 63.3333 9.6875 56.875C3.22917 50.3125 0 42.4479 0 33.2812C0 24.1146 3.22917 16.3021 9.6875 9.84375Z" 
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface InfoIconProps {
  size?: number | string
  color?: string
  rotate?: number
  flip?: 'horizontal' | 'vertical' | 'both'
  spin?: boolean
}

const props = withDefaults(defineProps<InfoIconProps>(), {
  size: 24,
  color: 'currentColor',
  rotate: 0,
  flip: '',
  spin: false
})

const iconClasses = computed(() => {
  return [
    'hdd-icon',
    'hdd-icon--info',
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
  name: 'HddInfoIcon'
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
