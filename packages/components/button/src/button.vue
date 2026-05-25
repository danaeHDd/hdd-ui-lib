<template>
  <button
    :class="[
      'hdd-btn',
      typeClass,
      sizeClass,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'hdd-btn-block': block,
        'hdd-btn-round': round,
        'hdd-btn-dashed': dashed
      }
    ]"
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
  type?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  icon?: boolean
  loading?: boolean
  block?: boolean
  round?: boolean
  dashed?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'sm',
  disabled: false,
  icon: false,
  loading: false,
  block: false,
  round: false,
  dashed: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const typeClass = computed(() => {
  return `hdd-btn-${props.type}`
})

const sizeClass = computed(() => {
  return `hdd-btn-${props.size}`
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