module.exports = [
  {text: '首页', link: '/'},
  {
    text: '工作',
    link: '/work/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '杂七杂八', link: '/pages/c1bdc2/'},
      // {text: '前端', items: [
      //   {text: 'JavaScript', link: '/pages/c1bdc2/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
      //   // {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
      // ]},
      // {text: '学习笔记', items:[
      //   {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
      //   {text: '《JavaScript高级程序设计》笔记', link: '/note/js/'},
      //   {text: '《ES6 教程》笔记', link: '/note/es6/'},
      //   {text: '《Vue》笔记', link: '/note/vue/'},
      //   {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
      //   {text: '小程序笔记', link: '/note/wx-miniprogram/'},
      // ]}
    ]
  },
  {
    text: '生活',
    link: '/life/',
    items: [
      {text: '生活', link: '/pages/89bb30/'},
      // {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      // {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      // {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  // {
  //   text: '更多',
  //   link: '/more/',
  //   items: [
  //     {text: '学习', link: '/pages/f2a556/'},
  //     {text: '面试', link: '/pages/aea6571b7a8bae86/'},
  //     { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
  //     { text: '实用技巧', link: '/pages/baaa02/' },
  //     {text: '友情链接', link: '/friends/'},
  //   ]
  // },
  // {text: '关于', link: '/about/'},
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]
