<script setup lang="ts">
import { ref } from 'vue'

const iconValue = ref('home')
</script>

# Icon 图标

图标组件，支持 Material Icons Font 和自定义 SVG 图标。

## 基础用法 - Material Icons

组件库已集成 Material Icons Font，支持通过 `name` 属性直接使用。

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px; align-items: center;">
      <hdd-icon name="home" />
      <hdd-icon name="search" />
      <hdd-icon name="settings" />
      <hdd-icon name="favorite" />
      <hdd-icon name="menu" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon name="home" />
    <hdd-icon name="search" />
    <hdd-icon name="settings" />
    <hdd-icon name="favorite" />
    <hdd-icon name="menu" />
  </template>
  ```

  </template>
</demo-block>

## 图标变体

Material Icons 提供多种视觉变体：filled（默认）、outlined、round、sharp、two-tone。

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px; align-items: center;">
      <div style="text-align: center;">
        <hdd-icon name="home" variant="filled" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">filled</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="home" variant="outlined" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">outlined</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="home" variant="round" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">round</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="home" variant="sharp" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">sharp</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="home" variant="two-tone" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">two-tone</div>
      </div>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon name="home" variant="filled" />
    <hdd-icon name="home" variant="outlined" />
    <hdd-icon name="home" variant="round" />
    <hdd-icon name="home" variant="sharp" />
    <hdd-icon name="home" variant="two-tone" />
  </template>
  ```

  </template>
</demo-block>

## 不同尺寸

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 16px; align-items: center;">
      <hdd-icon name="home" :size="16" />
      <hdd-icon name="home" :size="20" />
      <hdd-icon name="home" :size="24" />
      <hdd-icon name="home" :size="32" />
      <hdd-icon name="home" :size="48" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon name="home" :size="16" />
    <hdd-icon name="home" :size="20" />
    <hdd-icon name="home" :size="24" />
    <hdd-icon name="home" :size="32" />
    <hdd-icon name="home" :size="48" />
  </template>
  ```

  </template>
</demo-block>

## 自定义颜色

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 16px;">
      <hdd-icon name="favorite" :size="32" color="#9E8A57" />
      <hdd-icon name="favorite" :size="32" color="#4CAF50" />
      <hdd-icon name="favorite" :size="32" color="#FF5252" />
      <hdd-icon name="favorite" :size="32" color="#FFA826" />
      <hdd-icon name="favorite" :size="32" color="#2196F3" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon name="favorite" :size="32" color="#9E8A57" />
    <hdd-icon name="favorite" :size="32" color="#4CAF50" />
    <hdd-icon name="favorite" :size="32" color="#FF5252" />
    <hdd-icon name="favorite" :size="32" color="#FFA826" />
    <hdd-icon name="favorite" :size="32" color="#2196F3" />
  </template>
  ```

  </template>
</demo-block>

## 旋转动画

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-icon name="refresh" :size="40" :spin="true" />
      <hdd-icon name="settings" :size="40" :spin="true" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon name="refresh" :size="40" :spin="true" />
    <hdd-icon name="settings" :size="40" :spin="true" />
  </template>
  ```

  </template>
</demo-block>

## 可聚焦图标（无障碍）

设置 tabindex="0" 使图标可通过键盘聚焦（Tab 键访问）。

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-icon name="home" :size="32" tabindex="0" aria-label="首页" />
      <hdd-icon name="settings" :size="32" tabindex="0" aria-label="设置" />
      <hdd-icon name="search" :size="32" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon name="home" :size="32" tabindex="0" aria-label="首页" />
    <hdd-icon name="settings" :size="32" tabindex="0" aria-label="设置" />
    <hdd-icon name="search" :size="32" />
  </template>
  ```

  </template>
</demo-block>

## 自定义 SVG 图标

如果需要使用自定义图标，可以通过插槽传入 SVG 内容。

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-icon :size="24">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" />
      </hdd-icon>
      <hdd-icon :size="32">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
      </hdd-icon>
      <hdd-icon :size="40">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none" />
      </hdd-icon>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon :size="24">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
    <hdd-icon :size="32">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
    <hdd-icon :size="40">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
  </template>
  ```

  </template>
</demo-block>

## 常用 Material Icons 示例

<demo-block>
  <template #demo>
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 24px;">
      <div style="text-align: center;">
        <hdd-icon name="home" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">home</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="search" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">search</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="settings" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">settings</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="person" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">person</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="mail" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">mail</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="phone" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">phone</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="edit" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">edit</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="delete" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">delete</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="add" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">add</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="close" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">close</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="check" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">check</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="arrow_back" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">arrow_back</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="star" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">star</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="bookmark" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">bookmark</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="share" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">share</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="download" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">download</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="upload" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">upload</div>
      </div>
      <div style="text-align: center;">
        <hdd-icon name="save" :size="32" />
        <div style="font-size: 12px; margin-top: 4px;">save</div>
      </div>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-icon name="home" />
    <hdd-icon name="search" />
    <hdd-icon name="settings" />
    <hdd-icon name="person" />
    <hdd-icon name="mail" />
    <hdd-icon name="phone" />
    <!-- 更多图标请参考 Material Icons 官网 -->
  </template>
  ```

  </template>
</demo-block>

## API

### HddIcon 图标组件

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| name | Material Icons 图标名称 | string | - | - |
| variant | 图标变体 | string | filled / outlined / round / sharp / two-tone | filled |
| size | 图标尺寸 | number / string | - | 24 |
| color | 图标颜色 | string | - | currentColor |
| viewBox | SVG 视口（仅自定义 SVG 有效）| string | - | 0 0 24 24 |
| rotate | 旋转角度（仅自定义 SVG 有效）| number | - | 0 |
| flip | 翻转方向（仅自定义 SVG 有效）| string | horizontal / vertical / both | - |
| spin | 是否旋转动画 | boolean | - | false |
| ariaLabel | 无障碍标签 | string | - | - |
| tabindex | 可聚焦设置 | number / string | - | - |

## 图标查询

完整的 Material Icons 列表请参考官方文档：
[Material Icons 官网](https://fonts.google.com/icons)
