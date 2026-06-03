<template>
  <div class="demo-card">
    <h3>基础开关</h3>
    <div class="demo-row">
      <HddSwitch v-model="switchValue" />
    </div>
  </div>

  <div class="demo-card">
    <h3>不同尺寸</h3>
    <div class="demo-row">
      <HddSwitch size="sm" v-model="sizeValue" />
      <HddSwitch size="md" v-model="sizeValue" />
      <HddSwitch size="lg" v-model="sizeValue" />
    </div>
  </div>

  <div class="demo-card">
    <h3>禁用状态</h3>
    <div class="demo-row">
      <HddSwitch v-model="disabledValue1" disabled />
      <HddSwitch v-model="disabledValue2" disabled />
    </div>
  </div>

  <div class="demo-card">
    <h3>加载状态</h3>
    <div class="demo-row">
      <HddSwitch v-model="loadingValue" loading />
    </div>
  </div>

  <div class="demo-card">
    <h3>带文字</h3>
    <div class="demo-row">
      <HddSwitch v-model="textValue" showText activeText="开" inactiveText="关" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HddSwitch } from 'hdd-ui-lib'

const switchValue = ref(true)
const sizeValue = ref(true)
const disabledValue1 = ref(false)
const disabledValue2 = ref(true)
const loadingValue = ref(true)
const textValue = ref(true)
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: var(--hdd-spacing-6);
  flex-wrap: wrap;
}
</style>