import _axios from 'axios'
import qs from 'qs'

let base_ = process.env.NODE_ENV === 'development' ? '' : ''

const axios = _axios.create({
  timeout: 10000
})

let base = base_

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true

// request拦截器
axios.interceptors.request.use(
  config => {
    // console.log('request拦截器')
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// response 拦截器
axios.interceptors.response.use(
  response => {
    console.log('response 拦截器')
    let res = response.data
    if ((res.success - 0) !== 1) {
      // todo tips
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    // todo tips
    return Promise.reject(error)
  }
)
// 获取产品
// export const apiGetProduct = params => {
//   return axios.post(`${base}uf.php?command=4`, qs.stringify(params))
// }
