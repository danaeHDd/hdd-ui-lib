<template>
  <div class="button-demo">
    <h2>按钮组件</h2>
    <div class="demo-stack">
      <ButtonTypes />
      <ButtonSizes />
      <ButtonStates />
      <ButtonVariants />
      <ButtonIcons />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonTypes from './ButtonTypes.vue'
import ButtonSizes from './ButtonSizes.vue'
import ButtonStates from './ButtonStates.vue'
import ButtonVariants from './ButtonVariants.vue'
import ButtonIcons from './ButtonIcons.vue'
</script>

<style scoped>
.button-demo {
  padding: var(--hdd-spacing-2);
}

.button-demo h2 {
  margin: 0 0 var(--hdd-spacing-6);
  font-size: var(--hdd-font-size-xl);
  color: var(--hdd-color-neutral-06);
  padding-bottom: var(--hdd-spacing-3);
  border-bottom: 2px solid var(--hdd-color-primary-03);
}

.demo-stack {
  display: flex;
  flex-direction: column;
  gap: var(--hdd-spacing-6);
}
</style>