<template>
  <div class="demo-card">
    <h3>基础用法</h3>
    <div class="demo-description">最简单的分割线</div>
    <p>这是一段文字，下面会有一条分割线</p>
    <Divider />
    <p>这是分割线下面的另一段文字</p>
  </div>

  <div class="demo-card">
    <h3>带文字的分割线</h3>
    <div class="demo-description">在分割线中间添加文字</div>
    <Divider>文本内容</Divider>
    <Divider contentPosition="left">左对齐</Divider>
    <Divider contentPosition="right">右对齐</Divider>
  </div>

  <div class="demo-card">
    <h3>虚线分割线</h3>
    <div class="demo-description">使用 dashed 属性设置虚线样式</div>
    <Divider dashed />
    <Divider dashed>虚线带文字</Divider>
    <Divider dashed contentPosition="left">左对齐虚线</Divider>
  </div>

  <div class="demo-card">
    <h3>自定义颜色</h3>
    <div class="demo-description">使用 borderColor 和 textColor 自定义颜色</div>
    <Divider borderColor="#9E8A57" />
    <Divider borderColor="#4caf50">成功色分割线</Divider>
    <Divider borderColor="#ff0000" textColor="#ff0000">危险色分割线</Divider>
  </div>

  <div class="demo-card">
    <h3>垂直分割线</h3>
    <div class="demo-description">垂直方向的分割线，用于分隔行内元素</div>
    <div class="vertical-demo">
      <span>文字 1</span>
      <Divider direction="vertical" />
      <span>文字 2</span>
      <Divider direction="vertical" />
      <span>文字 3</span>
    </div>
    <div class="vertical-demo" style="margin-top: 16px;">
      <span>左侧</span>
      <Divider direction="vertical" dashed />
      <span>中间</span>
      <Divider direction="vertical" dashed />
      <span>右侧</span>
    </div>
  </div>

  <div class="demo-card">
    <h3>自定义间距</h3>
    <div class="demo-description">使用 margin 属性自定义分割线间距</div>
    <p>默认间距</p>
    <Divider />
    <p>自定义间距</p>
    <Divider margin="32px 0" />
    <p>大间距</p>
    <Divider margin="48px 0" />
  </div>

  <div class="demo-card">
    <h3>实际应用场景</h3>
    <div class="demo-description">分割线在真实布局中的使用</div>
    <div class="application-demo">
      <div class="header">
        <h4>内容标题</h4>
        <Divider />
      </div>
      <div class="content">
        <p>这里是主要内容区域，分割线可以很好地分隔页面的不同部分。</p>
        <p>让页面结构更清晰，视觉上更有层次感。</p>
      </div>
      <Divider />
      <div class="footer">
        <p>底部信息</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'hdd-ui-lib'
</script>

<style scoped>
.demo-description {
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-03);
  margin-bottom: var(--hdd-spacing-4);
}

.vertical-demo {
  display: flex;
  align-items: center;
  color: var(--hdd-color-neutral-04);
  font-size: var(--hdd-font-size-sm);
}

.application-demo {
  border: 1px solid var(--hdd-border-color-light);
  border-radius: var(--hdd-radius-sm);
  padding: var(--hdd-spacing-4);
}

.application-demo h4 {
  margin: 0 0 var(--hdd-spacing-2) 0;
  color: var(--hdd-color-neutral-01);
  font-size: var(--hdd-font-size-md);
}

.application-demo p {
  margin: var(--hdd-spacing-2) 0;
  color: var(--hdd-color-dark-04);
  font-size: var(--hdd-font-size-sm);
}
</style>