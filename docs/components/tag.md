<script setup lang="ts">
import { ref } from 'vue'

const tags = ref(['标签1', '标签2', '标签3'])

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

const selectedTags = ref([])

const handleTagClick = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
}
</script>

# Tag 标签

标签组件，用于标记和分类。

## 标签效果

提供三种效果样式：light（浅色）、dark（深色）、plain（朴素）。

<demo-block>
  <template #demo>
    <div style="margin-bottom: 16px;">
      <div style="font-size: 14px; margin-bottom: 8px; color: var(--hdd-color-neutral-02);">Light（浅色）</div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <hdd-tag type="primary">主要</hdd-tag>
        <hdd-tag type="success">成功</hdd-tag>
        <hdd-tag type="warning">警告</hdd-tag>
        <hdd-tag type="danger">危险</hdd-tag>
        <hdd-tag type="info">信息</hdd-tag>
      </div>
    </div>
    <div style="margin-bottom: 16px;">
      <div style="font-size: 14px; margin-bottom: 8px; color: var(--hdd-color-neutral-02);">Dark（深色）</div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <hdd-tag type="primary" effect="dark">主要</hdd-tag>
        <hdd-tag type="success" effect="dark">成功</hdd-tag>
        <hdd-tag type="warning" effect="dark">警告</hdd-tag>
        <hdd-tag type="danger" effect="dark">危险</hdd-tag>
        <hdd-tag type="info" effect="dark">信息</hdd-tag>
      </div>
    </div>
    <div>
      <div style="font-size: 14px; margin-bottom: 8px; color: var(--hdd-color-neutral-02);">Plain（朴素）</div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <hdd-tag type="primary" effect="plain">主要</hdd-tag>
        <hdd-tag type="success" effect="plain">成功</hdd-tag>
        <hdd-tag type="warning" effect="plain">警告</hdd-tag>
        <hdd-tag type="danger" effect="plain">危险</hdd-tag>
        <hdd-tag type="info" effect="plain">信息</hdd-tag>
      </div>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <!-- Light（浅色） -->
    <hdd-tag type="primary">主要</hdd-tag>
    <hdd-tag type="success">成功</hdd-tag>
    <hdd-tag type="warning">警告</hdd-tag>
    <hdd-tag type="danger">危险</hdd-tag>
    <hdd-tag type="info">信息</hdd-tag>

    <!-- Dark（深色） -->
    <hdd-tag type="primary" effect="dark">主要</hdd-tag>
    <hdd-tag type="success" effect="dark">成功</hdd-tag>
    <hdd-tag type="warning" effect="dark">警告</hdd-tag>
    <hdd-tag type="danger" effect="dark">危险</hdd-tag>
    <hdd-tag type="info" effect="dark">信息</hdd-tag>

    <!-- Plain（朴素） -->
    <hdd-tag type="primary" effect="plain">主要</hdd-tag>
    <hdd-tag type="success" effect="plain">成功</hdd-tag>
    <hdd-tag type="warning" effect="plain">警告</hdd-tag>
    <hdd-tag type="danger" effect="plain">危险</hdd-tag>
    <hdd-tag type="info" effect="plain">信息</hdd-tag>
  </template>
  ```

  </template>
</demo-block>

## 基础用法

## 可关闭标签

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
      <hdd-tag v-for="(tag, index) in tags" :key="index" closable @close="removeTag(index)">
        {{ tag }}
      </hdd-tag>
      <button
        style="display: inline-flex; align-items: center; padding: 4px 12px; background: transparent; color: var(--hdd-color-neutral-03); border: 1px dashed var(--hdd-color-neutral-04); border-radius: 4px; font-size: 14px; font-weight: 500; line-height: 1.4; white-space: nowrap; cursor: pointer;"
        @click="addTag"
      >
        + 添加标签
      </button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-tag
      v-for="(tag, index) in tags"
      :key="index"
      closable
      @close="removeTag(index)"
    >
      {{ tag }}
    </hdd-tag>
    <button class="add-tag-btn" @click="addTag">+ 添加标签</button>
  </template>

  <script setup lang="ts">
    import { ref } from 'vue'
    
    const tags = ref(['标签1', '标签2', '标签3'])
    
    const addTag = () => {
      const newTag = `标签${tags.value.length + 1}`
      tags.value.push(newTag)
    }
    
    const removeTag = (index: number) => {
      tags.value.splice(index, 1)
    }
  </script>
  ```
  </template>
</demo-block>

## 可点击标签

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <hdd-tag
        v-for="tag in allTags"
        :key="tag.name"
        clickable
        :selected="selectedTags.includes(tag.name)"
        :type="tag.type"
        @click="handleTagClick(tag.name)"
      >
        {{ tag.name }}
      </hdd-tag>
    </div>
    <div style="margin-top: 12px; font-size: 14px; color: var(--hdd-color-neutral-04);">
      已选: {{ selectedTags.join(', ') || '无' }}
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-tag
      v-for="tag in allTags"
      :key="tag.name"
      clickable
      :selected="selectedTags.includes(tag.name)"
      :type="tag.type"
      @click="handleTagClick(tag.name)"
    >
      {{ tag.name }}
    </hdd-tag>
  </template>

  <script setup lang="ts">
    import { ref } from 'vue'
    
    const allTags = [
      { name: '标签A', type: 'primary' },
      { name: '标签B', type: 'success' },
      { name: '标签C', type: 'warning' },
      { name: '标签D', type: 'danger' },
      { name: '标签E', type: 'info' }
    ]
    
    const selectedTags = ref([])
    
    const handleTagClick = (tag: string) => {
      const index = selectedTags.value.indexOf(tag)
      if (index > -1) {
        selectedTags.value.splice(index, 1)
      } else {
        selectedTags.value.push(tag)
      }
    }
  </script>
  ```

  </template>
</demo-block>

## 带图标标签

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 12px;">
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
    </div>
  </template>
  <template #code>

  ```vue
  <template>
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
  </template>
  ```

  </template>
</demo-block>

## 点击效果

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 12px;">
      <hdd-tag type="primary">普通标签</hdd-tag>
      <hdd-tag type="primary" hit>点击效果</hdd-tag>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-tag type="primary">普通标签</hdd-tag>
    <hdd-tag type="primary" hit>点击效果</hdd-tag>
  </template>
  ```

  </template>
</demo-block>

## API

### HddTag 标签组件

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 类型（选中时显示的颜色类型） | string | primary / success / warning / danger / info | primary |
| effect | 效果样式 | string | light / dark / plain | light |
| closable | 是否可关闭 | boolean | - | false |
| clickable | 是否可点击 | boolean | - | false |
| selected | 是否选中（配合clickable使用，未选中时显示默认灰色样式） | boolean | - | false |
| hit | 是否有点击效果 | boolean | - | false |
| disableTransitions | 是否禁用过渡动画 | boolean | - | false |

### 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击标签时触发（仅 clickable 为 true 时） | - |
| close | 关闭标签时触发 | - |
