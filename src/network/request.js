// 封装
import axios from 'axios'

// 最简单的封装方法
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://152136.185.210:7878/api/hy66',
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })



  // 3.发送真正的网络请求  config是个函数
  // instance(config) 返回的是promise
 return instance(config)

}

