# Input 输入框

文本输入框组件，用于单行文本输入。

## 基础用法

<demo-block>
  <template #demo>
    <hdd-input placeholder="请输入内容" />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input placeholder="请输入内容" />
  </template>
  ```

  </template>
</demo-block>

## 不同尺寸

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 12px;">
      <hdd-input size="sm" placeholder="小尺寸" />
      <hdd-input size="md" placeholder="中尺寸" />
      <hdd-input size="lg" placeholder="大尺寸" />
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input size="sm" placeholder="小尺寸" />
    <hdd-input size="md" placeholder="中尺寸" />
    <hdd-input size="lg" placeholder="大尺寸" />
  </template>
  ```

  </template>
</demo-block>

## 带前缀和后缀

<demo-block>
  <template #demo>
    <div style="display: flex; gap: 12px;">
      <hdd-input placeholder="用户名">
        <template #prefix>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </template>
      </hdd-input>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input placeholder="用户名">
      <template #prefix>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </template>
    </hdd-input>
  </template>
  ```

  </template>
</demo-block>

## 可清空

<demo-block>
  <template #demo>
    <hdd-input v-model="inputValue" placeholder="可清空" show-clear />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input v-model="inputValue" placeholder="可清空" show-clear />
  </template>
  ```

  </template>
</demo-block>

## 字数统计

<demo-block>
  <template #demo>
    <hdd-input v-model="countValue" placeholder="最多输入20个字符" maxlength="20" show-word-limit />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input v-model="countValue" placeholder="最多输入20个字符" maxlength="20" show-word-limit />
  </template>
  ```

  </template>
</demo-block>

## 禁用状态

<demo-block>
  <template #demo>
    <hdd-input placeholder="禁用状态" disabled />
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-input placeholder="禁用状态" disabled />
  </template>
  ```

  </template>
</demo-block>

## API

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue | 绑定值 | string | - | - |
| type | 输入类型 | string | text/password/search/email/tel/url | text |
| placeholder | 占位符 | string | - | - |
| disabled | 是否禁用 | boolean | - | false |
| readonly | 是否只读 | boolean | - | false |
| maxlength | 最大长度 | number | - | - |
| minlength | 最小长度 | number | - | - |
| size | 尺寸 | string | sm/md/lg | md |
| showClear | 是否显示清空按钮 | boolean | - | false |
| showWordLimit | 是否显示字数统计 | boolean | - | false |

## 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| input | 输入时触发 | (value: string) |
| focus | 聚焦时触发 | (event: FocusEvent) |
| blur | 失焦时触发 | (event: FocusEvent) |
| change | 值改变时触发 | (event: Event) |