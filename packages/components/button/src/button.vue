<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="icon" class="hdd-btn-icon-wrapper">
      <slot name="icon" />
    </span>
    <span class="hdd-btn-text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  icon?: boolean
  loading?: boolean
  block?: boolean
  round?: boolean
  dashed?: boolean
  plain?: boolean
  text?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'sm',
  disabled: false,
  icon: false,
  loading: false,
  block: false,
  round: false,
  dashed: false,
  plain: false,
  text: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const buttonClasses = computed(() => {
  return [
    'hdd-btn',
    `hdd-btn-${props.type}`,
    `hdd-btn-${props.size}`,
    {
      'is-disabled': props.disabled,
      'is-loading': props.loading,
      'hdd-btn-block': props.block,
      'hdd-btn-round': props.round,
      'hdd-btn-dashed': props.dashed,
      'hdd-btn-plain': props.plain,
      'hdd-btn-text': props.text
    }
  ]
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<script lang="ts">
export default {
  name: 'HddButton'
}
</script>

<style scoped>
.is-disabled {
  cursor: not-allowed;
}
</style>