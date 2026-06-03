---
name: "design-system-spec"
description: "UI/UX设计规范开发指导，将Figma设计规范转化为代码实现指南。适用于根据设计图开发组件库或实现页面时确保设计还原度。"
---

# HDD UI 设计规范开发指导

本指导文档基于 UI/UX 团队的 Figma 设计规范制定，确保前端实现与设计稿保持高度一致。

## 1. 颜色系统

### 1.1 主题色

| 色值 | 变量名 | 用途 |
|------|--------|------|
| `#9E8A57` | `--hdd-color-primary-01` | 品牌主色、主要按钮、强调元素 |
| `color-mix(70%)` | `--hdd-color-primary-02` | hover 状态 |
| `color-mix(50%)` | `--hdd-color-primary-03` | 次要强调 |
| `color-mix(30%)` | `--hdd-color-primary-04` | 边框、分割线 |
| `color-mix(10%)` | `--hdd-color-primary-05` | 背景色、高亮区域 |
| `color-mix(dark)` | `--hdd-color-primary-06` | 文字、深色强调 |

### 1.2 语义色

| 类型 | 色值 | 变量名 | 用途 |
|------|------|--------|------|
| Success | `#4CAF50` | `--hdd-color-success-01` | 成功状态、完成提示 |
| Warning | `#FFA826` | `--hdd-color-warning-01` | 警告提示、待处理 |
| Danger | `#FF0000` | `--hdd-color-danger-01` | 错误状态、删除操作 |
| Info | `#2196F3` | `--hdd-color-info-01` | 信息提示、帮助说明 |

### 1.3 深色系（文本/边框）

| 色值 | 变量名 | 用途 |
|------|--------|------|
| `#333333` | `--hdd-color-dark-04` | 正文文本、标题 |
| `#666666` | `--hdd-color-neutral-01` | 次要文本、说明文字 |
| `#C2C2C2` | `--hdd-color-dark-03` | 禁用状态、分割线、placeholder |
| `#D4D4D4` | `--hdd-color-dark-02` | 边框、占位符 |
| `#EBEBEB` | `--hdd-color-dark-01` | 背景色 |

### 1.4 颜色使用规范

| 场景 | 推荐颜色 |
|------|----------|
| 页面背景 | `--hdd-color-white` 或 `--hdd-color-neutral-05` |
| 卡片背景 | `--hdd-color-white` |
| 正文文本 | `--hdd-color-dark-04` |
| 次要文本 | `--hdd-color-neutral-01` |
| 禁用文本 | `--hdd-color-dark-03` |
| 边框颜色 | `--hdd-border-color-default` |
| 分割线颜色 | `--hdd-border-color-divider` |

### 1.5 颜色对比度（无障碍）

遵循 WCAG 2.0 AA 标准：
- ✅ 普通文本对比度：≥ 4.5:1
- ✅ 大文本（>24px）对比度：≥ 3:1
- 推荐检测工具：https://coolors.co/contrast-checker

## 2. 字体系统

### 2.1 字体家族

```css
--hdd-font-family-sans: 'Noto Sans SC', 'Noto Sans TC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--hdd-font-family-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
--hdd-font-family-icon: 'Material Icons', 'iconfont', sans-serif;
```

### 2.2 字体大小（单位：rem）

| 变量名 | 像素值 | 用途 |
|--------|--------|------|
| `--hdd-font-size-xs` | 12px | 辅助文本、标签（最小字号） |
| `--hdd-font-size-sm` | 14px | 次要文本、按钮文字 |
| `--hdd-font-size-base` | 16px | 正文、默认字体 |
| `--hdd-font-size-lg` | 18px | 强调文本、小标题 |
| `--hdd-font-size-xl` | 20px | 标题、重要内容 |
| `--hdd-font-size-2xl` | 24px | 大标题 |
| `--hdd-font-size-3xl` | 28px | 页面主标题 |

**重要规范**：
- ✅ 最小字号：12px（保证可读性）
- ✅ 正文字号：14-16px
- ✅ 行高：1.5x 字号
- ✅ 段落间距：至少 1x 行高

### 2.3 字体粗细

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--hdd-font-weight-normal` | 400 | 正文文本 |
| `--hdd-font-weight-medium` | 500 | 按钮、强调文字 |
| `--hdd-font-weight-semibold` | 600 | 标题 |

### 2.4 行高

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--hdd-line-height-tight` | 1.25 | 紧凑布局、标题 |
| `--hdd-line-height-normal` | 1.5 | 正文、按钮（推荐） |
| `--hdd-line-height-relaxed` | 1.75 | 长文本、段落 |

