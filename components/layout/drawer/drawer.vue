<template>
  <div class="draw-wrap">

    <drawerItemList v-for="(item,index) in drawerList" :drawer-item="item" :index="index" :key="index"></drawerItemList>
  </div>
</template>

<script>
  import drawerItemList from "./drawerItemList";

  export default {
    name: "drawer",
    components: {
      drawerItemList
    },
    data: function () {
      return {
        drawerList: [
          {
            title: "网站统计",
            href: "",
            icon: "blog-et-sales-statistics"
          },
          {
            title: "博客管理",
            icon: "blog-icon-article",
            list: [
              {
                title: "仓库管理",
                href: "/storage-manager"
              },
              {
                title: "文章管理",
                href: "/article-manager"
              },
              {
                title: "分类管理",
                href: "/classify-manager"
              },
            ]
          },
          {
            title: "评论管理",
            href: "/comment-manager",
            icon: "blog-comment-dots"
          },
          {
            title: "关于管理",
            href: "/about-manager",
            icon: "blog-user1"
          },
          {
            title: "密码管理",
            href: "/password-manager",
            icon: "blog-password"
          },
          {
            title: "系统设置",
            href: "/system-setting",
            icon: "blog-setting"
          },
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .draw-wrap {
    height: 100%;
    width: 200px;
    background-color: #5E6AAC;
  }

  .item1 {
    background-color: chocolate;
    transition: 0.5s ease-in-out;
    width: 100%;
  }

  .item2 {
    background-color: cornsilk;
    width: 100%;
    transition: 0.5s ease-in-out;
  }
</style>
