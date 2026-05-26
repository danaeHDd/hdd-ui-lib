<template>
  <aside class="hdd-layout-sider" :class="{ 'hdd-layout-sider-collapsed': collapsed }">
    <slot />
  </aside>
</template>

<script setup lang="ts">
interface SiderProps {
  width?: string
  collapsed?: boolean
  collapsible?: boolean
}

withDefaults(defineProps<SiderProps>(), {
  width: '200px',
  collapsed: false,
  collapsible: false
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
  flex: 0 0 auto;
  width: 200px;
  background: var(--hdd-color-white);
  border-right: var(--hdd-border-width-sm) solid var(--hdd-border-color-default);
  transition: width var(--hdd-transition-duration-normal);
}

.hdd-layout-sider-collapsed {
  width: 64px;
}
</style>