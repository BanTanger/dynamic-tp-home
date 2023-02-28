export const data = {
  "key": "v-cf6119d0",
  "path": "/guide/use/code.html",
  "title": "代码使用",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "代码使用",
    "icon": "code",
    "order": 1,
    "author": "yanhom",
    "date": "2022-06-11T00:00:00.000Z",
    "category": [
      "代码使用"
    ],
    "tag": [
      "代码使用"
    ],
    "sticky": true,
    "star": true,
    "summary": "线程池实例定义; 建议直接配置在配置中心，但是如果想后期再添加到配置中心，可以先用 @Bean 编码式声明（方便 spring 依赖注入） 代码调用; 从 DtpRegistry 中根据线程池名称获取，或者通过依赖注入方式(推荐，更优雅) 1）依赖注入方式使用，优先推荐依赖注入方式，不能使用依赖注入的场景可以使用方式2 2）通过 DtpRegistry 注册",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://gitee.com/dromara/dynamic-tp/guide/use/code.html"
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
          "content": "代码使用"
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
          "content": "代码使用"
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
  "headers": [],
  "readingTime": {
    "minutes": 1.41,
    "words": 424
  },
  "filePathRelative": "guide/use/code.md",
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
