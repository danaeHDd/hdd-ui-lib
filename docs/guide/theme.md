# 主题定制

HDD UI 基于 CSS 变量实现主题定制，您可以轻松地自定义主题色。

## CSS 变量列表

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| --hdd-btn-primary | 主要按钮背景色 | #9E8A57 |
| --hdd-btn-primary-hover | 主要按钮悬停色 | #BBAD89 |
| --hdd-btn-primary-active | 主要按钮激活色 | #796C4A |
| --hdd-btn-success | 成功按钮背景色 | #4caf50 |
| --hdd-btn-warning | 警告按钮背景色 | #FFA826 |
| --hdd-btn-danger | 危险按钮背景色 | #FF0000 |

## 修改主题色

### 方式一：全局覆盖

```css
:root {
  --hdd-btn-primary: #1890ff;
  --hdd-btn-primary-hover: #40a9ff;
  --hdd-btn-primary-active: #096dd9;
}
```

### 方式二：局部覆盖

```vue
<template>
  <div class="custom-theme">
    <hdd-button type="primary">自定义主题</hdd-button>
  </div>
</template>

<style scoped>
.custom-theme {
  --hdd-btn-primary: #1890ff;
  --hdd-btn-primary-hover: #40a9ff;
}
</style>
```

### 方式三：JS 动态切换

```javascript
// 切换到蓝色主题
document.documentElement.style.setProperty('--hdd-btn-primary', '#1890ff')
document.documentElement.style.setProperty('--hdd-btn-primary-hover', '#40a9ff')
document.documentElement.style.setProperty('--hdd-btn-primary-active', '#096dd9')
```
