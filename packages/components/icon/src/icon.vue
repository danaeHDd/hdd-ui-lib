<template>
  <component
    :is="isFontIcon ? 'span' : 'svg'"
    :class="iconClasses"
    :style="iconStyle"
    :tabindex="tabindex"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden"
    v-bind="isFontIcon ? {} : svgAttributes"
  >
    <slot v-if="!isFontIcon" />
    <template v-else>{{ name }}</template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IconProps {
  name?: string
  variant?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone'
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
  name: '',
  variant: 'filled',
  size: 24,
  color: 'currentColor',
  viewBox: '0 0 24 24',
  rotate: 0,
  flip: '',
  spin: false,
  ariaLabel: '',
  tabindex: undefined
})

const isFontIcon = computed(() => !!props.name)

const svgAttributes = computed(() => ({
  width: props.size,
  height: props.size,
  viewBox: props.viewBox,
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}))

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

const getMaterialIconClass = (variant: string): string => {
  const variantMap: Record<string, string> = {
    filled: 'material-icons',
    outlined: 'material-icons-outlined',
    round: 'material-icons-round',
    sharp: 'material-icons-sharp',
    'two-tone': 'material-icons-two-tone'
  }
  return variantMap[variant] || 'material-icons'
}

const iconClasses = computed(() => {
  const sizeClass = getSizeClass(props.size)
  const baseClasses = [
    'hdd-icon',
    sizeClass ? `hdd-icon--${sizeClass}` : '',
    {
      'hdd-icon--spin': props.spin
    }
  ]
  
  if (isFontIcon.value) {
    baseClasses.push(getMaterialIconClass(props.variant))
  }
  
  return baseClasses
})

const iconStyle = computed(() => {
  const style: Record<string, string | number> = {}
  
  if (props.color && props.color !== 'currentColor') {
    style.color = props.color
  }
  
  if (isFontIcon.value) {
    style.fontSize = typeof props.size === 'number' ? `${props.size}px` : props.size
  } else {
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
