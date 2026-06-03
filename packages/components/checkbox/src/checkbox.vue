<template>
  <label :class="checkboxClasses">
    <span class="hdd-checkbox__input">
      <input
        type="checkbox"
        :checked="checked"
        :indeterminate="indeterminate"
        :disabled="disabled"
        :value="label"
        @change="handleChange"
      />
      <span class="hdd-checkbox__inner"></span>
    </span>
    <span v-if="$slots.default" class="hdd-checkbox__label">
      <slot />
    </span>
    <span v-else-if="label" class="hdd-checkbox__label">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

interface CheckboxProps {
  modelValue?: boolean | string[]
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  disabled: false,
  indeterminate: false,
  size: 'md'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string[]]
  'change': [value: boolean]
}>()

const checked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.label)
  }
  return !!props.modelValue
})

watch(() => props.indeterminate, (val) => {
  const input = document.querySelector(`input[value="${props.label}"]`) as HTMLInputElement
  if (input) {
    input.indeterminate = val
  }
})

const checkboxClasses = computed(() => [
  'hdd-checkbox',
  `hdd-checkbox--${props.size}`,
  {
    'hdd-checkbox--checked': checked.value && !props.indeterminate,
    'hdd-checkbox--indeterminate': props.indeterminate,
    'hdd-checkbox--disabled': props.disabled
  }
])

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newValue = target.checked
  
  if (Array.isArray(props.modelValue)) {
    const currentValue = [...props.modelValue]
    if (newValue) {
      currentValue.push(props.label)
    } else {
      const index = currentValue.indexOf(props.label)
      if (index > -1) {
        currentValue.splice(index, 1)
      }
    }
    emit('update:modelValue', currentValue)
  } else {
    emit('update:modelValue', newValue)
  }
  emit('change', newValue)
}
</script>

<script lang="ts">
export default {
  name: 'HddCheckbox'
}
</script>