<template>
  <div class="demo-card">
    <h3>Material Icons 基础用法</h3>
    <p class="demo-description">通过 name 属性直接使用 Material Icons</p>
    <div class="icon-demo">
      <div class="icon-item">
        <HddIcon name="home" :size="48" />
        <span>home</span>
      </div>
      <div class="icon-item">
        <HddIcon name="search" :size="48" />
        <span>search</span>
      </div>
      <div class="icon-item">
        <HddIcon name="settings" :size="48" />
        <span>settings</span>
      </div>
      <div class="icon-item">
        <HddIcon name="favorite" :size="48" />
        <span>favorite</span>
      </div>
      <div class="icon-item">
        <HddIcon name="menu" :size="48" />
        <span>menu</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>图标变体</h3>
    <p class="demo-description">filled（默认）、outlined、round、sharp、two-tone</p>
    <div class="icon-demo">
      <div class="icon-item">
        <HddIcon name="home" variant="filled" :size="40" />
        <span>filled</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" variant="outlined" :size="40" />
        <span>outlined</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" variant="round" :size="40" />
        <span>round</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" variant="sharp" :size="40" />
        <span>sharp</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" variant="two-tone" :size="40" />
        <span>two-tone</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>不同尺寸</h3>
    <p class="demo-description">支持多种尺寸，默认为 24px</p>
    <div class="icon-demo">
      <div class="icon-item">
        <HddIcon name="home" :size="16" />
        <span>16px</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" :size="20" />
        <span>20px</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" :size="24" />
        <span>24px</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" :size="32" />
        <span>32px</span>
      </div>
      <div class="icon-item">
        <HddIcon name="home" :size="48" />
        <span>48px</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>自定义颜色</h3>
    <p class="demo-description">通过 color 属性设置图标颜色</p>
    <div class="icon-demo">
      <div class="icon-item">
        <HddIcon name="favorite" :size="32" color="#9E8A57" />
        <span>primary</span>
      </div>
      <div class="icon-item">
        <HddIcon name="favorite" :size="32" color="#4CAF50" />
        <span>success</span>
      </div>
      <div class="icon-item">
        <HddIcon name="favorite" :size="32" color="#FF5252" />
        <span>danger</span>
      </div>
      <div class="icon-item">
        <HddIcon name="favorite" :size="32" color="#FFA826" />
        <span>warning</span>
      </div>
      <div class="icon-item">
        <HddIcon name="favorite" :size="32" color="#2196F3" />
        <span>info</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>旋转动画 (Loading)</h3>
    <p class="demo-description">设置 spin="true" 使图标旋转</p>
    <div class="icon-demo">
      <div class="icon-item">
        <HddIcon name="refresh" :size="48" :spin="true" />
        <span>refresh spin</span>
      </div>
      <div class="icon-item">
        <HddIcon name="settings" :size="48" :spin="true" />
        <span>settings spin</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>可聚焦图标（Tab 键访问）</h3>
    <p class="demo-description">设置 tabindex="0" 使图标可通过键盘聚焦</p>
    <div class="icon-demo">
      <div class="icon-item">
        <HddIcon name="home" :size="32" tabindex="0" ariaLabel="首页" />
        <span>可聚焦</span>
      </div>
      <div class="icon-item">
        <HddIcon name="settings" :size="32" tabindex="0" ariaLabel="设置" />
        <span>可聚焦</span>
      </div>
      <div class="icon-item">
        <HddIcon name="search" :size="32" />
        <span>不可聚焦</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>常用 Material Icons</h3>
    <p class="demo-description">更多图标请参考 Material Icons 官网</p>
    <div class="icon-grid">
      <div class="icon-item">
        <HddIcon name="person" :size="32" />
        <span>person</span>
      </div>
      <div class="icon-item">
        <HddIcon name="mail" :size="32" />
        <span>mail</span>
      </div>
      <div class="icon-item">
        <HddIcon name="phone" :size="32" />
        <span>phone</span>
      </div>
      <div class="icon-item">
        <HddIcon name="edit" :size="32" />
        <span>edit</span>
      </div>
      <div class="icon-item">
        <HddIcon name="delete" :size="32" />
        <span>delete</span>
      </div>
      <div class="icon-item">
        <HddIcon name="add" :size="32" />
        <span>add</span>
      </div>
      <div class="icon-item">
        <HddIcon name="close" :size="32" />
        <span>close</span>
      </div>
      <div class="icon-item">
        <HddIcon name="check" :size="32" />
        <span>check</span>
      </div>
      <div class="icon-item">
        <HddIcon name="arrow_back" :size="32" />
        <span>arrow_back</span>
      </div>
      <div class="icon-item">
        <HddIcon name="star" :size="32" />
        <span>star</span>
      </div>
      <div class="icon-item">
        <HddIcon name="bookmark" :size="32" />
        <span>bookmark</span>
      </div>
      <div class="icon-item">
        <HddIcon name="share" :size="32" />
        <span>share</span>
      </div>
    </div>
  </div>

  <div class="demo-card">
    <h3>自定义 SVG 图标</h3>
    <p class="demo-description">通过插槽传入自定义 SVG 内容</p>
    <div class="icon-demo">
      <div class="icon-item">
        <HddIcon :size="24">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" />
        </HddIcon>
        <span>自定义箭头</span>
      </div>
      <div class="icon-item">
        <HddIcon :size="32">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
        </HddIcon>
        <span>自定义圆形</span>
      </div>
      <div class="icon-item">
        <HddIcon :size="40">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none" />
        </HddIcon>
        <span>自定义方形</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HddIcon } from 'hdd-ui-lib'
</script>

<style scoped>
.icon-demo {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hdd-spacing-6);
  padding: var(--hdd-spacing-4);
  background: var(--hdd-color-neutral-05);
  border-radius: var(--hdd-radius-md);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: var(--hdd-spacing-6);
  padding: var(--hdd-spacing-4);
  background: var(--hdd-color-neutral-05);
  border-radius: var(--hdd-radius-md);
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--hdd-spacing-2);
}

.icon-item span {
  font-size: var(--hdd-font-size-xs);
  color: var(--hdd-color-neutral-04);
}

.demo-description {
  margin-bottom: var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-02);
}
</style>
