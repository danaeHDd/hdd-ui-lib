<template>
  <div class="demo-card">
    <h3>基础布局</h3>
    <div class="layout-preview">
      <Layout>
        <Header class="demo-header">Header</Header>
        <Content class="demo-content">Content</Content>
        <Footer class="demo-footer">Footer</Footer>
      </Layout>
    </div>
  </div>

  <div class="demo-card">
    <h3>带侧边栏布局</h3>
    <div class="layout-preview">
      <Layout has-sider>
        <Sider class="demo-sider">Sider</Sider>
        <div class="demo-inner-layout">
          <Header class="demo-header">Header</Header>
          <Content class="demo-content">Content</Content>
          <Footer class="demo-footer">Footer</Footer>
        </div>
      </Layout>
    </div>
  </div>

  <div class="demo-card">
    <h3>侧边栏折叠</h3>
    <div class="layout-preview">
      <Layout has-sider>
        <Sider :collapsed="collapsed" class="demo-sider">
          <div v-if="!collapsed">展开状态</div>
          <div v-else>折叠</div>
        </Sider>
        <div class="demo-inner-layout">
          <Header class="demo-header">
            <button @click="collapsed = !collapsed" class="toggle-btn">
              {{ collapsed ? '展开侧边栏' : '折叠侧边栏' }}
            </button>
          </Header>
          <Content class="demo-content">Content</Content>
          <Footer class="demo-footer">Footer</Footer>
        </div>
      </Layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Footer, Content, Sider } from 'hdd-ui-lib'

const collapsed = ref(false)
</script>

<style scoped>
.demo-card {
  background: var(--hdd-color-white);
  border-radius: var(--hdd-radius-lg);
  padding: var(--hdd-spacing-5);
  margin-bottom: var(--hdd-spacing-4);
}

.demo-card:last-child {
  margin-bottom: 0;
}

.demo-card h3 {
  margin: 0 0 var(--hdd-spacing-4);
  font-size: var(--hdd-font-size-md);
  font-weight: 600;
  color: var(--hdd-color-neutral-06);
}

.layout-preview {
  border: var(--hdd-border-width-sm) solid var(--hdd-border-color-default);
  border-radius: var(--hdd-radius-md);
  overflow: hidden;
  min-height: 320px;
}

.demo-inner-layout {
  display: flex;
  flex-direction: column;
  min-height: 320px;
}

.demo-header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 var(--hdd-spacing-4);
  background: var(--hdd-color-primary-01);
  color: #ffffff;
}

.demo-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hdd-color-neutral-05);
  color: var(--hdd-color-neutral-06);
}

.demo-footer {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 var(--hdd-spacing-4);
  background: var(--hdd-color-neutral-03);
  color: #ffffff;
}

.demo-sider {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hdd-color-primary-05);
  color: var(--hdd-color-primary-01);
  border-right: var(--hdd-border-width-sm) solid var(--hdd-border-color-default);
  transition: width var(--hdd-transition-duration-normal);
}

.demo-sider.collapsed {
  width: 64px;
}

.toggle-btn {
  padding: var(--hdd-spacing-2) var(--hdd-spacing-4);
  background: rgba(255, 255, 255, 0.2);
  border: var(--hdd-border-width-sm) solid rgba(255, 255, 255, 0.3);
  border-radius: var(--hdd-radius-sm);
  color: #ffffff;
  cursor: pointer;
  font-size: var(--hdd-font-size-sm);
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>