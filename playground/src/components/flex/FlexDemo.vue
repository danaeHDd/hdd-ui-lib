<template>
  <div class="demo-card">
    <h3>基础用法</h3>
    <div class="demo-description">默认水平排列</div>
    <Flex :gap="12">
      <FlexItem>
        <div class="flex-item-content">Item 1</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">Item 2</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">Item 3</div>
      </FlexItem>
    </Flex>
  </div>

  <div class="demo-card">
    <h3>flex 分布</h3>
    <div class="demo-description">子元素自动填充剩余空间</div>
    <Flex :gap="12">
      <FlexItem>
        <div class="flex-item-content">固定宽度</div>
      </FlexItem>
      <FlexItem :flex="1">
        <div class="flex-item-content flex-grow">自动填充</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">固定宽度</div>
      </FlexItem>
    </Flex>
  </div>

  <div class="demo-card">
    <h3>flex-grow</h3>
    <div class="demo-description">子元素增长比例</div>
    <Flex :gap="12">
      <FlexItem :grow="1">
        <div class="flex-item-content">1</div>
      </FlexItem>
      <FlexItem :grow="2">
        <div class="flex-item-content">2</div>
      </FlexItem>
      <FlexItem :grow="1">
        <div class="flex-item-content">1</div>
      </FlexItem>
    </Flex>
  </div>

  <div class="demo-card">
    <h3>对齐方式</h3>
    <div class="demo-description">align 属性控制交叉轴对齐</div>
    <Flex :gap="12" align="center">
      <FlexItem>
        <div class="flex-item-content tall">Item 1</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">Item 2</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content tall">Item 3</div>
      </FlexItem>
    </Flex>
  </div>

  <div class="demo-card">
    <h3>主轴对齐</h3>
    <div class="demo-description">justify 属性控制主轴对齐</div>
    <Flex :gap="12" justify="space-between">
      <FlexItem>
        <div class="flex-item-content">左对齐</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">中间</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">右对齐</div>
      </FlexItem>
    </Flex>
  </div>

  <div class="demo-card">
    <h3>换行</h3>
    <div class="demo-description">wrap 属性控制是否换行</div>
    <Flex :gap="12" wrap="wrap">
      <FlexItem v-for="i in 10" :key="i">
        <div class="flex-item-content">Item {{ i }}</div>
      </FlexItem>
    </Flex>
  </div>

  <div class="demo-card">
    <h3>垂直方向</h3>
    <div class="demo-description">direction 属性控制排列方向</div>
    <Flex direction="column" :gap="12">
      <FlexItem>
        <div class="flex-item-content">垂直</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">排列</div>
      </FlexItem>
      <FlexItem>
        <div class="flex-item-content">布局</div>
      </FlexItem>
    </Flex>
  </div>

  <div class="demo-card">
    <h3>flex-shrink</h3>
    <div class="demo-description">子元素收缩比例（容器宽度不足时）</div>
    <div class="flex-shrink-demo">
      <Flex :gap="0">
        <FlexItem :shrink="0">
          <div class="flex-item-content">不收缩</div>
        </FlexItem>
        <FlexItem :shrink="1">
          <div class="flex-item-content">收缩1</div>
        </FlexItem>
        <FlexItem :shrink="2">
          <div class="flex-item-content">收缩2</div>
        </FlexItem>
      </Flex>
    </div>
  </div>

  <div class="demo-card">
    <h3>自定义间距</h3>
    <div class="demo-description">通过 gap 属性设置间距</div>
    <Flex :gap="24">
      <FlexItem v-for="i in 4" :key="i">
        <div class="flex-item-content">gap=24</div>
      </FlexItem>
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { Flex, FlexItem } from 'hdd-ui-lib'
</script>

<style scoped>
.demo-description {
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-03);
  margin-bottom: var(--hdd-spacing-4);
}

.flex-item-content {
  background: var(--hdd-color-primary-05);
  border-radius: var(--hdd-radius-sm);
  padding: var(--hdd-spacing-3);
  text-align: center;
  color: var(--hdd-color-primary-01);
  font-weight: 500;
  border: 1px solid var(--hdd-color-primary-04);
  font-size: var(--hdd-font-size-sm);
}

.flex-grow {
  background: var(--hdd-color-primary-04);
}

.flex-item-content.tall {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-shrink-demo {
  border: 1px dashed var(--hdd-border-color-default);
  border-radius: var(--hdd-radius-sm);
}

.flex-shrink-demo .flex-item-content {
  border-radius: 0;
  border: none;
  border-right: 1px dashed var(--hdd-border-color-default);
}
</style>