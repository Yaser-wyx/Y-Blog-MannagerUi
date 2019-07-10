<template>
  <div class="card-wrap">
    <div class="card-left my-inline-block"></div>
    <div class="card-right my-inline-block">

    </div>
  </div>
</template>

<script>
  export default {
    name: "storageInfoCard"
  }
</script>

<style scoped>
  .card-wrap {
    /*border: #D8DBDD solid 1px;*/
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  .card-left {
    height: 100%;
    width: 360px;
    background-color: #F2F3F4;
    border-radius: 10px 0 0 10px;
  }
  .card-right{
    height: 100%;
    width: calc(100% - 364px);
    margin-left: -4px;
    border-top:  #D8DBDD solid 1px;
    border-right:  #D8DBDD solid 1px;
    border-bottom: #D8DBDD solid 1px;
    border-radius: 0 10px 10px 0;
  }
</style>
