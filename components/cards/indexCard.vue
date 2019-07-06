<template>
  <div class="welcome">
    <editServer ref="editServer" v-if="step===Cards.editServer" @handleServer="handleServer"></editServer>
    <createUser ref="createUser" v-if="step===Cards.createUser" @go="go"
                @handleCreateUser="handleCreateUser"></createUser>
    <selectUser ref="selectUser" v-if="step===Cards.selectUser" @go="go" @selectUser="handleSelectUser"></selectUser>
    <loginCard ref="login" v-if="step===Cards.login" @go="go" @handleLogin="login"></loginCard>
    <forgetCard ref="forget" v-if="step===Cards.forget"></forgetCard>
  </div>
</template>

<script>
  import createUser from "./createUser";
  import editServer from "./editServer";
  import loginCard from "./loginCard";
  import forgetCard from "./forgetCard";
  import {addItemToConfig, init, loadApis, testConnection, writeServerConfig} from "./index";
  import {Cards} from "./index";
  import selectUser from "./selectUser";
  import {delayExec} from "../../utils";
  import {FAILURE} from "../../utils/Constant";

  let _ = require('lodash')
  export default {
    name: "welcomeCard",
    components: {
      createUser, editServer, loginCard, forgetCard, selectUser
    },
    mounted() {
      this.$store.commit('setTitle', "欢迎使用Y-Blog")
      init(this).then(config => {
        console.log('init', config)//初始化加载配置文件
        if (config) {
          //有配置文件，读取地址信息，加载到状态树中
          this.$store.commit('setUrl', config.url)
          if (config.user) {
            //存在用户信息，则直接使用该用户信息进行登录
            this.step = this.Cards.login
            delayExec(() => {
              this.$refs.login.user = config.user
              if (config.user.password) {
                this.$refs.login.remember = true
              }
              if (config.auto && !this.$store.state.isLogout) {
                //如果是自动登录，则直接进行登录操作
                // 同时需要判断当前是否是退出状态，如果是退出状态则取消自动登录选项
                this.login(config.user, true, true)
              }
            })
          } else {
            if (config.userCount > 0) {
              //服务器上有用户，跳转到选择页面
              this.step = this.Cards.selectUser
            } else {
              //服务器上没用户，跳转到用户创建页面
              this.step = this.Cards.createUser
            }
          }
        }
      })
    },
    computed: {
      apis: function () {
        return this.$store.state.api
      },
    },
    data: function () {
      return {
        Cards: Cards,
        step: 0,
      }
    },
    methods: {
      async login(user, remember, auto) {
        try {
          let loginResult = await this.apis.serverApi.userLogin(user.userId, user.password)
          if (loginResult.code === FAILURE) {
            this.$message.error(loginResult.msg)
          } else {
            this.$message.success("登录成功！")
            console.log(loginResult.data)
            this.$store.commit('api/setToken', loginResult.data.token)//设置token
            this.$store.commit("login", loginResult.data.user)//设置登录状态信息
            if (!remember) {//如果不需要记住密码
              _.unset(user, 'password')//将密码信息从用户信息中删除
            }
            addItemToConfig('user', user)//将新的user信息写入配置项中
            addItemToConfig('auto', auto)//设置是否需要自动登录
            this.$router.push('/mainWindow')//跳转页面
          }
        } catch (e) {
          this.$message.error(e.message)
        }
        //todo 完善用户选择器
      },
      handleSelectUser(selectedUser) {
        console.log(selectedUser)
        this.step = this.Cards.login
        delayExec(() => {
          this.$refs.login.user = selectedUser
        }, 100)
      },
      async handleServer(url) {
        loadApis(url)//使用指定的地址，加载所有的api
        let connectResult = await testConnection()//测试连接
        if (connectResult.status !== 200) {//如果连接失败
          this.$message.error(connectResult.message)
        } else {
          this.$message.success("服务器连接成功！")
          console.log('connectResult:', connectResult)
          this.$store.commit('setUrl', url)
          if (connectResult.userCount > 0) {
            //存在用户
            this.step = Cards.selectUser
          } else {
            //没有用户
            this.step = Cards.createUser
          }
        }
      },
      go(newStep) {
        this.step = newStep
      },
      async handleCreateUser(user) {
        this.apis.serverApi.createUser(user.userName, user.avatar, user.email, user.password).then(newUser => {
          //新创建的用户信息
          //将用户信息以及服务器地址信息保存到配置文件中
          let config = {
            url: this.$store.state.url,
            user: newUser
          }
          writeServerConfig(config)
          this.go(Cards.login)
          delayExec(() => {
            this.$refs.login.user = newUser
          })
        }).catch(e => {
          this.$message.error(e.message)
        })
      }
    }
  }
</script>

<style>
  .error--text {
    color: #ff5252 !important;
    caret-color: #ff5252 !important;
  }

</style>
