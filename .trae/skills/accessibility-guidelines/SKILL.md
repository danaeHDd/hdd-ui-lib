---
name: "accessibility-guidelines"
description: "无障碍设计规范指南，确保组件符合 WCAG 2.0 AA 标准。涵盖颜色对比度、触摸目标、键盘导航、ARIA 属性等。适用于开发新组件或审查现有组件的可访问性时使用。"
---

# HDD UI 无障碍设计规范

本规范确保所有组件符合 WCAG 2.0 AA 标准，为所有用户提供可访问的界面。

## 1. 核心原则

### 1.1 可访问性四大原则（POUR）

| 原则 | 说明 | 实现方式 |
|------|------|----------|
| Perceivable（可感知） | 信息必须以用户能感知的方式呈现 | 颜色对比度、替代文本 |
| Operable（可操作） | 界面组件必须可操作 | 键盘导航、触摸目标 |
| Understandable（可理解） | 信息和操作必须可理解 | 一致性、明确反馈 |
| Robust（健壮） | 内容必须能被各种辅助技术解析 | 语义化 HTML、ARIA |

## 2. 颜色对比度

### 2.1 WCAG 2.0 AA 标准

| 文本类型 | 最小对比度 | 示例 |
|----------|------------|------|
| 普通文本（< 18px） | 4.5:1 | 14px 正文 |
| 普通文本（< 14px 加粗） | 4.5:1 | 13px 加粗 |
| 大文本（≥ 18px） | 3:1 | 18px 标题 |
| 大文本（≥ 14px 加粗） | 3:1 | 14px 加粗 |
| 图形和 UI 组件 | 3:1 | 图标、边框 |

### 2.2 HDD UI 颜色对比度检查

#### 主题色组合

