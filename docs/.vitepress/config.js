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
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
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
    },
    {
      text: 'API НЛМК Connect',
      children: [
        { text: 'Общая информация', link: '/api/' },
        { text: 'Предварительные настройки', link: '/api/setting' },
        { text: 'Методы работы с API', link: '/api/methods' }
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
