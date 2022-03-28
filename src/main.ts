import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 样式引用写在这里是有点乱的,最好在 用的那里引用
// require('./assets/css/base.css')

createApp(App).use(store).use(router).mount('#app')
