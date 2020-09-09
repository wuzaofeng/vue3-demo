import { ENUM_LANG } from '@/constants/common'

// 获取UA语言类型
export const getUAgentLang = () => {
  const UA = window.navigator.userAgent
  const regx = new RegExp(`LANG/(${ENUM_LANG.enUS}|${ENUM_LANG.zhHK}|${ENUM_LANG.zhCN})`, 'g')
  const result = regx.exec(UA)
  return result ? result[1] : ENUM_LANG.zhCN
}
