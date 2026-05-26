# Grid 网格布局

基于 CSS Grid 的网格布局组件。

## 基础用法

<demo-block>
  <template #demo>
    <hdd-grid :gap="16">
      <hdd-grid-item v-for="i in 12" :key="i" :span="1">
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">{{ i }}</div>
      </hdd-grid-item>
    </hdd-grid>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-grid :gap="16">
      <hdd-grid-item v-for="i in 12" :key="i" :span="1">
        {{ i }}
      </hdd-grid-item>
    </hdd-grid>
  </template>
  ```

  </template>
</demo-block>

## 自定义列数

<demo-block>
  <template #demo>
    <hdd-grid :cols="4" :gap="16">
      <hdd-grid-item v-for="i in 4" :key="i">
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">{{ i }}</div>
      </hdd-grid-item>
    </hdd-grid>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-grid :cols="4" :gap="16">
      <hdd-grid-item v-for="i in 4" :key="i">
        {{ i }}
      </hdd-grid-item>
    </hdd-grid>
  </template>
  ```

  </template>
</demo-block>

## 不同跨度

<demo-block>
  <template #demo>
    <hdd-grid :gap="16">
      <hdd-grid-item :span="6">
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">span=6</div>
      </hdd-grid-item>
      <hdd-grid-item :span="3">
        <div style="background: #4CAF50; color: white; padding: 12px; text-align: center; border-radius: 4px;">span=3</div>
      </hdd-grid-item>
      <hdd-grid-item :span="3">
        <div style="background: #FFA826; color: white; padding: 12px; text-align: center; border-radius: 4px;">span=3</div>
      </hdd-grid-item>
    </hdd-grid>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-grid :gap="16">
      <hdd-grid-item :span="6">span=6</hdd-grid-item>
      <hdd-grid-item :span="3">span=3</hdd-grid-item>
      <hdd-grid-item :span="3">span=3</hdd-grid-item>
    </hdd-grid>
  </template>
  ```

  </template>
</demo-block>

## 自定义列模板

<demo-block>
  <template #demo>
    <hdd-grid cols="1fr 2fr 1fr" :gap="16">
      <hdd-grid-item>
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">1fr</div>
      </hdd-grid-item>
      <hdd-grid-item>
        <div style="background: #4CAF50; color: white; padding: 12px; text-align: center; border-radius: 4px;">2fr</div>
      </hdd-grid-item>
      <hdd-grid-item>
        <div style="background: #2196F3; color: white; padding: 12px; text-align: center; border-radius: 4px;">1fr</div>
      </hdd-grid-item>
    </hdd-grid>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-grid cols="1fr 2fr 1fr" :gap="16">
      <hdd-grid-item>1fr</hdd-grid-item>
      <hdd-grid-item>2fr</hdd-grid-item>
      <hdd-grid-item>1fr</hdd-grid-item>
    </hdd-grid>
  </template>
  ```

  </template>
</demo-block>

## API

### HddGrid

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| cols | 列数或列模板 | number / string | - | 12 |
| gap | 间距 | number / string | - | 0 |
| gutter | 间距（兼容） | number / string | - | 0 |

### HddGridItem

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| span | 跨越列数 | number | - | 1 |
| offset | 偏移量 | number | - | 0 |
| xs | 超小屏布局 | number | - | 0 |
| sm | 小屏布局 | number | - | 0 |
| md | 中屏布局 | number | - | 0 |
| lg | 大屏布局 | number | - | 0 |
| xl | 超大屏布局 | number | - | 0 |
