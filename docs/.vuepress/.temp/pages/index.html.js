export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "首页",
    "heroImage": "/logo.png",
    "heroText": "dynamic-tp",
    "tagline": "🔥🔥🔥 基于配置中心的轻量级动态可监控线程池",
    "actions": [
      {
        "text": "快速上手 🎉",
        "link": "/guide/use/quick-start",
        "type": "primary"
      },
      {
        "text": "star支持 ❤️",
        "link": "https://gitee.com/dromara/dynamic-tp"
      },
      {
        "text": "专栏文章 📚",
        "link": "https://juejin.cn/column/7053801521502224392"
      }
    ],
    "features": [
      {
        "title": "动态调参",
        "icon": "customize",
        "details": "在运行时动态调整线程池参数，包括核心线程数、最大线程数、空闲线程超时时间、任务队列大小等",
        "link": "/guide/use/quick-start"
      },
      {
        "title": "通知报警",
        "icon": "notice",
        "details": "目前支持调参通知、活性、队列容量、拒绝策略、超时共六类通知报警维度，在运行时实时+定时检测，触发阈值进行推送",
        "link": "/guide/notice/alarm"
      },
      {
        "title": "运行监控",
        "icon": "eye",
        "details": "定时采集线程池运行指标数据，提供jsonlog、micrometer、endpoint三种指标数据采集方式，可灵活选择",
        "link": "/guide/monitor/way"
      },
      {
        "title": "三方包集成",
        "icon": "grid",
        "details": "集成三方中间件线程池管理，已接入dubbo、rocketmq、hystrix、grpc、tomcat、undertow、jetty、grpc、okhttp等组件线程池管理",
        "link": "/guide/middleware/middleware"
      }
    ],
    "summary": "🔐 杜绝删库跑路。一个平台登录所有资产，实现事先防范、事中控制、事后溯源，满足等保合规要求。广告 功能特性 ✅\r代码零侵入：我们改变了线程池以往的使用姿势，所有配置均放在配置中心，服务启动时会从配置中心拉取配置生成线程池对象放到 Spring 容器中，使用时直接从 Spring 容器中获取，对业务代码零侵入; \r通知告警：提供多种报警维度（配置变更通知、活",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/"
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
          "content": "首页"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 6.18,
    "words": 1853
  },
  "filePathRelative": "README.md"
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
