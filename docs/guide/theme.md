# 主题定制

HDD UI 基于 CSS 变量（设计令牌）实现主题定制，您可以轻松地自定义主题色、字体、间距等。

## 设计令牌概览

### 颜色系统

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `--hdd-color-primary` | 主题色 | `#9E8A57` |
| `--hdd-color-success` | 成功色 | `#4CAF50` |
| `--hdd-color-warning` | 警告色 | `#FFA826` |
| `--hdd-color-danger` | 危险色 | `#FF0000` |
| `--hdd-color-info` | 信息色 | `#2196F3` |

### 文本颜色

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `--hdd-color-dark-04` | 正文文本 | `#333333` |
| `--hdd-color-neutral-01` | 次要文本 | `#666666` |
| `--hdd-color-dark-03` | 禁用状态 | `#C2C2C2` |

### 边框颜色

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `--hdd-border-color-default` | 默认边框 | `#EBEBEB` |
| `--hdd-border-color-divider` | 分割线 | `#C2C2C2` |

## 修改主题色

### 方式一：全局覆盖

在您的 CSS 文件中添加：

```css
:root {
  /* 自定义主题色 */
  --hdd-color-primary: #6B8E23;
  
  /* 自定义语义色 */
  --hdd-color-success: #28A745;
  --hdd-color-warning: #FFC107;
  
  /* 自定义文本颜色 */
  --hdd-color-dark-04: #222222;
}
```

### 方式二：局部覆盖

在特定组件或容器内覆盖：

```vue
<template>
  <div class="custom-theme">
    <hdd-button type="primary">自定义主题</hdd-button>
    <hdd-divider />
  </div>
</template>

<style scoped>
.custom-theme {
  --hdd-color-primary: #1890ff;
  --hdd-border-color-divider: #E0E0E0;
}
</style>
```

### 方式三：JS 动态切换

```javascript
// 切换到深色主题
document.documentElement.style.setProperty('--hdd-color-primary', '#1890ff')
document.documentElement.style.setProperty('--hdd-color-dark-04', '#FFFFFF')
document.documentElement.style.setProperty('--hdd-color-neutral-01', '#CCCCCC')
```

## 完整主题配置示例

```css
/* 企业蓝主题 */
:root {
  /* 主题色 */
  --hdd-color-primary: #1890ff;
  --hdd-color-primary-02: #40a9ff;
  --hdd-color-primary-03: #91caff;
  --hdd-color-primary-04: #bfdbfe;
  --hdd-color-primary-05: #e6f7ff;
  
  /* 语义色 */
  --hdd-color-success: #52c41a;
  --hdd-color-warning: #faad14;
  --hdd-color-danger: #f5222d;
  --hdd-color-info: #1890ff;
  
  /* 文本颜色 */
  --hdd-color-dark-04: #1f1f1f;
  --hdd-color-neutral-01: #666666;
  --hdd-color-dark-03: #bfbfbf;
  
  /* 边框颜色 */
  --hdd-border-color-default: #d9d9d9;
  --hdd-border-color-divider: #f0f0f0;
  
  /* 圆角 */
  --hdd-radius-md: 8px;
  --hdd-radius-lg: 12px;
}
```

## 主题切换示例

```vue
<template>
  <div>
    <hdd-button @click="switchTheme('light')">浅色主题</hdd-button>
    <hdd-button @click="switchTheme('dark')">深色主题</hdd-button>
    <hdd-button @click="switchTheme('corporate')">企业主题</hdd-button>
  </div>
</template>

<script setup>
const themes = {
  light: {
    '--hdd-color-primary': '#9E8A57',
    '--hdd-color-dark-04': '#333333',
    '--hdd-border-color-divider': '#C2C2C2'
  },
  dark: {
    '--hdd-color-primary': '#BBAD89',
    '--hdd-color-dark-04': '#FFFFFF',
    '--hdd-border-color-divider': '#444444'
  },
  corporate: {
    '--hdd-color-primary': '#1890ff',
    '--hdd-color-dark-04': '#1f1f1f',
    '--hdd-border-color-divider': '#d9d9d9'
  }
}

const switchTheme = (themeName) => {
  const theme = themes[themeName]
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}
</script>
```

## 注意事项

1. **CSS 变量优先级**：局部定义的变量会覆盖全局变量
2. **性能考虑**：大量动态切换主题可能影响性能，建议使用 CSS 类切换
3. **兼容性**：CSS 变量在现代浏览器中均支持，如需兼容旧浏览器需使用预处理器

## 完整变量列表

请参考 [设计令牌](/guide/design-tokens) 文档查看完整的 CSS 变量列表。
