import Icon from './src/icon.vue'
import InfoIcon from './src/InfoIcon.vue'
import WarningIcon from './src/WarningIcon.vue'
import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export const HddIcon = withInstall(Icon)
export const HddInfoIcon = withInstall(InfoIcon)
export const HddWarningIcon = withInstall(WarningIcon)

export default {
  install(app: App) {
    app.component(HddIcon.name, HddIcon)
    app.component(HddInfoIcon.name, HddInfoIcon)
    app.component(HddWarningIcon.name, HddWarningIcon)
  }
}
