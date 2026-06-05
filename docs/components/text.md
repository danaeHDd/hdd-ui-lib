# Text 文字

文本展示组件，支持多种样式和大小。

## 基础类型

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-text type="title">标题文字</hdd-text>
      <hdd-text type="body">正文文字</hdd-text>
      <hdd-text type="secondary">辅助文字</hdd-text>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-text type="title">标题文字</hdd-text>
    <hdd-text type="body">正文文字</hdd-text>
    <hdd-text type="secondary">辅助文字</hdd-text>
  </template>
  ```

  </template>
</demo-block>

## 尺寸大小

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-text size="xs">超小文字</hdd-text>
      <hdd-text size="sm">小文字</hdd-text>
      <hdd-text size="base">基础文字</hdd-text>
      <hdd-text size="lg">大文字</hdd-text>
      <hdd-text size="xl">超大文字</hdd-text>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-text size="xs">超小文字</hdd-text>
    <hdd-text size="sm">小文字</hdd-text>
    <hdd-text size="base">基础文字</hdd-text>
    <hdd-text size="lg">大文字</hdd-text>
    <hdd-text size="xl">超大文字</hdd-text>
  </template>
  ```

  </template>
</demo-block>

## 样式修饰

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-text bold>加粗文字</hdd-text>
      <hdd-text italic>斜体文字</hdd-text>
      <hdd-text delete>删除线文字</hdd-text>
      <hdd-text bold italic>加粗斜体</hdd-text>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-text bold>加粗文字</hdd-text>
    <hdd-text italic>斜体文字</hdd-text>
    <hdd-text delete>删除线文字</hdd-text>
    <hdd-text bold italic>加粗斜体</hdd-text>
  </template>
  ```

  </template>
</demo-block>

## 自定义颜色

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-text color="#9E8A57">主题色文字</hdd-text>
      <hdd-text color="#4CAF50">成功色文字</hdd-text>
      <hdd-text color="#FF0000">危险色文字</hdd-text>
      <hdd-text color="#2196F3">信息色文字</hdd-text>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-text color="#9E8A57">主题色文字</hdd-text>
    <hdd-text color="#4CAF50">成功色文字</hdd-text>
    <hdd-text color="#FF0000">危险色文字</hdd-text>
    <hdd-text color="#2196F3">信息色文字</hdd-text>
  </template>
  ```

  </template>
</demo-block>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 文字类型 | string | title / body / secondary | body |
| tag | 自定义标签 | string | - | span |
| color | 文字颜色 | string | - | - |
| bold | 是否加粗 | boolean | true / false | false |
| italic | 是否斜体 | boolean | true / false | false |
| delete | 是否删除线 | boolean | true / false | false |
| size | 文字尺寸 | string | xs / sm / base / lg / xl | base |

<style>
.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
