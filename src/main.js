import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initVant } from './vant'

import { i18n, setLang, getUAgentLang } from '@/lang'

// 初始化
function init () {
  // 语言初始化
  const lang = getUAgentLang()
  setLang(lang)
}

init()

initVant(createApp(App))
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app')
