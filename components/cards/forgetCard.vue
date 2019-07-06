<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <div class="card-title web-font-heiti2">
            忘记密码
        </div>
        <div class="login-main">
            <div class="my-inline-block login-left">
                <div class="avatar-back">
                    <img src="/img/avatar.jpg" alt="" width="75" height="75">
                </div>
            </div>
            <div class="my-inline-block login-right" id="login">

                <v-text-field single-line hide-details>
                    <template v-slot:label>
                        <span class="web-font-heiti2 field-text">请输入您的邮箱</span>
                    </template>
                    <template v-slot:prepend>
                        <v-icon size="25" color="rgba(52,73,94,0.6)">email</v-icon>
                    </template>
                </v-text-field>
                <v-text-field single-line hide-details>
                    <template v-slot:label>
                        <span class="web-font-heiti2 field-text">请输入您的密码</span>
                    </template>
                    <template v-slot:prepend>
                        <v-icon size="25" color="rgba(52,73,94,0.6)">iconfont blog-password</v-icon>
                    </template>
                    <template v-slot:append>
                        <v-btn icon small class="ma-0">
                            <v-icon size="20" color="rgba(52,73,94,0.4)">iconfont blog-eye1</v-icon>
                        </v-btn>
                    </template>
                </v-text-field>
            </div>
            <div class="my-inline-block login-append"></div>
        </div>
        <div class="submit mt-4">
            <v-btn class="mt-2" block round color="#5DADE2" depressed dark large @click="handleLogin">
                <span class="web-font-heiti2" style="font-size: 20px">重置密码</span>
                <v-icon size="20" class="ml-2">iconfont blog-1202youjiantou</v-icon>
            </v-btn>
        </div>
        <div class="server-edit bottom web-font-pingfang-thin my-a" @click="go(Cards.editServer)">配置服务器</div>
        <div class="create-user bottom web-font-pingfang-thin my-a" @click="go(Cards.createUser)">创建用户</div>
        <div class="up web-font-pingfang-thin" @click="go(Cards.login)">
            <v-icon color="#566573" style="margin-top: 2px" size="18">iconfont blog-arrow-circle-left</v-icon>
            <div class="my-inline-block login-text">登录</div>
        </div>
    </div>

</template>

<script>
  //todo 功能待完善
    import {Cards} from "./index";

    export default {
        name: "forgetCard",
        data: function () {
            return {
                remember: false,
                auto: false,
              Cards:Cards
            }
        },
        methods: {
            handleLogin() {
                this.$emit('handleLogin')
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
        padding-right: 50px;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
    }

    .bottom {
        position: absolute;
        font-size: 12px;
        bottom: 10px;
    }

    .create-user {
        right: 20px;
    }

    .server-edit {
        left: 20px;
    }


    .login-left {
        width: 90px;
        text-align: center;
        padding-top: 20px;
    }

    .login-right {
        width: 250px;
        text-align: center;
    }

    .login-main {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
    }

    .field-text {
        color: rgba(133, 146, 158, 0.4);
        font-size: 14px;
    }

    .up {
        position: absolute;
        font-size: 12px;
        top: 10px;
        color: #566573;
        cursor: pointer;
    }

    .login-text {
        font-size: 14px;
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
