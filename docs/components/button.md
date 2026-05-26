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
      <hdd-button type="info">信息按钮</hdd-button>
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
    <hdd-button type="info">信息按钮</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## 按钮尺寸

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-button size="sm">小按钮</hdd-button>
      <hdd-button size="md">中等按钮</hdd-button>
      <hdd-button size="lg">大按钮</hdd-button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button size="sm">小按钮</hdd-button>
    <hdd-button size="md">中等按钮</hdd-button>
    <hdd-button size="lg">大按钮</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## 朴素按钮

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-button plain>朴素按钮</hdd-button>
      <hdd-button type="primary" plain>主要朴素</hdd-button>
      <hdd-button type="success" plain>成功朴素</hdd-button>
      <hdd-button type="warning" plain>警告朴素</hdd-button>
      <hdd-button type="danger" plain>危险朴素</hdd-button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button plain>朴素按钮</hdd-button>
    <hdd-button type="primary" plain>主要朴素</hdd-button>
    <hdd-button type="success" plain>成功朴素</hdd-button>
    <hdd-button type="warning" plain>警告朴素</hdd-button>
    <hdd-button type="danger" plain>危险朴素</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## 文字按钮

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-button text>文字按钮</hdd-button>
      <hdd-button type="primary" text>主要文字</hdd-button>
      <hdd-button type="success" text>成功文字</hdd-button>
      <hdd-button type="warning" text>警告文字</hdd-button>
      <hdd-button type="danger" text>危险文字</hdd-button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button text>文字按钮</hdd-button>
    <hdd-button type="primary" text>主要文字</hdd-button>
    <hdd-button type="success" text>成功文字</hdd-button>
    <hdd-button type="warning" text>警告文字</hdd-button>
    <hdd-button type="danger" text>危险文字</hdd-button>
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
      <hdd-button plain disabled>禁用朴素</hdd-button>
      <hdd-button text disabled>禁用文字</hdd-button>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button disabled>禁用按钮</hdd-button>
    <hdd-button type="primary" disabled>禁用主要</hdd-button>
    <hdd-button plain disabled>禁用朴素</hdd-button>
    <hdd-button text disabled>禁用文字</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## 块级按钮

<demo-block>
  <template #demo>
    <hdd-button block>块级按钮</hdd-button>
    <hdd-button type="primary" block>主要块级按钮</hdd-button>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-button block>块级按钮</hdd-button>
    <hdd-button type="primary" block>主要块级按钮</hdd-button>
  </template>
  ```

  </template>
</demo-block>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 按钮类型 | string | primary / success / warning / danger / info | primary |
| size | 按钮尺寸 | string | sm / md / lg | sm |
| disabled | 是否禁用 | boolean | true / false | false |
| loading | 是否加载中 | boolean | true / false | false |
| plain | 是否朴素按钮 | boolean | true / false | false |
| text | 是否文字按钮 | boolean | true / false | false |
| block | 是否块级按钮 | boolean | true / false | false |
| round | 是否圆角按钮 | boolean | true / false | false |
| dashed | 是否虚线按钮 | boolean | true / false | false |
| icon | 是否显示图标 | boolean | true / false | false |

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
