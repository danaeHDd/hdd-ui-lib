import type { App } from 'vue'
import { HddButton } from './components/button'
import './theme/src/index.css'

const components = [HddButton]

const install = (app: App): void => {
  components.forEach((component) => {
    app.use(component)
  })
}

export default {
  install
}

export * from './components/button'
