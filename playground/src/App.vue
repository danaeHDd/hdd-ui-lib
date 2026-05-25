<template>
  <div class="playground">
    <header class="header">
      <h1>🎨 HDD UI Playground</h1>
      <p>组件开发测试环境 - 设计令牌系统 (v2)</p>
    </header>

    <main class="content">
      <ColorSystem />
      <ButtonTypes />
      <ButtonSizes />
      <ButtonStates />
      <ButtonVariants />
      <ButtonIcons />
    </main>
  </div>
</template>

<script setup lang="ts">
import ColorSystem from './components/color/ColorSystem.vue'
import ButtonTypes from './components/button/ButtonTypes.vue'
import ButtonSizes from './components/button/ButtonSizes.vue'
import ButtonStates from './components/button/ButtonStates.vue'
import ButtonVariants from './components/button/ButtonVariants.vue'
import ButtonIcons from './components/button/ButtonIcons.vue'
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

.content > * {
  background: white;
  padding: var(--hdd-spacing-6);
  border-radius: var(--hdd-radius-lg);
  margin-bottom: var(--hdd-spacing-6);
  box-shadow: var(--hdd-shadow-sm);
}

.content > *:last-child {
  margin-bottom: 0;
}
</style>