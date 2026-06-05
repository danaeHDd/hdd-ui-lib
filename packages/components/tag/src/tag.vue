<template>
  <span
    :class="tagClasses"
    :tabindex="clickable ? 0 : undefined"
    :aria-label="closable ? `移除标签 ${label}` : undefined"
    @click="handleClick"
    @keydown.enter="handleKeydown"
    @keydown.space="handleKeydown"
  >
    <span class="hdd-tag__icon" v-if="hasIcon">
      <slot name="icon" />
    </span>
    <span class="hdd-tag__content">
      <slot />
    </span>
    <button
      v-if="closable"
      class="hdd-tag__close"
      type="button"
      @click.stop="handleClose"
      aria-label="移除标签"
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface TagProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  effect?: 'light' | 'dark' | 'plain'
  closable?: boolean
  clickable?: boolean
  selected?: boolean
  disableTransitions?: boolean
  hit?: boolean
  color?: string
}

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  effect: 'light',
  closable: false,
  clickable: false,
  selected: false,
  disableTransitions: false,
  hit: false
})

const emit = defineEmits<{
  (e: 'click'): void
  (e: 'close'): void
}>()

const slots = useSlots()

const label = computed(() => '')

const hasIcon = computed(() => !!slots.icon)

const tagClasses = computed(() => {
  return [
    'hdd-tag',
    props.clickable && !props.selected ? 'hdd-tag--default' : `hdd-tag--${props.type}`,
    `hdd-tag--${props.effect}`,
    {
      'hdd-tag--closable': props.closable,
      'hdd-tag--clickable': props.clickable,
      'hdd-tag--selected': props.selected,
      'hdd-tag--hit': props.hit,
      'hdd-tag--no-transition': props.disableTransitions
    }
  ]
})

const handleClick = () => {
  if (props.clickable) {
    emit('click')
  }
}

const handleClose = () => {
  emit('close')
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.clickable && (event.key === 'Enter' || event.key === ' ')) {
    emit('click')
  }
}
</script>

<script lang="ts">
export default {
  name: 'HddTag'
}
</script>

<style scoped>
</style>
