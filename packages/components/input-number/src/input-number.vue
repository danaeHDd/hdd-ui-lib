<template>
  <div :class="inputWrapperClasses">
    <span class="hdd-input-number__decrease"
          :class="{ 'hdd-input-number__decrease--disabled': disabled || currentValue <= min }"
          @click="handleDecrease">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
    <input
      type="number"
      :class="['hdd-input-number__inner']"
      :value="currentValue"
      :disabled="disabled"
      :readonly="readonly"
      :min="min"
      :max="max"
      :step="step"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span class="hdd-input-number__increase"
          :class="{ 'hdd-input-number__increase--disabled': disabled || currentValue >= max }"
          @click="handleIncrease">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface InputNumberProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  precision?: number
  disabled?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<InputNumberProps>(), {
  modelValue: 0,
  min: -Infinity,
  max: Infinity,
  step: 1,
  disabled: false,
  readonly: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'change': [value: number]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

const currentValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  currentValue.value = newVal
})

const wrapperClasses = computed(() => [
  'hdd-input-number',
  {
    'hdd-input-number--disabled': props.disabled
  }
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = parseFloat(target.value)
  if (!isNaN(value)) {
    const clamped = Math.min(Math.max(value, props.min), props.max)
    currentValue.value = clamped
    emit('update:modelValue', clamped)
    emit('change', clamped)
  }
}

const handleIncrease = () => {
  if (props.disabled || currentValue.value >= props.max) return
  const newValue = currentValue.value + props.step
  const clamped = Math.min(newValue, props.max)
  currentValue.value = clamped
  emit('update:modelValue', clamped)
  emit('change', clamped)
}

const handleDecrease = () => {
  if (props.disabled || currentValue.value <= props.min) return
  const newValue = currentValue.value - props.step
  const clamped = Math.max(newValue, props.min)
  currentValue.value = clamped
  emit('update:modelValue', clamped)
  emit('change', clamped)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<script lang="ts">
export default {
  name: 'HddInputNumber'
}
</script>
