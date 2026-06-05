<template>
  <a 
    :class="linkClasses"
    :href="disabled ? undefined : href"
    :target="target"
    @click="handleClick"
  >
    <span v-if="$slots.prefix" class="hdd-link__prefix">
      <slot name="prefix" />
    </span>
    <span class="hdd-link__text">
      <slot />
    </span>
    <span v-if="$slots.suffix" class="hdd-link__suffix">
      <slot name="suffix" />
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface LinkProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  href?: string
  target?: string
  disabled?: boolean
  underline?: boolean
}

const props = withDefaults(defineProps<LinkProps>(), {
  type: 'default',
  href: 'javascript:void(0)',
  target: '_self',
  disabled: false,
  underline: true
})

const emit = defineEmits(['click'])

const linkClasses = computed(() => {
  return [
    'hdd-link',
    `hdd-link--${props.type}`,
    {
      'hdd-link--disabled': props.disabled,
      'hdd-link--underline': props.underline,
      'hdd-link--no-underline': !props.underline
    }
  ]
})

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<script lang="ts">
export default {
  name: 'HddLink'
}
</script>

<style scoped>
</style>
