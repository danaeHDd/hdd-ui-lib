import { createApp } from 'vue'
import App from './App.vue'
import HDDUI from 'hdd-ui-lib'

const app = createApp(App)
app.use(HDDUI)
app.mount('#app')
