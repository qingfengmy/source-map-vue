import { createApp } from 'vue'
import ErrorStackParser from 'error-stack-parser'
import './style.css'
import App from './App.vue'
import { findCodeBySourceMap } from './utils'

const app = createApp(App)
app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info)
  const stackFrame = ErrorStackParser.parse(err as any)[0]
  findCodeBySourceMap(stackFrame)
}