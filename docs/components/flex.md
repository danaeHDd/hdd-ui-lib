# Flex 弹性布局

基于 CSS Flexbox 的弹性布局组件。

## 基础用法

<demo-block>
  <template #demo>
    <hdd-flex :gap="12">
      <hdd-flex-item>
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">Item 1</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #4CAF50; color: white; padding: 12px; text-align: center; border-radius: 4px;">Item 2</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #2196F3; color: white; padding: 12px; text-align: center; border-radius: 4px;">Item 3</div>
      </hdd-flex-item>
    </hdd-flex>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-flex :gap="12">
      <hdd-flex-item>Item 1</hdd-flex-item>
      <hdd-flex-item>Item 2</hdd-flex-item>
      <hdd-flex-item>Item 3</hdd-flex-item>
    </hdd-flex>
  </template>
  ```

  </template>
</demo-block>

## 自动填充

<demo-block>
  <template #demo>
    <hdd-flex :gap="12">
      <hdd-flex-item>
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">固定宽度</div>
      </hdd-flex-item>
      <hdd-flex-item :flex="1">
        <div style="background: #4CAF50; color: white; padding: 12px; text-align: center; border-radius: 4px;">自动填充</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #2196F3; color: white; padding: 12px; text-align: center; border-radius: 4px;">固定宽度</div>
      </hdd-flex-item>
    </hdd-flex>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-flex :gap="12">
      <hdd-flex-item>固定宽度</hdd-flex-item>
      <hdd-flex-item :flex="1">自动填充</hdd-flex-item>
      <hdd-flex-item>固定宽度</hdd-flex-item>
    </hdd-flex>
  </template>
  ```

  </template>
</demo-block>

## 对齐方式

<demo-block>
  <template #demo>
    <hdd-flex :gap="12" align="center">
      <hdd-flex-item>
        <div style="background: #9E8A57; color: white; padding: 12px 24px; text-align: center; border-radius: 4px; height: 60px; display: flex; align-items: center; justify-content: center;">高内容</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #4CAF50; color: white; padding: 12px; text-align: center; border-radius: 4px;">普通</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #2196F3; color: white; padding: 12px; text-align: center; border-radius: 4px;">普通</div>
      </hdd-flex-item>
    </hdd-flex>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-flex :gap="12" align="center">
      <hdd-flex-item>高内容</hdd-flex-item>
      <hdd-flex-item>普通</hdd-flex-item>
      <hdd-flex-item>普通</hdd-flex-item>
    </hdd-flex>
  </template>
  ```

  </template>
</demo-block>

## 主轴对齐

<demo-block>
  <template #demo>
    <hdd-flex :gap="12" justify="space-between">
      <hdd-flex-item>
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">左侧</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #4CAF50; color: white; padding: 12px; text-align: center; border-radius: 4px;">中间</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #2196F3; color: white; padding: 12px; text-align: center; border-radius: 4px;">右侧</div>
      </hdd-flex-item>
    </hdd-flex>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-flex :gap="12" justify="space-between">
      <hdd-flex-item>左侧</hdd-flex-item>
      <hdd-flex-item>中间</hdd-flex-item>
      <hdd-flex-item>右侧</hdd-flex-item>
    </hdd-flex>
  </template>
  ```

  </template>
</demo-block>

## 换行布局

<demo-block>
  <template #demo>
    <hdd-flex :gap="12" wrap="wrap">
      <hdd-flex-item v-for="i in 10" :key="i">
        <div style="background: #9E8A57; color: white; padding: 12px 24px; text-align: center; border-radius: 4px;">Item {{ i }}</div>
      </hdd-flex-item>
    </hdd-flex>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-flex :gap="12" wrap="wrap">
      <hdd-flex-item v-for="i in 10" :key="i">Item {{ i }}</hdd-flex-item>
    </hdd-flex>
  </template>
  ```

  </template>
</demo-block>

## 垂直方向

<demo-block>
  <template #demo>
    <hdd-flex direction="column" :gap="12" style="height: 200px;">
      <hdd-flex-item>
        <div style="background: #9E8A57; color: white; padding: 12px; text-align: center; border-radius: 4px;">垂直</div>
      </hdd-flex-item>
      <hdd-flex-item>
        <div style="background: #4CAF50; color: white; padding: 12px; text-align: center; border-radius: 4px;">排列</div>
      </hdd-flex-item>
      <hdd-flex-item :flex="1">
        <div style="background: #2196F3; color: white; padding: 12px; text-align: center; border-radius: 4px;">自动填充</div>
      </hdd-flex-item>
    </hdd-flex>
  </template>
  <template #code>

  ```vue
  <template>
    <hdd-flex direction="column" :gap="12" style="height: 200px;">
      <hdd-flex-item>垂直</hdd-flex-item>
      <hdd-flex-item>排列</hdd-flex-item>
      <hdd-flex-item :flex="1">自动填充</hdd-flex-item>
    </hdd-flex>
  </template>
  ```

  </template>
</demo-block>

## API

### HddFlex

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| direction | 排列方向 | string | row / row-reverse / column / column-reverse | row |
| align | 交叉轴对齐 | string | flex-start / flex-end / center / stretch / baseline | stretch |
| justify | 主轴对齐 | string | flex-start / flex-end / center / space-between / space-around / space-evenly | flex-start |
| gap | 间距 | number / string | - | 0 |
| gutter | 间距（兼容） | number / string | - | 0 |
| wrap | 是否换行 | string | nowrap / wrap / wrap-reverse | nowrap |

### HddFlexItem

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| flex | flex 属性 | number / string | - | 0 1 auto |
| grow | 增长比例 | number / boolean | - | 0 |
| shrink | 收缩比例 | number / boolean | - | 1 |
| basis | 基准大小 | string | - | auto |
| align | 单独对齐 | string | auto / flex-start / flex-end / center / stretch / baseline | auto |
