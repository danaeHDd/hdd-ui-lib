<template>
  <div class="demo-card">
    <h3>按钮状态</h3>
    <div class="demo-content">
      <hdd-button type="primary">正常</hdd-button>
      <hdd-button type="primary" disabled>禁用</hdd-button>
      <hdd-button type="primary" loading>加载中</hdd-button>
    </div>
    <div class="demo-content">
      <hdd-button type="primary" plain>正常</hdd-button>
      <hdd-button type="primary" plain disabled>禁用</hdd-button>
      <hdd-button type="primary" plain loading>加载中</hdd-button>
    </div>
    <div class="demo-content">
      <hdd-button type="primary" text>正常</hdd-button>
      <hdd-button type="primary" text disabled>禁用</hdd-button>
      <hdd-button type="primary" text loading>加载中</hdd-button>
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
  margin-top: var(--hdd-spacing-3);
}
</style>