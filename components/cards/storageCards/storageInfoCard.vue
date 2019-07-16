<template>
  <div class="card-wrap">
    <div class="card-left my-inline-block">
      <div class="card-left-action">
        <div class="left my-inline-block">
          <v-icon color="#566573">iconfont blog-stack-overflow</v-icon>
          <div class="web-font-pingfang my-inline-block">仓库地址：<span style="color:#ABB2B9">D:\Note</span></div>
        </div>
        <div class="right my-inline-block web-font-pingfang">
          文件数：<span style="color:#ABB2B9">14</span>
        </div>
      </div>
      <div class="card-left-main">
        <fileListTree></fileListTree>
      </div>
    </div>
    <div class="card-right my-inline-block">

    </div>
  </div>
</template>

<script>
  import fileListTree from '../../utils/fIleListTree.vue'

  export default {
    name: "storageInfoCard",
    components: {
      fileListTree
    }
  }
</script>

<style scoped>
  .card-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  .card-left {
    height: 100%;
    width: 360px;
    background-color: #F2F3F4;
    border-radius: 10px 0 0 10px;
  }

  .card-right {
    height: 100%;
    width: calc(100% - 364px);
    margin-left: -4px;
    border-top: #D8DBDD solid 1px;
    border-right: #D8DBDD solid 1px;
    border-bottom: #D8DBDD solid 1px;
    border-radius: 0 10px 10px 0;
  }

  .card-left-main {
    height: calc(100% - 80px);
  }

  .card-left-action {
    margin: 8px;
    height: 25px;
    line-height: 25px;
    color: #566573;
  }

  .card-left-action div {
    font-size: 14px;
  }
</style>
