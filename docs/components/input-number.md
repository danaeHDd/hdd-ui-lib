<script setup lang="ts">
import { ref } from 'vue'

const numValue = ref(0)
const rangeNum = ref(5)
const stepNum = ref(0)
</script>

# InputNumber 数字输入框

带输入框和增减按钮的数字输入组件。

## 基础用法

<demo-block>
  <template #demo>
    <hdd-input-number v-model="numValue" />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input-number v-model="numValue" />
  </template>

  <script setup lang="ts">
    import { ref } from 'vue'
    const numValue = ref(0)
  </script>
  ```

  </template>
</demo-block>

## 设置范围

<demo-block>
  <template #demo>
    <hdd-input-number v-model="rangeNum" :min="0" :max="10" />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input-number v-model="rangeNum" :min="0" :max="10" />
  </template>

  <script setup lang="ts">
    import { ref } from 'vue'
    const rangeNum = ref(5)
  </script>
  ```

  </template>
</demo-block>

## 自定义步长

<demo-block>
  <template #demo>
    <hdd-input-number v-model="stepNum" :step="0.5" />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input-number v-model="stepNum" :step="0.5" />
  </template>

  <script setup lang="ts">
    import { ref } from 'vue'
    const stepNum = ref(0)
  </script>
  ```

  </template>
</demo-block>

## 禁用状态

<demo-block>
  <template #demo>
    <hdd-input-number :model-value="5" disabled />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input-number :model-value="5" disabled />
  </template>
  ```

  </template>
</demo-block>

## 错误状态

<demo-block>
  <template #demo>
    <hdd-input-number v-model="errorValue" error />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input-number v-model="errorValue" error />
  </template>
  ```

  </template>
</demo-block>

## API

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue | 绑定值 | number | - | 0 |
| min | 最小值 | number | - | -Infinity |
| max | 最大值 | number | - | Infinity |
| step | 步长 | number | - | 1 |
| precision | 数值精度 | number | - | - |
| disabled | 是否禁用 | boolean | - | false |
| readonly | 是否只读 | boolean | - | false |
| error | 是否错误状态 | boolean | - | false |

## 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| input | 输入时触发 | (value: number) |
| focus | 聚焦时触发 | (event: FocusEvent) |
| blur | 失焦时触发 | (event: FocusEvent) |
| change | 值改变时触发 | (value: number) |
