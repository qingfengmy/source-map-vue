import { createApp } from 'vue'
import ErrorStackParser from 'error-stack-parser'
import './style.css'
import App from './App.vue'
// import { findCodeBySourceMap } from './utils'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { findCodeBySourceMap } from './utils'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus)
app.use(pinia);
app.use(router) // 挂载路由
// app.config.errorHandler = (err, vm, info) => {
//   const stackFrame = ErrorStackParser.parse(err as any)[0]
//   console.log('stackFrame', stackFrame)
  
//   // findCodeBySourceMap(stackFrame)
// }
app.mount('#app')