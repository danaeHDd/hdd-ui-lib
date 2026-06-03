<template>
  <div class="demo-card">
    <h3>基础数字输入框</h3>
    <div class="demo-row">
      <HddInputNumber v-model="numberValue" />
    </div>
  </div>

  <div class="demo-card">
    <h3>设置范围</h3>
    <div class="demo-row">
      <HddInputNumber v-model="rangeValue" :min="0" :max="10" />
    </div>
  </div>

  <div class="demo-card">
    <h3>自定义步长</h3>
    <div class="demo-row">
      <HddInputNumber v-model="stepValue" :step="0.5" />
    </div>
  </div>

  <div class="demo-card">
    <h3>禁用状态</h3>
    <div class="demo-row">
      <HddInputNumber :model-value="5" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HddInputNumber } from 'hdd-ui-lib'

const numberValue = ref(0)
const rangeValue = ref(5)
const stepValue = ref(0)
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: var(--hdd-spacing-4);
  flex-wrap: wrap;
}
</style>