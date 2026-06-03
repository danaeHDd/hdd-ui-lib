<template>
  <div :class="inputWrapperClasses">
    <span v-if="$slots.prefix" class="hdd-input__prefix">
      <slot name="prefix" />
    </span>
    <input
      :type="type"
      :class="inputClasses"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :autofocus="autofocus"
      :name="name"
      :spellcheck="spellcheck"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span v-if="showClear && modelValue && !disabled && !readonly"
          class="hdd-input__suffix hdd-input__clear"
          @click="handleClear">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
    <span v-else-if="$slots.suffix" class="hdd-input__suffix">
      <slot name="suffix" />
    </span>
    <span v-if="showWordLimit && maxlength" class="hdd-input__count">
      {{ modelValue?.length || 0 }}/{{ maxlength }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface InputProps {
  modelValue?: string
  type?: 'text' | 'password' | 'search' | 'email' | 'tel' | 'url'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  maxlength?: number
  minlength?: number
  autofocus?: boolean
  name?: string
  spellcheck?: boolean
  size?: 'sm' | 'md' | 'lg'
  showClear?: boolean
  showWordLimit?: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  autofocus: false,
  spellcheck: false,
  size: 'sm',
  showClear: false,
  showWordLimit: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
  'change': [event: Event]
}>()

const slots = useSlots()

const inputWrapperClasses = computed(() => [
  'hdd-input',
  `hdd-input--${props.size}`,
  {
    'hdd-input--disabled': props.disabled,
    'hdd-input--has-prefix': !!slots.prefix,
    'hdd-input--has-suffix': !!slots.suffix || (props.showClear && props.modelValue),
    'hdd-input--has-count': props.showWordLimit && props.maxlength
  }
])

const inputClasses = computed(() => [
  'hdd-input__inner',
  {
    'hdd-input__inner--disabled': props.disabled,
    'hdd-input__inner--readonly': props.readonly
  }
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleClear = () => {
  emit('update:modelValue', '')
}
</script>

<script lang="ts">
export default {
  name: 'HddInput'
}
</script>
