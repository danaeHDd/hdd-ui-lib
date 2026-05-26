<template>
  <div class="demo-block">
    <div class="demo-block__demo">
      <slot name="demo" />
    </div>
    <div class="demo-block__code">
      <slot name="code" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.demo-block {
  margin-bottom: 24px;
  border: 1px solid var(--hdd-color-dark-03);
  border-radius: var(--hdd-radius-md);
  overflow: hidden;
}

.demo-block__demo {
  padding: 24px;
  background-color: #ffffff;
  border-bottom: 1px solid var(--hdd-color-dark-03);
}

.demo-block__code {
  padding: 16px;
  background-color: #f8f9fa;
}

.demo-block__code :deep(pre) {
  margin: 0;
  padding: 0;
}

.demo-block__code :deep(code) {
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 14px;
  color: #333333;
}
</style>
