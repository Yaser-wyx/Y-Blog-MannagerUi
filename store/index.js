export const state = () => ({
    user: {},//user信息
    isLogin: false,//是否登陆
    title: "",//标题栏
    url: ""
})

export const mutations = {
    setTitle(state, data) {
        state.title = data
    },
    setUrl(state, url) {
        state.url = url
    }
}

export const actions = {}
