import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HDDUI from '../../packages'
import '../../packages/theme/src/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(HDDUI)
  },
} satisfies Theme
