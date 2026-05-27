# Space 间距

控制组件之间的间距布局组件。

## 基础用法

<demo-block>
  <template #demo>
    <hdd-space>
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
    </hdd-space>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-space>
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
    </hdd-space>
  </template>
  ```

  </template>
</demo-block>

## 纵向排列

<demo-block>
  <template #demo>
    <hdd-space direction="vertical">
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
    </hdd-space>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-space direction="vertical">
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
    </hdd-space>
  </template>
  ```

  </template>
</demo-block>

## 不同尺寸

<demo-block>
  <template #demo>
    <p>小间距 (sm):</p>
    <hdd-space size="sm">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <p>中等间距 (md):</p>
    <hdd-space size="md">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <p>大间距 (lg):</p>
    <hdd-space size="lg">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <p>超大间距 (xl):</p>
    <hdd-space size="xl">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-space size="sm">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <hdd-space size="md">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <hdd-space size="lg">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <hdd-space size="xl">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
  </template>
  ```

  </template>
</demo-block>

## 自定义间距

<demo-block>
  <template #demo>
    <hdd-space custom-size="32px">
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
    </hdd-space>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-space custom-size="32px">
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
    </hdd-space>
  </template>
  ```

  </template>
</demo-block>

## 对齐方式

<demo-block>
  <template #demo>
    <p>顶部对齐:</p>
    <hdd-space align="start">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <p>居中对齐:</p>
    <hdd-space align="center">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <p>底部对齐:</p>
    <hdd-space align="end">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-space align="start">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <hdd-space align="center">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
    <hdd-space align="end">
      <hdd-button type="primary">按钮</hdd-button>
      <hdd-button>按钮</hdd-button>
    </hdd-space>
  </template>
  ```

  </template>
</demo-block>

## 自动换行

<demo-block>
  <template #demo>
    <hdd-space wrap>
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
      <hdd-button type="danger">按钮4</hdd-button>
      <hdd-button>按钮5</hdd-button>
      <hdd-button type="primary">按钮6</hdd-button>
      <hdd-button type="success">按钮7</hdd-button>
      <hdd-button type="warning">按钮8</hdd-button>
    </hdd-space>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-space wrap>
      <hdd-button type="primary">按钮1</hdd-button>
      <hdd-button type="success">按钮2</hdd-button>
      <hdd-button type="warning">按钮3</hdd-button>
      <hdd-button type="danger">按钮4</hdd-button>
      <hdd-button>按钮5</hdd-button>
      <hdd-button type="primary">按钮6</hdd-button>
      <hdd-button type="success">按钮7</hdd-button>
      <hdd-button type="warning">按钮8</hdd-button>
    </hdd-space>
  </template>
  ```

  </template>
</demo-block>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| direction | 排列方向 | string | horizontal / vertical | horizontal |
| size | 间距大小 | string | sm / md / lg / xl | md |
| custom-size | 自定义间距 | string | - | - |
| align | 对齐方式 | string | start / end / center / baseline / stretch | center |
| wrap | 是否自动换行 | boolean | true / false | false |
| fill | 是否填充父容器 | boolean | true / false | false |

<style>
.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
