<template>
  <div class="toolbar" id="toolbar">
    <div class="left-toolbar my-inline-block">
      <img src="/img/logo.png" alt="" width="35" height="35">
      <div class="my-inline-block logo-text">Y-Blog</div>
    </div>
    <v-divider class="my-hr" vertical inset></v-divider>
    <div class="toolbar-title web-font-heiti2">
      {{$store.state.title}}
    </div>
    <div class="right-toolbar my-inline-block no-drag">
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
  export default {
    name: "toolbar",
    mounted() {
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
    /*padding-top: 10px;*/
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

  .right-toolbar {
    float: right;
    height: 100%;
    margin-right: 10px;
    padding-top: 10px;
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
  .my-hr{
    margin-left: 63px;
  }
</style>
