import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 在这里导入你的 CSS 文件
import './assets/style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
