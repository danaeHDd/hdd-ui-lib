---
name: "icon-guidelines"
description: "图标使用规范指南，涵盖 Material Icons 字体、图标尺寸、与文字搭配、自定义图标等。适用于在组件中使用图标或开发图标相关组件时使用。"
---

# HDD UI 图标使用规范

本规范基于 UI/UX 团队的设计要求，确保图标在 HDD UI 组件库中的一致性和可用性。

## 1. 图标库选择

### 1.1 标准图标库：Material Icons

- ✅ 使用 **Material Icons Font** 作为标准图标库
- ✅ 字体族：`'Material Icons'`
- ✅ 可自托管 Material Icons 字体
- 参考：https://fonts.google.com/icons

### 1.2 自托管 Material Icons

可以从 Google Material Design Icons GitHub 仓库下载字体文件：
- 仓库地址：https://github.com/google/material-design-icons
- 推荐使用：Material Icons（标准图标）

### 1.3 字体引入

```css
/* 方式 1：使用 Google Fonts CDN */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* 方式 2：自托管 */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('path/to/MaterialIcons-Regular.woff2') format('woff2');
}

.hdd-icon {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
```

## 2. 图标尺寸

### 2.1 Keyline Grid 设计

Material Icons 基于 **Keyline Grid** 设计：
- @1x = 24px
- @4x = 96px

### 2.2 常用图标尺寸

| 尺寸 | 像素值 | 变量 | 用途 |
|------|--------|------|------|
| xs | 16px | `--hdd-icon-size-sm` | 小图标、内联 |
| sm | 18px | `--hdd-icon-size-sm` | 按钮内图标 |
| md | 20px | `--hdd-icon-size-md` | 标准图标（推荐） |
| lg | 24px | `--hdd-icon-size-lg` | 默认图标 |
| xl | 32px | `--hdd-icon-size-xl` | 大图标 |
| 2xl | 48px | - | 特大图标 |

### 2.3 图标尺寸变量

```css
--hdd-icon-size-xs: 1rem;     /* 16px */
--hdd-icon-size-sm: 1.125rem; /* 18px */
--hdd-icon-size-md: 1.25rem;  /* 20px */
--hdd-icon-size-lg: 1.5rem;   /* 24px */
--hdd-icon-size-xl: 2rem;     /* 32px */
--hdd-icon-size-2xl: 3rem;    /* 48px */
```

### 2.4 图标尺寸使用

```css
.hdd-icon--xs { font-size: var(--hdd-icon-size-xs); }
.hdd-icon--sm { font-size: var(--hdd-icon-size-sm); }
.hdd-icon--md { font-size: var(--hdd-icon-size-md); }
.hdd-icon--lg { font-size: var(--hdd-icon-size-lg); }
.hdd-icon--xl { font-size: var(--hdd-icon-size-xl); }
```

## 3. 图标与文字搭配

### 3.1 核心原则

**当图标与文字相邻或在按钮内时，图标尺寸应与文字高度相近。**

### 3.2 推荐搭配

| 图标尺寸 | 文字尺寸 | 场景 | 示例 |
|----------|----------|------|------|
| 20px | 14px | 按钮、标签 | 按钮内的图标 |
| 20px | 20px | 标题、强调内容 | 大号文字旁的图标 |
| 24px | 16px | 列表项 | 列表项前缀图标 |
| 32px | 24px | 大按钮、卡片标题 | 卡片标题前的图标 |

### 3.3 图标与文字间距

```css
.hdd-icon-text {
  display: inline-flex;
  align-items: center;
  gap: var(--hdd-spacing-1);  /* 4px - 最小间距 */
}

/* 大图标使用更大间距 */
.hdd-icon-text--large {
  gap: var(--hdd-spacing-2);  /* 8px */
}
```

### 3.4 图标与文字基线对齐

```css
.hdd-icon-text {
  display: inline-flex;
  align-items: center;  /* 垂直居中对齐 */
  /* 或 */
  align-items: baseline;  /* 基线对齐 */
}
```

