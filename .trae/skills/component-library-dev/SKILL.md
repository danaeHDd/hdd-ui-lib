---
name: "component-library-dev"
description: "组件库开发规范指南，涵盖设计令牌、CSS命名、组件结构等最佳实践。适用于创建新组件、扩展组件库或维护现有组件时确保风格一致性。"
---

# HDD UI 组件库开发规范

本规范旨在确保组件库的统一性、可维护性和可扩展性。所有新组件开发应遵循本规范。

## 1. 项目结构规范

### 1.1 目录结构

```
packages/
├── components/
│   ├── button/
│   │   ├── src/
│   │   │   └── button.vue        # 组件源码
│   │   └── index.ts              # 组件导出
│   ├── layout/
│   │   ├── src/
│   │   │   ├── layout.vue
│   │   │   ├── header.vue
│   │   │   ├── footer.vue
│   │   │   ├── content.vue
│   │   │   └── sider.vue
│   │   └── index.ts
│   └── theme/
│       └── src/
│           ├── design-tokens.css  # 设计令牌（全局变量）
│           ├── index.css          # 样式入口
│           ├── button.css         # 组件样式
│           ├── layout.css
│           └── divider.css
├── index.ts                       # 主入口（组件导出）
└── package.json
```

### 1.2 组件文件结构

每个组件应包含：
- `src/*.vue` - 组件源码
- `index.ts` - 组件导出

## 2. 设计令牌规范

### 2.1 颜色系统

#### 主题色（Primary）
```css
--hdd-color-primary: #9E8A57;
--hdd-color-primary-01: var(--hdd-color-primary);      /* 基准色 */
--hdd-color-primary-02: color-mix(in srgb, var(--hdd-color-primary) 70%, white);  /* 浅色 */
--hdd-color-primary-03: color-mix(in srgb, var(--hdd-color-primary) 50%, white);  /* 更浅 */
--hdd-color-primary-04: color-mix(in srgb, var(--hdd-color-primary) 30%, white);  /* 极浅 */
--hdd-color-primary-05: color-mix(in srgb, var(--hdd-color-primary) 10%, white);  /* 背景色 */
--hdd-color-primary-06: color-mix(in srgb, var(--hdd-color-primary) 65%, var(--hdd-color-dark));  /* 深色 */
```

#### 语义色
| 类型 | 色值 | 用途 |
|------|------|------|
| Success | #4CAF50 | 成功状态 |
| Warning | #FFA826 | 警告状态 |
| Danger | #FF0000 | 危险/错误状态 |
| Info | #2196F3 | 信息提示 |

#### 深色系（文本/边框）
```css
--hdd-color-dark-01: #EBEBEB;  /* Placeholder */
--hdd-color-dark-02: #D4D4D4;
--hdd-color-dark-03: #C2C2C2;  /* 禁用状态、分割线 */
--hdd-color-dark-04: #333333;  /* 正文文本 */
```

### 2.2 文本颜色规范

| 场景 | 变量 | 说明 |
|------|------|------|
| 主要文本 | `--hdd-color-dark-04` | 正文、标题 |
| 次要文本 | `--hdd-color-neutral-01` | 辅助说明 |
| 禁用文本 | `--hdd-color-dark-03` | 禁用状态 |
| 占位文本 | `--hdd-color-dark-01` | placeholder |

### 2.3 字体系统

```css
/* 字体大小 */
--hdd-font-size-xs: 0.75rem;    /* 12px - 辅助文本 */
--hdd-font-size-sm: 0.875rem;   /* 14px - 次要文本 */
--hdd-font-size-base: 1rem;     /* 16px - 正文 */
--hdd-font-size-lg: 1.125rem;   /* 18px - 强调 */
--hdd-font-size-xl: 1.25rem;     /* 20px - 标题 */
--hdd-font-size-2xl: 1.5rem;     /* 24px - 大标题 */

/* 字体粗细 */
--hdd-font-weight-normal: 400;   /* 正常文本 */
--hdd-font-weight-medium: 500;    /* 强调文本 */
--hdd-font-weight-semibold: 600; /* 标题 */

/* 行高 */
--hdd-line-height-tight: 1.25;   /* 紧凑 */
--hdd-line-height-normal: 1.5;    /* 正常 */
--hdd-line-height-relaxed: 1.75; /* 宽松 */
```

### 2.4 间距系统

