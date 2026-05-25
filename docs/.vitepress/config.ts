import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'HDD UI',
  description: 'Vue3 组件库',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '使用', link: '/guide/usage' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: '主题定制', link: '/guide/theme' },
          ],
        },
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
  },

  vite: {
    resolve: {
      alias: {
        'hdd-ui-lib': '../packages/index.ts',
      },
    },
  },
})
