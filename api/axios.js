import axios from 'axios'

let _ = require('lodash')

//axios封装

export class myAxios {
  constructor(urlAddress) {
    axios.defaults.baseURL = `${urlAddress}/api`
    axios.interceptors.response.use(response => {
      console.log(response.status)
      return response
    }, err => {
      if (err && err.response) {
        err.status = err.response.status
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break
          case 401:
            err.message = '未授权，请登录'
            break
          case 403:
            err.message = '拒绝访问'
            break

          case 404:
            err.message = `服务器连接失败，请检查您的网络或请求地址`
            break

          case 408:
            err.message = '请求超时'
            break

          case 500:
            err.message = '服务器内部错误'
            break

          case 501:
            err.message = '服务未实现'
            break

          case 502:
            err.message = '网关错误'
            break

          case 503:
            err.message = '服务不可用'
            break

          case 504:
            err.message = '网关超时'
            break

          case 505:
            err.message = 'HTTP版本不受支持'
            break

          default:
        }
      }

      return Promise.reject(err)
    })
  }

  setToken(token) {
    this.token = token
  }

  getToken() {
    return this.token
  }

  get(url, params = {}, headers = {}) {
    return axios.get(url, {params: params, headers: headers})
  }

  post(url, params, headers = {'Content-Type': 'application/json'}) {
    if (headers['Content-Type'] === 'application/json') {
      params = JSON.stringify(params)
    }
    return axios.post(url, params, {headers: headers})
  }

  put(url, params, headers = {}) {
    return axios.put(url, JSON.stringify(params), {headers: headers})
  }

  patch(url, params, headers = {}) {
    return axios.patch(url, JSON.stringify(params), {headers: headers})
  }

  delete(url, params, headers = {}) {
    return axios.delete(url, {params: params, headers: headers})
  }
}


