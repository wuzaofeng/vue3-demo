import { Locale } from 'vant'

import { ENUM_LANG } from '@/constants/common'

import { createI18n } from 'vue-i18n'

import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import zhTW from 'vant/lib/locale/lang/zh-TW'

import customEnUS from './en_US'
import customZhCN from './zh_CN'
import customZhTW from './zh_TW'

const messages = {
  [ENUM_LANG.enUS]: {
    ...customEnUS,
    ...enUS
  },
  [ENUM_LANG.zhCN]: {
    ...customZhCN,
    ...zhCN
  },
  [ENUM_LANG.zhHK]: {
    ...customZhTW,
    ...zhTW
  }
}

console.log(messages)
export const i18n = createI18n({
  locale: ENUM_LANG.zhCN, // 设置默认语言
  messages// 设置资源文件对象
})

// 切换语言
export const setLang = (lang) => {
  // 设置组件国际化
  switch (lang) {
    case ENUM_LANG.enUS:
      Locale.use('en-US', enUS)
      break
    case ENUM_LANG.zhHK:
      Locale.use('zh-TW', zhTW)
      break
    default:
      Locale.use('zh-CN', zhCN)
  }

  // 当前语言
  i18n.global.locale.value = lang
  console.log(lang, 'vant组件设置成功')
}

// 获取当前语言
export const getLang = () => {
  return i18n && i18n.global.locale.value
}

// 获取UA语言类型
export const getUAgentLang = () => {
  const UA = window.navigator.userAgent
  const regx = new RegExp(`LANG/(${ENUM_LANG.enUS}|${ENUM_LANG.zhHK}|${ENUM_LANG.zhCN})`, 'g')
  const result = regx.exec(UA)
  return result ? result[1] : ENUM_LANG.zhCN
}
