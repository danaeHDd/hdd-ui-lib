<template>
  <div class="demo-card">
    <h3>基础输入框</h3>
    <div class="demo-row">
      <HddInput v-model="inputValue" placeholder="请输入内容" />
    </div>
  </div>

  <div class="demo-card">
    <h3>不同尺寸</h3>
    <div class="demo-row">
      <HddInput size="sm" placeholder="小尺寸" />
      <HddInput size="md" placeholder="中尺寸" />
      <HddInput size="lg" placeholder="大尺寸" />
    </div>
  </div>

  <div class="demo-card">
    <h3>带前缀和后缀</h3>
    <div class="demo-row">
      <HddInput placeholder="用户名">
        <template #prefix>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </template>
      </HddInput>
      <HddInput placeholder="搜索">
        <template #suffix>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </template>
      </HddInput>
    </div>
  </div>

  <div class="demo-card">
    <h3>可清空</h3>
    <div class="demo-row">
      <HddInput v-model="clearValue" placeholder="可清空" showClear />
    </div>
  </div>

  <div class="demo-card">
    <h3>字数统计</h3>
    <div class="demo-row">
      <HddInput v-model="countValue" placeholder="最多输入20个字符" maxlength="20" showWordLimit />
    </div>
  </div>

  <div class="demo-card">
    <h3>禁用状态</h3>
    <div class="demo-row">
      <HddInput placeholder="禁用状态" disabled />
    </div>
  </div>

  <div class="demo-card">
    <h3>错误状态</h3>
    <div class="demo-row">
      <HddInput placeholder="错误状态" error errorMessage="请输入正确的内容" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HddInput } from 'hdd-ui-lib'

const inputValue = ref('')
const clearValue = ref('示例文本')
const countValue = ref('')
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: var(--hdd-spacing-4);
  flex-wrap: wrap;
}

.demo-row :deep(.hdd-input) {
  width: 200px;
}
</style>