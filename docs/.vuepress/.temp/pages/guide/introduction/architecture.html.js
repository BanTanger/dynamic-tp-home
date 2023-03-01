export const data = {
  "key": "v-3406509d",
  "path": "/guide/introduction/architecture.html",
  "title": "架构设计",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "架构设计",
    "icon": "structure",
    "order": 1,
    "author": "yanhom",
    "date": "2022-06-11T00:00:00.000Z",
    "category": [
      "架构设计",
      "dynamictp"
    ],
    "tag": [
      "架构设计",
      "dynamictp"
    ],
    "sticky": false,
    "star": true,
    "summary": "框架功能大体可以分为以下几个模块 1.配置变更监听模块 2.服务内部线程池管理模块 3.三方组件线程池管理模块 4.监控模块 5.通知告警模块 代码结构\r1.adapter 模块：主要是适配一些第三方组件的线程池管理，目前已经实现的有 SpringBoot 内置的三大 web 容器（Tomcat、Jetty、Undertow）、Dubbo、RocketMq、",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/introduction/architecture.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "dynamic-tp"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "架构设计"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:author",
          "content": "yanhom"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "架构设计"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "dynamictp"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-06-11T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "配置变更监听模块",
      "slug": "配置变更监听模块",
      "children": []
    },
    {
      "level": 2,
      "title": "服务内部线程池管理模块",
      "slug": "服务内部线程池管理模块",
      "children": []
    },
    {
      "level": 2,
      "title": "三方组件线程池管理",
      "slug": "三方组件线程池管理",
      "children": []
    },
    {
      "level": 2,
      "title": "监控模块",
      "slug": "监控模块",
      "children": []
    },
    {
      "level": 2,
      "title": "通知告警模块",
      "slug": "通知告警模块",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.32,
    "words": 997
  },
  "filePathRelative": "guide/introduction/architecture.md",
  "localizedDate": "2022年6月11日"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
