<template>
  <label :class="radioClasses">
    <span class="hdd-radio__input">
      <input
        type="radio"
        :value="label"
        :name="name"
        :checked="modelValue === label"
        :disabled="disabled"
        @change="handleChange"
      />
      <span class="hdd-radio__inner"></span>
    </span>
    <span v-if="$slots.default" class="hdd-radio__label">
      <slot />
    </span>
    <span v-else-if="label" class="hdd-radio__label">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface RadioProps {
  modelValue?: string | number | boolean
  label?: string | number
  disabled?: boolean
  name?: string
  error?: boolean
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  error: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
  'change': [value: string | number | boolean]
}>()

const radioClasses = computed(() => [
  'hdd-radio',
  {
    'hdd-radio--checked': props.modelValue === props.label,
    'hdd-radio--disabled': props.disabled,
    'hdd-radio--error': props.error
  }
])

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    emit('update:modelValue', props.label)
    emit('change', props.label)
  }
}
</script>

<script lang="ts">
export default {
  name: 'HddRadio'
}
</script>