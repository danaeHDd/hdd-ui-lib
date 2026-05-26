# Divider 分割线

用于分隔内容区域的分割线组件。

## 基础用法

<demo-block>
  <template #demo>
    <p>这是分割线上方的内容</p>
    <hdd-divider />
    <p>这是分割线下方的内容</p>
  </template>
  <template #code>

  ```vue
  <template>
    <p>这是分割线上方的内容</p>
    <hdd-divider />
    <p>这是分割线下方的内容</p>
  </template>
  ```

  </template>
</demo-block>

## 带文字的分割线

<demo-block>
  <template #demo>
    <hdd-divider>分割线标题</hdd-divider>
    <hdd-divider content-position="left">左对齐标题</hdd-divider>
    <hdd-divider content-position="right">右对齐标题</hdd-divider>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-divider>分割线标题</hdd-divider>
    <hdd-divider content-position="left">左对齐标题</hdd-divider>
    <hdd-divider content-position="right">右对齐标题</hdd-divider>
  </template>
  ```

  </template>
</demo-block>

## 虚线样式

<demo-block>
  <template #demo>
    <hdd-divider dashed />
    <hdd-divider dashed>虚线带文字</hdd-divider>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-divider dashed />
    <hdd-divider dashed>虚线带文字</hdd-divider>
  </template>
  ```

  </template>
</demo-block>

## 垂直分割线

<demo-block>
  <template #demo>
    <div style="display: flex; align-items: center;">
      <span>左侧内容</span>
      <hdd-divider direction="vertical" />
      <span>中间内容</span>
      <hdd-divider direction="vertical" />
      <span>右侧内容</span>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <div style="display: flex; align-items: center;">
      <span>左侧内容</span>
      <hdd-divider direction="vertical" />
      <span>中间内容</span>
      <hdd-divider direction="vertical" />
      <span>右侧内容</span>
    </div>
  </template>
  ```

  </template>
</demo-block>

## 自定义颜色

<demo-block>
  <template #demo>
    <hdd-divider border-color="#9E8A57" />
    <hdd-divider border-color="#4CAF50">成功色分割线</hdd-divider>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-divider border-color="#9E8A57" />
    <hdd-divider border-color="#4CAF50">成功色分割线</hdd-divider>
  </template>
  ```

  </template>
</demo-block>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| direction | 分割线方向 | string | horizontal / vertical | horizontal |
| content-position | 文字位置 | string | left / center / right | center |
| dashed | 是否虚线 | boolean | true / false | false |
| border-color | 边框颜色 | string | - | 继承主题色 |
| text-color | 文字颜色 | string | - | 继承主题色 |
| margin | 外边距 | string | - | 16px 0 |
