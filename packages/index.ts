import type { App } from 'vue'
import { HddButton } from './components/button'
import { Layout, Header, Footer, Content, Sider } from './components/layout'
import { HddIcon, HddInfoIcon, HddWarningIcon } from './components/icon'
import { Grid, GridItem } from './components/grid'
import { Flex, FlexItem } from './components/flex'
import { Divider } from './components/divider'
import { HddLink } from './components/link'
import { HddText } from './components/text'
import { HddSpace } from './components/space'
import { HddInput } from './components/input'
import { HddInputNumber } from './components/input-number'
import { HddRadio } from './components/radio'
import { HddCheckbox } from './components/checkbox'
import { HddSwitch } from './components/switch'
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
  Divider,
  HddLink,
  HddText,
  HddSpace,
  HddInput,
  HddInputNumber,
  HddRadio,
  HddCheckbox,
  HddSwitch
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
export * from './components/link'
export * from './components/text'
export * from './components/space'
export * from './components/input'
export * from './components/input-number'
export * from './components/radio'
export * from './components/checkbox'
export * from './components/switch'
