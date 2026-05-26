<template>
  <div class="hdd-layout" :class="{ 'hdd-layout--has-sider': hasSider }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface LayoutProps {
  hasSider?: boolean
}

const props = withDefaults(defineProps<LayoutProps>(), {
  hasSider: false
})

const hasSider = computed(() => props.hasSider)
</script>

<script lang="ts">
export default {
  name: 'HddLayout'
}
</script>

<style scoped>
</style>