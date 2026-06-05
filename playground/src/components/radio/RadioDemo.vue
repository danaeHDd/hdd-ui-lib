<template>
  <div class="demo-card">
    <h3>基础单选框</h3>
    <div class="demo-row">
      <HddRadio v-model="radioValue" label="选项1">选项1</HddRadio>
      <HddRadio v-model="radioValue" label="选项2">选项2</HddRadio>
      <HddRadio v-model="radioValue" label="选项3">选项3</HddRadio>
    </div>
  </div>

  <div class="demo-card">
    <h3>不同尺寸</h3>
    <div class="demo-row">
      <HddRadio size="sm" v-model="sizeValue" label="sm">小尺寸</HddRadio>
      <HddRadio size="md" v-model="sizeValue" label="md">中尺寸</HddRadio>
      <HddRadio size="lg" v-model="sizeValue" label="lg">大尺寸</HddRadio>
    </div>
  </div>

  <div class="demo-card">
    <h3>禁用状态</h3>
    <div class="demo-row">
      <HddRadio v-model="disabledValue" label="选项1" disabled>禁用选项</HddRadio>
      <HddRadio v-model="disabledValue" label="选项2">可用选项</HddRadio>
    </div>
  </div>

  <div class="demo-card">
    <h3>使用 label 属性</h3>
    <div class="demo-row">
      <HddRadio v-model="labelValue" label="苹果" />
      <HddRadio v-model="labelValue" label="香蕉" />
      <HddRadio v-model="labelValue" label="橙子" />
    </div>
  </div>

  <div class="demo-card">
    <h3>错误状态</h3>
    <div class="demo-row">
      <HddRadio v-model="errorValue" label="选项1" error>错误选项</HddRadio>
      <HddRadio v-model="errorValue" label="选项2" error>错误选项</HddRadio>
      <HddRadio v-model="errorValue" label="选项3" error>错误选项</HddRadio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HddRadio } from 'hdd-ui-lib'

const radioValue = ref('选项1')
const sizeValue = ref('md')
const disabledValue = ref('')
const labelValue = ref('苹果')
const errorValue = ref('')
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: var(--hdd-spacing-6);
  flex-wrap: wrap;
}
</style>