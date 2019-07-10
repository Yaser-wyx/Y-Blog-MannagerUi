<template>
  <div>
    <div class="content-box">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>

  export default {
    name: "mainWindow",
    methods: {}
  }
</script>

<style scoped>
  .content-box {
    width:calc(100% - 50px);
    height: calc(100% - 50px);
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    background-color: white;
    border-radius: 15px;
    padding: 5px;
  }
</style>
