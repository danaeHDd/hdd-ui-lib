# 快速使用

## 完整引入

在 main.ts 中完整引入组件库：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import HDDUI from 'hdd-ui-lib'
import 'hdd-ui-lib/dist/hdd-ui-lib.css'

const app = createApp(App)
app.use(HDDUI)
app.mount('#app')
```

## 按需引入

在需要的地方引入单个组件：

```vue
<script setup>
import { HddButton } from 'hdd-ui-lib'
</script>

<template>
  <hdd-button type="primary">主要按钮</hdd-button>
</template>
```
