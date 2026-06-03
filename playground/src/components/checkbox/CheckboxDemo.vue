<template>
  <div class="demo-card">
    <h3>基础多选框</h3>
    <div class="demo-row">
      <HddCheckbox v-model="checkboxValue1">选项1</HddCheckbox>
      <HddCheckbox v-model="checkboxValue1">选项2</HddCheckbox>
      <HddCheckbox v-model="checkboxValue1">选项3</HddCheckbox>
    </div>
  </div>

  <div class="demo-card">
    <h3>不同尺寸</h3>
    <div class="demo-row">
      <HddCheckbox size="sm" v-model="sizeValue">小尺寸</HddCheckbox>
      <HddCheckbox size="md" v-model="sizeValue">中尺寸</HddCheckbox>
      <HddCheckbox size="lg" v-model="sizeValue">大尺寸</HddCheckbox>
    </div>
  </div>

  <div class="demo-card">
    <h3>禁用状态</h3>
    <div class="demo-row">
      <HddCheckbox v-model="disabledValue" disabled>禁用未选中</HddCheckbox>
      <HddCheckbox v-model="disabledChecked" disabled>禁用已选中</HddCheckbox>
    </div>
  </div>

  <div class="demo-card">
    <h3>多选模式</h3>
    <div class="demo-row">
      <HddCheckbox v-model="multipleValue" label="苹果">苹果</HddCheckbox>
      <HddCheckbox v-model="multipleValue" label="香蕉">香蕉</HddCheckbox>
      <HddCheckbox v-model="multipleValue" label="橙子">橙子</HddCheckbox>
    </div>
    <p>已选: {{ multipleValue.join(', ') || '无' }}</p>
  </div>

  <div class="demo-card">
    <h3>半选状态</h3>
    <div class="demo-row">
      <HddCheckbox v-model="indeterminateValue" indeterminate>全选</HddCheckbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HddCheckbox } from 'hdd-ui-lib'

const checkboxValue1 = ref(true)
const sizeValue = ref(false)
const disabledValue = ref(false)
const disabledChecked = ref(true)
const multipleValue = ref(['苹果', '橙子'])
const indeterminateValue = ref(false)
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: var(--hdd-spacing-6);
  flex-wrap: wrap;
}
</style>