<template>
  <div class="demo-section">
    <h2>按钮类型</h2>
    <div class="demo-row">
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
.demo-section {
  margin-bottom: var(--hdd-spacing-6);
}

.demo-section h2 {
  margin: 0 0 var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-lg);
  color: var(--hdd-color-neutral-06);
}

.demo-row {
  display: flex;
  gap: var(--hdd-spacing-4);
  flex-wrap: wrap;
}
</style>