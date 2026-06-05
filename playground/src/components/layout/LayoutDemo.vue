<template>
  <div class="demo-card">
    <h3>基础布局</h3>
    <div class="layout-preview">
      <Layout>
        <Header height="80px" class="demo-header">Header (height: 80px)</Header>
        <Content class="demo-content">Content</Content>
        <Footer height="50px" class="demo-footer">Footer (height: 50px)</Footer>
      </Layout>
    </div>
  </div>

  <div class="demo-card">
    <h3>带侧边栏布局</h3>
    <div class="layout-preview">
      <Layout has-sider>
        <Sider width="300px" class="demo-sider">Sider (width: 300px)</Sider>
        <Layout>
          <Header class="demo-header">Header</Header>
          <Content class="demo-content">Content</Content>
          <Footer class="demo-footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  </div>

  <div class="demo-card">
    <h3>侧边栏折叠</h3>
    <div class="layout-preview">
      <Layout has-sider>
        <Sider width="250px" :collapsed="collapsed" class="demo-sider">
          <div v-if="!collapsed">Sider (width: 250px)</div>
          <div v-else>折叠</div>
        </Sider>
        <Layout>
          <Header class="demo-header">
            <button @click="collapsed = !collapsed" class="toggle-btn">
              {{ collapsed ? '展开侧边栏' : '折叠侧边栏' }}
            </button>
          </Header>
          <Content class="demo-content">Content</Content>
          <Footer class="demo-footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  </div>

  
  <div class="demo-card">
    <h3>上中下三栏布局（中间含侧边栏）</h3>
    <div class="layout-preview">
      <Layout >
        <Header class="demo-header">Header</Header>
        <Layout has-sider>
          <Sider class="demo-sider">Sider </Sider>
          <Content class="demo-content">Content</Content>
        </Layout>
        <Footer class="demo-footer">Footer</Footer>
      </Layout>
    </div>
  </div>
  
  <div class="demo-card">
    <h3>纯侧边栏布局</h3>
    <div class="layout-preview">
      <Layout has-sider>
        <Sider class="demo-sider" style="border-right: 1px solid #dddddd">Sider </Sider>
        <Content class="demo-content">Content</Content>
        <Sider class="demo-sider" width="300px" style="border-left: 1px solid #dddddd">Sider </Sider>
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
  height: 320px;
  display: flex;
  flex-direction: column;
}

.demo-header {
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
  display: flex;
  align-items: center;
  padding: 0 var(--hdd-spacing-4);
  background: var(--hdd-color-neutral-03);
  color: #ffffff;
}

.demo-sider {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hdd-color-primary-05);
  color: var(--hdd-color-primary-01);
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