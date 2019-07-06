<template>
  <v-app>
    <toolbar></toolbar>
    <div class="main" >
      <transition name="slide">
        <div class="drawer my-inline-block" v-if="$store.state.isLogin">
          <drawer></drawer>
        </div>
      </transition>
      <div class="my-inline-block content" :style="$store.state.isLogin?'width: calc(100% - 210px);':''">
        <nuxt/>
      </div>
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

  .drawer {
    width: 200px;
    height: 100%;
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .main {
    width: 100%;
    height: calc(100% - 50px);
    background-color: #EAEFF3;
  }
</style>
