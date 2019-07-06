<template>
  <div class="my-card" style="height:280px;margin-top:20vh">
    <div class="card-title web-font-pingfang">
      选择已有用户
    </div>
    <div class="mt-3" style="position: relative;">
      <v-btn icon flat color="#C3C7CA" class="my-icon-left" large @click="left">
        <v-icon color="#C3C7CA" size="45">iconfont blog-arrow-left</v-icon>
      </v-btn>
      <div class="users">
        <slider ref="slider" :options="options" @slide="slide">
          <template slot-scope="coverflow">
            <slideritem v-for="(item,index) in users" :index="index" :key="index">
              <div>
                <v-avatar
                  :size="90"
                  color="grey lighten-4"
                  class="avatar"
                  :class="{'avatar-active':activeIndex===index}"
                  @click="selectUser(index)">
                  <img :src="item.avatar">
                </v-avatar>
                <div class="avatar-title web-font-pingfang-thin">{{item.userName}}</div>
              </div>
            </slideritem>
          </template>
        </slider>
      </div>
      <v-btn icon flat color="#C3C7CA" class="my-icon-right" large @click="right">
        <v-icon color="#C3C7CA" size="45">iconfont blog-arrow-right</v-icon>
      </v-btn>
    </div>
    <div class="pre web-font-pingfang-thin my-a" @click="go(Cards.editServer)">配置服务器</div>
    <div class="after web-font-pingfang-thin my-a" @click="go(Cards.createUser)">创建新用户</div>
  </div>
</template>

<script>
  import {Cards} from "./index";
  import {slider, slideritem} from 'vue-concise-slider'// import slider components

  export default {
    name: "selectUser",
    components: {
      slider,
      slideritem
    },
    computed: {
      apis: function () {
        return this.$store.state.api
      },
    },
    created() {
      //加载服务器上的用户列表信息
      this.apis.serverApi.getServerUsers().then((users) => {
        this.users = users
      })
    },
    data: function () {
      return {
        options: {
          effect: 'coverflow',
          currentPage: 0,
          thresholdDistance: 100,
          thresholdTime: 300,
          pagination: false,
          deviation: 100,
          widthScalingRatio: 0.6,
          heightScalingRatio: 0.6,
          slidesToScroll: 1,
          loop: true
        },
        Cards: Cards,
        users: [],
        activeIndex: 0
      }
    },
    methods: {
      slide(data) {
        this.activeIndex = data.currentPage
      },
      left() {
        this.$refs.slider.$emit("slidePre")
      },
      right() {
        this.$refs.slider.$emit("slideNext")
      },
      selectUser(index) {
        if (this.users.length > 0) {
          this.$emit('selectUser', this.users[index])
        } else {
          this.$message.warning("当前没有用户可供选择，请创建新的用户！")
        }
      },
      go(step) {
        this.$emit('go', step)
      }
    }
  }
</script>

<style scoped>
  .pre {
    position: absolute;
    font-size: 11px;
    bottom: 10px;
    left: 20px;
  }

  .after {
    position: absolute;
    font-size: 11px;
    bottom: 10px;
    right: 20px;
  }

  .avatar-active {
    transition: 0.618s;
    cursor: pointer;
    box-shadow: rgba(170, 170, 170, 0.9) 0 0 15px 2px!important;
  }

  .avatar {
    transition: 0.618s;
    cursor: pointer;
    box-shadow: rgba(170, 170, 170, 0.5) 0 0 10px 1px;
  }

  .avatar-title {
    font-size: 18px;
    color: rgba(86, 101, 115, 0.9);
    margin-top: 5px;
    max-width: 200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    transition: 0.618s;
    cursor: pointer;
  }

  .card-title {
    text-align: center;
    width: 100%;
    font-size: 30px;
    color: rgba(46, 64, 83, .9);
    font-weight: 600;
  }

  .my-icon-left {
    position: absolute;
    left: 0;
    top: 40px;
  }

  .users {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 150px;
    z-index: 999;
  }

  .slideritem {
    width: 30%;
  }

  .my-icon-right {
    position: absolute;
    right: 0;
    top: 40px;
  }
</style>
