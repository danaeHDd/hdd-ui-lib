<template>
  <div class="demo-card">
    <h3>基础网格</h3>
    <div class="demo-description">默认12列网格布局</div>
    <Grid :gap="16">
      <GridItem v-for="i in 12" :key="i" :span="1">
        <div class="grid-item-content">{{ i }}</div>
      </GridItem>
    </Grid>
  </div>

  <div class="demo-card">
    <h3>列数控制</h3>
    <div class="demo-description">通过cols属性设置列数</div>
    <Grid :cols="4" :gap="16">
      <GridItem v-for="i in 4" :key="i">
        <div class="grid-item-content">{{ i }}</div>
      </GridItem>
    </Grid>
  </div>

  <div class="demo-card">
    <h3>不同跨度</h3>
    <div class="demo-description">通过span属性控制跨越列数</div>
    <Grid :gap="16">
      <GridItem :span="6">
        <div class="grid-item-content">span=6</div>
      </GridItem>
      <GridItem :span="3">
        <div class="grid-item-content">span=3</div>
      </GridItem>
      <GridItem :span="3">
        <div class="grid-item-content">span=3</div>
      </GridItem>
    </Grid>
  </div>

  <div class="demo-card">
    <h3>不等分布局</h3>
    <div class="demo-description">灵活的列分布</div>
    <Grid :gap="16">
      <GridItem :span="4">
        <div class="grid-item-content">span=4</div>
      </GridItem>
      <GridItem :span="8">
        <div class="grid-item-content">span=8</div>
      </GridItem>
    </Grid>
  </div>

  <div class="demo-card">
    <h3>复杂布局</h3>
    <div class="demo-description">多种跨度组合</div>
    <Grid :gap="16">
      <GridItem :span="12">
        <div class="grid-item-content">span=12</div>
      </GridItem>
      <GridItem :span="4">
        <div class="grid-item-content">span=4</div>
      </GridItem>
      <GridItem :span="4">
        <div class="grid-item-content">span=4</div>
      </GridItem>
      <GridItem :span="4">
        <div class="grid-item-content">span=4</div>
      </GridItem>
      <GridItem :span="6">
        <div class="grid-item-content">span=6</div>
      </GridItem>
      <GridItem :span="6">
        <div class="grid-item-content">span=6</div>
      </GridItem>
    </Grid>
  </div>

  <div class="demo-card">
    <h3>自定义间距</h3>
    <div class="demo-description">通过gap属性设置间距</div>
    <Grid :gap="8">
      <GridItem v-for="i in 6" :key="i" :span="2">
        <div class="grid-item-content">gap=8</div>
      </GridItem>
    </Grid>
    <Grid :gap="24" style="margin-top: 16px;">
      <GridItem v-for="i in 6" :key="i" :span="2">
        <div class="grid-item-content">gap=24</div>
      </GridItem>
    </Grid>
  </div>

  <div class="demo-card">
    <h3>自定义列模板</h3>
    <div class="demo-description">cols支持字符串类型，可以传入任意grid-template-columns值</div>
    <Grid cols="1fr 2fr 1fr" :gap="16">
      <GridItem>
        <div class="grid-item-content">1fr</div>
      </GridItem>
      <GridItem>
        <div class="grid-item-content">2fr</div>
      </GridItem>
      <GridItem>
        <div class="grid-item-content">1fr</div>
      </GridItem>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { Grid, GridItem } from 'hdd-ui-lib'
</script>

<style scoped>
.demo-description {
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-03);
  margin-bottom: var(--hdd-spacing-4);
}

.grid-item-content {
  background: var(--hdd-color-primary-05);
  border-radius: var(--hdd-radius-sm);
  padding: var(--hdd-spacing-4);
  text-align: center;
  color: var(--hdd-color-primary-01);
  font-weight: 500;
  border: 1px solid var(--hdd-color-primary-04);
}
</style>