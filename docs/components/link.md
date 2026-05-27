# Link 链接

文字链接组件，用于页面跳转和资源链接。

## 基础用法

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-link type="default">默认链接</hdd-link>
      <hdd-link type="primary">主色链接</hdd-link>
      <hdd-link type="success">成功链接</hdd-link>
      <hdd-link type="warning">警告链接</hdd-link>
      <hdd-link type="danger">危险链接</hdd-link>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-link type="default">默认链接</hdd-link>
    <hdd-link type="primary">主色链接</hdd-link>
    <hdd-link type="success">成功链接</hdd-link>
    <hdd-link type="warning">警告链接</hdd-link>
    <hdd-link type="danger">危险链接</hdd-link>
  </template>
  ```

  </template>
</demo-block>

## 下划线控制

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-link>默认带下划线</hdd-link>
      <hdd-link :underline="false">无下划线</hdd-link>
      <hdd-link type="primary" :underline="false">主色无下划线</hdd-link>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-link>默认带下划线</hdd-link>
    <hdd-link :underline="false">无下划线</hdd-link>
    <hdd-link type="primary" :underline="false">主色无下划线</hdd-link>
  </template>
  ```

  </template>
</demo-block>

## 禁用状态

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-link disabled>禁用链接</hdd-link>
      <hdd-link type="primary" disabled>禁用主色链接</hdd-link>
      <hdd-link type="danger" disabled>禁用危险链接</hdd-link>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-link disabled>禁用链接</hdd-link>
    <hdd-link type="primary" disabled>禁用主色链接</hdd-link>
    <hdd-link type="danger" disabled>禁用危险链接</hdd-link>
  </template>
  ```

  </template>
</demo-block>

## 图标链接

<demo-block>
  <template #demo>
    <div class="demo-row">
      <hdd-link type="primary">
        <template #prefix>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </template>
        用户中心
      </hdd-link>
      <hdd-link type="success">
        查看详情
        <template #suffix>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </template>
      </hdd-link>
    </div>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-link type="primary">
      <template #prefix>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      </template>
      用户中心
    </hdd-link>
    
    <hdd-link type="success">
      查看详情
      <template #suffix>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </template>
    </hdd-link>
  </template>
  ```

  </template>
</demo-block>

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 链接类型 | string | default / primary / success / warning / danger | default |
| href | 链接地址 | string | - | javascript:void(0) |
| target | 目标窗口 | string | _self / _blank / _parent / _top | _self |
| disabled | 是否禁用 | boolean | true / false | false |
| underline | 是否显示下划线 | boolean | true / false | true |

### 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击链接时触发 | (event: MouseEvent) |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 链接文本内容 |
| prefix | 前缀内容（如图标） |
| suffix | 后缀内容（如图标） |

<style>
.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
