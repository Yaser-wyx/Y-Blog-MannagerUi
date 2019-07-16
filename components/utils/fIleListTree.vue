<template>
  <div id="fileList">
    <transition name="fade">
      <div class="menu transition-500ms" v-show="show" ref="menu">
        <div v-for="(item,index) in menuList" :key="index">
          <div class="web-font-heiti2 menu-item transition-500ms" :class="{'menu-item-disabled':item.disabled}"
               v-if="item.flag===flag.MENU_ITEM">
            {{item.name}}
          </div>
          <div class="my-hr" v-else></div>
        </div>
      </div>
    </transition>
    <el-tree
      :data="data"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      @node-collapse="collapse"
      @node-click="show=false"
      @node-contextmenu="showMenu"
      @node-expand="expand">
      <div slot-scope="{ node, data }">
        <v-icon size="20" class="default-state"
                :class="{'uploaded-no-publish-state':data.isUploadedNoPublish,'no-upload-publish-state':data.isNoUploadPublish,'exclude-state':data.isExclude}">
          {{`iconfont ${data.icon}`}}
        </v-icon>
        <span
          :class="{'uploaded-no-publish-state':data.isUploadedNoPublish,'no-upload-publish-state':data.isNoUploadPublish,'exclude-state':data.isExclude}"
          class="web-font-heiti2 default-state" style="font-size: 14px;">{{node.label}}</span>
      </div>
    </el-tree>
  </div>
</template>

<script>


  import {
    bulkManage,
    cancelExclude,
    CLOSE,
    deleteItem,
    divider,
    exclude,
    OPEN,
    publish,
    upload,
    uploadPublish,
    flag, fileListTest, iconMap, supportFileType, pictureType, getIcon
  } from "./constant";

  export default {
    name: "treeView",
    mounted() {
      document.addEventListener('click', () => {
        this.show = false
      })
      let dataList = []
      this.generateTreeData(fileListTest, dataList, true)
      console.log(dataList)
    },
    methods: {
      showMenu(event, data) {
        let menu = this.$refs.menu
        let l = event.clientX;
        let t = event.clientY;
        menu.style.left = l + 'px';
        menu.style.top = t - 50 + 'px';
        this.menuList = this.generateList(data)
        this.show = true
      },
      generateList(data) {
        console.log(data)
        let createMenuItem = (item, disabled = false) => {
          return {
            name: item.name,
            actionCode: item.actionCode,
            disabled: disabled,
            flag: item.flag
          }
        }
        let setDisabled = (list, startIndex, endIndex, ...exclude) => {
          for (let i = startIndex; i < endIndex; i++) {
            if (!exclude.includes(i)) {
              list[i].disabled = true
            }
          }
        }
        let createDefaultMenuList = () => {
          let menuList = []
          menuList.push(createMenuItem(upload))
          menuList.push(createMenuItem(publish))
          menuList.push(createMenuItem(uploadPublish))
          menuList.push(createMenuItem(divider))
          menuList.push(createMenuItem(deleteItem))
          menuList.push(createMenuItem(exclude))
          menuList.push(createMenuItem(bulkManage))
          return menuList
        }
        let menuList = createDefaultMenuList()

        if (data.isUploadedNoPublish) {
          //上传但未发布
          setDisabled(menuList, 0, 1)
        } else if (data.isExclude) {
          //被排除的项目
          setDisabled(menuList, 0, 3)
          menuList[5] = createMenuItem(cancelExclude)
        } else if (data.isRoot) {
          setDisabled(menuList, 0, 6, 3)
        } else if (!data.isNoUploadPublish) {
          setDisabled(menuList, 0, 3)
        }
        return menuList
      },
      collapse(data) {
        data.icon = CLOSE
      },
      expand(data) {
        data.icon = OPEN
      },
      generateTreeData(nowNode, nowDataNode, isRoot = false) {
        //nowNode 为当前要生成组件数据的节点
        //newDataNode 为当前已生成的组件节点数据
        nowNode.forEach(node=>{
          let icon = getIcon(node.fileType)
          let newDataNode = {
            label: node.name,
            path: node.path,
            isRoot: isRoot,
            icon: icon,
            isDir: node.isDir,
            children: []
          }
          nowDataNode.push(newDataNode)
          if (node.isDir) {
            //如果是目录
            this.generateTreeData(node.children, newDataNode.children)
          }
        })
      }
    },
    components: {},
    data() {
      return {
        menuList: [],
        show: false,
        flag: flag,
        data: [
          {
            id: 1,
            label: 'Note',
            icon: "blog-folder-open",
            isRoot: true,
            children: [
              {
                id: 4,
                label: 'pictures',
                icon: "blog-folder-open",
                isUploadedNoPublish: false,
                isNoUploadPublish: false,
                isExclude: false,
                children: [
                  {
                    isUploadedNoPublish: false,
                    isNoUploadPublish: false,
                    isExclude: true,
                    id: 9,
                    label: '1.png',
                    icon: "blog-picture"
                  }, {
                    isUploadedNoPublish: true,
                    isNoUploadPublish: false,
                    isExclude: false,
                    id: 10,
                    label: '2.png',
                    icon: "blog-picture"
                  }],
              },
              {
                isUploadedNoPublish: false,
                isNoUploadPublish: false,
                isExclude: false,
                id: 5,
                label: "BST.md",
                icon: "blog-file-markdown",
              },
              {
                isUploadedNoPublish: false,
                isNoUploadPublish: true,
                isExclude: false,
                id: 6,
                label: "Heap.md",
                icon: "blog-file-markdown",
              },
              {
                isUploadedNoPublish: false,
                isNoUploadPublish: false,
                isExclude: false,
                id: 7,
                label: "Sort.md",
                icon: "blog-file-markdown",
              },
              {
                isUploadedNoPublish: false,
                isNoUploadPublish: false,
                isExclude: true,
                id: 8,
                label: "main.js",
                icon: "blog-file-code",
              },
              {
                isUploadedNoPublish: false,
                isNoUploadPublish: false,
                isExclude: true,
                id: 11,
                label: "test.word",
                icon: "blog-other",
              }
            ]
          }]
      }

    }
  }
