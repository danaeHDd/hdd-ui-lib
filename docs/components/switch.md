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
  ```

  </template>
</demo-block>

## 不同尺寸

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
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
  ```

  </template>
</demo-block>

## 带文字

<demo-block>
  <template #demo>
    <hdd-switch v-model="textValue" show-text active-text="开" inactive-text="关" />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-switch v-model="textValue" show-text active-text="开" inactive-text="关" />
  </template>
  ```

  </template>
</demo-block>

## 禁用状态

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 24px;">
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
  ```

  </template>
</demo-block>

## API

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue | 绑定值 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |
| loading | 是否加载中 | boolean | - | false |
| size | 尺寸 | string | sm/md/lg | md |
| activeText | 激活时文字 | string | - | - |
| inactiveText | 未激活时文字 | string | - | - |
| showText | 是否显示文字 | boolean | - | false |

## 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| change | 值改变时触发 | (value: boolean) |