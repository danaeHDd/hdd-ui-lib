<template>
  <div class="link-demo">
    <h2>链接组件</h2>
    <div class="demo-stack">
      <div class="demo-card">
        <h3>基础用法</h3>
        <p class="demo-description">支持多种颜色类型，默认带下划线</p>
        <div class="demo-row">
          <hdd-link type="default">默认链接</hdd-link>
          <hdd-link type="primary">主色链接</hdd-link>
          <hdd-link type="success">成功链接</hdd-link>
          <hdd-link type="warning">警告链接</hdd-link>
          <hdd-link type="danger">危险链接</hdd-link>
        </div>
      </div>

      <div class="demo-card">
        <h3>下划线控制</h3>
        <p class="demo-description">通过underline属性控制下划线显示</p>
        <div class="demo-row">
          <hdd-link>默认带下划线</hdd-link>
          <hdd-link :underline="false">无下划线</hdd-link>
          <hdd-link type="primary" :underline="false">主色无下划线</hdd-link>
        </div>
      </div>

      <div class="demo-card">
        <h3>禁用状态</h3>
        <p class="demo-description">禁用状态下链接不可点击</p>
        <div class="demo-row">
          <hdd-link disabled>禁用链接</hdd-link>
          <hdd-link type="primary" disabled>禁用主色链接</hdd-link>
          <hdd-link type="danger" disabled>禁用危险链接</hdd-link>
        </div>
      </div>

      <div class="demo-card">
        <h3>图标链接</h3>
        <p class="demo-description">支持前缀和后缀图标</p>
        <div class="demo-row">
          <hdd-link type="primary">
            <template #prefix>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </template>
            用户中心
          </hdd-link>
          <hdd-link type="success">
            查看详情
            <template #suffix>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </template>
          </hdd-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HddLink } from 'hdd-ui-lib'
</script>

<style scoped>
.link-demo {
  padding: var(--hdd-spacing-2);
}

.link-demo h2 {
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
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
