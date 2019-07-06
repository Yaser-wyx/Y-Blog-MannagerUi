export const state = () => ({
  user: {},//user信息
  isLogin: false,//是否登陆
  title: "",//标题栏
  url: "",
  isLogout: false,//是否是退出状态
})

export const mutations = {
  setTitle(state, data) {
    state.title = data
  },
  setUrl(state, url) {
    state.url = url
  },
  login(state, user) {
    console.log("login", user)
    state.user = user
    state.isLogin = true
    state.isLogOut = false
  },
  logout(state) {
    state.isLogin = false
    state.isLogout = true
  }
}

export const actions = {}