| 前景色 | 背景色 | 用途 | 对比度 | 状态 |
|--------|--------|------|--------|------|
| `--hdd-color-primary-01` (#9E8A57) | `--hdd-color-white` (#fff) | 主按钮 | ~3.5:1 | ⚠️ 需注意 |
| `--hdd-color-white` | `--hdd-color-primary-01` | 按钮文字 | ~3.5:1 | ⚠️ 需注意 |
| `--hdd-color-dark-04` (#333) | `--hdd-color-white` | 正文文本 | ~12.6:1 | ✅ 通过 |
| `--hdd-color-neutral-01` (#666) | `--hdd-color-white` | 次要文本 | ~5.7:1 | ✅ 通过 |
| `--hdd-color-dark-03` (#C2C2C2) | `--hdd-color-white` | 禁用文本 | ~1.6:1 | ❌ 不通过 |

#### 解决方案

对于不通过的颜色组合：
- ✅ 主按钮文字：使用白色（4.5:1 是针对普通文本，按钮文字通常 14px 加粗，可接受 3:1）
- ✅ 禁用文本：使用 `--hdd-color-neutral-04` (#9E9E9E) 替代，对比度 ~3:1
- ✅ 主按钮背景：使用 `--hdd-color-primary-06` 加深版本，提高对比度

### 2.3 对比度检测工具

推荐工具：
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

### 2.4 对比度检查清单

```markdown
- [ ] 所有正文文本对比度 ≥ 4.5:1
- [ ] 所有大文本对比度 ≥ 3:1
- [ ] 所有 UI 组件（边框、图标）对比度 ≥ 3:1
- [ ] 不仅依赖颜色传达信息（使用图标、文字辅助）
```

## 3. 触摸目标

### 3.1 触摸目标尺寸

| 类型 | 尺寸 | 用途 | 变量 |
|------|------|------|------|
| 最小触摸目标 | 24x24px | 小型交互元素 | `--hdd-touch-target-min` |
| 推荐触摸目标 | 36x36px | 关键交互组件 | `--hdd-touch-target-recommend` |
| 大型触摸目标 | 48x48px | 移动端重要操作 | `--hdd-touch-target-large` |

### 3.2 触摸目标规范

- ✅ 关键交互组件（按钮、输入框）高度：≥ 36px
- ✅ 触摸目标宽度：≥ 24px
- ✅ 交互组件间最小间距：24px
- ⚠️ 当视觉组件 < 24px 时，通过 padding 扩展触摸区域到 24x24px

### 3.3 触摸目标实现

```css
.hdd-button {
  min-height: var(--hdd-touch-target-recommend); /* 36px */
  min-width: var(--hdd-touch-target-min);        /* 24px */
  padding: var(--hdd-spacing-2) var(--hdd-spacing-4);
}

/* 小型图标按钮 */
.hdd-icon-button {
  min-width: var(--hdd-touch-target-min);    /* 24px */
  min-height: var(--hdd-touch-target-min);   /* 24px */
  padding: var(--hdd-spacing-2);
}
```

### 3.4 触摸目标检查清单

```markdown
- [ ] 所有可点击元素 ≥ 24x24px
- [ ] 关键交互组件 ≥ 36x36px
- [ ] 交互组件间间距 ≥ 24px
- [ ] 小型元素通过 padding 扩展触摸区域
```

## 4. 键盘导航

### 4.1 键盘导航支持

所有交互组件必须支持键盘操作：

| 按键 | 功能 |
|------|------|
| Tab | 聚焦下一个可聚焦元素 |
| Shift + Tab | 聚焦上一个可聚焦元素 |
| Enter | 激活按钮、链接 |
| Space | 激活按钮、复选框 |
| Arrow Keys | 单选按钮、菜单导航 |
| Esc | 关闭弹窗、菜单 |

### 4.2 焦点管理

#### 焦点指示器

```css
/* 推荐：使用 :focus-visible */
.hdd-button:focus-visible {
  outline: 2px solid var(--hdd-color-primary-01);
  outline-offset: 2px;
}

/* 避免：使用 :focus（鼠标点击也会显示） */
.hdd-button:focus {
  outline: 2px solid var(--hdd-color-primary-01);
  outline-offset: 2px;
}
```

**为什么使用 `:focus-visible`？**
- `:focus`：所有元素聚焦时显示（包括鼠标点击）
- `:focus-visible`：仅键盘聚焦时显示（推荐，避免鼠标点击时的焦点环）

#### 焦点顺序

- ✅ 焦点顺序必须符合逻辑（从左到右、从上到下）
- ✅ 不要使用 `tabindex` 改变自然顺序（除非必要）
- ✅ 隐藏元素使用 `tabindex="-1"`

#### 焦点陷阱

弹窗/模态框需要焦点陷阱：
- ✅ 打开时聚焦第一个可聚焦元素
- ✅ Tab 键在弹窗内循环
- ✅ Esc 键关闭弹窗
- ✅ 关闭时返回触发元素

### 4.3 键盘导航检查清单

```markdown
- [ ] 所有交互组件可使用 Tab 键聚焦
- [ ] 焦点状态有明显的视觉提示
- [ ] 使用 :focus-visible 而非 :focus
- [ ] 焦点顺序符合逻辑
- [ ] 弹窗有焦点陷阱
- [ ] Esc 键可关闭弹窗
```

## 5. ARIA 属性

### 5.1 常用 ARIA 属性

| 属性 | 用途 | 示例 |
|------|------|------|
| `aria-label` | 提供元素的标签 | `<button aria-label="关闭">` |
| `aria-labelledby` | 引用其他元素作为标签 | `<div aria-labelledby="title">` |
| `aria-describedby` | 引用其他元素作为描述 | `<input aria-describedby="hint">` |
| `aria-disabled` | 标记元素为禁用 | `<button aria-disabled="true">` |
| `aria-busy` | 标记元素为加载中 | `<button aria-busy="true">` |
| `aria-hidden` | 隐藏元素 | `<span aria-hidden="true">` |
| `aria-expanded` | 标记可展开状态 | `<button aria-expanded="false">` |
| `aria-checked` | 标记选中状态 | `<input aria-checked="true">` |
| `aria-required` | 标记必填字段 | `<input aria-required="true">` |
| `aria-invalid` | 标记验证失败 | `<input aria-invalid="true">` |

### 5.2 语义化 HTML 优先

**重要**：优先使用语义化 HTML 元素，而不是 ARIA。

```html
<!-- ✅ 推荐：使用语义化元素 -->
<button>点击</button>
<a href="...">链接</a>
<input type="text">

<!-- ❌ 避免：用 div 模拟 -->
<div role="button" tabindex="0">点击</div>
<div role="link" tabindex="0">链接</div>
```

### 5.3 常见组件的 ARIA 使用

#### 按钮

```html
<!-- 普通按钮 -->
<button>点击</button>

<!-- 禁用按钮 -->
<button disabled>点击</button>

<!-- 加载中按钮 -->
<button aria-busy="true">
  <span>加载中...</span>
</button>

<!-- 图标按钮（必须有 aria-label） -->
<button aria-label="关闭">
  <span aria-hidden="true">×</span>
</button>
```

#### 链接

```html
<!-- 普通链接 -->
<a href="...">链接</a>

<!-- 新窗口打开 -->
<a href="..." target="_blank" aria-label="在新窗口打开">
  链接
</a>
```

#### 输入框

```html
<!-- 必填输入框 -->
<input type="text" required aria-required="true">

<!-- 验证失败 -->
<input type="text" aria-invalid="true" aria-describedby="error">

<!-- 带说明 -->
<label for="username">用户名</label>
<input id="username" type="text" aria-describedby="username-hint">
<span id="username-hint">请输入 3-20 个字符</span>
```

### 5.4 ARIA 检查清单

```markdown
- [ ] 优先使用语义化 HTML 元素
- [ ] 图标按钮使用 aria-label
- [ ] 表单元素有关联的 label
- [ ] 禁用状态使用 disabled 或 aria-disabled
- [ ] 加载状态使用 aria-busy
- [ ] 必填字段使用 required 或 aria-required
- [ ] 验证失败使用 aria-invalid
```

## 6. 语义化 HTML

### 6.1 元素选择指南

| 功能 | 推荐元素 | 避免 |
|------|----------|------|
| 按钮 | `<button>` | `<div>`, `<span>` |
| 链接 | `<a href="...">` | `<div>`, `<span>` |
| 文本输入 | `<input type="text">` | `<div contenteditable>` |
| 段落 | `<p>` | `<div>` |
| 标题 | `<h1>` - `<h6>` | `<div class="title">` |
| 列表 | `<ul>`, `<ol>`, `<li>` | `<div>` 列表 |
| 导航 | `<nav>` | `<div class="nav">` |
| 页眉 | `<header>` | `<div class="header">` |
| 页脚 | `<footer>` | `<div class="footer">` |
| 主要内容 | `<main>` | `<div class="main">` |

### 6.2 标题层级

```html
<!-- ✅ 正确的标题层级 -->
<h1>页面标题</h1>
  <h2>章节标题</h2>
    <h3>小节标题</h3>
  <h2>章节标题</h2>

<!-- ❌ 错误的标题层级 -->
<h1>页面标题</h1>
  <h3>小节标题</h3>  <!-- 跳过了 h2 -->
```

### 6.3 表单标签

```html
<!-- ✅ 推荐：使用 label 关联 -->
<label for="email">邮箱</label>
<input id="email" type="email">

<!-- ✅ 可接受：使用 aria-label -->
<input type="email" aria-label="邮箱">

<!-- ❌ 避免：没有标签 -->
<input type="email" placeholder="邮箱">  <!-- placeholder 不是标签 -->
```

## 7. 屏幕阅读器支持

### 7.1 替代文本

```html
<!-- 图片必须有 alt 属性 -->
<img src="logo.png" alt="HDD UI Logo">

<!-- 装饰性图片使用空 alt -->
<img src="decoration.png" alt="" role="presentation">

<!-- 图标使用 aria-label -->
<button aria-label="搜索">
  <span class="icon-search" aria-hidden="true"></span>
</button>
```

### 7.2 隐藏内容

```html
<!-- 视觉隐藏但屏幕阅读器可读 -->
<span class="sr-only">额外说明</span>

<!-- CSS -->
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
```

## 8. 动画和运动

### 8.1 减少动画

```css
/* 尊重用户的动画偏好 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 8.2 闪烁内容

- ❌ 避免每秒闪烁超过 3 次的内容
- ❌ 避免大面积闪烁
- ✅ 提供暂停/停止动画的选项

## 9. 测试工具

### 9.1 自动化测试

- [axe DevTools](https://www.deque.com/axe/devtools/) - 浏览器扩展
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Chrome DevTools
- [WAVE](https://wave.webaim.org/) - 网页无障碍评估

### 9.2 手动测试

- ✅ 仅使用键盘导航整个应用
- ✅ 使用屏幕阅读器测试（NVDA、VoiceOver、JAWS）
- ✅ 缩放至 200% 测试布局
- ✅ 关闭鼠标仅用键盘完成所有操作

## 10. 无障碍检查清单

### 10.1 视觉检查
- [ ] 颜色对比度符合 WCAG AA 标准
- [ ] 不仅依赖颜色传达信息
- [ ] 文本可缩放至 200% 不失功能

### 10.2 键盘检查
- [ ] 所有功能可通过键盘访问
- [ ] 焦点指示器明显
- [ ] 焦点顺序符合逻辑
- [ ] 弹窗有焦点陷阱

### 10.3 屏幕阅读器检查
- [ ] 所有图片有替代文本
- [ ] 表单元素有关联标签
- [ ] 标题层级正确
- [ ] ARIA 属性使用正确

### 10.4 交互检查
- [ ] 触摸目标 ≥ 24x24px
- [ ] 关键交互组件 ≥ 36x36px
- [ ] 错误信息清晰明确
- [ ] 提供撤销操作

### 10.5 动画检查
- [ ] 尊重 prefers-reduced-motion
- [ ] 没有过快闪烁
- [ ] 动画可暂停

## 11. 常见问题

### Q: 按钮颜色对比度只有 3.5:1，是否符合标准？

A: 按钮文字通常较大（14px+ 加粗），符合大文本标准（3:1）。但建议在重要按钮中使用更深的颜色变体。

### Q: 何时使用 aria-label vs 可见文本？

A:
- 优先使用可见文本作为标签
- 仅在按钮只有图标时使用 aria-label
- 避免重复：不要同时有可见文本和 aria-label

### Q: 禁用按钮如何使用 ARIA？

A:
```html
<!-- 推荐：使用 disabled 属性 -->
<button disabled>按钮</button>

<!-- 备选：使用 aria-disabled（保留可聚焦性） -->
<button aria-disabled="true">按钮</button>
```

### Q: 如何让 div 模拟的按钮可访问？

A: 不推荐这样做。应该使用真正的 `<button>` 元素。如果必须使用 div：

```html
<div role="button" tabindex="0" 
     onclick="..." 
     onkeydown="if(event.key==='Enter'||event.key===' ')...">
  按钮
</div>
```

### Q: 如何测试无障碍？

A: 推荐组合：
1. Lighthouse 自动测试
2. axe DevTools 浏览器扩展
3. 键盘手动测试
4. 屏幕阅读器测试（NVDA + Firefox）
