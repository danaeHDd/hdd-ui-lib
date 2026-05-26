import type { App } from 'vue'
import { HddButton } from './components/button'
import { Layout, Header, Footer, Content, Sider } from './components/layout'
import { HddIcon, HddInfoIcon, HddWarningIcon } from './components/icon'
import { Grid, GridItem } from './components/grid'
import { Flex, FlexItem } from './components/flex'
import { Divider } from './components/divider'
import './theme/src/index.css'

const components = [
  HddButton,
  Layout,
  Header,
  Footer,
  Content,
  Sider,
  HddIcon,
  HddInfoIcon,
  HddWarningIcon,
  Grid,
  GridItem,
  Flex,
  FlexItem,
  Divider
]

const install = (app: App): void => {
  components.forEach((component) => {
    if (component && component.name) {
      app.component(component.name, component)
    }
  })
}

export default {
  install
}

export * from './components/button'
export * from './components/layout'
export { HddIcon, HddInfoIcon, HddWarningIcon } from './components/icon'
export * from './components/grid'
export * from './components/flex'
export * from './components/divider'
