# 设计令牌

设计令牌（Design Tokens）是设计系统的核心，它定义了组件库中所有视觉元素的标准化值。

## 颜色系统

### 主题色

```css
--hdd-color-primary: #9E8A57;
--hdd-color-primary-01: #9E8A57;       /* 基准色 */
--hdd-color-primary-02: 70% + white;   /* hover 状态 */
--hdd-color-primary-03: 50% + white;   /* 次要强调 */
--hdd-color-primary-04: 30% + white;   /* 边框 */
--hdd-color-primary-05: 10% + white;   /* 背景 */
--hdd-color-primary-06: 65% + dark;    /* 深色强调 */
```

### 语义色

| 颜色 | 值 | 用途 |
|------|----|------|
| Success | `#4CAF50` | 成功状态 |
| Warning | `#FFA826` | 警告状态 |
| Danger | `#FF0000` | 危险状态 |
| Info | `#2196F3` | 信息提示 |

### 深色系

| 变量 | 值 | 用途 |
|------|----|------|
| `--hdd-color-dark-01` | `#EBEBEB` |  |
| `--hdd-color-dark-02` | `#D4D4D4` | 边框 |
| `--hdd-color-dark-03` | `#C2C2C2` | 禁用状态、placeholder |
| `--hdd-color-dark-04` | `#333333` | 正文文本 |

## 字体系统

### 字体大小

```css
--hdd-font-size-xs: 0.75rem;    /* 12px */
--hdd-font-size-sm: 0.875rem;   /* 14px */
--hdd-font-size-base: 1rem;     /* 16px */
--hdd-font-size-lg: 1.125rem;   /* 18px */
--hdd-font-size-xl: 1.25rem;    /* 20px */
```

### 字体粗细

```css
--hdd-font-weight-normal: 400;    /* 正文 */
--hdd-font-weight-medium: 500;    /* 按钮 */
--hdd-font-weight-semibold: 600;  /* 标题 */
```

## 间距系统

```css
--hdd-spacing-unit: 0.25rem;  /* 4px */

--hdd-spacing-1: 0.25rem;     /* 4px */
--hdd-spacing-2: 0.5rem;      /* 8px */
--hdd-spacing-3: 0.75rem;     /* 12px */
--hdd-spacing-4: 1rem;        /* 16px */
--hdd-spacing-5: 1.25rem;     /* 20px */
--hdd-spacing-6: 1.5rem;      /* 24px */
```

## 圆角系统

```css
--hdd-radius-sm: 0.25rem;     /* 4px */
--hdd-radius-md: 0.5rem;      /* 8px */
--hdd-radius-lg: 0.75rem;     /* 12px */
--hdd-radius-full: 9999px;    /* 圆形 */
```

## 边框系统

```css
/* 边框颜色 */
--hdd-border-color-default: var(--hdd-color-neutral-04);
--hdd-border-color-hover: var(--hdd-color-neutral-03);
--hdd-border-color-active: var(--hdd-color-primary-01);
--hdd-border-color-disabled: var(--hdd-color-neutral-05);
--hdd-border-color-divider: var(--hdd-color-dark-03);

/* 边框宽度 */
--hdd-border-width-sm: 1px;
--hdd-border-width-md: 2px;
```

## 阴影系统

```css
--hdd-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--hdd-shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--hdd-shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
```

## 使用规范

### 颜色使用

```css
/* 推荐 */
color: var(--hdd-color-dark-04);      /* 正文 */
color: var(--hdd-color-neutral-01);   /* 次要文本 */
color: var(--hdd-color-dark-03);     /* 禁用状态 */

/* 不推荐 */
color: #333333;   /* 硬编码 */
```

### 间距使用

```css
/* 推荐 */
padding: var(--hdd-spacing-4);
margin: var(--hdd-spacing-2) var(--hdd-spacing-4);

/* 不推荐 */
padding: 16px;    /* 硬编码 */
```

### 组件专用变量

```css
/* 按钮 */
--hdd-btn-height-sm: 2.25rem;
--hdd-btn-height-md: 2.875rem;
--hdd-btn-height-lg: 3.625rem;

/* 输入框 */
--hdd-input-height-sm: 2.25rem;
--hdd-input-height-md: 2.75rem;
--hdd-input-height-lg: 3.25rem;
```

## 主题定制

通过 CSS 变量可以轻松定制主题：

```css
:root {
  /* 自定义主题色 */
  --hdd-color-primary: #6B8E23;
  
  /* 自定义文本颜色 */
  --hdd-color-dark-04: #222222;
  
  /* 自定义圆角 */
  --hdd-radius-md: 0.75rem;
}
```
