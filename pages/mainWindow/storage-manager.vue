<template>
  <div class="card">
    <myDialog v-model="showDialog">
      <div class="new-storage-card">
        <div class="new-storage-card-up">
          <v-icon color="white" size="16" class="card-close-btn transition-500ms" @click="showDialog=false">iconfont
            blog-close
          </v-icon>
          <div class="card-up-title web-font-heiti">
            新建仓库
            <v-icon color="white" size="25">iconfont blog-database</v-icon>
          </div>
        </div>
        <div class="new-storage-card-down pt-2">
          <div class="card-item web-font-pingfang-thin">
            仓库名字：
            <div class="input-wrap my-inline-block">
              <el-input
                placeholder="请输入仓库名字"
                suffix-icon="el-icon-date">
              </el-input>
            </div>
          </div>
          <div class="card-item web-font-pingfang-thin">
            仓库地址：
            <div class="input-wrap my-inline-block">
              <el-input
                placeholder="请输入仓库地址"
                suffix-icon="el-icon-date">
              </el-input>
            </div>
          </div>
          <div class="card-item web-font-pingfang-thin">
            设置密码：
            <div class="input-wrap my-inline-block">
              <el-input
                placeholder="请输入仓库密码（可选）"
                suffix-icon="el-icon-date">
              </el-input>
            </div>
          </div>
          <div class="card-item web-font-pingfang-thin">
            自动同步：
            <div class="input-wrap my-inline-block">
              <v-switch hide-details class="ma-0" color="#2196F3"></v-switch>
            </div>
          </div>
          <div class="btn-wrap">
            <v-btn class="web-font-pingfang-thin" block dark depressed round color="rgba(86,101,115,0.7)">
              <v-icon>iconfont blog-right-hook</v-icon>
              <span class="ml-2">确定</span></v-btn>
          </div>
        </div>
      </div>
    </myDialog>
    <!--todo card-title需要可以进行变动-->
    <div class="card-title">
      <div class="my-inline-block pt-1">
        <v-icon color="#566573" size="25">iconfont blog-database</v-icon>
        <div class="my-inline-block web-font-pingfang-thin ml-1 ">博客仓库</div>
      </div>
      <v-icon class="right mr-2 add-btn transition-500ms" @click="showDialog=true">iconfont blog-add-new</v-icon>
    </div>
    <div v-if="showStorageInfo" class="card-storage-info">
      <storageInfoCard></storageInfoCard>
    </div>
    <div class="card-list-content" v-else id="card-list-content"
         :style="{'padding-left':padding+'px','padding-right':padding+'px'}">
      <storageMsgCard v-for="(item,index) in 10" :key="index"
                      :class="{'padding-card':(index+1)%max>0}">
      </storageMsgCard>
    </div>
  </div>
</template>

<script>
  import storageMsgCard from "../../components/cards/storageCards/storageMsgCard";
  import myDialog from "../../components/dialog/dialog";
  import storageInfoCard from "../../components/cards/storageCards/storageInfoCard";

  const CARD_WIDTH = 300
  const CARD_INTERVAL = 60
  export default {
    name: "storage-manager",
    components: {
      storageMsgCard, myDialog, storageInfoCard
    },
    mounted() {
      this.calculatePadding()
      window.addEventListener('resize', this.calculatePadding)
    },
    methods: {
      calculatePadding() {
        if (!this.showStorageInfo) {
          let el = document.getElementById('card-list-content')
          let width = el.offsetWidth
          let max = Math.floor(width / CARD_WIDTH)//计算一行卡片最多的个数
          let padding
          while (max > 0) {
            //测试卡片的个数
            padding = width - (CARD_WIDTH * max + (max - 1) * CARD_INTERVAL)
            if (padding > 0 && padding < 360) {
              break
            }
            max--
          }
          this.max = max
          this.padding = Math.floor(padding / 2)
        }
      }
    },
    data: function () {
      return {
        padding: 0,//每一行左右两边的边距
        max: 3,//一行卡片最多的个数
        showDialog: false,
        showStorageInfo: true
      }
    }
  }
</script>

<style scoped>
  .card-list-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 80px;
  }

  .card {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .card-title {
    padding-left: 10px;
    padding-top: 5px;
    color: #566573;
    border-bottom: #D8DBDD 1px solid;
    height: 45px;
  }

  .add-btn {
    border-radius: 100px;
    padding: 1px;
    color: #B0BEC5;
    border: 0
  }

  .add-btn:hover {
    color: #566573;
    box-shadow: #B0BEC5 0 0 15px 0;
    background-color: rgba(176, 190, 197, 0.3);
    /*transform: scale(1.1);*/
  }

  .padding-card {
    margin-right: 60px;
  }

  .new-storage-card {
    width: 400px;
    height: 375px;
    background-color: white;
    box-shadow: #EAF5F5 3px 3px 25px 3px;
    border-color: #EAF5F5;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .new-storage-card-up {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #03A9F4;
  }

  .card-close-btn {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .card-close-btn:hover {
    transform: rotateZ(180deg);
  }

  .card-up-title {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 25px;
    height: 60px;
    line-height: 60px;
  }

  .card-item {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    line-height: 40px;
    color: #7F8C8D;
    margin-top: 18px;
  }

  .new-storage-card-down {
    width: 100%;
  }

  .input-wrap {
    width: 200px;
    height: 40px;
  }

  .btn-wrap {
    margin-right: auto;
    margin-left: auto;
    width: 130px;
  }

  .card-storage-info {
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    margin: 20px;
    padding: 5px;
  }
</style>
