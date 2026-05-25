<template>
  <div class="playground">
    <header class="header">
      <h1>🎨 HDD UI Playground</h1>
      <p>组件开发测试环境 - 设计令牌系统</p>
    </header>

    <main class="content">
      <section class="demo-section">
        <h2>设计令牌 - 颜色系统</h2>
        <div class="color-grid">
          <div class="color-group">
            <h3>主题色 (Primary)</h3>
            <div class="color-items">
              <div v-for="(color, key) in primaryColors" :key="key" class="color-item" :style="{ background: color }">
                <span class="color-label">{{ key }}</span>
                <span class="color-value">{{ color }}</span>
              </div>
            </div>
          </div>
          <div class="color-group">
            <h3>成功色 (Success)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-success-500);">
                <span class="color-label">success-500</span>
                <span class="color-value">#4CAF50</span>
              </div>
            </div>
          </div>
          <div class="color-group">
            <h3>危险色 (Danger)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-danger-500);">
                <span class="color-label">danger-500</span>
                <span class="color-value">#F44336</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <h2>按钮类型</h2>
        <div class="demo-row">
          <hdd-button type="primary">Primary</hdd-button>
          <hdd-button type="secondary">Secondary</hdd-button>
          <hdd-button type="tertiary">Tertiary</hdd-button>
          <hdd-button type="success">Success</hdd-button>
          <hdd-button type="warning">Warning</hdd-button>
          <hdd-button type="danger">Danger</hdd-button>
          <hdd-button type="info">Info</hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>按钮尺寸</h2>
        <div class="demo-row">
          <hdd-button type="primary" size="xs">XS</hdd-button>
          <hdd-button type="primary" size="small">Small</hdd-button>
          <hdd-button type="primary" size="default">Default</hdd-button>
          <hdd-button type="primary" size="large">Large</hdd-button>
          <hdd-button type="primary" size="xl">XL</hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>按钮状态</h2>
        <div class="demo-row">
          <hdd-button type="primary">正常</hdd-button>
          <hdd-button type="primary" disabled>禁用</hdd-button>
          <hdd-button type="primary" loading>加载中</hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>按钮变体</h2>
        <div class="demo-row">
          <hdd-button type="primary" block>块级按钮</hdd-button>
        </div>
        <div class="demo-row">
          <hdd-button type="primary" round>圆角按钮</hdd-button>
          <hdd-button type="secondary" dashed>虚线按钮</hdd-button>
        </div>
      </section>

      <section class="demo-section">
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
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const primaryColors = reactive({
  'primary-50': '#FDF8F0',
  'primary-100': '#FAF0DC',
  'primary-200': '#F3E1BC',
  'primary-300': '#E9CF99',
  'primary-400': '#DEB96E',
  'primary-500': '#9E8A57',
  'primary-600': '#8B7355',
  'primary-700': '#796C4A',
  'primary-800': '#5D4E37',
  'primary-900': '#4A3F2B'
})
</script>

<style scoped>
.playground {
  min-height: 100vh;
  background: var(--hdd-color-neutral-50);
  padding-bottom: 40px;
}

.header {
  background: white;
  padding: 32px;
  text-align: center;
  box-shadow: var(--hdd-shadow-sm);
}

.header h1 {
  margin: 0 0 8px;
  font-size: 28px;
  color: var(--hdd-color-neutral-900);
}

.header p {
  margin: 0;
  color: var(--hdd-color-neutral-600);
  font-size: 14px;
}

.content {
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 20px;
}

.demo-section {
  background: white;
  padding: var(--hdd-spacing-6);
  border-radius: var(--hdd-radius-lg);
  margin-bottom: var(--hdd-spacing-6);
  box-shadow: var(--hdd-shadow-sm);
}

.demo-section h2 {
  margin: 0 0 var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-lg);
  color: var(--hdd-color-neutral-900);
}

.demo-row {
  display: flex;
  gap: var(--hdd-spacing-4);
  margin-bottom: var(--hdd-spacing-4);
  align-items: center;
  flex-wrap: wrap;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--hdd-spacing-6);
}

.color-group h3 {
  margin: 0 0 var(--hdd-spacing-3);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-700);
}

.color-items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hdd-spacing-2);
}

.color-item {
  width: 80px;
  height: 80px;
  border-radius: var(--hdd-radius-md);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--hdd-spacing-2);
  box-shadow: var(--hdd-shadow-sm);
}

.color-label {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
}

.color-value {
  font-size: 9px;
  color: rgba(0, 0, 0, 0.4);
}
</style>