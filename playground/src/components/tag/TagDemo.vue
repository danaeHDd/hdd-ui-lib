<template>
  <div class="demo-card">
    <h3>标签效果</h3>
    <p class="demo-description">提供三种效果样式：light（浅色）、dark（深色）、plain（朴素）</p>
    
    <div class="effect-section">
      <h4 class="effect-title">Light（浅色）</h4>
      <div class="tag-demo">
        <hdd-tag type="primary">主要</hdd-tag>
        <hdd-tag type="success">成功</hdd-tag>
        <hdd-tag type="warning">警告</hdd-tag>
        <hdd-tag type="danger">危险</hdd-tag>
        <hdd-tag type="info">信息</hdd-tag>
      </div>
    </div>
    
    <div class="effect-section">
      <h4 class="effect-title">Dark（深色）</h4>
      <div class="tag-demo">
        <hdd-tag type="primary" effect="dark">主要</hdd-tag>
        <hdd-tag type="success" effect="dark">成功</hdd-tag>
        <hdd-tag type="warning" effect="dark">警告</hdd-tag>
        <hdd-tag type="danger" effect="dark">危险</hdd-tag>
        <hdd-tag type="info" effect="dark">信息</hdd-tag>
      </div>
    </div>
    
    <div class="effect-section">
      <h4 class="effect-title">Plain（朴素）</h4>
      <div class="tag-demo">
        <hdd-tag type="primary" effect="plain">主要</hdd-tag>
        <hdd-tag type="success" effect="plain">成功</hdd-tag>
        <hdd-tag type="warning" effect="plain">警告</hdd-tag>
        <hdd-tag type="danger" effect="plain">危险</hdd-tag>
        <hdd-tag type="info" effect="plain">信息</hdd-tag>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>基础标签</h3>
    <p class="demo-description">支持五种类型：primary、success、warning、danger、info</p>
    <div class="tag-demo">
      <hdd-tag>默认标签</hdd-tag>
      <hdd-tag type="primary">主要标签</hdd-tag>
      <hdd-tag type="success">成功标签</hdd-tag>
      <hdd-tag type="warning">警告标签</hdd-tag>
      <hdd-tag type="danger">危险标签</hdd-tag>
      <hdd-tag type="info">信息标签</hdd-tag>
    </div>
  </div>

  <div class="demo-card">
    <h3>可关闭标签</h3>
    <p class="demo-description">点击关闭按钮或按 Enter/Space 键关闭标签，点击添加按钮新增标签</p>
    <div class="tag-demo">
      <hdd-tag v-for="(tag, index) in tags" :key="index" closable @close="removeTag(index)">
        {{ tag }}
      </hdd-tag>
      <button class="add-tag-btn" @click="addTag">+ 添加标签</button>
    </div>
  </div>

  <div class="demo-card">
    <h3>可点击标签</h3>
    <p class="demo-description">设置 clickable 属性使标签可点击，支持多选。未选中时显示默认样式，选中时显示 type+effect 样式</p>
    <div class="tag-demo">
      <hdd-tag
        v-for="tag in allTags"
        :key="tag.name"
        clickable
        :selected="selectedTags.includes(tag.name)"
        :type="tag.type"
        @click="toggleTag(tag.name)"
      >
        {{ tag.name }}
      </hdd-tag>
    </div>
    <div class="selected-info">
      已选标签: {{ selectedTags.join(', ') || '无' }}
    </div>
  </div>

  <div class="demo-card">
    <h3>带图标标签</h3>
    <p class="demo-description">通过 icon 插槽添加图标</p>
    <div class="tag-demo">
      <hdd-tag type="primary">
        <template #icon>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </template>
        带图标
      </hdd-tag>
      <hdd-tag type="success">
        <template #icon>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </template>
        成功
      </hdd-tag>
      <hdd-tag type="warning">
        <template #icon>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 9v2m0 4h.01" />
            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
        </template>
        警告
      </hdd-tag>
      <hdd-tag type="danger">
        <template #icon>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </template>
        删除
      </hdd-tag>
    </div>
  </div>

  <div class="demo-card">
    <h3>点击效果</h3>
    <p class="demo-description">设置 hit 属性显示点击效果</p>
    <div class="tag-demo">
      <hdd-tag type="primary">普通标签</hdd-tag>
      <hdd-tag type="primary" hit>点击效果</hdd-tag>
      <hdd-tag type="success">普通标签</hdd-tag>
      <hdd-tag type="success" hit>点击效果</hdd-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HddTag } from 'hdd-ui-lib'

const tags = ref(['标签1', '标签2', '标签3', '标签4', '标签5'])

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const addTag = () => {
  const newTag = `标签${tags.value.length + 1}`
  tags.value.push(newTag)
}

const allTags = [
  { name: '标签A', type: 'primary' },
  { name: '标签B', type: 'success' },
  { name: '标签C', type: 'warning' },
  { name: '标签D', type: 'danger' },
  { name: '标签E', type: 'info' }
]
const selectedTags = ref<string[]>([])

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
}
</script>

<style scoped>
.tag-demo {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hdd-spacing-3);
  padding: var(--hdd-spacing-4);
  background: var(--hdd-color-neutral-05);
  border-radius: var(--hdd-radius-md);
}

.effect-section {
  margin-bottom: var(--hdd-spacing-4);
}

.effect-section:last-child {
  margin-bottom: 0;
}

.effect-title {
  margin-bottom: var(--hdd-spacing-2);
  font-size: var(--hdd-font-size-sm);
  font-weight: 500;
  color: var(--hdd-color-neutral-02);
}

.selected-info {
  margin-top: var(--hdd-spacing-3);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-04);
}

.add-tag-btn {
  display: inline-flex;
  align-items: center;
  padding: var(--hdd-spacing-1) var(--hdd-spacing-3);
  background: transparent;
  color: var(--hdd-color-neutral-03);
  border: 1px dashed var(--hdd-color-neutral-04);
  border-radius: var(--hdd-radius-sm);
  font-size: var(--hdd-font-size-sm);
  font-weight: var(--hdd-font-weight-medium);
  line-height: 1.4;
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--hdd-transition-duration-normal);
}

.add-tag-btn:hover {
  color: var(--hdd-color-primary-01);
  border-color: var(--hdd-color-primary-01);
}

.demo-description {
  margin-bottom: var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-02);
}
</style>
