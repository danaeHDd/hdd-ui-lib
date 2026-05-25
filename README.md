# HDD UI

一个精美实用的 Vue3 组件库

## 特性

- 🎨 精美设计 - 精心设计的组件，注重细节和用户体验
- 🌙 主题定制 - 基于 CSS 变量，轻松实现主题切换和自定义
- 📦 按需导入 - 支持 Tree-shaking，按需加载减小体积
- 📝 TypeScript - 完整的 TypeScript 类型支持
- ⚡ Vue3 Composition API - 使用 Vue3 最新特性，性能优异
- 🎪 组件丰富 - 持续更新，提供更多实用组件

## 安装

```bash
npm install hdd-ui-lib
```

## 快速使用

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import HDDUI from 'hdd-ui-lib'
import 'hdd-ui-lib/dist/hdd-ui-lib.css'

const app = createApp(App)
app.use(HDDUI)
app.mount('#app')
```

## 开发指南

### 本地开发

```bash
# 安装依赖
npm install

# 启动 Playground 开发环境
npm run dev

# 启动文档开发
npm run docs:dev

# 构建组件库
npm run build

# 构建文档
npm run docs:build
```

### 项目结构

```
hdd-ui-lib/
├── packages/              # 组件库源码
│   ├── components/        # 组件
│   │   └── button/
│   ├── theme/             # 主题样式
│   └── index.ts           # 入口文件
├── playground/            # 本地开发演示
├── docs/                  # VitePress 文档
│   ├── .vitepress/
│   ├── guide/
│   └── components/
├── package.json
└── vite.config.ts
```

## 许可证

MIT
