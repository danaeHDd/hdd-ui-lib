# Button 按钮

常用的操作按钮，用于触发业务逻辑或提交表单。

## 基础用法

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-button>默认按钮</hdd-button>
      <hdd-button type="primary">主要按钮</hdd-button>
      <hdd-button type="success">成功按钮</hdd-button>
      <hdd-button type="warning">警告按钮</hdd-button>
      <hdd-button type="danger">危险按钮</hdd-button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button>默认按钮</hdd-button>
    <hdd-button type="primary">主要按钮</hdd-button>
    <hdd-button type="success">成功按钮</hdd-button>
    <hdd-button type="warning">警告按钮</hdd-button>
    <hdd-button type="danger">危险按钮</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## 按钮尺寸

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-button size="small">小按钮</hdd-button>
      <hdd-button>默认按钮</hdd-button>
      <hdd-button size="large">大按钮</hdd-button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button size="small">小按钮</hdd-button>
    <hdd-button>默认按钮</hdd-button>
    <hdd-button size="large">大按钮</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## 禁用状态

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-button disabled>禁用按钮</hdd-button>
      <hdd-button type="primary" disabled>禁用主要</hdd-button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button disabled>禁用按钮</hdd-button>
    <hdd-button type="primary" disabled>禁用主要</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 按钮类型 | string | default / primary / success / warning / danger | default |
| size | 按钮尺寸 | string | small / default / large | default |
| disabled | 是否禁用 | boolean | true / false | false |

### 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击按钮时触发 | (event: MouseEvent) |

<style>
.demo-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