## 3. 间距系统

### 3.1 基础间距单位

```css
--hdd-spacing-unit: 0.25rem;  /* 4px */
```

### 3.2 间距尺度（单位：rem）

| 变量名 | 像素值 | 用途 |
|--------|--------|------|
| `--hdd-spacing-1` | 4px | 小间距、内边距 |
| `--hdd-spacing-2` | 8px | 较小间距 |
| `--hdd-spacing-3` | 12px | 中等间距 |
| `--hdd-spacing-4` | 16px | 标准间距、卡片内边距 |
| `--hdd-spacing-5` | 20px | 较大间距 |
| `--hdd-spacing-6` | 24px | 大间距、触摸间距 |
| `--hdd-spacing-8` | 32px | 更大间距 |

### 3.3 间距使用规范

| 场景 | 推荐间距 |
|------|----------|
| 组件内元素间距 | `--hdd-spacing-2` ~ `--hdd-spacing-4` |
| 卡片内边距 | `--hdd-spacing-4` |
| 模块间距 | `--hdd-spacing-6` ~ `--hdd-spacing-8` |
| 页面边距 | `--hdd-spacing-6` |
| 交互组件间距 | ≥ `--hdd-spacing-6` (24px) |

## 4. 圆角系统

### 4.1 圆角大小（单位：rem）

| 变量名 | 像素值 | 用途 |
|--------|--------|------|
| `--hdd-radius-none` | 0 | 直角 |
| `--hdd-radius-sm` | 4px | 小按钮、输入框（关键交互组件） |
| `--hdd-radius-md` | 8px | 卡片、弹窗 |
| `--hdd-radius-lg` | 12px | 模态框、大卡片 |
| `--hdd-radius-full` | 9999px | 圆形按钮 |

### 4.2 圆角使用规范

| 组件类型 | 推荐圆角 |
|----------|----------|
| 按钮 | `--hdd-radius-sm` (4px) |
| 输入框 | `--hdd-radius-sm` (4px) |
| 卡片 | `--hdd-radius-md` (8px) |
| 弹窗/模态框 | `--hdd-radius-lg` (12px) |
| 圆形头像 | `--hdd-radius-full` |

## 5. 阴影系统

### 5.1 阴影层级

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--hdd-shadow-none` | none | 无阴影 |
| `--hdd-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | 轻微悬浮 |
| `--hdd-shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | 卡片、下拉 |
| `--hdd-shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | 弹窗、模态框 |

### 5.2 阴影使用规范

| 组件类型 | 推荐阴影 |
|----------|----------|
| 普通按钮 | `--hdd-shadow-none` |
| hover 状态 | `--hdd-shadow-sm` |
| 卡片 | `--hdd-shadow-md` |
| 弹窗 | `--hdd-shadow-lg` |

## 6. 边框系统

### 6.1 边框宽度

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--hdd-border-width-sm` | 1px | 默认边框 |
| `--hdd-border-width-md` | 2px | 强调边框 |

### 6.2 边框颜色

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--hdd-border-color-default` | `--hdd-color-neutral-04` | 默认边框 |
| `--hdd-border-color-hover` | `--hdd-color-neutral-03` | hover 状态 |
| `--hdd-border-color-active` | `--hdd-color-primary-01` | 激活状态 |
| `--hdd-border-color-disabled` | `--hdd-color-neutral-05` | 禁用状态 |
| `--hdd-border-color-divider` | `--hdd-color-dark-03` | 分割线 |

### 6.3 边框使用规范

| 场景 | 推荐样式 |
|------|----------|
| 输入框 | `1px solid var(--hdd-border-color-default)` |
| 卡片边框 | `1px solid var(--hdd-border-color-default)` |
| 分割线 | `1px solid var(--hdd-border-color-divider)` |

## 7. 组件设计规范

### 7.1 按钮组件

#### 尺寸规范（保留现有设计）

| 尺寸 | 高度 | 字体大小 | 内边距 |
|------|------|----------|--------|
| sm | 36px | 14px | 8px 12px |
| md | 46px | 20px | 8px 12px |
| lg | 58px | 28px | 8px 12px |

