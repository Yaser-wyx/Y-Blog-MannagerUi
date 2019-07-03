export const state = () => ({
    serverApi: null

})

export const mutations = {
    //data格式：

    setApi(state, data) {
        data.forEach(item=>{
            state[item.apiName] = item.api
        })
    }
}

export const actions = {}
