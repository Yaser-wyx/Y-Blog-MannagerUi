import {myAxios} from "../../api/axios";
import {ServerApi} from "../../api/serverApi";
import {ApiNames} from "../../api/apiNames";

let _ = require('lodash');
let _this;
let myApis;
export const Cards = {
  editServer: 0,
  createUser: 1,
  selectUser: 2,
  login: 3,
  forget: 4
}

export function writeServerConfig(config) {
  //将服务器配置写入localStorage
  window.localStorage.setItem("server", JSON.stringify(config))
}

export function addItemToConfig(path, itemValue) {
  //根据指定的路径添加指定项到配置文件中
  let config = readServerConfig()
  _.set(config, path, itemValue)
  writeServerConfig(config)
}

export function readServerConfig() {
  return JSON.parse(window.localStorage.getItem("server"))//读取配置
}

export async function testConnection() {
  let count
  try {
    count = await myApis.serverApi.testConnect()
  } catch (e) {
    return e
  }
  return {status: 200, userCount: count.userCount}
}


/**
 * 读取本机的配置，包括服务器地址，服务器用户信息，是否是初次加载
 */
export async function init($vm) {
  //TODO 添加加载信息
  console.log('init');
  _this = $vm;
  let config = readServerConfig();
  if (!_.isNull(config)) {//配置不为空
    //不是初次使用，读取用户信息与地址信息
    if (config.hasOwnProperty('url')) {//存在地址信息
      console.log('server url:', config.url);
      loadApis(config.url);//有服务器地址，使用指定的地址，加载所有的API
      let connectedResult = await testConnection()
      console.log("连接结果：", connectedResult)
      if (connectedResult.status === 200) {
        //测试连接成功
        _this.$message.success("服务器连接成功！")
        if (!config.hasOwnProperty('user')) {
          //如果配置文件里面没有用户信息，则判断服务器上是否有用户
          config.user = false
          config.userCount = connectedResult.userCount
        }
        return config
      } else {
        //连接失败
        _this.$message.error(connectedResult.message)
        return false
      }

    } else {//没有服务器地址，返回false
      console.log("there's no config");
      return false
    }
  }
  console.log("there's no config");
  return false//配置不存在
}

export function loadApis(url) {
  //将所有的API接口加载到状态树中
  let packApi = (apiName, api) => {//打包api请求
    return {apiName: apiName, api: api}
  };
  let $apis = [];//api数组
  let axios = new myAxios(url);
  let serverApi = new ServerApi(axios);
  $apis.push(packApi(ApiNames.SERVER_API, serverApi));
  _this.$store.commit('api/setApi', $apis);//将所有的api加载到状态树中
  myApis = _this.$store.state.api
}