#### 圆角规范
- ✅ 按钮统一使用：`--hdd-radius-sm` (4px)

#### 状态样式

| 状态 | 背景色 | 文字色 | 边框色 |
|------|--------|--------|--------|
| 默认 | 主题色 | 白色 | 主题色 |
| hover | 浅色阶 | 白色 | 浅色阶 |
| active | 深色阶 | 白色 | 深色阶 |
| disabled | 浅灰色 | 白色 | 浅灰色 |

#### 触摸目标
- ✅ 最小触摸区域：24x24px
- ✅ 关键交互组件高度：36px
- ✅ 按钮间距：≥ 24px

### 7.2 输入框组件

#### 尺寸规范

| 尺寸 | 高度 | 字体大小 | 内边距 |
|------|------|----------|--------|
| sm | 36px | 14px | 0 12px |
| md | 44px | 16px | 0 16px |
| lg | 52px | 18px | 0 20px |

#### 圆角规范
- ✅ 输入框统一使用：`--hdd-radius-sm` (4px)

#### 状态样式

| 状态 | 边框色 | 背景色 |
|------|--------|--------|
| 默认 | `--hdd-border-color-default` | 白色 |
| focus | `--hdd-color-primary-01` | 白色 |
| disabled | `--hdd-border-color-disabled` | `--hdd-color-neutral-05` |
| error | `--hdd-color-danger-01` | 白色 |

### 7.3 卡片组件

#### 布局规范

| 属性 | 值 |
|------|----|
| 圆角 | `--hdd-radius-md` (8px) |
| 阴影 | `--hdd-shadow-md` |
| 内边距 | `--hdd-spacing-4` (16px) |
| 边框 | `1px solid var(--hdd-border-color-default)` |

### 7.4 分割线组件

#### 样式规范

| 属性 | 值 |
|------|----|
| 高度 | 1px |
| 颜色 | `--hdd-border-color-divider` |
| 间距 | `--hdd-spacing-4` |

## 8. 图标使用规范

### 8.1 图标库

- ✅ 使用 **Material Icons Font** 作为标准图标库
- ✅ 字体族：`--hdd-font-family-icon`
- ✅ 可自托管 Material Icons 字体
- 参考：https://fonts.google.com/icons

### 8.2 图标尺寸

基于 **Keyline Grid** 设计：
- @1x = 24px
- @4x = 96px

常用尺寸：
- 16px（小图标）
- 20px（标准图标，推荐）
- 24px（默认）
- 32px（大图标）

### 8.3 图标与文字搭配

当图标与文字相邻或在按钮内时，**图标尺寸应与文字高度相近**：

| 图标尺寸 | 文字尺寸 | 场景 |
|----------|----------|------|
| 20px | 14px | 按钮、标签 |
| 20px | 20px | 标题、强调内容 |
| 24px | 16px | 列表项 |
| 32px | 24px | 大按钮、卡片标题 |

### 8.4 图标使用规范

- ✅ 图标颜色：使用 `currentColor` 继承父元素颜色
- ✅ 图标基线：与文字基线对齐
- ✅ 图标间距：与文字间距 ≥ 4px
- ✅ 自定义图标：遵循 Material Design Keyline 规范
- 参考：https://m2.material.io/design/iconography/product-icons.html

### 8.5 图标 CSS 变量

```css
--hdd-icon-size-sm: 1rem;    /* 16px */
--hdd-icon-size-md: 1.25rem; /* 20px */
--hdd-icon-size-lg: 1.5rem;  /* 24px */
--hdd-icon-size-xl: 2rem;    /* 32px */
```

## 9. 触摸目标规范

### 9.1 标准尺寸

| 类型 | 尺寸 | 用途 |
|------|------|------|
| 最小触摸目标 | 24x24px | 小型交互元素 |
| 推荐触摸目标 | 36x36px | 关键交互组件 |
| 大型触摸目标 | 48x48px | 移动端重要操作 |

### 9.2 触摸目标变量

```css
--hdd-touch-target-min: 1.5rem;      /* 24px - 最小 */
--hdd-touch-target-recommend: 2.25rem; /* 36px - 推荐 */
--hdd-touch-target-large: 3rem;       /* 48px - 大型 */
```

### 9.3 触摸目标使用规范

- ✅ 关键交互组件（按钮、输入框）：36px 高度
- ✅ 组件间最小间距：24px
- ✅ 当组件 < 24px 时，触摸区域必须保持 24x24px
- ✅ 实现方式：可通过 padding 扩展触摸区域