```css
--hdd-spacing-unit: 0.25rem;     /* 基准单位 4px */

--hdd-spacing-1: 0.25rem;        /* 4px */
--hdd-spacing-2: 0.5rem;         /* 8px */
--hdd-spacing-3: 0.75rem;        /* 12px */
--hdd-spacing-4: 1rem;            /* 16px */
--hdd-spacing-5: 1.25rem;        /* 20px */
--hdd-spacing-6: 1.5rem;         /* 24px */
--hdd-spacing-8: 2rem;           /* 32px */
```

### 2.5 边框系统

```css
/* 边框颜色（统一管理） */
--hdd-border-color-default: var(--hdd-color-neutral-04);
--hdd-border-color-hover: var(--hdd-color-neutral-03);
--hdd-border-color-active: var(--hdd-color-primary-01);
--hdd-border-color-disabled: var(--hdd-color-neutral-05);
--hdd-border-color-light: var(--hdd-color-neutral-07);
--hdd-border-color-divider: var(--hdd-color-dark-03);

/* 边框宽度 */
--hdd-border-width-sm: 1px;      /* 默认边框 */
```

**重要：所有组件的边框颜色必须使用统一变量，禁止硬编码颜色值！**

### 2.6 圆角系统

```css
--hdd-radius-sm: 0.25rem;        /* 4px - 小圆角 */
--hdd-radius-md: 0.5rem;        /* 8px - 默认圆角 */
--hdd-radius-lg: 0.75rem;        /* 12px - 大圆角 */
--hdd-radius-full: 9999px;       /* 圆形 */
```

### 2.7 阴影系统

```css
--hdd-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--hdd-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--hdd-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

### 2.8 过渡动画

```css
--hdd-transition-duration-fast: 100ms;
--hdd-transition-duration-normal: 200ms;
--hdd-transition-ease-default: ease;
```

## 3. CSS 命名规范

### 3.1 BEM 命名规则

```
Block__Element--Modifier
```

| 部分 | 说明 | 示例 |
|------|------|------|
| Block | 组件名 | `hdd-button` |
| Element | 组件子元素 | `hdd-button__icon` |
| Modifier | 状态/变体 | `hdd-button--primary` |

### 3.2 命名示例

```css
/* 按钮组件 */
.hdd-button { }
.hdd-button__icon { }
.hdd-button__text { }
.hdd-button--primary { }
.hdd-button--sm { }
.hdd-button--disabled { }

/* 布局组件 */
.hdd-layout { }
.hdd-layout__header { }
.hdd-layout__content { }
.hdd-layout__footer { }
.hdd-layout__sider { }
.hdd-layout--has-sider { }
.hdd-layout__sider--collapsed { }

/* 分割线组件 */
.hdd-divider { }
.hdd-divider__text { }
.hdd-divider--dashed { }
.hdd-divider--vertical { }
.hdd-divider--left { }
.hdd-divider--center { }
.hdd-divider--right { }
```

### 3.3 组件前缀

所有组件使用统一前缀：`hdd-`（HDD UI）

## 4. 组件开发规范

### 4.1 Vue 组件模板

```vue
<template>
  <div :class="componentClasses" :style="componentStyle" v-bind="$attrs">
    <span v-if="$slots.default" class="hdd-component__text">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface ComponentProps {
  type?: 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<ComponentProps>(), {
  type: 'primary',
  size: 'md',
  disabled: false
})

const slots = useSlots()

const componentClasses = computed(() => {
  return [
    'hdd-component',
    `hdd-component--${props.type}`,
    `hdd-component--${props.size}`,
    {
      'hdd-component--disabled': props.disabled
    }
  ]
})

const componentStyle = computed(() => {
  const style: Record<string, string> = {}
  // 自定义样式处理
  return style
})
</script>

<script lang="ts">
export default {
  name: 'HddComponent'
}
</script>

<style scoped>
/* 尽量不在 scoped 中写样式，样式统一放在 theme/src/*.css */
</style>
```

### 4.2 Props 设计原则

1. **语义化命名**：使用描述性名称
   - ✅ `type`, `size`, `disabled`
   - ❌ `t`, `s`, `d`

2. **合理的默认值**：符合大多数使用场景
   ```typescript
   withDefaults(defineProps<Props>(), {
     size: 'md',      // 默认尺寸
     disabled: false
   })
   ```

3. **类型定义**：使用 TypeScript interface
   ```typescript
   interface Props {
     type?: 'primary' | 'success' | 'warning' | 'danger'
   }
   ```

### 4.3 组件导出规范

```typescript
// packages/components/button/index.ts
export { default as HddButton } from './src/button.vue'

