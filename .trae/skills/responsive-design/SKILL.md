---
name: "responsive-design"
description: "响应式设计规范指南，涵盖断点系统、布局网格、移动优先原则、媒体查询最佳实践。适用于开发需要适配多设备的组件或页面时使用。"
---

# HDD UI 响应式设计规范

本规范确保组件和页面能在不同设备、不同屏幕尺寸下提供优秀的用户体验。

## 1. 核心原则

### 1.1 移动优先（Mobile First）

**为什么移动优先？**
- ✅ 移动设备使用场景复杂（网络、屏幕、性能限制）
- ✅ 先解决核心功能，再为大屏增强
- ✅ 渐进增强（Progressive Enhancement）

**实施方式：**
- ✅ 默认样式针对移动端
- ✅ 使用 `min-width` 媒体查询
- ❌ 避免使用 `max-width`（桌面优先）

### 1.2 响应式 vs 自适应

| 方式 | 特点 | 推荐度 |
|------|------|--------|
| 响应式 | 流式布局，元素随屏幕变化 | ✅ 推荐 |
| 自适应 | 固定断点，不同布局 | ⚠️ 部分场景 |

## 2. 断点系统

### 2.1 断点定义

| 断点 | 设备 | 视口宽度 | 布局列数 |
|------|------|----------|----------|
| mobile | 手机 | 375-767px | 4 列 |
| mobile-landscape | 手机横屏 | 480-767px | 4 列 |
| tablet-portrait | 平板竖屏 | 768-1023px | 6 列 |
| tablet-landscape | 平板横屏 | 1024-1279px | 8 列 |
| desktop | 桌面 | 1280-1439px | 10 列 |
| desktop-xl | 大屏 | 1440px+ | 12 列 |

### 2.2 断点 CSS 变量

```css
--hdd-breakpoint-mobile: 375px;
--hdd-breakpoint-mobile-landscape: 480px;
--hdd-breakpoint-tablet: 768px;
--hdd-breakpoint-desktop: 1024px;
--hdd-breakpoint-desktop-lg: 1280px;
--hdd-breakpoint-desktop-xl: 1440px;
```

### 2.3 断点使用规范

- ✅ 使用 `min-width`（移动优先）
- ✅ 避免过多断点（4-5 个足够）
- ✅ 断点值应该反映真实设备
- ❌ 避免为每个像素都设断点

## 3. 布局网格

### 3.1 网格三要素

响应式布局网格由三部分组成：
- **Columns（列）**：内容区域
- **Gutters（间距）**：列之间的间距
- **Margins（边距）**：内容与屏幕边缘的距离

### 3.2 Margin 和 Gutter 规范

| 断点 | Margin | Gutter |
|------|--------|--------|
| mobile | 16px | 12px |
| tablet-portrait | 24px | 20px |
| tablet-landscape | 24px | 20px |
| desktop | 24px | 20px |
| desktop-xl | 24px | 20px |

### 3.3 网格列数

| 断点 | 列数 |
|------|------|
| mobile | 4 |
| mobile-landscape | 4 |
| tablet-portrait | 6 |
| tablet-landscape | 8 |
| desktop | 10 |
| desktop-xl | 12 |

### 3.4 列宽计算

```css
/* Mobile (375px) */
--hdd-grid-columns: 4;
--hdd-grid-margin: 16px;
--hdd-grid-gutter: 12px;
/* 可用宽度: 375 - 16*2 = 343px */
/* 列宽: (343 - 12*3) / 4 = 76.75px */

/* Desktop (1280px) */
--hdd-grid-columns: 10;
--hdd-grid-margin: 24px;
--hdd-grid-gutter: 20px;
/* 可用宽度: 1280 - 24*2 = 1232px */
/* 列宽: (1232 - 20*9) / 10 = 105.2px */
```

## 4. 媒体查询使用

### 4.1 基本语法

