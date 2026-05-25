<template>
  <div class="demo-card">
    <h3>按钮变体</h3>
    <div class="demo-content">
      <hdd-button type="primary" block>块级按钮</hdd-button>
    </div>
    <div class="demo-content">
      <hdd-button type="primary" round>圆角按钮</hdd-button>
      <hdd-button type="secondary" dashed>虚线按钮</hdd-button>
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
  margin-bottom: var(--hdd-spacing-3);
}

.demo-content:last-child {
  margin-bottom: 0;
}
</style>