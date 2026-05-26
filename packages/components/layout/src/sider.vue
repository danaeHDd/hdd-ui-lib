<template>
  <aside 
    class="hdd-layout-sider" 
    :class="{ 'hdd-layout-sider-collapsed': collapsed }"
    :style="{ width: collapsed ? '64px' : width, flexBasis: collapsed ? '64px' : width }"
  >
    <slot />
  </aside>
</template>

<script setup lang="ts">
interface SiderProps {
  width?: string
  collapsed?: boolean
}

withDefaults(defineProps<SiderProps>(), {
  width: '200px',
  collapsed: false
})

const emit = defineEmits<{
  (e: 'collapse', value: boolean): void
}>()
</script>

<script lang="ts">
export default {
  name: 'HddSider'
}
</script>

<style scoped>
.hdd-layout-sider {
  flex-shrink: 0;
  background: var(--hdd-color-white);
  border-right: var(--hdd-border-width-sm) solid var(--hdd-border-color-default);
  transition: width var(--hdd-transition-duration-normal);
}

.hdd-layout-sider-collapsed {
}
</style>