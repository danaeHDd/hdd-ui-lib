import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'HDD UI',
  description: 'Vue3 组件库',
  lang: 'zh-CN',
  base: '/hdd-ui-lib/',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' },
      { text: '设计规范', link: '/guide/design-tokens' },
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
            { text: '设计令牌', link: '/guide/design-tokens' },
            { text: '开发规范', link: '/guide/dev-guide' },
          ],
        },
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Link 链接', link: '/components/link' },
            { text: 'Text 文字', link: '/components/text' },
            { text: 'Space 间距', link: '/components/space' },
            { text: 'Divider 分割线', link: '/components/divider' },
          ],
        },
        {
          text: '布局',
          items: [
            { text: 'Layout 布局', link: '/components/layout' },
            { text: 'Grid 网格', link: '/components/grid' },
            { text: 'Flex 弹性布局', link: '/components/flex' },
          ],
        },
        {
          text: '数据录入',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'InputNumber 数字输入框', link: '/components/input-number' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Tag 标签', link: '/components/tag' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
  },

  vite: {
    resolve: {
      alias: {
        'hdd-ui-lib': resolve(__dirname, '../../packages/index.ts'),
      },
    },
  },
})
