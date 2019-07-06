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
           v-for="(item,index) in drawerItem.list" :key="index" @click="activeIndex=index">{{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "drawerItem",
    props: {
      isActive:{
        type:Boolean
      },
      drawerItem: {
        type: Object
      },
      index:{
        type:Number
      }
    },
    computed: {
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
    data: function () {
      return {
        activeIndex: 0
      }
    },
    methods:{
      changeActive(){
        this.$emit('changeActive',this.index,!this.isActive)
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
    cursor: pointer;
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
