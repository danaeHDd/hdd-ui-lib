<template>
  <div class="demo-card">
    <h3>按钮状态</h3>
    
    <div class="demo-section">
      <h4>普通按钮禁用状态</h4>
      <div class="demo-content">
        <hdd-button type="primary" disabled>Primary</hdd-button>
        <hdd-button type="success" disabled>Success</hdd-button>
        <hdd-button type="warning" disabled>Warning</hdd-button>
        <hdd-button type="danger" disabled>Danger</hdd-button>
        <hdd-button type="info" disabled>Info</hdd-button>
      </div>
    </div>

    <div class="demo-section">
      <h4>幽灵按钮禁用状态 (plain)</h4>
      <div class="demo-content">
        <hdd-button type="primary" plain disabled>Primary</hdd-button>
        <hdd-button type="success" plain disabled>Success</hdd-button>
        <hdd-button type="warning" plain disabled>Warning</hdd-button>
        <hdd-button type="danger" plain disabled>Danger</hdd-button>
        <hdd-button type="info" plain disabled>Info</hdd-button>
      </div>
    </div>

    <div class="demo-section">
      <h4>文字按钮禁用状态 (text)</h4>
      <div class="demo-content">
        <hdd-button type="primary" text disabled>Primary</hdd-button>
        <hdd-button type="success" text disabled>Success</hdd-button>
        <hdd-button type="warning" text disabled>Warning</hdd-button>
        <hdd-button type="danger" text disabled>Danger</hdd-button>
        <hdd-button type="info" text disabled>Info</hdd-button>
      </div>
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

.demo-section {
  margin-bottom: var(--hdd-spacing-4);
}

.demo-section:last-child {
  margin-bottom: 0;
}

.demo-section h4 {
  margin: 0 0 var(--hdd-spacing-3);
  font-size: var(--hdd-font-size-sm);
  font-weight: 500;
  color: var(--hdd-color-neutral-04);
}

.demo-content {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hdd-spacing-3);
}
</style>