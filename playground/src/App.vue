<template>
  <div class="playground">
    <header class="header">
      <h1>🎨 HDD UI Playground</h1>
      <p>组件开发测试环境 - 设计令牌系统 (v2)</p>
    </header>

    <main class="content">
      <section class="demo-section">
        <h2>设计令牌 - 颜色系统</h2>
        <div class="color-grid">
          <div class="color-group">
            <h3>主题色 (Primary)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-primary-01);">
                <span class="color-label">primary-01</span>
                <span class="color-value">100%</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-primary-02);">
                <span class="color-label">primary-02</span>
                <span class="color-value">70%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-primary-03);">
                <span class="color-label">primary-03</span>
                <span class="color-value">50%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-primary-04);">
                <span class="color-label">primary-04</span>
                <span class="color-value">30%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-primary-05);">
                <span class="color-label">primary-05</span>
                <span class="color-value">10%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-primary-06);">
                <span class="color-label">primary-06</span>
                <span class="color-value">65%+黑</span>
              </div>
            </div>
          </div>

          <div class="color-group">
            <h3>成功色 (Success)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-success-01);">
                <span class="color-label">success-01</span>
                <span class="color-value">100%</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-success-02);">
                <span class="color-label">success-02</span>
                <span class="color-value">70%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-success-03);">
                <span class="color-label">success-03</span>
                <span class="color-value">50%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-success-04);">
                <span class="color-label">success-04</span>
                <span class="color-value">30%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-success-05);">
                <span class="color-label">success-05</span>
                <span class="color-value">10%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-success-06);">
                <span class="color-label">success-06</span>
                <span class="color-value">65%+黑</span>
              </div>
            </div>
          </div>

          <div class="color-group">
            <h3>警告色 (Warning)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-warning-01);">
                <span class="color-label">warning-01</span>
                <span class="color-value">100%</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-warning-02);">
                <span class="color-label">warning-02</span>
                <span class="color-value">70%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-warning-03);">
                <span class="color-label">warning-03</span>
                <span class="color-value">50%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-warning-04);">
                <span class="color-label">warning-04</span>
                <span class="color-value">30%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-warning-05);">
                <span class="color-label">warning-05</span>
                <span class="color-value">10%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-warning-06);">
                <span class="color-label">warning-06</span>
                <span class="color-value">65%+黑</span>
              </div>
            </div>
          </div>

          <div class="color-group">
            <h3>危险色 (Danger)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-danger-01);">
                <span class="color-label">danger-01</span>
                <span class="color-value">100%</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-danger-02);">
                <span class="color-label">danger-02</span>
                <span class="color-value">70%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-danger-03);">
                <span class="color-label">danger-03</span>
                <span class="color-value">50%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-danger-04);">
                <span class="color-label">danger-04</span>
                <span class="color-value">30%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-danger-05);">
                <span class="color-label">danger-05</span>
                <span class="color-value">10%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-danger-06);">
                <span class="color-label">danger-06</span>
                <span class="color-value">65%+黑</span>
              </div>
            </div>
          </div>

          <div class="color-group">
            <h3>信息色 (Info)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-info-01);">
                <span class="color-label">info-01</span>
                <span class="color-value">100%</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-info-02);">
                <span class="color-label">info-02</span>
                <span class="color-value">70%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-info-03);">
                <span class="color-label">info-03</span>
                <span class="color-value">50%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-info-04);">
                <span class="color-label">info-04</span>
                <span class="color-value">30%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-info-05);">
                <span class="color-label">info-05</span>
                <span class="color-value">10%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-info-06);">
                <span class="color-label">info-06</span>
                <span class="color-value">65%+黑</span>
              </div>
            </div>
          </div>

          <div class="color-group">
            <h3>中性色 (Neutral)</h3>
            <div class="color-items">
              <div class="color-item" style="background: var(--hdd-color-neutral-01);">
                <span class="color-label">neutral-01</span>
                <span class="color-value">100%</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-neutral-02);">
                <span class="color-label">neutral-02</span>
                <span class="color-value">70%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-neutral-03);">
                <span class="color-label">neutral-03</span>
                <span class="color-value">50%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-neutral-04);">
                <span class="color-label">neutral-04</span>
                <span class="color-value">30%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-neutral-05);">
                <span class="color-label">neutral-05</span>
                <span class="color-value">10%+白</span>
              </div>
              <div class="color-item" style="background: var(--hdd-color-neutral-06);">
                <span class="color-label">neutral-06</span>
                <span class="color-value">65%+黑</span>
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
</script>

<style scoped>
.playground {
  min-height: 100vh;
  background: var(--hdd-color-neutral-05);
  padding-bottom: var(--hdd-spacing-10);
}

.header {
  background: white;
  padding: var(--hdd-spacing-8);
  text-align: center;
  box-shadow: var(--hdd-shadow-sm);
}

.header h1 {
  margin: 0 0 var(--hdd-spacing-2);
  font-size: var(--hdd-font-size-3xl);
  color: var(--hdd-color-neutral-06);
}

.header p {
  margin: 0;
  color: var(--hdd-color-neutral-03);
  font-size: var(--hdd-font-size-sm);
}

.content {
  max-width: 1400px;
  margin: var(--hdd-spacing-8) auto;
  padding: 0 var(--hdd-spacing-5);
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
  color: var(--hdd-color-neutral-06);
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--hdd-spacing-6);
}

.color-group h3 {
  margin: 0 0 var(--hdd-spacing-3);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-04);
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
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
}

.color-value {
  font-size: 9px;
  color: rgba(0, 0, 0, 0.5);
}
</style>