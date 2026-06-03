# Checkbox 多选框

多选框组件，用于从多个选项中选择多个。

## 基础用法

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-checkbox v-model="checkboxValue1">选项1</hdd-checkbox>
      <hdd-checkbox v-model="checkboxValue1">选项2</hdd-checkbox>
      <hdd-checkbox v-model="checkboxValue1">选项3</hdd-checkbox>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-checkbox v-model="checkboxValue1">选项1</hdd-checkbox>
    <hdd-checkbox v-model="checkboxValue1">选项2</hdd-checkbox>
    <hdd-checkbox v-model="checkboxValue1">选项3</hdd-checkbox>
  </template>
  ```

  </template>
</demo-block>

## 多选模式

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-checkbox v-model="multipleValue" label="苹果">苹果</hdd-checkbox>
      <hdd-checkbox v-model="multipleValue" label="香蕉">香蕉</hdd-checkbox>
      <hdd-checkbox v-model="multipleValue" label="橙子">橙子</hdd-checkbox>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-checkbox v-model="multipleValue" label="苹果">苹果</hdd-checkbox>
    <hdd-checkbox v-model="multipleValue" label="香蕉">香蕉</hdd-checkbox>
    <hdd-checkbox v-model="multipleValue" label="橙子">橙子</hdd-checkbox>
  </template>
  ```

  </template>
</demo-block>

## 半选状态

<demo-block>
  <template #demo>
    <hdd-checkbox v-model="indeterminateValue" indeterminate>全选</hdd-checkbox>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-checkbox v-model="indeterminateValue" indeterminate>全选</hdd-checkbox>
  </template>
  ```

  </template>
</demo-block>

## 错误状态

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-checkbox v-model="errorValue1" error>错误选项</hdd-checkbox>
      <hdd-checkbox v-model="errorValue1" error>错误选项</hdd-checkbox>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-checkbox v-model="errorValue1" error>错误选项</hdd-checkbox>
    <hdd-checkbox v-model="errorValue1" error>错误选项</hdd-checkbox>
  </template>
  ```

  </template>
</demo-block>

## API

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue | 绑定值 | boolean/array | - | - |
| label | 选项值 | string | - | - |
| disabled | 是否禁用 | boolean | - | false |
| indeterminate | 是否半选 | boolean | - | false |
| size | 尺寸 | string | sm/md/lg | md |
| error | 是否错误状态 | boolean | - | false |

## 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| change | 值改变时触发 | (value: boolean) |