import axios from '@/utils/axios'

// 检查用户是否登录并获取用户基本信息
export function checkLogin (params) {
  return axios({
    url: '/user',
    params
  })
}