</script>

<style scoped>
  .default-state {
    color: #7F8C8D;
  }

  .uploaded-no-publish-state {
    color: #3498DB;
  }

  .no-upload-publish-state {
    color: #E74C3C;
  }

  .exclude-state {
    color: #C3C7CA;
  }

  #fileList {
    height: 100%;
  }

  .menu {
    position: absolute;
    width: 135px;
    z-index: 999;
    background-color: white;
    box-shadow: #D8DBDD 0 0 10px 1px;
    border-radius: 5px;
    overflow: hidden;
  }

  .menu-item:hover {
    background-color: #F3F3F3;
    color: #566573;
  }

  .menu-item-disabled {
    color: #CACFD2 !important;
    background-color: unset !important;
  }

  .menu-item {
    font-size: 14px;
    color: #7F8C8D;
    width: 100%;
    padding-left: 20px;
    height: 25px;
    line-height: 25PX;
    cursor: default;
  }

</style>
<style>
  #fileList .el-tree {
    background: none;
    position: relative;
  }

  #fileList .el-tree-node__content:hover {
    background-color: #F8F9F9 !important;
  }

  #fileList .el-tree-node__content {
    -webkit-transition: all 0.5s cubic-bezier(.25, .1, .25, 1) !important;
    -moz-transition: all 0.5s cubic-bezier(.25, .1, .25, 1) !important;
    -ms-transition: all 0.5s cubic-bezier(.25, .1, .25, 1) !important;
    -o-transition: all 0.5s cubic-bezier(.25, .1, .25, 1) !important;
    transition: all 0.5s cubic-bezier(.25, .1, .25, 1) !important;
    cursor: default;
  }
</style>
