<template>
  <aside 
    class="hdd-layout__sider" 
    :class="{ 'hdd-layout__sider--collapsed': collapsed }"
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
</style>