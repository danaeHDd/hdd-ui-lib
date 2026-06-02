<template>
  <svg
    :class="iconClasses"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    :style="iconStyle"
    :tabindex="tabindex"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden"
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
  ariaLabel?: string
  tabindex?: number | string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
  viewBox: '0 0 24 24',
  rotate: 0,
  flip: '',
  spin: false,
  ariaLabel: '',
  tabindex: undefined
})

const ariaHidden = computed(() => !props.ariaLabel)

const getSizeClass = (size: number | string): string | undefined => {
  const sizeMap: Record<number, string> = {
    16: 'xs',
    18: 'sm',
    20: 'md',
    24: 'lg',
    32: 'xl'
  }
  return sizeMap[Number(size)]
}

const iconClasses = computed(() => {
  const sizeClass = getSizeClass(props.size)
  return [
    'hdd-icon',
    sizeClass ? `hdd-icon--${sizeClass}` : '',
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
</style>