## 4. 图标使用方式

### 4.1 HTML 使用

```html
<!-- Material Icons 字体方式 -->
<span class="hdd-icon" aria-hidden="true">home</span>
<span class="hdd-icon" aria-hidden="true">search</span>
<span class="hdd-icon" aria-hidden="true">settings</span>
```

### 4.2 Vue 组件使用

```vue
<template>
  <span class="hdd-icon" :class="`hdd-icon--${size}`" :style="{ color }">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
interface IconProps {
  name: string      // Material Icons 名称
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 'lg',
  color: 'currentColor'
})
</script>
```

### 4.3 常用图标名称

| 类别 | 图标名称 |
|------|----------|
| 导航 | home, menu, arrow_back, arrow_forward, close |
| 操作 | search, add, edit, delete, save, refresh |
| 状态 | check, error, warning, info, help |
| 媒体 | play, pause, stop, skip_next, skip_previous |
| 通信 | email, message, notification, send |
| 用户 | person, account_circle, group, login, logout |
| 文件 | folder, file_download, file_upload, attach_file |
| 设置 | settings, tune, more_vert, more_horiz |
| 购物 | shopping_cart, favorite, star, payment |

完整图标列表：https://fonts.google.com/icons

## 5. 图标颜色

### 5.1 颜色继承

```css
.hdd-icon {
  color: currentColor;  /* 继承父元素颜色 */
}
```

### 5.2 颜色变量

```css
.hdd-icon--primary { color: var(--hdd-color-primary-01); }
.hdd-icon--success { color: var(--hdd-color-success-01); }
.hdd-icon--warning { color: var(--hdd-color-warning-01); }
.hdd-icon--danger { color: var(--hdd-color-danger-01); }
.hdd-icon--disabled { color: var(--hdd-color-dark-03); }
```

### 5.3 使用示例

```html
<!-- 继承父元素颜色 -->
<button style="color: white">
  <span class="hdd-icon">search</span>
  搜索
</button>

<!-- 自定义颜色 -->
<span class="hdd-icon hdd-icon--primary">home</span>
```

## 6. 图标动画

### 6.1 旋转动画

```css
.hdd-icon--spin {
  animation: hdd-icon-spin 2s linear infinite;
}

@keyframes hdd-icon-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### 6.2 加载图标

```html
<span class="hdd-icon hdd-icon--spin" aria-label="加载中">
  refresh
</span>
```

### 6.3 翻转动画

```css
.hdd-icon--flip-horizontal {
  transform: scaleX(-1);
}

.hdd-icon--flip-vertical {
  transform: scaleY(-1);
}
```

### 6.4 减少动画

```css
@media (prefers-reduced-motion: reduce) {
  .hdd-icon--spin {
    animation: none;
  }
}
```

## 7. 自定义图标

### 7.1 遵循 Keyline 规范

自定义图标应遵循 Material Design Keyline 规范：
- 参考：https://m2.material.io/design/iconography/product-icons.html

### 7.2 SVG 图标

```vue
<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    :class="['hdd-icon-svg', `hdd-icon-svg--${size}`]"
    aria-hidden="true"
  >
    <path :d="path" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
interface IconProps {
  path: string
  size?: number | string
  color?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor'
})
</script>
```

### 7.3 IconFont 集成

如果需要使用 IconFont（字体图标）：

```css
@font-face {
  font-family: 'CustomIconFont';
  src: url('path/to/iconfont.woff2') format('woff2'),
       url('path/to/iconfont.woff') format('woff');
}

.hdd-icon--custom {
  font-family: 'CustomIconFont';
}
```

## 8. 图标无障碍

### 8.1 装饰性图标

如果图标是装饰性的（不传达信息），使用 `aria-hidden="true"`：

```html
<!-- 装饰性图标 -->
<button>
  <span class="hdd-icon" aria-hidden="true">search</span>
  搜索
