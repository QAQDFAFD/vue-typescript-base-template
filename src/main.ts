import { createApp } from 'vue'
import './styles/style.css'
import ElementPlus from 'element-plus'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from './App.vue'
// routes
import router from './routes/index'
// pinia
import pinia from '@/store'
// 全局组件
import globalComponent from '@/components'
// icon
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(globalComponent)
app.use(pinia)
app.use(router)
app.mount('#app')
