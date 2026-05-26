<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>组件目录</h2>
    </div>
    <nav class="sidebar-nav">
      <div v-for="group in navGroups" :key="group.name" class="nav-group">
        <div class="nav-group-title">{{ group.label }}</div>
        <ul class="nav-list">
          <li v-for="item in group.items" :key="item.name">
            <button 
              class="nav-item" 
              :class="{ active: activeComponent === item.name }"
              @click="$emit('select', item.name)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  activeComponent: string
}>()

defineEmits<{
  select: [name: string]
}>()

const navGroups = [
  {
    name: 'design',
    label: '设计令牌',
    items: [
      { name: 'color-system', label: '颜色系统' }
    ]
  },
  {
    name: 'components',
    label: 'UI组件',
    items: [
      { name: 'button', label: '按钮' },
      { name: 'layout', label: '布局' }
    ]
  }
]
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: white;
  border-right: 1px solid var(--hdd-color-neutral-04);
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--hdd-spacing-8));
  position: sticky;
  top: var(--hdd-spacing-8);
}

.sidebar-header {
  padding: var(--hdd-spacing-4);
  border-bottom: 1px solid var(--hdd-color-neutral-04);
}

.sidebar-header h2 {
  margin: 0;
  font-size: var(--hdd-font-size-sm);
  font-weight: 600;
  color: var(--hdd-color-neutral-06);
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: var(--hdd-spacing-2);
}

.nav-group {
  margin-bottom: var(--hdd-spacing-3);
}

.nav-group-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--hdd-color-neutral-03);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--hdd-spacing-1) var(--hdd-spacing-2);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  width: 100%;
  padding: var(--hdd-spacing-2) var(--hdd-spacing-3);
  text-align: left;
  background: none;
  border: none;
  border-radius: var(--hdd-radius-sm);
  font-size: var(--hdd-font-size-sm);
  color: var(--hdd-color-neutral-04);
  cursor: pointer;
  transition: all var(--hdd-transition-duration-fast);
}

.nav-item:hover {
  background: var(--hdd-color-neutral-05);
  color: var(--hdd-color-neutral-06);
}

.nav-item.active {
  background: var(--hdd-color-primary-05);
  color: var(--hdd-color-primary-01);
  font-weight: 500;
}
</style>