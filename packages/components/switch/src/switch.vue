<template>
  <button
    type="button"
    :class="switchClasses"
    :disabled="disabled || loading"
    :aria-checked="modelValue"
    :aria-label="modelValue ? activeText : inactiveText"
    @click="handleClick"
  >
    <span v-if="loading" class="hdd-switch__loading">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </span>
    <span class="hdd-switch__core">
      <span class="hdd-switch__thumb"></span>
    </span>
    <span v-if="showText" class="hdd-switch__text">
      {{ modelValue ? activeText : inactiveText }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface SwitchProps {
  modelValue?: boolean
  disabled?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  activeText?: string
  inactiveText?: string
  showText?: boolean
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  loading: false,
  size: 'md',
  activeText: '',
  inactiveText: '',
  showText: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'change': [value: boolean]
}>()

const switchClasses = computed(() => [
  'hdd-switch',
  `hdd-switch--${props.size}`,
  {
    'hdd-switch--checked': props.modelValue,
    'hdd-switch--disabled': props.disabled || props.loading,
    'hdd-switch--loading': props.loading,
    'hdd-switch--show-text': props.showText
  }
])

const handleClick = () => {
  if (props.disabled || props.loading) return
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<script lang="ts">
export default {
  name: 'HddSwitch'
}
</script>