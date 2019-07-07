<template>
  <div class="toolbar" id="toolbar">
    <div class="left-toolbar my-inline-block">
      <img src="/img/logo.png" alt="" width="35" height="35">
      <div class="my-inline-block logo-text">Y-Blog</div>
    </div>
    <v-divider class="my-hr" vertical inset></v-divider>
    <div class="my-inline-block toolbar-msg web-font-pingfang-thin ml-2">
      <div class="my-inline-block">
        <v-icon color="rgba(38, 64, 107, 0.7)" style="line-height: 50px">iconfont blog-user</v-icon>
        <div class="my-inline-block">浏览人次：20人</div>
      </div>
      <div class="my-inline-block ml-2">
        <v-icon color="rgba(38, 64, 107, 0.7)" style="line-height: 50px">iconfont blog-articles-full</v-icon>
        <div class="my-inline-block">文章数：32篇</div>
      </div>
    </div>
    <transition name="fade">
      <div class="toolbar-title web-font-heiti2" v-show="show">
        {{toolbarTitle}}
      </div>
    </transition>
    <div class="user-avatar  my-inline-block">
      <v-avatar size="35" color="grey lighten-4" >
        <img :src="$store.state.user.avatar" alt="">
      </v-avatar>
      <div class="my-inline-block web-font-pingfang-thin ml-2">
<!--        todo 自己写一个菜单选项列表-->
        {{$store.state.user.userName}}
        <v-icon>iconfont blog-down</v-icon>
      </div>
    </div>
    <div class="right-toolbar right my-inline-block no-drag">
      <v-btn icon class="ma-0" small>
        <v-icon size="14">iconfont blog-minimize</v-icon>
      </v-btn>
      <v-btn icon class="ma-0" small>
        <v-icon size="14">iconfont blog-maximize</v-icon>
      </v-btn>
      <v-btn icon class="ma-0" small>
        <v-icon size="14">iconfont blog-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
  //todo 移植到electron上后，完善最小化等操作
  import {delayExec} from "../../../utils";

  export default {
    name: "toolbar",
    data: function () {
      return {
        show: false,
        toolbarTitle: ""
      }
    },
    computed: {
      title: function () {
        return this.$store.state.title
      }
    },
    watch: {
      title: function () {
        this.show = false;
        delayExec(() => {
          this.show = true
          this.toolbarTitle = this.title
        }, 500)
      }
    },
    methods: {
      test(msg) {
        console.log(msg)
      }
    }
  }
</script>


<style scoped>
  .toolbar {
    height: 50px;
    width: 100%;
    background-color: whitesmoke;
    -webkit-user-select: none;
    -webkit-app-region: drag;
    z-index: 999;
    padding-left: 25px;
    position: relative;
  }

  .logo-text {
    margin-left: 5px;
    line-height: 35px;
    font-family: "Times New Roman", serif;
    font-size: 22px;
  }

  .no-drag {
    -webkit-app-region: no-drag;
  }

  .left-toolbar {
    height: 100%;
    color: #566573;
    padding-top: 7px;
  }
  .user-avatar{
    height: 50px;
    line-height: 50px;
    position: absolute;
    right: 120px;
  }
  .right-toolbar {
    height: 50px;
    margin-right: 10px;
    line-height: 50px;
    position: absolute;
    right: 0;
  }

  .toolbar-title {
    color: rgba(46, 64, 83, .9);
    position: absolute;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-weight: 600;
  }

  .toolbar-msg {
    color: rgba(38, 64, 107, 0.7);
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }

  .my-hr {
    margin-left: 63px;
  }

</style>
