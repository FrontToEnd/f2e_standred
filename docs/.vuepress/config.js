const path = require('path');
const fs = require('fs');
module.exports = {
  title: '智器云',
  description: '智器云大数据前端开发规范',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    base: '/f2e_standred/',
    nav: [
      { text: '首页', link: '/' },
      { text: '规范', link: '/guide/JavaScript.html' },
      { text: 'github', link: 'https://github.com/FrontToEnd' }
    ],
    sidebar: {
      '/guide/': [
        'JavaScript',
        'CSS',
        'HTML'
      ],
    }

  }
}

