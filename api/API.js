import {requestMethods} from './Request'

let _ = require('lodash')

export class Api {

    constructor(axios) {
        this._axios = axios
    }

    async send(request) {
        let call = this.Methods(request.requestMethod)
        let result
        try {
            if (!_.isUndefined(request.header)) {
                //存在header
                console.log('存在header')
                if (!_.isUndefined(request.params)) {
                    //存在params
                    console.log('存在params')
                    result = await call(request.url, request.params, request.header)
                } else {
                    //不存在params
                    console.log('不存在params')
                    result = await call(request.url, null, request.header)
                }
            } else if (!_.isUndefined(request.params)) {
                //不存在header，存在params
                console.log('不存在header，存在params')
                result = await call(request.url, request.params)
            } else {
                //header于params均不存在
                console.log('header与params均不存在')
                result = await call(request.url)
            }
        } catch (err) {
            return Promise.reject(err)
        }

        return Promise.resolve(result.data)
    }

    Methods(method) {
        switch (method) {
            case requestMethods.GET:
                return this._axios.get
            case requestMethods.PUT:
                return this._axios.put
            case requestMethods.DELETE:
                return this._axios.delete
            case requestMethods.PATCH:
                return this._axios.patch
            case requestMethods.POST:
                return this._axios.post
        }
    }

}


