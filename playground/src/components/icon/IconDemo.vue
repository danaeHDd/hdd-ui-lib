<template>
  <div class="demo-card">
    <h3>内置图标</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="24" />
        <span>Info</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="24" />
        <span>Warning</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>不同尺寸</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="24" />
        <span>24px</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="32" />
        <span>32px</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="48" />
        <span>48px</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="24" />
        <span>24px</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="32" />
        <span>32px</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="48" />
        <span>48px</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>不同颜色</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="32" color="#9E8A57" />
        <span>primary</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="32" color="#4CAF50" />
        <span>success</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="32" color="#FF5252" />
        <span>danger</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="32" color="#FFA826" />
        <span>warning</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="32" color="#4CAF50" />
        <span>success</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HddInfoIcon, HddWarningIcon } from 'hdd-ui-lib'
</script>

<style scoped>
.icon-demo {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hdd-spacing-6);
  padding: var(--hdd-spacing-4);
  background: var(--hdd-color-neutral-05);
  border-radius: var(--hdd-radius-md);
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--hdd-spacing-2);
}

.icon-item span {
  font-size: var(--hdd-font-size-xs);
  color: var(--hdd-color-neutral-01);
}
</style>
