import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HDDUI from 'hdd-ui-lib'
import DemoBlock from './components/DemoBlock.vue'
import './vitepress-overrides.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(HDDUI)
    app.component('DemoBlock', DemoBlock)
  },
} satisfies Theme
