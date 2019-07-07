<template>
  <div>
    <v-btn @click="logout">退出</v-btn>
    <v-btn @click="login">登录</v-btn>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  import {addItemToConfig} from "../components/cards";
  import drawer from "../components/layout/drawer/drawer";

  export default {
    name: "mainWindow",
    components: {
      drawer
    },
    methods: {
      login() {
        this.$store.commit('login', {})
      },
      logout() {
        this.$store.commit('logout')
        addItemToConfig('auto', false)
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
