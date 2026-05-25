<template>
  <div class="demo-card">
    <h3>按钮尺寸</h3>
    <div class="demo-content">
      <hdd-button type="primary" size="sm">Small</hdd-button>
      <hdd-button type="primary" size="md">Medium</hdd-button>
      <hdd-button type="primary" size="lg">Large</hdd-button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.demo-card {
  background: var(--hdd-color-neutral-05);
  border-radius: var(--hdd-radius-lg);
  padding: var(--hdd-spacing-5);
}

.demo-card h3 {
  margin: 0 0 var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-md);
  font-weight: 600;
  color: var(--hdd-color-neutral-06);
}

.demo-content {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hdd-spacing-3);
}
</style>