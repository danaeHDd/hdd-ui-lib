<template>
  <div class="space-demo">
    <h2>间距组件</h2>
    <div class="demo-stack">
      <div class="demo-card">
        <h3>基础用法</h3>
        <p class="demo-description">默认横向排列，中等间距</p>
        <hdd-space>
          <hdd-button type="primary">按钮1</hdd-button>
          <hdd-button type="success">按钮2</hdd-button>
          <hdd-button type="warning">按钮3</hdd-button>
        </hdd-space>
      </div>

      <div class="demo-card">
        <h3>纵向排列</h3>
        <p class="demo-description">设置direction为vertical</p>
        <hdd-space direction="vertical">
          <hdd-button type="primary">按钮1</hdd-button>
          <hdd-button type="success">按钮2</hdd-button>
          <hdd-button type="warning">按钮3</hdd-button>
        </hdd-space>
      </div>

      <div class="demo-card">
        <h3>不同尺寸</h3>
        <p class="demo-description">支持sm、md、lg、xl四种预设尺寸</p>
        <div>
          <p>小间距 (sm):</p>
          <hdd-space size="sm">
            <hdd-button type="primary">按钮</hdd-button>
            <hdd-button>按钮</hdd-button>
          </hdd-space>
        </div>
        <div>
          <p>中等间距 (md):</p>
          <hdd-space size="md">
            <hdd-button type="primary">按钮</hdd-button>
            <hdd-button>按钮</hdd-button>
          </hdd-space>
        </div>
        <div>
          <p>大间距 (lg):</p>
          <hdd-space size="lg">
            <hdd-button type="primary">按钮</hdd-button>
            <hdd-button>按钮</hdd-button>
          </hdd-space>
        </div>
        <div>
          <p>超大间距 (xl):</p>
          <hdd-space size="xl">
            <hdd-button type="primary">按钮</hdd-button>
            <hdd-button>按钮</hdd-button>
          </hdd-space>
        </div>
      </div>

      <div class="demo-card">
        <h3>自定义间距</h3>
        <p class="demo-description">通过customSize属性自定义间距大小</p>
        <hdd-space custom-size="32px">
          <hdd-button type="primary">按钮1</hdd-button>
          <hdd-button type="success">按钮2</hdd-button>
          <hdd-button type="warning">按钮3</hdd-button>
        </hdd-space>
      </div>

      <div class="demo-card">
        <h3>对齐方式</h3>
        <p class="demo-description">支持多种对齐方式（通过不同高度的按钮展示效果）</p>
        
        <div class="align-demo">
          <p class="align-label">顶部对齐 (start):</p>
          <div class="align-container">
            <hdd-space align="start">
              <hdd-button type="primary" style="height: 60px;">高按钮</hdd-button>
              <hdd-button type="success">按钮</hdd-button>
              <hdd-button style="height: 36px;">小按钮</hdd-button>
            </hdd-space>
          </div>
        </div>
        
        <div class="align-demo">
          <p class="align-label">居中对齐 (center):</p>
          <div class="align-container">
            <hdd-space align="center">
              <hdd-button type="primary" style="height: 60px;">高按钮</hdd-button>
              <hdd-button type="success">按钮</hdd-button>
              <hdd-button style="height: 36px;">小按钮</hdd-button>
            </hdd-space>
          </div>
        </div>
        
        <div class="align-demo">
          <p class="align-label">底部对齐 (end):</p>
          <div class="align-container">
            <hdd-space align="end">
              <hdd-button type="primary" style="height: 60px;">高按钮</hdd-button>
              <hdd-button type="success">按钮</hdd-button>
              <hdd-button style="height: 36px;">小按钮</hdd-button>
            </hdd-space>
          </div>
        </div>
        
        <div class="align-demo">
          <p class="align-label">基线对齐 (baseline):</p>
          <div class="align-container">
            <hdd-space align="baseline">
              <hdd-button type="primary" style="height: 60px;">高按钮</hdd-button>
              <hdd-button type="success">按钮</hdd-button>
              <hdd-button style="height: 36px;">小按钮</hdd-button>
            </hdd-space>
          </div>
        </div>
        
        <div class="align-demo">
          <p class="align-label">拉伸对齐 (stretch):</p>
          <div class="align-container">
            <hdd-space align="stretch">
              <hdd-button type="primary" style="height: 60px;">高按钮</hdd-button>
              <hdd-button type="success">按钮</hdd-button>
              <hdd-button style="height: 36px;">小按钮</hdd-button>
            </hdd-space>
          </div>
        </div>
      </div>

      <div class="demo-card">
        <h3>自动换行</h3>
        <p class="demo-description">设置wrap属性自动换行</p>
        <hdd-space wrap>
          <hdd-button type="primary">按钮1</hdd-button>
          <hdd-button type="success">按钮2</hdd-button>
          <hdd-button type="warning">按钮3</hdd-button>
          <hdd-button type="danger">按钮4</hdd-button>
          <hdd-button>按钮5</hdd-button>
          <hdd-button type="primary">按钮6</hdd-button>
          <hdd-button type="success">按钮7</hdd-button>
          <hdd-button type="warning">按钮8</hdd-button>
        </hdd-space>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HddSpace, HddButton } from 'hdd-ui-lib'
</script>

<style scoped>
.space-demo {
  padding: var(--hdd-spacing-2);
}

.space-demo h2 {
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

/* 对齐方式 demo 的样式 */
.align-demo {
  margin-bottom: var(--hdd-spacing-4);
  padding: var(--hdd-spacing-3);
  background-color: var(--hdd-color-neutral-07);
  border-radius: var(--hdd-radius-sm);
}

.align-demo:last-child {
  margin-bottom: 0;
}

.align-label {
  margin: 0 0 var(--hdd-spacing-2);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-01);
  font-weight: 500;
}

.align-container {
  background-color: white;
  padding: var(--hdd-spacing-3);
  border-radius: var(--hdd-radius-sm);
  border: 1px solid var(--hdd-color-neutral-04);
  min-height: 80px;
  display: flex;
}
</style>
