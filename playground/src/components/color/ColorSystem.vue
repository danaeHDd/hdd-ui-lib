<template>
  <div class="demo-section">
    <h2>设计令牌 - 颜色系统</h2>
    <div class="color-grid">
      <ColorPalette 
        title="主题色 (Primary)" 
        :colors="primaryColors" 
      />
      <ColorPalette 
        title="成功色 (Success)" 
        :colors="successColors" 
      />
      <ColorPalette 
        title="警告色 (Warning)" 
        :colors="warningColors" 
      />
      <ColorPalette 
        title="危险色 (Danger)" 
        :colors="dangerColors" 
      />
      <ColorPalette 
        title="信息色 (Info)" 
        :colors="infoColors" 
      />
      <ColorPalette 
        title="中性色 (Neutral)" 
        :colors="neutralColors" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorPalette from './ColorPalette.vue'

const colorSeries = (name: string) => [
  { color: `var(--hdd-color-${name}-01)`, label: `${name}-01`, value: '100%' },
  { color: `var(--hdd-color-${name}-02)`, label: `${name}-02`, value: '70%+白' },
  { color: `var(--hdd-color-${name}-03)`, label: `${name}-03`, value: '50%+白' },
  { color: `var(--hdd-color-${name}-04)`, label: `${name}-04`, value: '30%+白' },
  { color: `var(--hdd-color-${name}-05)`, label: `${name}-05`, value: '10%+白' },
  { color: `var(--hdd-color-${name}-06)`, label: `${name}-06`, value: '65%+黑' },
]

const primaryColors = colorSeries('primary')
const successColors = colorSeries('success')
const warningColors = colorSeries('warning')
const dangerColors = colorSeries('danger')
const infoColors = colorSeries('info')
const neutralColors = colorSeries('neutral')
</script>

<style scoped>
.demo-section {
  margin-bottom: var(--hdd-spacing-6);
}

.demo-section h2 {
  margin: 0 0 var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-lg);
  color: var(--hdd-color-neutral-06);
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--hdd-spacing-6);
}
</style>