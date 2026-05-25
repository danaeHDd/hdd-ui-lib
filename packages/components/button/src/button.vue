<template>
  <button
    :class="['hdd-btn', typeClass, sizeClass, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'default',
  disabled: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const typeClass = computed(() => {
  return props.type !== 'default' ? `hdd-btn-${props.type}` : ''
})

const sizeClass = computed(() => {
  return props.size !== 'default' ? `hdd-btn-${props.size}` : ''
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
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
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
