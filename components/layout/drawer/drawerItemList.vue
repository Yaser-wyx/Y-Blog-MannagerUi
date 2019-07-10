<template>
  <div class="item-list" :class="{'item-active':isActive}" :style="{'height':height+'px'}">
    <div class="item" @click="changeActive">
      <v-icon size="25" style="transition: all 0.3s ease-in" :color="isActive?'white':'rgba(255,255,255,0.8)'"
              class="my-inline-block">iconfont
        {{drawerItem.icon}}
      </v-icon>
      <div class="item-title my-inline-block web-font-pingfang-thin" :style="titleStyle">
        {{drawerItem.title}}
      </div>
      <div class="my-inline-block ml-3 pt-1" v-if="drawerItem.list">
        <v-icon size="18" :color="isActive?'white':'rgba(255,255,255,0.8)'" style="transition: all 0.3s ease-in"
                :class="{'arrow-active':isActive}">iconfont
          blog-angle-up
        </v-icon>
      </div>
    </div>
    <div class="sub-item-list" v-if="drawerItem.list">
      <div class="sub-item web-font-pingfang-thin" :class="{'sub-item-active':activeIndex===index}"
           v-for="(item,index) in drawerItem.list" :key="index" @click="changeActiveItem(index)">{{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "drawerItem",
    props: {
      drawerItem: {
        type: Object
      },
      index: {
        type: Number
      }
    },
    created() {
      if (this.drawerItem.list) {
        this.drawerItem.list.forEach(item => {
          this.pathList.push(`/mainWindow${item.href}`)
        })
      } else {
        this.pathList.push(`/mainWindow${this.drawerItem.href}`)
      }
      this.isActive = this.pathList.includes(this.routerPath);

    },
    computed: {
      routerPath: function () {//根据路由信息来确定导航栏是否被激活
        return this.$route.path
      },
      titleStyle: function () {
        if (this.isActive) {
          return "color: rgba(255, 255, 255, 1);"
        } else {
          return ""
        }
      },
      height: function () {
        if (this.isActive && this.drawerItem.list) {
          return this.drawerItem.list.length * 30 + 60
        } else {
          return 50
        }
      }
    },
    watch: {
      routerPath: function (newVal) {
        this.isActive = this.pathList.includes(newVal);
        this.activeIndex = this.pathList.indexOf(newVal)
        if (this.isActive) {
          if (!this.drawerItem.list) {
            this.$store.commit('setTitle', this.drawerItem.title)
          }
        }
      }
    },
    data: function () {
      return {
        activeIndex: -1,
        isActive: false,
        pathList: []
      }
    },
    methods: {
      changeActive() {
        if (!this.drawerItem.list) {
          this.$router.push(`/mainWindow${this.drawerItem.href}`)
        } else {
          if (this.activeIndex === -1) {
            this.isActive = !this.isActive
          } else {
            this.isActive = true
          }
        }
      },
      changeActiveItem(index) {
        this.activeIndex = index
        this.$router.push(`/mainWindow${this.drawerItem.list[index].href}`)
        this.$store.commit('setTitle', this.drawerItem.list[index].title)
      }
    }
  }
</script>

<style scoped>
  .item-list {
    width: 100%;
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -ms-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
    cursor: default;
    overflow: hidden;
  }

  .item-list:hover {
    background: #4E5894;
  }

  .item {
    width: 100%;
    height: 50px;
    padding-top: 10px;
    padding-left: 30px;
    color: rgba(255, 255, 255, 0.8);
  }

  .item-active {
    background: #4E5894;
    border-left: #33CBFF 3px solid;
  }

  .arrow-active {
    transform: rotateZ(180deg);
  }

  .sub-item:hover {
    color: rgba(255, 255, 255, 1);
  }

  .sub-item-active {
    color: rgba(255, 255, 255, 1) !important
  }

  .sub-item {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding-left: 70px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    color: rgba(255, 255, 255, 0.8);
  }

  .item-title {
    line-height: 30px;
    font-size: 16px;
    margin-left: 5px;
    transition: all 0.3s ease-in;
  }
</style>
