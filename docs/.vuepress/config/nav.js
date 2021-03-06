module.exports = [
   
    { text: '主页', link: '/', icon: 'reco-home' },
      { text: '文档', 
      icon: 'reco-api',
      items: [
            { text: '本站教程', link: '/docscn/', icon: 'reco-document' },
            { text: '官方教程', link: 'https://hexo.io/zh-cn/docs/index.html' }
        
      ]
    },
     // { text: '贡献文档', link: '../new/', icon: 'reco-blog' },
      //{ text: '主题', link: '/themes/', icon: 'reco-theme' },
      {
        text: '主题', 
        icon: 'reco-theme',
        items: [
          { text: '主题', link: '/themes/',icon: 'reco-theme' },
          { text: '魔改主题', link: '/themes/mogai.html' }
        ]
      },
      { text: '插件', link: '/plugins/', icon: 'reco-npm' },
      { text: '博客展示', link: '/blog/', icon: 'reco-blog' },
      { text: '用户社区', link: 'https://hexo-china.org/', target: '_blank', icon: 'reco-message' },
      {
        text: '更多', 
        icon: 'reco-menu',
        items: [
          { text: '帮助', link: '/help/', icon: 'reco-faq' },
          { text: '项目成员', link: '/member/', icon: 'reco-account' }
        ]
      }
      
     // { text: 'GitHub', link: 'https://github.com/kjhuanhao/hexocn', icon: 'reco-github'},




];