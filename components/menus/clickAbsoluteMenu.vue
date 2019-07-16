<template>
  <transition name="fade">
    <div class="menu transition-500ms" v-show="show" ref="menu">
      {{list}}
    </div>
  </transition>
</template>

<script>
  export default {
    name: "clickAbsoluteMenu",
    props: {
      list: Object
    },
    mounted() {
      document.addEventListener('click', () => {
        console.log('click')
        this.show = false
      })
      document.oncontextmenu = (event) => {
        console.log(event)
        let menu = this.$refs.menu
        this.show = true
        let l = event.clientX;
        let t = event.clientY;
        menu.style.left = l + 'px';
        menu.style.top = t - 50 + 'px';
        console.log(menu)
        return false;
      }
    },
    computed: {
      left: function () {

      },
      top: function () {

      }
    },
    data: function () {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
  .menu {
    position: absolute;
    width: 135px;
    height: 100px;
    z-index: 999;
    background-color: chocolate;
  }
</style>
