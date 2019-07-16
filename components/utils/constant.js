export const OPEN = 'blog-folder-open'
export const CLOSE = 'blog-folder-outline'
export const flag = {
  DIVIDER: -1, MENU_ITEM: 0
}
export const upload = {name: "上传", actionCode: 0, flag: flag.MENU_ITEM}
export const publish = {name: "发布", actionCode: 1, flag: flag.MENU_ITEM}
export const uploadPublish = {name: "上传并发布", actionCode: 2, flag: flag.MENU_ITEM}
export const deleteItem = {name: "删除", actionCode: 3, flag: flag.MENU_ITEM}
export const exclude = {name: "排除", actionCode: 4, flag: flag.MENU_ITEM}
export const cancelExclude = {name: "取消排除", actionCode: 5, flag: flag.MENU_ITEM}
export const bulkManage = {name: "批量管理", actionCode: 6, flag: flag.MENU_ITEM}
export const divider = {name: '', action: -1, flag: flag.DIVIDER}

const MD = '.md'
const TXT = '.txt'
const JPEG = '.jpeg'
const JPG = '.jpg'
const PNG = '.png'
const GIF = '.gif'
const FOLDER = 'folder'

export const supportFileType = [MD, TXT, JPEG, JPG, GIF, PNG, FOLDER]
export const pictureType = [JPEG, JPG, GIF, PNG]
export const iconMap = {
  [MD]: 'blog-file-markdown',
  [TXT]: 'blog-txt',
  [FOLDER]: 'blog-folder-open',
  other: 'blog-other',
  picture: 'blog-picture',
  folderOpen: 'blog-folder-open',
  folderClose: "blog-folder-outline"
}

export function getIcon(fileType) {
  if (supportFileType.includes(fileType)) {
    if (pictureType.includes(fileType)) {
      return iconMap.picture
    } else {
      return iconMap[fileType]
    }
  } else {
    return iconMap.other
  }
}

export const fileListTest =
  [{
    "name": "存档",
    "path": "D:\\存档",
    "children": [
      {
        "name": "New Text Document.txt",
        "path": "D:\\存档\\New Text Document.txt",
        "children": [],
        "isDir": false
      },
      {
        "name": "基于TensorFlow智能分类系统.zip",
        "path": "D:\\存档\\基于TensorFlow智能分类系统.zip",
        "children": [],
        "isDir": false
      },
      {
        "name": "实训",
        "path": "D:\\存档\\实训",
        "children": [
          {
            "name": "41612P36 万宇轩 实验2  系统设计（一）.docx",
            "path": "D:\\存档\\实训\\41612P36 万宇轩 实验2  系统设计（一）.docx",
            "children": [],
            "isDir": false
          },
          {
            "name": "41612P36 万宇轩 实验3  系统设计（二）.docx",
            "path": "D:\\存档\\实训\\41612P36 万宇轩 实验3  系统设计（二）.docx",
            "children": [],
            "isDir": false
          },
          {
            "name": "供参考",
            "path": "D:\\存档\\实训\\供参考",
            "children": [
              {
                "name": "CAJViewer 7.2.self.exe",
                "path": "D:\\存档\\实训\\供参考\\CAJViewer 7.2.self.exe",
                "children": [],
                "isDir": false
              },
              {
                "name": "图书馆数字化管理系统的设计与实现_张冬.caj",
                "path": "D:\\存档\\实训\\供参考\\图书馆数字化管理系统的设计与实现_张冬.caj",
                "children": [],
                "isDir": false
              },
              {
                "name": "基于B_S结构的高校图书馆集成管理系统设计与实现_许润原.caj",
                "path": "D:\\存档\\实训\\供参考\\基于B_S结构的高校图书馆集成管理系统设计与实现_许润原.caj",
                "children": [],
                "isDir": false
              },
              {
                "name": "物资仓库管理系统设计_供参考.doc",
                "path": "D:\\存档\\实训\\供参考\\物资仓库管理系统设计_供参考.doc",
                "children": [],
                "isDir": false
              },
              {
                "name": "高校图书管理系统的设计与实现_惠民.caj",
                "path": "D:\\存档\\实训\\供参考\\高校图书管理系统的设计与实现_惠民.caj",
                "children": [],
                "isDir": false
              }
            ],
            "isDir": true
          }
        ],
        "isDir": true
      },
      {
        "name": "支持与说明文件",
        "path": "D:\\存档\\支持与说明文件",
        "children": [
          {
            "name": "作品简介.docx",
            "path": "D:\\存档\\支持与说明文件\\作品简介.docx",
            "children": [],
            "isDir": false
          },
          {
            "name": "作品运行说明文档.docx",
            "path": "D:\\存档\\支持与说明文件\\作品运行说明文档.docx",
            "children": [],
            "isDir": false
          },
          {
            "name": "测试训练完的模型.mp4",
            "path": "D:\\存档\\支持与说明文件\\测试训练完的模型.mp4",
            "children": [],
            "isDir": false
          },
          {
            "name": "训练新模型.mp4",
            "path": "D:\\存档\\支持与说明文件\\训练新模型.mp4",
            "children": [],
            "isDir": false
          },
          {
            "name": "软件运行图片.jpg",
            "path": "D:\\存档\\支持与说明文件\\软件运行图片.jpg",
            "children": [],
            "isDir": false
          }
        ],
        "isDir": true
      },
      {
        "name": "支持与说明文件.zip",
        "path": "D:\\存档\\支持与说明文件.zip",
        "children": [],
        "isDir": false
      },
      {
        "name": "项目资料.zip",
        "path": "D:\\存档\\项目资料.zip",
        "children": [],
        "isDir": false
      }
    ],
    "isDir": true
  }]

