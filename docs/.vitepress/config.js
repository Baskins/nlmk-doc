module.exports = {
  base: '/doc',
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
      // {
      //   text: 'Дашбоард НЛМК Онлайн',
      //   link: 'https://nlmk.online'
      // },
      {
        text: 'Учебный курс "Контракт"',
        link: 'https://curs.nlmk.shop/?utm_source=referral&utm_medium=link&utm_campaign=b2b'
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
        { text: 'Заявки на производство', link: '/guide/order/', children: [
          { text: 'Создание заявки на производство', link: '/guide/order/new' },
          { text: 'Конфигурирование продукции', link: '/guide/order/pc' },
          { text: 'Шаблоны продукции (избранное)', link: '/guide/order/favorite' },
          { text: 'Грузополучатели', link: '/guide/order/consignee' },
          { text: 'Оформление заявки на производство', link: '/guide/order/checkout' },
          { text: 'Информация по заказам', link: '/guide/order/status' }
        ] },
        { text: 'Ответственное хранение', link: '/guide/custodian' },
        { text: 'Претензии', link: '/guide/claims' },
        { text: 'EDI интеграция', link: '/guide/edi' }
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
