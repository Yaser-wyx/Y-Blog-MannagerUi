<template>
  <div class="storage-msg-card my-inline-block transition-500ms">
    <div class="card-up">
      <div class="card-up-action">
        <div class="my-inline-block">
          <v-icon size="18" color="#566573">iconfont blog-stack-overflow</v-icon>
        </div>
        <div class="my-inline-block ml-1 ">D:\Note</div>
        <div class="my-inline-block right">
          <v-icon size="18" class="edit-btn transition-500ms">iconfont blog-edit</v-icon>
        </div>
      </div>
      <div class="card-up-title-wrap mt-3">
        <div class="card-up-title web-font-pingfang-thin">学习笔记
          <v-icon style="line-height: 36px;" color="#7F8C8D">iconfont blog-password</v-icon>
        </div>
      </div>
    </div>
    <div class="card-down web-font-pingfang-thin">
      <div class="line">
        <div class="left">
          文件总数：15
        </div>
        <div class="right">
          已发布文章数：8
        </div>
      </div>
      <div class="line">
        <div class="left">
          排除文件数：3
        </div>
        <div class="right">
          未发布文章数：8
        </div>
      </div>
      <div class="line">
        <div class="left">
          未上传文件数：15
        </div>
        <div class="right">
          已上传文章数：8
        </div>
      </div>

    </div>
    <div class="card-down-action web-font-pingfang-thin">
      <div class="left">
        <v-icon color="rgba(86,101,115,0.55)" style="line-height: 30px" size="16">iconfont blog-cloudupload-fill
        </v-icon>
        <div class="card-down-action-text my-inline-block">已同步</div>
      </div>
      <div class="right">
        <div class="card-down-action-text my-inline-block">
          自动同步：
          <v-switch  hide-details class="my-inline-block ma-0" color="#2196F3" v-model="switch1" ></v-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "storageMsgCard",
    data:function () {
      return{
        switch1:false
      }
    }
  }
</script>

<style scoped>
  .card-down-action-text {
    font-size: 11px;
    color: #7F8C8D;
    line-height: 30px;
  }

  .card-down-action {
    padding-left: 20px;
    padding-right: 20px;
    line-height: 30px;
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 30px;
  }

  .card-down {
    padding-top: 13px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .line {
    height: 25px;
    line-height: 25px;
    color: #7F8C8D;
    font-size: 14px;
    margin-bottom: 15px;
  }

  .card-up-title {
    font-size: 25px;
    color: #566573;
    text-align: center;
    width: 100%;
    clear: both;
    height: 36px;
    line-height: 36px;
  }

  .card-up-action {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    color: #566573;
    width: 100%;
    clear: both;
  }

  .edit-btn {
    padding: 3px;
    border-radius: 100px;
  }

  .edit-btn:hover {
    color: #566573;
    background-color: rgba(176, 190, 197, 0.5);
  }

  .card-up {
    background-color: #E1E6EF;
    width: 100%;
    height: 100px;
  }

  .storage-msg-card:hover {
    box-shadow: #EAF5F5 0 0 30px 3px;
  }

  .storage-msg-card {
    position: relative;
    overflow: hidden;
    margin-top: 40px;
    width: 300px;
    height: 275px;
    background: white;
    border-radius: 10px;
    border: #EAF5F5 1px solid;
    box-shadow: #EAF5F5 0 0 5px 0;
  }
</style>
