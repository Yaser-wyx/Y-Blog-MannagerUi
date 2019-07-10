<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="my-card" style="height:220px;margin-top:25vh">
    <div class="card-title web-font-heiti2">
      <v-icon size="30" color="rgba(46, 64, 83, .9)">iconfont blog-Cloud-Server</v-icon>
      <div class="my-inline-block">远程服务器配置</div>
    </div>
    <div class="form ">
      <v-text-field single-line v-model="url" @keydown.enter="handleServer">
        <template v-slot:label>
          <span class="web-font-heiti2" style="color:rgba(133,146,158,0.4)">请输入您的服务器地址</span>
        </template>
        <template v-slot:prepend>
          <v-icon size="25" color="rgba(52,73,94,0.6)">iconfont blog-server-connection</v-icon>
        </template>
      </v-text-field>

      <div class="submit mt-2">
        <v-btn block round color="rgba(38,64,107,0.6)" depressed dark large @click="handleServer">
          <span class="web-font-heiti2" style="font-size: 20px">下一步</span>
          <v-icon size="20" class="ml-2">iconfont blog-1202youjiantou</v-icon>
        </v-btn>
      </div>

    </div>
  </div>
</template>

<script>
  //todo 重写消息系统
  let _ = require('lodash')
  export default {
    name: "editServer",
    data: function () {
      return {url: ""}
    },
    mounted() {
      this.url = this.$store.state.url
    },
    methods: {
      checkURL(URL) {
        //判断url地址是否正确
        return true
        //todo 删除return
        console.log(URL)
        let str = URL;
        let Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        let objExp = new RegExp(Expression);
        return objExp.test(str);
      },
      handleServer() {
        if (!_.isEmpty(this.url) && this.checkURL(this.url)) {
          this.$emit('handleServer', this.url)
        } else {
          this.$message.error("请输入正确的url地址")
        }
      },

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
</style>
