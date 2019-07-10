<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="my-card" style="height:450px;margin-top:9vh">
    <div class="card-title web-font-pingfang-thin">
      创建新用户
    </div>
    <div class="mt-2">
      <avatarCrop :size="80" v-model="avatar" @setAvatarValid="setAvatarValid"></avatarCrop>
      <div class="avatar-title web-font-pingfang-thin" :style="avatarStyle">
        {{avatarIsValid?'':"请选择头像"}}
      </div>
    </div>
    <div class="form">
      <v-form ref="user" v-model="valid" lazy-validation>
        <v-text-field class="pa-0" single-line v-model="user.userName" :rules="nickRules" required>
          <template v-slot:label>
            <span class="web-font-pingfang-thin input-back">请输入您的博客用户名</span>
          </template>
          <template v-slot:prepend>
            <v-icon size="25" color="rgba(52,73,94,0.6)">iconfont blog-user</v-icon>
          </template>
        </v-text-field>
        <v-text-field class="pa-0 mt-2" single-line v-model="user.email" :rules="emailRules"
                      required :error="emailError" :error-messages="emailMsg">
          <template v-slot:label>
            <span class="web-font-pingfang-thin input-back">请输入您的邮箱</span>
          </template>
          <template v-slot:prepend>
            <v-icon size="25" color="rgba(52,73,94,0.6)">email</v-icon>
          </template>
        </v-text-field>
        <v-text-field class="pa-0 mt-2" :type="showPassword?'text':'password'" single-line v-model="user.password"
                      :rules="passwordRules" required>
          <template v-slot:label>
            <span class="web-font-pingfang-thin input-back">请输入您的密码</span>
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
        </v-text-field>
      </v-form>
    </div>
    <div class="submit mt-3">
      <v-btn block round color="rgba(38,64,107,0.6)" depressed dark large @click="createUser">
        <span class="web-font-heiti2" style="font-size: 20px">开始使用</span>
        <v-icon size="20" class="ml-2">iconfont blog-1202youjiantou</v-icon>
      </v-btn>
    </div>
    <div class="pre web-font-pingfang-thin my-a" @click="go(Cards.editServer)">配置服务器</div>
    <div class="after web-font-pingfang-thin my-a" @click="go(Cards.selectUser)">选择用户</div>
  </div>


</template>

<script>
  import avatarCrop from "../../utils/avatarCrop";
  import {Cards} from "./index";

  let _ = require("lodash");
  export default {
    name: "createUser",
    components: {
      avatarCrop
    },
    computed: {
      newUser: function () {
        return Object.assign({avatar: this.avatar}, this.user)
      },
      emailError: function () {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (typeof (this.user.email) === 'undefined' || pattern.test(this.user.email) || this.user.email.length === 0) {
          this.emailMsg = '';
          return false
        }
        this.emailMsg = '请输入正确的邮箱';
        return true
      },
      apis: function () {
        return this.$store.state.api
      },
      avatarStyle: function () {
        if (!this.avatarIsValid) {
          return "color: #ff5252 !important;"
        } else {
          return ""
        }
      }
    },
    data: function () {
      return {
        user: {},
        Cards: Cards,
        deleteUserDialog: false,
        avatarIsValid: true,
        showPassword: false,
        avatar: null,//默认头像
        emailMsg: "",
        valid: false,
        nickRules: [
          v => !!v || '昵称不为空',
          v => {
            if (typeof (v) === 'undefined') {
              return true
            }
            return v.length >= 3 || '昵称不得少于3位'
          },
          v => {
            if (typeof (v) === 'undefined') {
              return true
            }
            return v.length <= 10 || '昵称不得超过10位'
          }
        ],
        emailRules: [
          v => !!v || '邮箱不可为空'
        ],
        passwordRules: [
          v => !!v || '密码不为空',
          v => {
            if (typeof (v) === 'undefined') {
              return true
            }
            return v.length >= 8 || '密码不得少于8位'
          },
          v => {
            if (typeof (v) === 'undefined') {
              return true
            }
            return v.length <= 16 || '密码不得超过16位'
          }
        ],
      }
    },
    methods: {
      createUser() {
        if (this.isValid()) {
          this.$emit('handleCreateUser', this.newUser)
        }
      },
      setAvatarValid(valid) {
        this.avatarIsValid = valid
      },
      isValid() {
        let flag = this.avatar !== null;
        this.avatarIsValid = flag;
        if (this.$refs.user.validate() && this.valid) {
          return flag
        } else {
          return false
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

  .form {
    width: 68%;
    height: 180px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .submit {
    width: 200px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }

  .avatar-title {
    font-size: 18px;
    color: #B2BABB;
    margin-top: 5px;
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    height: 20px;
    transition: 0.618s;
    cursor: pointer;
  }

  .input-back {
    font-size: 14px;
    color: rgba(133, 146, 158, 0.7);
  }

  .pre {
    position: absolute;
    font-size: 11px;
    bottom: 10px;
    left: 20px;
  }

  .after {
    position: absolute;
    font-size: 11px;
    bottom: 10px;
    right: 20px;
  }

</style>
