<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('选项1')
const disabledValue = ref('')
const errorValue = ref('')
</script>

# Radio 单选框

单选框组件，用于从多个选项中选择一个。

## 基础用法

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-radio v-model="radioValue" label="选项1">选项1</hdd-radio>
      <hdd-radio v-model="radioValue" label="选项2">选项2</hdd-radio>
      <hdd-radio v-model="radioValue" label="选项3">选项3</hdd-radio>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-radio v-model="radioValue" label="选项1">选项1</hdd-radio>
    <hdd-radio v-model="radioValue" label="选项2">选项2</hdd-radio>
    <hdd-radio v-model="radioValue" label="选项3">选项3</hdd-radio>
  </template>
  ```

  </template>
</demo-block>

## 禁用状态

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-radio v-model="disabledValue" label="选项1" disabled>禁用选项</hdd-radio>
      <hdd-radio v-model="disabledValue" label="选项2">可用选项</hdd-radio>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-radio v-model="disabledValue" label="选项1" disabled>禁用选项</hdd-radio>
    <hdd-radio v-model="disabledValue" label="选项2">可用选项</hdd-radio>
  </template>
  ```

  </template>
</demo-block>

## 错误状态

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
      <hdd-radio v-model="errorValue" label="选项1" error>错误选项</hdd-radio>
      <hdd-radio v-model="errorValue" label="选项2" error>错误选项</hdd-radio>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-radio v-model="errorValue" label="选项1" error>错误选项</hdd-radio>
    <hdd-radio v-model="errorValue" label="选项2" error>错误选项</hdd-radio>
  </template>
  ```

  </template>
</demo-block>

## API

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue | 绑定值 | string/number/boolean | - | - |
| label | 选项值 | string/number | - | - |
| disabled | 是否禁用 | boolean | - | false |
| error | 是否错误状态 | boolean | - | false |

## 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| change | 值改变时触发 | (value: string/number/boolean) |