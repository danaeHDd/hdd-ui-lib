import type { App } from 'vue'
import { HddButton } from './components/button'
import { Layout, Header, Footer, Content, Sider } from './components/layout'
import './theme/src/index.css'

const components = [
  HddButton,
  Layout,
  Header,
  Footer,
  Content,
  Sider
]

const install = (app: App): void => {
  components.forEach((component) => {
    app.use(component)
  })
}

export default {
  install
}

export * from './components/button'
export * from './components/layout'