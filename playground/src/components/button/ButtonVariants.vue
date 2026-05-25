<template>
  <div class="demo-section">
    <h2>按钮变体</h2>
    <div class="demo-row">
      <hdd-button type="primary" block>块级按钮</hdd-button>
    </div>
    <div class="demo-row">
      <hdd-button type="primary" round>圆角按钮</hdd-button>
      <hdd-button type="secondary" dashed>虚线按钮</hdd-button>
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
  margin-bottom: var(--hdd-spacing-4);
  flex-wrap: wrap;
}

.demo-row:last-child {
  margin-bottom: 0;
}
</style>