```css
/* 移动优先：默认样式为移动端 */
.hdd-component {
  padding: var(--hdd-spacing-3);  /* 12px */
  font-size: var(--hdd-font-size-sm);
}

/* 平板及以上 (≥ 768px) */
@media (min-width: 768px) {
  .hdd-component {
    padding: var(--hdd-spacing-4);  /* 16px */
    font-size: var(--hdd-font-size-base);
  }
}

/* 桌面及以上 (≥ 1024px) */
@media (min-width: 1024px) {
  .hdd-component {
    padding: var(--hdd-spacing-5);  /* 20px */
  }
}

/* 大屏 (≥ 1440px) */
@media (min-width: 1440px) {
  .hdd-component {
    padding: var(--hdd-spacing-6);  /* 24px */
  }
}
```

### 4.2 媒体查询断点

```css
/* 常用断点 */
@media (min-width: 480px)  { /* mobile-landscape */ }
@media (min-width: 768px)  { /* tablet-portrait */ }
@media (min-width: 1024px) { /* tablet-landscape */ }
@media (min-width: 1280px) { /* desktop */ }
@media (min-width: 1440px) { /* desktop-xl */ }
```

### 4.3 媒体查询最佳实践

- ✅ 使用 `min-width`（移动优先）
- ✅ 断点值使用设计令牌
- ✅ 按需使用媒体查询，不过度使用
- ❌ 避免在媒体查询中重写大量样式

## 5. 响应式组件设计

### 5.1 组件响应式策略

| 策略 | 说明 | 适用场景 |
|------|------|----------|
| 流式布局 | 宽度按比例变化 | 容器、卡片 |
| 断点切换 | 不同断点不同布局 | 导航、表格 |
| 隐藏/显示 | 小屏隐藏，大屏显示 | 侧边栏 |
| 缩放 | 整体缩放 | 图标、装饰 |

### 5.2 容器响应式

```css
.hdd-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 var(--hdd-spacing-4);  /* 16px */
}

@media (min-width: 768px) {
  .hdd-container {
    padding: 0 var(--hdd-spacing-6);  /* 24px */
  }
}

@media (min-width: 1024px) {
  .hdd-container {
    max-width: 1200px;
  }
}

@media (min-width: 1440px) {
  .hdd-container {
    max-width: 1320px;
  }
}
```

### 5.3 按钮响应式

```css
.hdd-button {
  min-height: 36px;
  padding: 8px 12px;
  font-size: 14px;
}

/* 平板及以上 */
@media (min-width: 768px) {
  .hdd-button {
    min-height: 36px;  /* 保持触摸目标 */
    padding: 8px 16px;
  }
}
```

### 5.4 文字响应式

```css
.hdd-text {
  font-size: var(--hdd-font-size-sm);  /* 14px - 移动端 */
}

@media (min-width: 768px) {
  .hdd-text {
    font-size: var(--hdd-font-size-base);  /* 16px - 平板+ */
  }
}

@media (min-width: 1024px) {
  .hdd-text {
    font-size: var(--hdd-font-size-lg);  /* 18px - 桌面+ */
  }
}
```

## 6. 触摸目标响应式

### 6.1 触摸目标尺寸

| 设备 | 最小触摸目标 | 推荐触摸目标 |
|------|--------------|--------------|
| 移动端 | 44x44px (iOS) | 48x48px |
| 移动端 | 48x48px (Android) | 48x48px |
| 桌面端 | 24x24px | 36x36px |

### 6.2 触摸目标实现

```css
/* 移动端：更大的触摸目标 */
.hdd-button {
  min-height: 44px;
  min-width: 44px;
}

/* 桌面端：可以更小 */
@media (min-width: 1024px) {
  .hdd-button {
    min-height: 36px;
  }
}
```

## 7. 导航响应式

### 7.1 导航模式

| 设备 | 推荐模式 |
|------|----------|
| 移动端 | 底部 Tab Bar / 汉堡菜单 |
| 平板 | 侧边栏 / 顶部导航 |
| 桌面 | 顶部导航 / 侧边栏 |

### 7.2 汉堡菜单

```css
.hdd-nav-mobile {
  display: block;  /* 移动端显示 */
}

.hdd-nav-desktop {
  display: none;   /* 移动端隐藏 */
}

@media (min-width: 1024px) {
  .hdd-nav-mobile {
    display: none;  /* 桌面端隐藏 */
  }
  
  .hdd-nav-desktop {
    display: block; /* 桌面端显示 */
  }
}
```

