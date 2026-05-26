<template>
  <div class="demo-card">
    <h3>按钮类型</h3>
    <div class="demo-content">
      <hdd-button type="primary">Primary</hdd-button>
      <hdd-button type="success">Success</hdd-button>
      <hdd-button type="warning">Warning</hdd-button>
      <hdd-button type="danger">Danger</hdd-button>
      <hdd-button type="info">Info</hdd-button>
    </div>
  </div>

  <div class="demo-card">
    <h3>幽灵按钮 (plain)</h3>
    <div class="demo-content">
      <hdd-button type="primary" plain>Primary</hdd-button>
      <hdd-button type="success" plain>Success</hdd-button>
      <hdd-button type="warning" plain>Warning</hdd-button>
      <hdd-button type="danger" plain>Danger</hdd-button>
      <hdd-button type="info" plain>Info</hdd-button>
    </div>
  </div>

  <div class="demo-card">
    <h3>文字按钮 (text)</h3>
    <div class="demo-content">
      <hdd-button type="primary" text>Primary</hdd-button>
      <hdd-button type="success" text>Success</hdd-button>
      <hdd-button type="warning" text>Warning</hdd-button>
      <hdd-button type="danger" text>Danger</hdd-button>
      <hdd-button type="info" text>Info</hdd-button>
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
  margin-bottom: var(--hdd-spacing-4);
}

.demo-card:last-child {
  margin-bottom: 0;
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