// packages/index.ts
import { HddButton } from './components/button'
import './theme/src/index.css'

const components = [HddButton]

const install = (app: App): void => {
  components.forEach((component) => {
    if (component && component.name) {
      app.component(component.name, component)
    }
  })
}

export default { install }
export * from './components/button'
```

### 4.4 CSS 变量使用规范

#### 正确的做法 ✅

```css
/* 使用设计令牌 */
.hdd-component {
  color: var(--hdd-color-dark-04);
  font-size: var(--hdd-font-size-sm);
  padding: var(--hdd-spacing-2) var(--hdd-spacing-4);
  border: 1px solid var(--hdd-border-color-default);
  border-radius: var(--hdd-radius-sm);
  transition: all var(--hdd-transition-duration-normal);
}
```

#### 错误的做法 ❌

```css
/* 硬编码颜色 */
.hdd-component {
  color: #333333;           /* 错误 */
  font-size: 14px;          /* 错误 */
  padding: 8px 16px;        /* 错误 */
  border: 1px solid #ccc;   /* 错误 */
  border-radius: 4px;        /* 错误 */
}
```

### 4.5 状态样式规范

```css
/* 状态样式按此顺序定义 */
.hdd-component {
  /* 默认状态 */
  color: var(--hdd-color-dark-04);
  
  /* Hover 状态 */
  &:hover {
    color: var(--hdd-color-dark-03);
  }
  
  /* Active/Focus 状态 */
  &:active,
  &:focus {
    color: var(--hdd-color-primary-01);
  }
  
  /* 禁用状态 */
  &--disabled {
    color: var(--hdd-color-dark-03);
    cursor: not-allowed;
    opacity: 0.6;
  }
}
```

### 4.6 伪元素处理规范

当需要通过 props 自定义伪元素样式时，使用 CSS 变量：

```typescript
// 组件中
const style = computed(() => {
  const s: Record<string, string> = {}
  if (props.customColor) {
    s['--hdd-component-color'] = props.customColor
  }
  return s
})
```

```css
/* 样式中 */
.hdd-component::before {
  background-color: var(--hdd-component-color, var(--hdd-border-color-default));
}
```

## 5. Demo 开发规范

### 5.1 Demo 文件结构

```
playground/src/components/
├── button/
│   └── ButtonDemo.vue      # 按钮演示
├── layout/
│   └── LayoutDemo.vue      # 布局演示
└── Sidebar.vue             # 侧边导航
```

### 5.2 Demo 组件模板

```vue
<template>
  <div class="demo-card">
    <h3>基础用法</h3>
    <div class="demo-description">简短说明</div>
    <!-- 演示代码 -->
  </div>

  <div class="demo-card">
    <h3>不同尺寸</h3>
    <!-- 更多演示 -->
  </div>
</template>

<script setup lang="ts">
import { Button } from 'hdd-ui-lib'
</script>

<style scoped>
.demo-description {
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-01);
  margin-bottom: var(--hdd-spacing-4);
}
</style>
```

### 5.3 侧边栏配置

```typescript
const navGroups = [
  {
    name: 'design',
    label: '设计令牌',
    items: [
      { name: 'color-system', label: '颜色系统' }
    ]
  },
  {
    name: 'components',
    label: 'UI组件',
    items: [
      { name: 'button', label: '按钮' },
      { name: 'divider', label: '分割线' },
      { name: 'layout', label: '布局' }
    ]
  }
]
```

## 6. 质量检查清单

新组件开发完成后，检查以下内容：

- [ ] 组件命名遵循 BEM 规范
- [ ] 所有颜色使用 CSS 变量
- [ ] 所有间距使用设计令牌
- [ ] Props 有合理的默认值
- [ ] 组件已正确导出
- [ ] 已添加 Demo 演示
- [ ] Demo 已在侧边栏注册
- [ ] 组件支持 disabled/loading 等状态
- [ ] 样式无硬编码值

## 7. 常见问题

### Q: 如何处理自定义颜色？

A: 使用 CSS 变量传递：
```typescript
style['--hdd-component-color'] = props.color
```
```css
border-color: var(--hdd-component-color, var(--hdd-border-color-default));
```

### Q: 何时使用 scoped 样式？

A: 仅在需要组件私有样式时使用，公共样式统一放在 `theme/src/*.css`。

### Q: 组件注册方式？

A: 使用 `app.component()` 而非 `app.use()`：
```typescript
if (component && component.name) {
  app.component(component.name, component)
}
```
