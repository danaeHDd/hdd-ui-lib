<template>
  <div class="demo-section">
    <h2>图标按钮</h2>
    <div class="demo-row">
      <hdd-button type="primary" icon>
        <template #icon>🔧</template>
        设置
      </hdd-button>
      <hdd-button type="secondary" icon>
        <template #icon>📧</template>
        发送
      </hdd-button>
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