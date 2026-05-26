<template>
  <div class="hdd-layout" :class="{ 'hdd-layout-horizontal': hasSider }">
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

const emit = defineEmits<{
  (e: 'resize', width: number): void
}>()

const hasSider = computed(() => props.hasSider)
</script>

<script lang="ts">
export default {
  name: 'HddLayout'
}
</script>

<style scoped>
.hdd-layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.hdd-layout-horizontal {
  flex-direction: row;
}

.hdd-layout-horizontal > .hdd-layout {
  flex: 1;
  flex-direction: column;
  min-height: 100%;
}
</style>