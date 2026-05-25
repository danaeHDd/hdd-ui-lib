<template>
  <div class="demo-card">
    <h3>按钮类型</h3>
    <div class="demo-content">
      <hdd-button type="primary">Primary</hdd-button>
      <hdd-button type="secondary">Secondary</hdd-button>
      <hdd-button type="tertiary">Tertiary</hdd-button>
      <hdd-button type="success">Success</hdd-button>
      <hdd-button type="warning">Warning</hdd-button>
      <hdd-button type="danger">Danger</hdd-button>
      <hdd-button type="info">Info</hdd-button>
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