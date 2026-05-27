# Layout 布局

提供页面布局的容器组件，支持多种布局方式。

## 基础布局

<demo-block>
  <template #demo>
    <hdd-layout style="height: 200px; border: 1px solid #eee;">
      <hdd-header style="background: #9E8A57; color: white; padding: 16px;">Header</hdd-header>
      <hdd-content style="background: #f5f5f5; display: flex; align-items: center; justify-content: center;">Content</hdd-content>
      <hdd-footer style="background: #ccc; padding: 16px;">Footer</hdd-footer>
    </hdd-layout>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-layout style="height: 200px;">
      <hdd-header>Header</hdd-header>
      <hdd-content>Content</hdd-content>
      <hdd-footer>Footer</hdd-footer>
    </hdd-layout>
  </template>
  ```

  </template>
</demo-block>

## 带侧边栏布局

<demo-block>
  <template #demo>
    <hdd-layout style="height: 200px; border: 1px solid #eee;">
      <hdd-sider style="width: 200px; background: #f5f5f5; display: flex; align-items: center; justify-content: center;">Sider</hdd-sider>
      <hdd-layout>
        <hdd-header style="background: #9E8A57; color: white; padding: 16px;">Header</hdd-header>
        <hdd-content style="background: #fff; display: flex; align-items: center; justify-content: center;">Content</hdd-content>
        <hdd-footer style="background: #ccc; padding: 16px;">Footer</hdd-footer>
      </hdd-layout>
    </hdd-layout>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-layout>
      <hdd-sider>Sider</hdd-sider>
      <hdd-layout>
        <hdd-header>Header</hdd-header>
        <hdd-content>Content</hdd-content>
        <hdd-footer>Footer</hdd-footer>
      </hdd-layout>
    </hdd-layout>
  </template>
  ```

  </template>
</demo-block>

## 自定义尺寸

<demo-block>
  <template #demo>
    <hdd-layout style="height: 200px; border: 1px solid #eee;">
      <hdd-header height="80px" style="background: #9E8A57; color: white; display: flex; align-items: center; justify-content: center;">Header (80px)</hdd-header>
      <hdd-content style="background: #f5f5f5; display: flex; align-items: center; justify-content: center;">Content</hdd-content>
      <hdd-footer height="50px" style="background: #ccc; display: flex; align-items: center; justify-content: center;">Footer (50px)</hdd-footer>
    </hdd-layout>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-layout>
      <hdd-header height="80px">Header (80px)</hdd-header>
      <hdd-content>Content</hdd-content>
      <hdd-footer height="50px">Footer (50px)</hdd-footer>
    </hdd-layout>
  </template>
  ```

  </template>
</demo-block>

## 上中下三栏布局（中间含侧边栏）

<demo-block>
  <template #demo>
    <hdd-layout style="height: 300px; border: 1px solid #eee;">
      <hdd-header style="background: #9E8A57; color: white; padding: 16px; display: flex; align-items: center; justify-content: center;">Header</hdd-header>
      <hdd-layout>
        <hdd-sider style="width: 200px; background: #f5f5f5; display: flex; align-items: center; justify-content: center;">Sider</hdd-sider>
        <hdd-content style="background: #fff; display: flex; align-items: center; justify-content: center;">Content</hdd-content>
      </hdd-layout>
      <hdd-footer style="background: #ccc; padding: 16px; display: flex; align-items: center; justify-content: center;">Footer</hdd-footer>
    </hdd-layout>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-layout>
      <hdd-header>Header</hdd-header>
      <hdd-layout>
        <hdd-sider>Sider</hdd-sider>
        <hdd-content>Content</hdd-content>
      </hdd-layout>
      <hdd-footer>Footer</hdd-footer>
    </hdd-layout>
  </template>
  ```

  </template>
</demo-block>

## API

### HddLayout

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| has-sider | 是否包含侧边栏 | boolean | true / false | false |

### HddHeader

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| height | 高度 | string | - | 60px |

### HddFooter

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| height | 高度 | string | - | 60px |

### HddContent

无属性

### HddSider

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| width | 宽度 | string | - | 200px |
| collapsed | 是否折叠 | boolean | true / false | false |
