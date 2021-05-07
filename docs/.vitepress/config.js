module.exports = {
  base: '/',
  lang: 'ru-RU',
  title: 'Клиент инфо 2',
  description: 'Документация личного кабинета для оптовых клиентов НЛМК.',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/nlmk-doc-favicon.png' }]],

  themeConfig: {
//    repo: 'Baskins/nlmk-doc',
    logo: '/nlmk-logotype.png',
    docsDir: 'docs',

    searchPlaceholder: 'Поиск...',
    
    editLinks: true,
    editLinkText: 'Править документацию на GitHub',
    lastUpdated: 'последнее изменение',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    nav: [
      {
        text: 'Руководство пользователя',
        link: '/guide/',
        activeMatch: '^/guide/'
      },
      {
        text: 'API НЛМК Connect',
        link: '/api/',
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
        { text: 'Общая информация', link: '/guide/#введение' }
      ]
    },
    {
      text: ' Руководство',
      children: [
        { text: 'Общее знакомство', link: '/guide/common' },
        { text: 'Работа с таблицами', link: '/guide/dx' },
        { text: 'Отчеты', link: '/guide/report' },
        { text: 'Заявки на производство', link: '/guide/order' },
        { text: 'Ответственное хранение', link: '/guide/custodian' },
        { text: 'Претензии', link: '/guide/claims' }
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
