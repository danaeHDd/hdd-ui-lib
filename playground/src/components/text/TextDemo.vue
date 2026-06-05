<template>
  <div class="text-demo">
    <h2>文字组件</h2>
    <div class="demo-stack">
      <div class="demo-card">
        <h3>基础类型</h3>
        <p class="demo-description">支持标题、正文、辅助文字三种类型</p>
        <div class="demo-row">
          <hdd-text type="title">标题文字</hdd-text>
          <hdd-text type="body">正文文字</hdd-text>
          <hdd-text type="secondary">辅助文字</hdd-text>
        </div>
      </div>

      <div class="demo-card">
        <h3>尺寸大小</h3>
        <p class="demo-description">支持多种尺寸</p>
        <div class="demo-row">
          <hdd-text size="xs">超小文字</hdd-text>
          <hdd-text size="sm">小文字</hdd-text>
          <hdd-text size="base">基础文字</hdd-text>
          <hdd-text size="lg">大文字</hdd-text>
          <hdd-text size="xl">超大文字</hdd-text>
        </div>
      </div>

      <div class="demo-card">
        <h3>样式修饰</h3>
        <p class="demo-description">支持加粗、斜体、删除线</p>
        <div class="demo-row">
          <hdd-text bold>加粗文字</hdd-text>
          <hdd-text italic>斜体文字</hdd-text>
          <hdd-text delete>删除线文字</hdd-text>
          <hdd-text bold italic>加粗斜体</hdd-text>
        </div>
      </div>

      <div class="demo-card">
        <h3>自定义颜色</h3>
        <p class="demo-description">通过color属性自定义文字颜色</p>
        <div class="demo-row">
          <hdd-text color="#9E8A57">主题色文字</hdd-text>
          <hdd-text color="#4CAF50">成功色文字</hdd-text>
          <hdd-text color="#FF0000">危险色文字</hdd-text>
          <hdd-text color="#2196F3">信息色文字</hdd-text>
        </div>
      </div>

      <div class="demo-card">
        <h3>自定义标签</h3>
        <p class="demo-description">通过tag属性自定义HTML标签</p>
        <div>
          <hdd-text tag="h1">这是H1标签</hdd-text>
          <hdd-text tag="h2">这是H2标签</hdd-text>
          <hdd-text tag="p">这是p标签</hdd-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HddText } from 'hdd-ui-lib'
</script>

<style scoped>
.text-demo {
  padding: var(--hdd-spacing-2);
}

.text-demo h2 {
  margin: 0 0 var(--hdd-spacing-6);
  font-size: var(--hdd-font-size-xl);
  color: var(--hdd-color-neutral-06);
  padding-bottom: var(--hdd-spacing-3);
  border-bottom: 2px solid var(--hdd-color-primary-03);
}

.demo-stack {
  display: flex;
  flex-direction: column;
  gap: var(--hdd-spacing-6);
}

.demo-card {
  background: white;
  border-radius: var(--hdd-radius-md);
  padding: var(--hdd-spacing-6);
  box-shadow: var(--hdd-shadow-sm);
}

.demo-card h3 {
  margin: 0 0 var(--hdd-spacing-3);
  font-size: var(--hdd-font-size-lg);
  color: var(--hdd-color-dark-04);
}

.demo-description {
  margin: 0 0 var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-01);
}

.demo-row {
  display: flex;
  gap: var(--hdd-spacing-4);
  flex-wrap: wrap;
  align-items: center;
}
</style>
