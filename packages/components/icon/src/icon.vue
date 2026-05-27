<template>
  <svg
    :class="iconClasses"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    :style="iconStyle"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IconProps {
  size?: number | string
  color?: string
  viewBox?: string
  rotate?: number
  flip?: 'horizontal' | 'vertical' | 'both'
  spin?: boolean
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
  viewBox: '0 0 24 24',
  rotate: 0,
  flip: '',
  spin: false
})

const iconClasses = computed(() => {
  return [
    'hdd-icon',
    {
      'hdd-icon--spin': props.spin
    }
  ]
})

const iconStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.color && props.color !== 'currentColor') {
    style.color = props.color
  }
  
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
  name: 'HddIcon'
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
