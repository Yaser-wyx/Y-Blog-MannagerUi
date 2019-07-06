import {Api} from "./API";
import {requestMethods, Request} from "./Request";

let _ = require("lodash")
let $md5 = require('md5')
const SERVER = "/server"

export class ServerApi extends Api {
  async userLogin(userId, password) {
    let url = `${SERVER}/login`
    let params = {
      userId: userId,
      password: $md5(password)
    }
    return await this.send(new Request(requestMethods.POST, url, params))

  }

  async getServerUsers() {
    let url = `${SERVER}/user`
    return await this.send(new Request(requestMethods.GET, url))
  }

  async testConnect() {
    let url = `${SERVER}/test`
    return await this.send(new Request(requestMethods.GET, url))
  }

  async uploadAvatar(avatarFile) {
    let url = `${SERVER}/upload`
    let params = new FormData()
    params.append('file', avatarFile)
    let header = {
      'Content-Type': 'multipart/form-data'
    }
    return await this.send(new Request(requestMethods.POST, url, params, header))

  }

  async createUser(userName, avatar, email, password) {
    let url = `${SERVER}/user`
    let params = {
      userName: userName,
      avatar: avatar,
      email: email,
      password: $md5(password)
    }
    console.log(avatar)
    return await this.send(new Request(requestMethods.POST, url, params))

  }
}
