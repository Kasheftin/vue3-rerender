import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import test from './directives/test'

const app = createApp(App)
app.use(store)
app.directive('test', test)
app.mount('#app')
