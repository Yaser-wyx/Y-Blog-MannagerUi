<template>
  <transition name="zoom">
    <div class="dialog-wrap" @click.stop="hidden" v-if="showDialog">
      <div class="dialog-content">
        <div @click.stop>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "my-dialog",
    props: {
      showDialog: Boolean
    },
    model: {
      prop: 'showDialog',
      event: "changeShow"
    },
    methods: {
      hidden() {
        this.$emit('changeShow', false)
      }
    },
  }
</script>

<style scoped>
  .dialog-wrap {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
  }

  .dialog-content {
    width: 100%;
    display: -webkit-box;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
  }
</style>
