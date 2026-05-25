<template>
  <button
    :class="['hdd-btn', typeClass, sizeClass, { 'is-disabled': disabled }]"
    :disabled="disabled"
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
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  icon?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'default',
  disabled: false,
  icon: false
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
  cursor: not-allowed;
}
</style>
