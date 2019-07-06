<template>
  <div class="index">
    <div class="card">
      <indexCard></indexCard>
    </div>
    <div class="back"></div>
    <div class="mask"></div>
  </div>
</template>
<script>

  import indexCard from "../components/cards/indexCard";

  export default {
    name: "index",
    methods: {},
    components: {indexCard},

  }
</script>

<style scoped>
  .back {
    background-image: url("/img/CodingBack.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(2px);
    z-index: 1;
  }

  .index {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(82, 92, 118, 0.2);
  }

  .card {
    width: 100%;
    position: relative;
    z-index: 999;
  }
</style>
