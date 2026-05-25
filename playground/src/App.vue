<template>
  <div class="playground">
    <header class="header">
      <h1>🎨 HDD UI Playground</h1>
      <p>组件开发测试环境</p>
    </header>

    <main class="content">
      <section class="demo-section">
        <h2>Button 按钮</h2>
        <div class="demo-row">
          <hdd-button>默认按钮</hdd-button>
          <hdd-button type="primary">主要按钮</hdd-button>
          <hdd-button type="success">成功按钮</hdd-button>
          <hdd-button type="warning">警告按钮</hdd-button>
          <hdd-button type="danger">危险按钮</hdd-button>
        </div>

        <div class="demo-row">
          <hdd-button size="small">小按钮</hdd-button>
          <hdd-button>默认按钮</hdd-button>
          <hdd-button size="large">大按钮</hdd-button>
        </div>

        <div class="demo-row">
          <hdd-button disabled>禁用按钮</hdd-button>
          <hdd-button type="primary" disabled>禁用主要</hdd-button>
        </div>

        <div class="demo-row">
          <hdd-button @click="handleClick">点击我</hdd-button>
          <span>{{ message }}</span>
        </div>
      </section>

      <section class="theme-section">
        <h2>主题定制</h2>
        <div class="theme-switcher">
          <button
            v-for="theme in themes"
            :key="theme.name"
            class="theme-btn"
            :style="{ background: theme.primary }"
            @click="setTheme(theme)"
          >
            {{ theme.name }}
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const message = ref('')

const handleClick = () => {
  message.value = '按钮被点击了！'
  setTimeout(() => {
    message.value = ''
  }, 2000)
}

const themes = reactive([
  {
    name: '金色',
    primary: '#9E8A57',
    hover: '#BBAD89',
    active: '#796C4A'
  },
  {
    name: '绿色',
    primary: '#4caf50',
    hover: '#66bb6a',
    active: '#388e3c'
  },
  {
    name: '蓝色',
    primary: '#2196f3',
    hover: '#42a5f5',
    active: '#1976d2'
  },
  {
    name: '紫色',
    primary: '#9c27b0',
    hover: '#ab47bc',
    active: '#7b1fa2'
  }
])

const setTheme = (theme: any) => {
  const root = document.documentElement
  root.style.setProperty('--hdd-btn-primary', theme.primary)
  root.style.setProperty('--hdd-btn-primary-hover', theme.hover)
  root.style.setProperty('--hdd-btn-primary-active', theme.active)
}
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
  max-width: 900px;
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
  margin: 0 0 24px;
  font-size: 20px;
  color: #333;
}

.demo-row {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
}

.demo-row span {
  color: #666;
  font-size: 14px;
}

.theme-section {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.theme-section h2 {
  margin: 0 0 24px;
  font-size: 20px;
  color: #333;
}

.theme-switcher {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.theme-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s;
}

.theme-btn:hover {
  transform: scale(1.05);
}
</style>
