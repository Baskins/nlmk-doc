module.exports = {
  base: '/',
  lang: 'ru-RU',
  title: 'Клиент инфо 2',
  description: 'Документация для личного кабинета "Клиент инфо 2" оптовых клиентов НЛМК.',

  themeConfig: {
    repo: 'Baskins/nlmk-doc',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Править документацию на GitHub',
    lastUpdated: 'последнее изменение',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Руководство пользователя', link: '/guide', activeMatch: '^/$|^/guide/' },
      {
        text: 'API НЛМК Connect',
        link: '/api',
        activeMatch: '^/api/'
      },
      {
        text: 'Дашбоард НЛМК Онлайн',
        link: 'https://nlmk.online'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/api /': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Введение',
      children: [
        { text: 'Зачем вам личный кабинет?', link: '/' },
        { text: 'Как подлючиться', link: '/guide/new-registration' },
      ]
    },
    {
      text: ' Руководство',
      children: [
        { text: 'Общее знакомство', link: '/guide/info' },
        { text: 'Отчеты', link: '/guide/global-computed' },
        { text: 'Заявки на производство', link: '/guide/global-component' },
        { text: 'Ответсвенное хранение', link: '/guide/customization' }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' }
      ]
    }
  ]
}
