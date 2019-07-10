<template>
  <div class="menu-wrap">
    <div @click="show=!show">
      <slot></slot>
    </div>
    <transition name="fade">
      <div class="menu" v-if="show">
        <div class="menu-item web-font-pingfang-thin" v-for="(item,index) in menuItem" :key="index">{{item.title}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "defaultMenu",
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      showMenu() {
        console.log('show')
      }
    },
    props: {
      menuItem: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>
