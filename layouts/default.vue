<template>
  <v-app>
    <toolbar></toolbar>
    <div class="main">
      <transition name="slide">
        <div class="drawer my-inline-block" v-if="$store.state.isLogin">
          <drawer></drawer>
        </div>
      </transition>
      <div class="my-inline-block content" :style="$store.state.isLogin?'width: calc(100% - 205px);':''">
        <nuxt class="nuxt-wrap"/>
      </div>
      <div class="blue-back" v-if="$store.state.isLogin"></div>
    </div>
  </v-app>
</template>

<script>
  import toolbar from '../components/layout/toolbar/toolbar'
  import drawer from "../components/layout/drawer/drawer";

  export default {
    components: {toolbar, drawer}
  }
</script>

<style scoped>
  .title {
    padding-left: 20px;
  }

  .nuxt-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .drawer {
    width: 200px;
    height: 100%;
    z-index: 1;
    position: relative;
  }

  .content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .main {
    width: 100%;
    height: calc(100% - 50px);
    background-color: #EAEFF3;
    position: relative;
  }

  .blue-back {
    z-index: 0;
    width: 100%;
    position: absolute;
    top: 0;
    height: 170px;
    background-color: #5EA6FB;
  }
</style>