</button>
```

### 8.2 语义性图标

如果图标传达信息（单独使用，没有文字），使用 `aria-label`：

```html
<!-- 语义性图标 -->
<button aria-label="搜索">
  <span class="hdd-icon" aria-hidden="true">search</span>
</button>

<button aria-label="关闭">
  <span class="hdd-icon" aria-hidden="true">close</span>
</button>
```

### 8.3 图标按钮

图标按钮必须有无障碍标签：

```html
<!-- ✅ 推荐：使用 aria-label -->
<button class="hdd-icon-button" aria-label="删除">
  <span class="hdd-icon" aria-hidden="true">delete</span>
</button>

<!-- ❌ 避免：没有标签 -->
<button class="hdd-icon-button">
  <span class="hdd-icon">delete</span>
</button>
```

## 9. 图标性能

### 9.1 字体子集化

如果只使用少量图标，可以使用字体子集化工具减少字体文件大小：
- [fonttools](https://github.com/fonttools/fonttools)
- [glyphhanger](https://github.com/filamentgroup/glyphhanger)

### 9.2 图标懒加载

对于不常用的图标，可以懒加载：

```typescript
// 动态导入图标
const loadIcon = async (name: string) => {
  const { default: icon } = await import(`./icons/${name}.svg`)
  return icon
}
```

### 9.3 SVG 优化

使用 SVG 图标时，使用 SVGO 等工具优化：
- 移除注释
- 移除元数据
- 优化路径
- 压缩空白

## 10. 图标检查清单

### 10.1 基础检查
- [ ] 使用 Material Icons 字体
- [ ] 图标尺寸符合规范
- [ ] 图标颜色使用 currentColor
- [ ] 图标与文字搭配合理

### 10.2 无障碍检查
- [ ] 装饰性图标使用 aria-hidden
- [ ] 语义性图标使用 aria-label
- [ ] 图标按钮有无障碍标签
- [ ] 动画图标尊重 prefers-reduced-motion

### 10.3 性能检查
- [ ] 字体文件已优化
- [ ] 考虑了字体子集化
- [ ] SVG 图标已压缩
- [ ] 大量图标使用懒加载

### 10.4 一致性检查
- [ ] 整个项目使用统一的图标库
- [ ] 图标风格一致（线性 vs 填充）
- [ ] 图标尺寸一致
- [ ] 图标颜色一致

## 11. 常见问题

### Q: 如何选择图标尺寸？

A: 根据使用场景：
- 内联图标：14-16px
- 按钮内图标：16-20px
- 列表项图标：20-24px
- 独立图标：24-32px

### Q: 图标和文字应该垂直居中还是基线对齐？

A: 
- **垂直居中**：更适合按钮、列表项
- **基线对齐**：更适合标题、强调内容

### Q: 何时使用 SVG 图标 vs 字体图标？

A:
- **字体图标**：
  - ✅ 简单易用
  - ✅ 可以像文字一样控制
  - ❌ 只能单色
  - ❌ 抗锯齿问题
  
- **SVG 图标**：
  - ✅ 可以多色
  - ✅ 更好的渲染质量
  - ✅ 可以独立优化
  - ❌ 文件更大

### Q: 如何让图标按钮的触摸目标更大？

A:
```css
.hdd-icon-button {
  width: 24px;
  height: 24px;
  padding: 12px;  /* 通过 padding 扩展触摸区域到 48x48px */
  min-width: 48px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### Q: Material Icons 的 Outlined、Filled、Sharp 有什么区别？

A:
- **Filled**：实心图标（默认）
- **Outlined**：线性图标
- **Rounded**：圆角图标
- **Two-tone**：双色图标
- **Sharp**：锐角图标

推荐在同一个项目中只使用一种风格，保持一致性。

### Q: 如何添加自定义图标到 Material Icons？

A: Material Icons 是 Google 维护的开源项目，不支持添加自定义图标。自定义图标应该：
- 使用 SVG 格式
- 遵循相同的 Keyline 规范
- 在项目中单独管理
