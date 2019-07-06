import {ApiNameList} from "../api/apiNames";

export const state = () => ({
  serverApi: null

})

export const mutations = {
  //加载所有的API
  setApi(state, data) {
    data.forEach(item => {
      state[item.apiName] = item.api
    })
  },
  //将所有的API添加token
  setToken(state, token) {
    ApiNameList.forEach(apiName => {
      state[apiName].setToken(token)
    })
  }
}

export const actions = {}
