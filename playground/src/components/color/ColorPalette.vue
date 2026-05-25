<template>
  <div class="color-palette">
    <h3>{{ title }}</h3>
    <div class="color-items">
      <div 
        v-for="(item, index) in colors" 
        :key="index"
        class="color-item" 
        :style="{ background: item.color }"
      >
        <span class="color-label">{{ item.label }}</span>
        <span class="color-value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  colors: Array<{
    color: string
    label: string
    value: string
  }>
}>()
</script>

<style scoped>
.color-palette {
  margin-bottom: var(--hdd-spacing-6);
}

.color-palette h3 {
  margin: 0 0 var(--hdd-spacing-3);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-04);
}

.color-items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hdd-spacing-2);
}

.color-item {
  width: 80px;
  height: 80px;
  border-radius: var(--hdd-radius-md);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--hdd-spacing-2);
  box-shadow: var(--hdd-shadow-sm);
}

.color-label {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
}

.color-value {
  font-size: 9px;
  color: rgba(0, 0, 0, 0.5);
}
</style>