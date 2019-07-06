<template>
  <div>
    <v-btn @click="logout">退出</v-btn>
  </div>
</template>

<script>
  import {addItemToConfig} from "../components/cards";

  export default {
    name: "mainWindow",
    methods: {
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