## 10. 断点系统

### 10.1 断点定义

| 断点 | 设备 | 视口宽度 | 布局列数 |
|------|------|----------|----------|
| mobile | 手机 | 375-767px | 4 列 |
| mobile-landscape | 手机横屏 | 480-767px | 4 列 |
| tablet-portrait | 平板竖屏 | 768-1023px | 6 列 |
| tablet-landscape | 平板横屏 | 1024-1279px | 8 列 |
| desktop | 桌面 | 1280-1439px | 10 列 |
| desktop-xl | 大屏 | 1440px+ | 12 列 |

### 10.2 断点变量

```css
--hdd-breakpoint-mobile: 375px;
--hdd-breakpoint-mobile-landscape: 480px;
--hdd-breakpoint-tablet: 768px;
--hdd-breakpoint-desktop: 1024px;
--hdd-breakpoint-desktop-lg: 1280px;
--hdd-breakpoint-desktop-xl: 1440px;
```

## 11. 开发检查清单

### 11.1 颜色检查
- [ ] 所有颜色使用 CSS 变量
- [ ] 无硬编码颜色值
- [ ] 文本颜色符合规范
- [ ] 颜色对比度符合 WCAG AA 标准

### 11.2 间距检查
- [ ] 使用设计令牌中的间距变量
- [ ] 无硬编码间距值
- [ ] 组件间距符合规范
- [ ] 交互组件间距 ≥ 24px

### 11.3 字体检查
- [ ] 字体大小使用设计令牌
- [ ] 字体粗细符合规范
- [ ] 行高设置正确（1.5x）
- [ ] 最小字号 ≥ 12px

### 11.4 视觉检查
- [ ] 圆角符合规范
- [ ] 阴影层级正确
- [ ] 边框样式统一
- [ ] 触摸目标 ≥ 24x24px

### 11.5 状态检查
- [ ] hover 状态正确
- [ ] active 状态正确
- [ ] disabled 状态正确
- [ ] focus 状态有明显的视觉提示

### 11.6 响应式检查
- [ ] 移动端布局正常（375px）
- [ ] 平板端布局正常（768px）
- [ ] 桌面端布局正常（1280px）

## 12. 设计还原度标准

### 12.1 像素级还原

| 元素类型 | 误差允许范围 |
|----------|--------------|
| 尺寸 | ±1px |
| 间距 | ±2px |
| 颜色 | 完全一致 |
| 圆角 | ±1px |

### 12.2 响应式适配

- [ ] 移动端适配
- [ ] 平板端适配
- [ ] 桌面端适配

### 12.3 交互效果

- [ ] 过渡动画流畅
- [ ] 状态反馈及时
- [ ] 焦点样式正确

## 附录：设计令牌速查表

| 类别 | 常用变量 |
|------|----------|
| 主题色 | `--hdd-color-primary-01` ~ `--hdd-color-primary-06` |
| 语义色 | `--hdd-color-success-01`, `--hdd-color-warning-01`, `--hdd-color-danger-01`, `--hdd-color-info-01` |
| 文本色 | `--hdd-color-dark-04`, `--hdd-color-neutral-01`, `--hdd-color-dark-03` |
| 边框色 | `--hdd-border-color-default`, `--hdd-border-color-divider` |
| 间距 | `--hdd-spacing-1` ~ `--hdd-spacing-8` |
| 圆角 | `--hdd-radius-sm`, `--hdd-radius-md`, `--hdd-radius-lg` |
| 阴影 | `--hdd-shadow-sm`, `--hdd-shadow-md`, `--hdd-shadow-lg` |
| 触摸目标 | `--hdd-touch-target-min`, `--hdd-touch-target-recommend` |
| 断点 | `--hdd-breakpoint-mobile`, `--hdd-breakpoint-tablet`, `--hdd-breakpoint-desktop` |
| 图标尺寸 | `--hdd-icon-size-sm`, `--hdd-icon-size-md`, `--hdd-icon-size-lg` |

---

**文档版本**: v2.0  
**更新日期**: 2024年  
**适用范围**: HDD UI 组件库开发  
**更新内容**: 
- 补充无障碍规范（WCAG AA）
- 补充触摸目标规范
- 补充断点系统
- 补充图标使用规范
- 按钮尺寸保持 36/46/58px
- 按钮圆角统一为 4px
