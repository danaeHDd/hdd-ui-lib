# 开发规范

本文档介绍组件库的开发规范，确保代码质量和风格一致性。

## 项目结构

```
packages/
├── components/
│   ├── button/
│   │   ├── src/
│   │   │   └── button.vue      # 组件源码
│   │   └── index.ts            # 组件导出
│   └── theme/
│       └── src/
│           ├── design-tokens.css  # 设计令牌
│           ├── index.css          # 样式入口
│           └── button.css         # 组件样式
├── index.ts                      # 主入口
└── package.json
```

## CSS 命名规范

### BEM 规则

```
Block__Element--Modifier
```

**示例：**

```css
/* Block */
.hdd-btn { }

/* Element */
.hdd-btn__icon { }
.hdd-btn__text { }

/* Modifier */
.hdd-btn--primary { }
.hdd-btn--sm { }
.hdd-btn--disabled { }
```

### 组件前缀

所有组件使用统一前缀 `hdd-`：

```css
.hdd-button { }
.hdd-layout { }
.hdd-divider { }
```

## Vue 组件规范

### 组件模板

```vue
<template>
  <div :class="componentClasses" :style="componentStyle" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'md'
})

const componentClasses = computed(() => [
  'hdd-component',
  `hdd-component--${props.type}`,
  `hdd-component--${props.size}`
])

const componentStyle = computed(() => ({
  // 动态样式
}))
</script>

<script lang="ts">
export default {
  name: 'HddComponent'
}
</script>
```

### Props 设计

1. **语义化命名**：使用描述性名称
   - ✅ `type`, `size`, `disabled`
   - ❌ `t`, `s`, `d`

2. **合理默认值**：符合大多数使用场景

3. **TypeScript 类型定义**

### 组件导出

```typescript
// packages/components/button/index.ts
export { default as HddButton } from './src/button.vue'

// packages/index.ts
import { HddButton } from './components/button'

const components = [HddButton]

const install = (app: App): void => {
  components.forEach((component) => {
    if (component && component.name) {
      app.component(component.name, component)
    }
  })
}
```

## CSS 变量规范

### 使用设计令牌

```css
/* 推荐 */
.hdd-btn {
  color: var(--hdd-color-dark-04);
  font-size: var(--hdd-font-size-sm);
  padding: var(--hdd-spacing-2) var(--hdd-spacing-4);
  border-radius: var(--hdd-radius-sm);
}

/* 不推荐 */
.hdd-btn {
  color: #333333;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
}
```

### 自定义属性传递

当需要通过 props 传递样式时，使用 CSS 变量：

```typescript
const style = computed(() => {
  const s: Record<string, string> = {}
  if (props.customColor) {
    s['--hdd-component-color'] = props.customColor
  }
  return s
})
```

```css
.hdd-component {
  color: var(--hdd-component-color, var(--hdd-color-dark-04));
}
```

## 状态样式顺序

```css
.hdd-component {
  /* 默认状态 */
  
  &:hover {
    /* 悬停状态 */
  }
  
  &:active,
  &:focus {
    /* 激活/焦点状态 */
  }
  
  &--disabled {
    /* 禁用状态 */
  }
}
```

## Demo 开发规范

### Demo 文件结构

```
playground/src/components/
├── button/
│   └── ButtonDemo.vue
├── divider/
│   └── DividerDemo.vue
└── Sidebar.vue
```

### Demo 组件模板

```vue
<template>
  <div class="demo-card">
    <h3>基础用法</h3>
    <div class="demo-description">简短说明</div>
    <!-- 演示代码 -->
  </div>
</template>

<script setup lang="ts">
import { Button } from 'hdd-ui-lib'
</script>

<style scoped>
.demo-description {
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-01);
}
</style>
```

## 质量检查清单

- [ ] 组件命名遵循 BEM 规范
- [ ] 所有颜色使用 CSS 变量
- [ ] 所有间距使用设计令牌
- [ ] Props 有合理的默认值
- [ ] 组件已正确导出
- [ ] 已添加 Demo 演示
- [ ] 组件支持 disabled 状态
- [ ] 样式无硬编码值

## 代码提交规范

### Commit 消息格式

```
<type>(<scope>): <description>
```

**类型：**
- `feat`: 新增功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（既不是新增功能，也不是修改 bug 的代码变动）
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例：**

```
feat(button): 添加 plain 和 text 变体
fix(divider): 修复垂直分割线样式
docs(button): 更新按钮组件文档
```

## 版本发布规范

### 版本号格式

```
主版本号.次版本号.修订号
```

- **主版本号**：不兼容的 API 更改
- **次版本号**：向后兼容的功能新增
- **修订号**：向后兼容的问题修正

**示例：**

- `1.0.0` - 首次发布
- `1.1.0` - 添加新组件
- `1.1.1` - 修复 bug
- `2.0.0` - 重大 API 变更
