<template>
  <div class="toolbar" id="toolbar">
    <div class="left-toolbar my-inline-block">
      <img src="/img/logo.png" alt="" width="35" height="35">
      <div class="my-inline-block logo-text">Y-Blog</div>
    </div>
    <transition name="fade">
      <v-divider class="my-hr" vertical inset v-if="$store.state.isLogin"></v-divider>
    </transition>
    <transition name="fade">
      <div class="my-inline-block toolbar-msg web-font-pingfang-thin ml-2" v-if="$store.state.isLogin">
        <div class="my-inline-block">
          <v-icon color="rgba(38, 64, 107, 0.7)" style="line-height: 50px">iconfont blog-user</v-icon>
          <div class="my-inline-block">浏览人次：20人</div>
        </div>
        <div class="my-inline-block ml-2">
          <v-icon color="rgba(38, 64, 107, 0.7)" style="line-height: 50px">iconfont blog-articles-full</v-icon>
          <div class="my-inline-block">文章数：32篇</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="toolbar-title web-font-heiti2" v-show="show">
        {{toolbarTitle}}
      </div>
    </transition>
    <div class="user-avatar  my-inline-block" v-if="$store.state.isLogin">
      <div class="menu-wrap">

        <v-avatar size="30" color="grey lighten-4">
          <img :src="$store.state.user.avatar" alt="">
        </v-avatar>
        <div style="line-height: 50px" @click="showMenu=!showMenu"
             class="my-inline-block web-font-pingfang-thin ml-2 toolbar-menu">
          <div class="my-inline-block">
            {{$store.state.user.userName}}
          </div>
          <v-icon style="line-height: 50px" size="15" class="my-inline-block menu-icon"
                  :class="{'menu-icon-active':showMenu}">iconfont
            blog-down
          </v-icon>
        </div>
        <transition name="fade">
          <div class="menu" v-if="showMenu">
            <div class="menu-item web-font-pingfang-thin" @click="handleMenuAction(index)"
                 v-for="(item,index) in menuItem" :key="index">{{item.title}}
            </div>
          </div>
        </transition>
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
  import {addItemToConfig} from "../../cards/welcomeCards";

  export default {
    name: "toolbar",
    data: function () {
      return {
        show: false,
        toolbarTitle: "",
        showMenu: false,
        menuItem: [
          {title: "修改用户信息"},
          {title: "切换用户"},
          {title: "注销"},
          {title: "退出"},
        ],
      }
    },
    components: {},
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
      handleMenuAction(index) {
        switch (index) {
          case 3: {
            this.$store.commit('logout')
            addItemToConfig('auto', false)
            this.$router.push('/')
            break
          }
          default: {
            console.log(this.menuItem[index].title)
            break
          }
        }
        this.showMenu = false
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

  .user-avatar {
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

  .toolbar-menu {
    cursor: pointer;
  }

  .menu-wrap {
    position: relative;
  }

  .menu {
    position: absolute;
    width: 130px;
    background: white;
    box-shadow: #D8DBDD 0 0 8px 0;
    border-radius: 3px;
    overflow: hidden;

  }

  .menu-item:hover {
    background-color: #F3F3F3;
    color: #566573;
  }

  .menu-item {
    transition: all 0.3s ease-in;
    background: white;
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #7F8C8D;
    padding-left: 20px;
  }

  .menu-icon {
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }

  .menu-icon-active {
    transform: rotateZ(180deg);
  }
</style>
