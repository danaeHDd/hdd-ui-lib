# Icon 图标

图标组件，支持自定义 SVG 图标和内置图标。

## 内置图标

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-info-icon />
      <hdd-warning-icon />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-info-icon />
    <hdd-warning-icon />
  </template>
  ```

  </template>
</demo-block>

## 不同尺寸

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 16px; align-items: center;">
      <hdd-info-icon :size="24" />
      <hdd-info-icon :size="32" />
      <hdd-info-icon :size="48" />
      <hdd-warning-icon :size="24" />
      <hdd-warning-icon :size="32" />
      <hdd-warning-icon :size="48" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-info-icon :size="24" />
    <hdd-info-icon :size="32" />
    <hdd-info-icon :size="48" />
    <hdd-warning-icon :size="24" />
    <hdd-warning-icon :size="32" />
    <hdd-warning-icon :size="48" />
  </template>
  ```

  </template>
</demo-block>

## 自定义颜色

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 16px;">
      <hdd-info-icon :size="32" color="#9E8A57" />
      <hdd-info-icon :size="32" color="#4CAF50" />
      <hdd-info-icon :size="32" color="#FF5252" />
      <hdd-warning-icon :size="32" color="#FFA826" />
      <hdd-warning-icon :size="32" color="#4CAF50" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-info-icon :size="32" color="#9E8A57" />
    <hdd-info-icon :size="32" color="#4CAF50" />
    <hdd-info-icon :size="32" color="#FF5252" />
    <hdd-warning-icon :size="32" color="#FFA826" />
    <hdd-warning-icon :size="32" color="#4CAF50" />
  </template>
  ```

  </template>
</demo-block>

## 继承文字颜色

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px; color: #9E8A57;">
      <hdd-info-icon />
      <span style="display: flex; align-items: center;">信息图标</span>
    </div>
    <div style="display: flex; gap: 24px; margin-top: 12px; color: #FFA826;">
      <hdd-warning-icon />
      <span style="display: flex; align-items: center;">警告图标</span>
    </div>
    <div style="display: flex; gap: 24px; margin-top: 12px; color: #4CAF50;">
      <hdd-info-icon />
      <span style="display: flex; align-items: center;">成功色</span>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <div style="display: flex; gap: 24px; color: #9E8A57;">
      <hdd-info-icon />
      <span>信息图标</span>
    </div>
    <div style="display: flex; gap: 24px; color: #FFA826;">
      <hdd-warning-icon />
      <span>警告图标</span>
    </div>
  </template>
  ```

  </template>
</demo-block>

## 旋转图标

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-info-icon :size="40" />
      <hdd-info-icon :size="40" :rotate="45" />
      <hdd-info-icon :size="40" :rotate="90" />
      <hdd-info-icon :size="40" :rotate="180" />
      <hdd-info-icon :size="40" :rotate="270" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-info-icon :size="40" />
    <hdd-info-icon :size="40" :rotate="45" />
    <hdd-info-icon :size="40" :rotate="90" />
    <hdd-info-icon :size="40" :rotate="180" />
    <hdd-info-icon :size="40" :rotate="270" />
  </template>
  ```

  </template>
</demo-block>

## 翻转图标

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-info-icon :size="40" />
      <hdd-info-icon :size="40" flip="horizontal" />
      <hdd-info-icon :size="40" flip="vertical" />
      <hdd-info-icon :size="40" flip="both" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-info-icon :size="40" />
    <hdd-info-icon :size="40" flip="horizontal" />
    <hdd-info-icon :size="40" flip="vertical" />
    <hdd-info-icon :size="40" flip="both" />
  </template>
  ```

  </template>
</demo-block>

## 旋转动画

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-info-icon :size="40" :spin="true" />
      <hdd-warning-icon :size="40" :spin="true" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-info-icon :size="40" :spin="true" />
    <hdd-warning-icon :size="40" :spin="true" />
  </template>
  ```

  </template>
</demo-block>

## 组合使用

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-info-icon :size="40" :rotate="45" flip="horizontal" color="#9E8A57" />
      <hdd-warning-icon :size="40" :rotate="180" flip="vertical" color="#FFA826" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-info-icon :size="40" :rotate="45" flip="horizontal" color="#9E8A57" />
    <hdd-warning-icon :size="40" :rotate="180" flip="vertical" color="#FFA826" />
  </template>
  ```

  </template>
</demo-block>

## 自定义 SVG 图标

<demo-block>
  <template #demo>
    <hdd-icon :size="24">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
    <hdd-icon :size="32">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
    <hdd-icon :size="40">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
    <hdd-icon :size="48" :spin="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
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
    <hdd-icon :size="48" :spin="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none" />
    </hdd-icon>
  </template>
  ```

  </template>
</demo-block>

## API

### HddInfoIcon 信息图标

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| size | 图标尺寸 | number / string | - | 24 |
| color | 图标颜色 | string | - | currentColor |
| rotate | 旋转角度 | number | - | 0 |
| flip | 翻转方向 | string | horizontal / vertical / both | - |
| spin | 是否旋转动画 | boolean | - | false |

### HddWarningIcon 警告图标

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| size | 图标尺寸 | number / string | - | 24 |
| color | 图标颜色 | string | - | currentColor |
| rotate | 旋转角度 | number | - | 0 |
| flip | 翻转方向 | string | horizontal / vertical / both | - |
| spin | 是否旋转动画 | boolean | - | false |

### HddIcon 自定义图标容器

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| size | 图标尺寸 | number / string | - | 24 |
| color | 图标颜色 | string | - | currentColor |
| viewBox | SVG 视口 | string | - | 0 0 24 24 |
| rotate | 旋转角度 | number | - | 0 |
| flip | 翻转方向 | string | horizontal / vertical / both | - |
| spin | 是否旋转动画 | boolean | - | false |
