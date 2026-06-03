<script setup>
import { ref } from 'vue'

const switchValue = ref(false)
const sizeValue = ref(false)
const textValue = ref(false)
const textValue2 = ref(true)
const disabledValue1 = ref(false)
const disabledValue2 = ref(true)
const loadingValue = ref(false)
</script>

# Switch 开关

开关组件，用于状态切换。

## 基础用法

<demo-block>
  <template #demo>
    <hdd-switch v-model="switchValue" />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-switch v-model="switchValue" />
  </template>

  <script setup>
  import { ref } from 'vue'
  const switchValue = ref(false)
  </script>
  ```

  </template>
</demo-block>

## 不同尺寸

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px; align-items: center;">
      <hdd-switch size="sm" v-model="sizeValue" />
      <hdd-switch size="md" v-model="sizeValue" />
      <hdd-switch size="lg" v-model="sizeValue" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-switch size="sm" v-model="sizeValue" />
    <hdd-switch size="md" v-model="sizeValue" />
    <hdd-switch size="lg" v-model="sizeValue" />
  </template>

  <script setup>
  import { ref } from 'vue'
  const sizeValue = ref(false)
  </script>
  ```

  </template>
</demo-block>

## 带文字

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px; align-items: center;">
      <hdd-switch v-model="textValue" show-text active-text="开" inactive-text="关" />
      <hdd-switch v-model="textValue2" show-text active-text="完整展示多个内容" inactive-text="多个内容" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-switch v-model="textValue" show-text active-text="开" inactive-text="关" />
    <hdd-switch v-model="textValue2" show-text active-text="完整展示多个内容" inactive-text="多个内容" />
  </template>

  <script setup>
  import { ref } from 'vue'
  const textValue = ref(false)
  const textValue2 = ref(true)
  </script>
  ```

  </template>
</demo-block>

## 禁用状态

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px; align-items: center;">
      <hdd-switch v-model="disabledValue1" disabled />
      <hdd-switch v-model="disabledValue2" disabled />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-switch v-model="disabledValue1" disabled />
    <hdd-switch v-model="disabledValue2" disabled />
  </template>

  <script setup>
  import { ref } from 'vue'
  const disabledValue1 = ref(false)
  const disabledValue2 = ref(true)
  </script>
  ```

  </template>
</demo-block>

## 加载状态

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px; align-items: center;">
      <hdd-switch v-model="loadingValue" loading />
      <hdd-switch v-model="loadingValue" loading size="sm" />
      <hdd-switch v-model="loadingValue" loading size="lg" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-switch v-model="loadingValue" loading />
  </template>

  <script setup>
  import { ref } from 'vue'
  const loadingValue = ref(false)
  </script>
  ```

  </template>
</demo-block>

## API

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue | 绑定值 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |
| loading | 是否加载中 | boolean | - | false |
| size | 尺寸 | string | sm / md / lg | md |
| activeText | 激活时文字 | string | - | - |
| inactiveText | 未激活时文字 | string | - | - |
| showText | 是否显示文字 | boolean | - | false |

## 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| change | 值改变时触发 | (value: boolean) |
