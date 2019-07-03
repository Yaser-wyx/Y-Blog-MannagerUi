<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="my-card" style="height:300px;margin-top:20vh">
    <div class="card-title web-font-heiti2">
      登录
    </div>
    <div class="login-main">
      <div class="my-inline-block login-left">
        <v-avatar
          size="70"
          color="grey lighten-4"
          slot="activator"
        >
          <img :src="user.avatar">
        </v-avatar>
      </div>
      <div class="my-inline-block login-right" id="login">
        <v-form lazy-validation ref="login" v-model="valid">
          <v-text-field single-line hide-details readonly :value="user.userName">
            <template v-slot:prepend>
              <v-icon size="25" color="rgba(52,73,94,0.6)">iconfont blog-user</v-icon>
            </template>
            <template v-slot:append-outer>
              <div class="web-font-heiti2 append-text my-a" @click="go(Cards.createUser)">创建用户</div>
            </template>
          </v-text-field>
          <v-text-field :rules="passwordRules" required single-line hide-details :type="showPassword?'text':'password'"
                        v-model="user.password">
            <template v-slot:label>
              <span class="web-font-heiti2 field-text" :style="passwordStyle">请输入您的密码</span>
            </template>
            <template v-slot:prepend>
              <v-icon size="25" color="rgba(52,73,94,0.6)">iconfont blog-password</v-icon>
            </template>
            <template v-slot:append>
              <v-btn icon small class="ma-0" v-if="showPassword" @click="showPassword=false">
                <v-icon size="20" color="rgba(52,73,94,0.4)">iconfont blog-eye-off</v-icon>
              </v-btn>
              <v-btn icon small class="ma-0" v-else @click="showPassword=true">
                <v-icon size="20" color="rgba(52,73,94,0.4)">iconfont blog-eye1</v-icon>
              </v-btn>
            </template>
            <template v-slot:append-outer>
              <div class="web-font-heiti2 append-text my-a" @click="go(Cards.forget)">忘记密码</div>
            </template>
          </v-text-field>
        </v-form>

      </div>
      <div class="my-inline-block login-append"></div>
    </div>
    <div class="submit mt-2">
      <div class="option ">
        <div class="left">
          <v-checkbox
            class="ma-0"
            hide-details
            color="blue"
            v-model="remember"
            label="记住密码"
          >
            <template v-slot:label>
              <div class="option-text web-font-heiti2">记住密码</div>
            </template>
          </v-checkbox>
        </div>
        <div class="right">
          <v-checkbox
            class="ma-0"
            color="blue"

            hide-details
            v-model="auto"
          >
            <template v-slot:label>
              <div class="option-text web-font-heiti2">自动登录</div>
            </template>
          </v-checkbox>
        </div>
      </div>
      <v-btn class="mt-2" block round color="#5DADE2" depressed dark large @click="handleLogin">
        <span class="web-font-heiti2" style="font-size: 20px">登录</span>
        <v-icon size="20" class="ml-2">iconfont blog-1202youjiantou</v-icon>
      </v-btn>
    </div>
    <div class="server-edit my-a web-font-pingfang-thin" @click="go(Cards.editServer)">配置服务器</div>
    <div class="after web-font-pingfang-thin my-a" @click="go(Cards.selectUser)">选择用户</div>
  </div>

</template>

<script>
  import {Cards} from "./index";

  export default {
    name: "loginCard",
    data: function () {
      return {
        remember: false,
        auto: false,
        Cards: Cards,
        user: {},
        showPassword: false,
        valid: false,
        passwordRules: [
          v => !!v || '密码不为空'
        ],
      }
    },
    computed: {
      passwordStyle: function () {
        if (this.valid) {
          return ""
        } else {
          return "color: #ff5252 !important;"
        }
      }
    },
    methods: {
      handleLogin() {
        if (this.$refs.login.validate() && this.valid) {
          this.$emit('handleLogin', this.user)
        }
      },
      go(step) {
        this.$emit('go', step)
      }
    }
  }
</script>

<style scoped>
  .card-title {
    text-align: center;
    width: 100%;
    font-size: 30px;
    color: rgba(46, 64, 83, .9);
    font-weight: 600;
  }

  .avatar-back {
    padding-top: 3px;
    height: 75px;
    width: 75px;
    border-radius: 101px;
    box-shadow: #85929E 0 0 10px 1px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .submit {
    width: 440px;
    padding-left: 120px;
    padding-right: 70px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }

  .server-edit {
    position: absolute;
    font-size: 11px;
    bottom: 10px;
    left: 20px;

  }


  .login-left {
    width: 90px;
    text-align: center;
    padding-top: 20px;
  }

  .login-right {
    width: 300px;
    text-align: center;
  }

  .login-main {
    width: 440px;
    margin-left: auto;
    margin-right: auto;
  }

  .append-text {
    font-size: 11px;
    padding-top: 15px;
    cursor: pointer;
  }

  .option {
    height: 30px;
  }

  .option-text {
    font-size: 11px;
    color: #7F8C8D;
  }

  .field-text {
    color: rgba(133, 146, 158, 0.4);
    font-size: 14px;
    transition: 0.5s;
  }

  .after {
    position: absolute;
    font-size: 11px;
    bottom: 10px;
    right: 20px;
  }
</style>
<style>
  #login /deep/ .v-input__control {
    width: 210px !important;
  }

  .option .v-input--selection-controls__input {
    margin-right: 0 !important;
  }

  .option .v-icon {
    font-size: 20px !important;
  }
</style>
