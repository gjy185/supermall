import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import mitt from 'mitt'
import store from './store'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)

// app.probetype.$bus = 'abc'
app.config.globalProperties.$bus = new mitt()
// app.config.globalProperties.bus = new mitt()
// app.config.globalProperties.mittBus = new mitt()

// createApp(App).use(router).mount('#app')






