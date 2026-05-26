<template>
  <div class="playground">
    <header class="header">
      <h1>🎨 HDD UI Playground</h1>
      <p>组件开发测试环境 - 设计令牌系统 (v2)</p>
    </header>

    <div class="main-layout">
      <Sidebar :active-component="activeComponent" @select="handleSelect" />
      
      <main class="main-content">
        <div v-if="activeComponent === 'color-system'" class="demo-container">
          <ColorSystem />
        </div>
        
        <div v-else-if="activeComponent === 'button'" class="demo-container">
          <ButtonDemo />
        </div>
        
        <div v-else-if="activeComponent === 'layout'" class="demo-container">
          <LayoutDemo />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import ColorSystem from './components/color/ColorSystem.vue'
import ButtonDemo from './components/button/ButtonDemo.vue'
import LayoutDemo from './components/layout/LayoutDemo.vue'

const activeComponent = ref('color-system')

const handleSelect = (name: string) => {
  activeComponent.value = name
}
</script>

<style scoped>
.playground {
  min-height: 100vh;
  background: var(--hdd-color-neutral-05);
}

.header {
  background: white;
  padding: var(--hdd-spacing-4);
  text-align: center;
  box-shadow: var(--hdd-shadow-sm);
}

.header h1 {
  margin: 0 0 var(--hdd-spacing-1);
  font-size: var(--hdd-font-size-xl);
  color: var(--hdd-color-neutral-06);
}

.header p {
  margin: 0;
  color: var(--hdd-color-neutral-03);
  font-size: var(--hdd-font-size-sm);
}

.main-layout {
  display: flex;
  min-height: calc(100vh - 80px);
}

.main-content {
  flex: 1;
  padding: var(--hdd-spacing-6);
  overflow-y: auto;
}

.demo-container {
  background: white;
  padding: var(--hdd-spacing-6);
  border-radius: var(--hdd-radius-lg);
  box-shadow: var(--hdd-shadow-sm);
}

@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100% !important;
    height: auto !important;
    position: static !important;
    border-right: none !important;
    border-bottom: 1px solid var(--hdd-color-neutral-04);
  }
}
</style>