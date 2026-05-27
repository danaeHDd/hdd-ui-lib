<template>
  <div class="demo-card">
    <h3>内置图标</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="48" />
        <span>Info</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="48" />
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
    <h3>自定义颜色</h3>
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

  <div class="demo-card">
    <h3>继承文字颜色</h3>
    <div class="icon-demo">
      <div class="icon-row" style="color: #9E8A57;">
        <HddInfoIcon />
        <span>信息图标</span>
      </div>
      <div class="icon-row" style="color: #FFA826;">
        <HddWarningIcon />
        <span>警告图标</span>
      </div>
      <div class="icon-row" style="color: #4CAF50;">
        <HddInfoIcon />
        <span>成功色</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>旋转图标</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="40" />
        <span>0°</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="40" :rotate="45" />
        <span>45°</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="40" :rotate="90" />
        <span>90°</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="40" :rotate="180" />
        <span>180°</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="40" :rotate="270" />
        <span>270°</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>翻转图标</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="40" />
        <span>normal</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="40" flip="horizontal" />
        <span>horizontal</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="40" flip="vertical" />
        <span>vertical</span>
      </div>
      <div class="icon-item">
        <HddInfoIcon :size="40" flip="both" />
        <span>both</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>旋转动画 (Loading)</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="48" :spin="true" />
        <span>info spin</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="48" :spin="true" />
        <span>warning spin</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>组合使用</h3>
    <div class="icon-demo">
      <div class="icon-item">
        <HddInfoIcon :size="40" :rotate="45" flip="horizontal" color="#9E8A57" />
        <span>rotate + flip</span>
      </div>
      <div class="icon-item">
        <HddWarningIcon :size="40" :rotate="180" flip="vertical" color="#FFA826" />
        <span>rotate + flip</span>
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
  color: var(--hdd-color-neutral-04);
}

.icon-row {
  display: flex;
  align-items: center;
  gap: var(--hdd-spacing-3);
  padding: var(--hdd-spacing-2) 0;
}

.icon-row span {
  font-size: var(--hdd-font-size-sm);
}
</style>
