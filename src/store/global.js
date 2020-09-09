import { ENUM_LANG } from '@/constants/common'

export const SET_LANG = 'SET_LANG' // 设置语言

export default {
  state: {
    lang: ENUM_LANG.zhCN // 默认简体
  },
  mutations: {
    [SET_LANG] (state, lang) {
      state.lang = lang
    }
  }
}
