<template>
  <div class="demo-section">
    <h2>按钮尺寸</h2>
    <div class="demo-row">
      <hdd-button type="primary" size="xs">XS</hdd-button>
      <hdd-button type="primary" size="small">Small</hdd-button>
      <hdd-button type="primary" size="default">Default</hdd-button>
      <hdd-button type="primary" size="large">Large</hdd-button>
      <hdd-button type="primary" size="xl">XL</hdd-button>
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