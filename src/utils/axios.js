import axios from 'axios'
// import Vue from 'vue'
// import { Toast } from 'vant'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  retry: 4, // 重连次数
  retryDelay: 1000, // 重连间隔时间
  withCredentials: true
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res)
    if (res.code !== 20000) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
