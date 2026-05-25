<template>
  <div class="playground">
    <header class="header">
      <h1>🎨 HDD UI Playground</h1>
      <p>组件开发测试环境</p>
    </header>

    <main class="content">
      <section class="demo-section">
        <h2>Button 按钮 - Small 尺寸</h2>
        <p class="demo-desc">文本：14px, 20px行高 | 图标：20px</p>
        <div class="demo-row">
          <hdd-button type="primary" size="small" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            主要按钮
          </hdd-button>
          <hdd-button type="secondary" size="small" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            次要按钮
          </hdd-button>
          <hdd-button type="tertiary" size="small" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            文字按钮
          </hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>Button 按钮 - Default 尺寸</h2>
        <p class="demo-desc">文本：20px, 30px行高 | 图标：26px</p>
        <div class="demo-row">
          <hdd-button type="primary" size="default" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            主要按钮
          </hdd-button>
          <hdd-button type="secondary" size="default" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            次要按钮
          </hdd-button>
          <hdd-button type="tertiary" size="default" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            文字按钮
          </hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>Button 按钮 - Large 尺寸</h2>
        <p class="demo-desc">文本：28px, 42px行高 | 图标：32px</p>
        <div class="demo-row">
          <hdd-button type="primary" size="large" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            主要按钮
          </hdd-button>
          <hdd-button type="secondary" size="large" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            次要按钮
          </hdd-button>
          <hdd-button type="tertiary" size="large" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            文字按钮
          </hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>Button 按钮 - 三种尺寸对比</h2>
        <div class="demo-row">
          <hdd-button type="primary" size="small" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            Small
          </hdd-button>
          <hdd-button type="primary" size="default" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            Default
          </hdd-button>
          <hdd-button type="primary" size="large" icon>
            <template #icon>
              <span class="icon-demo">🔧</span>
            </template>
            Large
          </hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>Button 按钮 - 不带图标</h2>
        <div class="demo-row">
          <hdd-button type="primary" size="small">Small</hdd-button>
          <hdd-button type="primary" size="default">Default</hdd-button>
          <hdd-button type="primary" size="large">Large</hdd-button>
        </div>
        <div class="demo-row">
          <hdd-button type="secondary" size="small">Small</hdd-button>
          <hdd-button type="secondary" size="default">Default</hdd-button>
          <hdd-button type="secondary" size="large">Large</hdd-button>
        </div>
        <div class="demo-row">
          <hdd-button type="tertiary" size="small">Small</hdd-button>
          <hdd-button type="tertiary" size="default">Default</hdd-button>
          <hdd-button type="tertiary" size="large">Large</hdd-button>
        </div>
      </section>

      <section class="demo-section">
        <h2>Button 按钮 - 禁用状态</h2>
        <div class="demo-row">
          <hdd-button type="primary" size="small" disabled>Small</hdd-button>
          <hdd-button type="primary" size="default" disabled>Default</hdd-button>
          <hdd-button type="primary" size="large" disabled>Large</hdd-button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.playground {
  min-height: 100vh;
  background: #f5f7fa;
  padding-bottom: 40px;
}

.header {
  background: white;
  padding: 32px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.header h1 {
  margin: 0 0 8px;
  font-size: 28px;
  color: #333;
}

.header p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.content {
  max-width: 1000px;
  margin: 32px auto;
  padding: 0 20px;
}

.demo-section {
  background: white;
  padding: 32px;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.demo-section h2 {
  margin: 0 0 8px;
  font-size: 18px;
  color: #333;
}

.demo-desc {
  margin: 0 0 16px;
  font-size: 13px;
  color: #999;
}

.demo-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.icon-demo {
  font-size: inherit;
}
</style>