## 8. 表格响应式

### 8.1 表格响应式策略

| 策略 | 适用场景 |
|------|----------|
| 横向滚动 | 简单表格 |
| 卡片布局 | 复杂表格（移动端） |
| 隐藏列 | 次要列 |
| 堆叠布局 | 移动端专用 |

### 8.2 表格实现

```css
.hdd-table {
  width: 100%;
  overflow-x: auto;  /* 移动端横向滚动 */
}

@media (min-width: 768px) {
  .hdd-table {
    overflow-x: visible;  /* 桌面端正常显示 */
  }
}
```

## 9. 图片响应式

### 9.1 响应式图片

```html
<!-- 使用 srcset -->
<img 
  src="image-1x.jpg"
  srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
  alt="描述"
/>

<!-- 使用 picture 元素 -->
<picture>
  <source media="(min-width: 1024px)" srcset="desktop.jpg">
  <source media="(min-width: 768px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="描述">
</picture>
```

### 9.2 图片尺寸

```css
.hdd-image {
  max-width: 100%;
  height: auto;
}
```

## 10. 字体响应式

### 10.1 流式字体

```css
/* 使用 clamp() 实现流式字体 */
.hdd-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  /* 最小 24px, 最大 40px, 中间按视口宽度缩放 */
}
```

### 10.2 断点字体

```css
.hdd-text {
  font-size: 14px;  /* 移动端 */
}

@media (min-width: 768px) {
  .hdd-text {
    font-size: 16px;  /* 平板+ */
  }
}
```

## 11. 性能优化

### 11.1 移动端性能

- ✅ 图片懒加载
- ✅ CSS 压缩
- ✅ 减少 HTTP 请求
- ✅ 使用 CSS Sprites
- ✅ 字体子集化

### 11.2 媒体查询性能

- ✅ 合并媒体查询
- ✅ 避免重复样式
- ✅ 使用 CSS 变量
- ❌ 避免深层嵌套

## 12. 响应式测试

### 12.1 测试设备

| 设备 | 视口尺寸 |
|------|----------|
| iPhone SE | 375x667 |
| iPhone 12 | 390x844 |
| iPad | 768x1024 |
| iPad Pro | 1024x1366 |
| Desktop | 1280x800 |
| Desktop HD | 1920x1080 |

### 12.2 测试工具

- Chrome DevTools 设备模拟
- [Responsively](https://responsively.app/)
- [BrowserStack](https://www.browserstack.com/)
- [Polypane](https://polypane.app/)

### 12.3 测试清单

```markdown
- [ ] 移动端 (375px) 布局正常
- [ ] 平板竖屏 (768px) 布局正常
- [ ] 平板横屏 (1024px) 布局正常
- [ ] 桌面 (1280px) 布局正常
- [ ] 大屏 (1440px) 布局正常
- [ ] 触摸目标在所有设备上都满足最小尺寸
- [ ] 文字可读，不需要横向滚动
- [ ] 图片适配，不会失真
- [ ] 导航在所有设备上可用
```

## 13. 常见问题

### Q: 何时使用 rem vs px？

A:
- 间距、字体大小：使用 rem（支持用户缩放）
- 边框宽度、阴影：使用 px（保持固定粗细）
- 触摸目标：使用 rem 或 px 都可

### Q: 如何处理超小屏幕（< 375px）？

A:
- ✅ 使用 min-width 媒体查询
- ✅ 布局自适应
- ✅ 关键内容优先显示
- ⚠️ 320px 是 iPhone 5 等老设备的最小尺寸

### Q: 何时使用 max-width？

A: 极少数情况下：
- 处理老旧浏览器的兼容性问题
- 特定的设计需求

### Q: 如何测试响应式？

A: 推荐组合：
1. Chrome DevTools 设备模拟（快速验证）
2. 真实设备测试（最终验证）
3. 自动化测试（回归测试）

### Q: 移动端和桌面端需要不同布局吗？

A: 取决于内容复杂度：
- 简单内容：响应式布局即可
- 复杂内容：考虑不同布局（如表格 → 卡片）
