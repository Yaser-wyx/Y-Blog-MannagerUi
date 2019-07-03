<template>
  <div class="my-card" style="height:280px;margin-top:25vh">
    <div class="card-title web-font-pingfang">
      选择已有用户
    </div>
    <div class="mt-4">
      <v-avatar
        :size="100"
        color="grey lighten-4"
        class="avatar"
        slot="activator"
        @click="selectUser">
        <img :src="nowUser.avatar" v-if="users.length>0">
        <div class="web-font-pingfang-thin avatar-title" style="font-size: 12px" v-else>请创建用户</div>
      </v-avatar>
      <div class="avatar-title web-font-pingfang-thin" @click="selectUser" v-if="users.length>0">{{nowUser.userName}}
      </div>
    </div>
    <div class="pre web-font-pingfang-thin my-a" @click="go(Cards.editServer)">配置服务器</div>
    <div class="after web-font-pingfang-thin my-a" @click="go(Cards.createUser)">创建新用户</div>
  </div>
</template>

<script>
  import {Cards} from "./index";

  export default {
    name: "selectUser",
    computed: {
      nowUser: function () {
        if (this.users.length > 0) {
          return this.users[this.nowIndex]
        }
      },
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
        nowIndex: 0,
        Cards: Cards,
        users: []
      }
    },
    methods: {
      selectUser() {
        if (this.users.length > 0) {
          this.$emit('selectUser', this.nowUser)
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

  .avatar {
    transition: 0.618s;
    cursor: pointer;
  }

  .avatar:hover {
    box-shadow: rgba(170, 170, 170, 0.6) 0 0 20px 2px;
  }

  .avatar:hover ~ .avatar-title {
    color: rgba(86, 101, 115, 0.9);
  }

  .avatar-title:hover ~ .avatar {
    box-shadow: rgba(170, 170, 170, 0.6) 0 0 20px 2px;
  }

  .avatar-title:hover {
    color: rgba(86, 101, 115, 0.9);
  }

  .avatar-title {
    font-size: 18px;
    color: #B2BABB;
    margin-top: 5px;
    max-width: 200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    height: 20px;
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
</style>
