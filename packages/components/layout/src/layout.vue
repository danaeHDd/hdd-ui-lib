<template>
  <div class="hdd-layout" :class="{ 'hdd-layout--has-sider': hasSider }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface LayoutProps {
  hasSider?: boolean
}

const props = withDefaults(defineProps<LayoutProps>(), {
  hasSider: false
})

const slots = useSlots()

const hasSider = computed(() => {
  if (props.hasSider) return true
  if (slots.default) {
    const children = slots.default()
    return children.some((child: any) => {
      return child?.type?.name === 'HddSider' || child?.componentOptions?.tag === 'hdd-sider'
    })
  }
  return false
})
</script>

<script lang="ts">
export default {
  name: 'HddLayout'
}
</script>

<style scoped>
</style>
