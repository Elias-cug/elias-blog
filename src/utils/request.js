import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:3000/', // url = base url + request url
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  request => {
    console.log('========' + request.url + '请求参数==================')
    console.log(request.data)
    return request
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 20000) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }
    console.log('========' + response.config.url + '返回参数==================')
    console.log(res)
    return res.data
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
