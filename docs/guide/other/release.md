---
title: 发版记录
icon: list
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 发版记录
  - dynamictp
sticky: false
star: true
---

::: tip
## v1.1.5 发版记录

#### Feature

- 监控模块新增 TPS、TP99、TP95、TP50 等监控指标，@kyao，@yanhom

- Grafana 监控面板升级，支持更丰富指标查看，@yanhom

- 告警信息里添加系统负载，cpu 使用率，cpu 核数等指标，@yanhom

#### Bugfix

- 修复 jetty 线程池代理后一直触发任务超时告警的问题，@kyao

- 修复 DtpPostProcessor 增强普通线程池后没返回代理，shutdown 原线程池的问题，@yanhom

- 修复代理三方线程池时直接继承 juc 线程池，没兼容框架内自定义线程池的场景，如 dubbo、motan 的 eager 模式，@yanhom

#### Optimize

- 各三方中间件线程池被代理后，原线程池优雅关闭，@yanhom

- 设置 hutool http 工具包的超时时间，@chenkangning

- 调整告警项的默认阈值，@yanhom

- 部分代码优化重构，@yanhom
:::

::: tip
## v1.1.4 发布记录

#### Feature

- 支持 Spring 项目，SpringBoot 相关特性只在 starter 模块引入，@dragon-zhang

- 添加 jvmti 黑科技模块，方便集成管理各种三方包线程池，@dragon-zhang

- 升级 VariableLinkedBlockingQueue 到 jdk1.8 的 LinkedBlockingQueue 的实现，@yanhom

- 添加插件机制，基于此可以对框架做自定义开发扩展，@WindSearcher

- 细化告警配置，支持不同告警项配置不同接受人，@kyao

- 通知告警平台支持云之家，@chunhui_lu

- 支持 SpringBoot 1.x，@yanhom

- 第三方线程池（tomcat、undertow、dubbo、rocketmq、okhttp3 等等）支持 run_timeout、queue_timeout、reject 告警，@kyao，@yanhom

- 提供 Aware 扩展，可以扩展自定义线程池执行过程，@kyao

- 监控数据新增线程池别名，@zhifei

#### Bugfix

- 修复 Tomcat 高低版本兼容性报错问题，@yanhom

- 修复其他 agent 增强线程池后，强转 DtpRunnable 失败的问题，@yanhom

- 修复企微告警无@提醒的问题，@yanhom

- 修复企微告警配置多个接受人不能正确@的问题，@KamToHung

- 修复钉钉告警不能@所有人问题，@chenan

- 修复因 Bean 初始化顺序不确定导致的 ApplicationContextHolder npe 问题，@yanhom

- 修复修复拒绝策略为 CallerRunsPolicy 时，MdcRunnable 会删除主线程 mdc 信息的问题，@kyao

#### Optimize

- 优化 dtp 内部 spi 的使用，统一封装管理，@peachyy

- 部分代码优化重构，@yanhom，@KamToHung，@dragon-zhang，@kyao

- 告警信息优化，trace 信息可以自己扩展，集成内部 ELK 等平台，@yanhom
:::

::: tip
## v1.1.3 发布记录

groupId 及包名改为 org.dromara.dynamictp

#### Feature

- 引入时间轮重构任务超时（排队超时、执行超时）功能，@KamToHung

- 增加 ExecutorAdapter，做各种框架线程池的适配器，@dragon-zhang

- WebServer（Tomcat、Undertow、Jetty）支持通知告警，@dragon-zhang

- 阿里云商业版 RocketMQ 线程池管理支持，@Redick01

- 引入 JsonUtil，根据依赖选择 Jackson/Gson/FastJson 做框架 json 序列化工具，减少外部依赖，@topsuder

- 重构 OrderedDtpExecutor 有序线程池实现，@yanhom, @KamToHung

- 实现优雅关闭线程池功能，@yanhom

- 增加 dependencies 模块，统一管理依赖，@KamToHung

- TaskWrapper 支持 OpenTelemetry，@brendanv

#### Bugfix

- 修复飞书告警失败问题，@KamToHung

- 修复配置变更后不通知的问题，@yanhom

- 修复 dtp-alarm 线程 StackOverflowError 异常，@yanhom

- 修复 DtpPostProcessor 初始化晚于线程池实例初始化问题，@KamToHung

#### Optimize

- 丰富 Undertow 线程池监控指标，@yanhom

- 优化当引入 Dtp 包，不启用时可以通过手动配置关闭，@ruoan777

- 优化告警功能，解决实际推送的告警信息看着不准的问题，@ruoan777

- 线程池内部注册器模块优化，@KamToHung

- Hutool 依赖优化，只引入用到的包，@KamToHung

- 部分代码优化重构，@yanhom，@KamToHung，@dragon-zhang
:::

::: tip
## v1.1.2 发布记录

#### Features

+ 增加对 juc 线程池的动态调参能力，感谢@wenpan的贡献

+ 增加 ScheduledDtpExecutor，感谢@WindSearcher的贡献

+ 增加spring-cloud-tencent配置中心polaris的支持，感谢@fabian4的贡献

+ 增加对rocketmq producer线程池的管理，感谢@fabian4的贡献

+ 增加对rabbitmq消费线程池的管理，感谢@fabian4的贡献

+ 任务执行超时、拒绝等场景下日志输出 & 告警信息里添加打印tid，感谢@kyao的贡献

+ 增加spring-cloud-huawei配置中心servicecomb的支持，感谢@WindSearcher的贡献

+ platfrom 新增id字段，可以配置多个通知平台，根据配置推送相应报警群，感谢@KamToHung的贡献

+ StreamRocketMqDtpAdapter 增加对producer线程池的管理，感谢@hailang的贡献

#### Bugfix

+ 修复 alibaba dubbo 初始化错误赋值的bug，感谢@WindSearcher的贡献

+ 修复webserver undertow 高低版本不兼容问题，感谢@WindSearcher的贡献

+ 修复DtpPostProcessor类中AnnotatedBeanDefinition强制转换失败问题，感谢@文攀锋的贡献

#### Optimize

+ jackson-databind版本升级

+ hutool 版本升级5.8.12

+ 优化在JDK8下, corePoolSize为0时, ScheduledThreadPoolExecutor会导致死循环问题，感谢@WindSearcher的贡献

+ 优化获取本机ip地址的方式，感谢@yaokai的贡献

+ 优化submit提交的任务执行异常时，无法被UncaughtExceptionHandler处理，感谢@dailingx的贡献

+ 优化只有打开dynamicTP开关才加载第三方adapter类，感谢@hkhuang的贡献

+ 启动优化，启动时只通过@EnableDynamicTp决定是否使用dtp，感谢@KamToHung的贡献

+ 日志输出优化

+ 部分代码优化重构
:::

::: tip

## v1.1.0 发布记录

#### Features

- adapter 模块新增 motan rpc 框架线程池管理

- adapter 模块新增 okhttp3 线程池管理

- 新增 OrderedDtpExecutor，感谢 @hailang 提供实现

- adapter 模块新增 brpc（starlight） 线程池管理

- adapter 模块新增 tars rpc 线程池管理

- 线程池配置添加 notifyEnabled 字段，可以全局控制通知功能开启与否

- 新增 StreamRocketMqDtpAdapter，Rocketmq 线程池管理支持 Stream 场景下使用，感谢 @MIEAPP 提供实现

- adapter 模块新增 sofa-rpc 框架线程池管理

- 通过 SpringExecutor 支持 Spring 线程池

- 支持飞书验签，感谢@ZhaoGZ 提供实现

#### BugFix

- ApacheDubbo 线程池初始化失败问题修复，感谢 @hdgaadd 提供实现

- SimpleTpProperties keepAliveTime 字段数据类型错误问题修复

#### Optimize

- 要修改的核心线程数大于当前最大线程数不能修改问题优化

- 引入 commons-collections，优化 hutool 高低版本不兼容问题

- notify 模块相关代码重构

- 采用 checkstyle 调整代码风格
- 
:::

::: tip

## v1.0.9 发布记录

#### Features

+ 告警类型新增邮件告警渠道，感谢 @林林林 提供实现

+ adapter 模块新增 grpc 服务端线程池管理


#### BugFix

+ AbstractDtpNotifier 添加无参构造函数，修复 SPI 自定义无法接入问题

+ ApolloRefresher 调整为实现 ConfigFileChangeListener 接口，解决配置类型为 properties 类型时，多次修改参数间隔生效的问题，感谢 @NY 提供实现

+ 调整线程池告警配置初始化时机，修复提前使用因告警项没初始化导致的 NPE 问题，感谢 @林林林 提供实现


#### Refactor

+ 将 core 模块中 adapter 包迁移到 adapter-common 模块中，彻底解耦

+ 重构 notify 模块

+ 重构抽象 adapter 模块代码

+ 责任链模式重构 notify 模块


#### Optimize

+ 兼容低版本 dubbo（2.7.3） 线程池监控，感谢 @songxiaohua 提供实现

+ 兼容 Spring 5.2 以下 applicationContext.findAnnotationOnBean 获取不到注解的情况，感谢 @Redick01 提供实现

+ MemorySafeLinkedBlockingQueue 阻塞队列添加拒绝策略

+ 优化项目日志输出

:::


::: tip

## v1.0.8 发布记录

距离 v1.0.7 发布已经有差不多 2 个月时间，这个版本新增了好些功能，同时优化重构了一些代码设计，欢迎大家升级体验哦！


#### Features

+ 新增内存安全队列 MemorySafeLinkedBlockingQueue，感谢 @dragon-zhang 提供实现

+ WebServer 线程池管理支持 Reactive 环境下使用，感谢 @abbottliu.liu 提供实现

+ 支持 Dubbox 线程池管理，感谢 @Redick01 提供实现

+ 支持 Spring 中的 ThreadPoolTaskExecutor 线程池管理，感谢 @Redick01 提供实现

+ 支持 Etcd 配置中心接入，感谢 @Redick01 提供实现

+ 三方中间件线程池通知告警支持别名配置，感谢 @renbiao002 提供实现

+ 三方中间件线程池管理支持通知告警功能

+ 新增 MdcTaskWrapper 任务包装器，支持 MDC 上下文传递

+ 新增 SwTraceTaskWrapper 任务包装器，支持 Skywalking TID 传递

+ 监控数据输出新增输出到应用日志中的 collector

+ 指标数据采集支持配置多个采集方式

+ 新增通知告警集群限流插件，见 starter-extension-limiter-redis 模块

+ ThreadPoolCreator 类新增一些内存安全快捷创建线程池方法


#### BugFix

+ 兼容 JDK11 当前要设置核心线程数不能大于上次设置的最大线程数限制

+ 修复核心线程预热设置 preStartAllCoreThreads 不生效问题

+ 修复 Hystrix 线程池获取失败 & 调参被覆盖问题


#### Refactor

+ 重构 logging 模块，去掉事件监听依赖

+ 重构抽象 adapter 模块代码

+ 责任链模式重构 notify 模块


#### Optimize

+ example 添加 Hystrix 线程池的测试例子

+ 低版本 Apollo 配置文件格式兼容

+ Undertow 容器开启活跃线程池数获取功能

+ Endpoint 端点接口支持三方中间件线程池状态获取

+ 优化三方中间件参数刷新逻辑，增加校验判断逻辑

:::


::: tip

## v1.0.7 发布记录

明细：https://juejin.cn/post/7108551236609114149

距离v1.0.5发布已经有差不多2个月时间，这个版本框架源码调整还是比较大的，重构了好一些功能， 主要是围绕第三方中间件线程池集成来改动的，是向前兼容的，同时修复了三个小bug。

如果你有下述痛点，快快升级体验吧。

1）如果你在使用 Dubbo，那么你大概率遇到过 Dubbo 线程池耗尽的情况，是不是很烦恼呢？尝试使用下 DynamicTp 的 Dubbo 线程池管理功能，结合告警、实时监控、动态调参等功能尽可能降低 Dubbo 线程池耗尽，请求拒绝的风险。

2）mq 应该是很多互联网系统都会使用到的中间件，使用 mq 经常会遇到的其中一个问题就是消息积压问题，具体啥原因导致积压需要具体问题具体分析，就RocketMq来说，消费端是使用线程池进行处理消息的，所以说线程池的设置也会直接或者间接影响到消费速度，需要对此进行监控、告警、以及动态调参，尽可能降低因线程池设置而导致的积压风险。

注意：三方组件的包需要自己引入，具体查看官网


#### Features

+ 报警渠道接入飞书

+ 支持 Apache Dubbo & Alibab Dubbo 服务端提供端线程池管理

+ 支持 RocketMq 消费端线程池管理

+ 支持 Hystrix 线程池管理

+ 支持 SpringBoot 内置三大WebServer（Tomcat、Jetty、Undertow）线程池管理

+ 增加线程池别名配置，提升告警信息可读易懂性

+ 提供任务包装类NamedRunable，提交任务时设置标识名称，方便问题追踪

+ 告警项自定义配置，不配置的项用默认值


#### BugFix

+ 修复并发导致通知报警信息发送多条的问题

+ 修复通知渠道配置修改不能动态更新问题

+ 修复钉钉手机端报警信息高亮失效问题


#### Refactor

+ 重构部分通知告警模块实现，支持三方中间件通知告警

+ 重构调整 adapter、starter 模块代码组织结构

:::

::: tip

## v1.0.5

#### Features

+ logging模块添加log4j2支持

+ 配置文件支持json格式，zk已支持json、properties格式配置


#### BugFix

+ [#I54B4R](https://gitee.com/dromara/dynamic-tp/issues/I54B4R)  


#### Refactor

+ 部分代码优化

#### Dependency

+ transmittable-thread-local升级到2.12.6

+ micrometer升级到1.8.5

:::

::: tip

## v1.0.4

#### Features

+ 配置中心支持Consul

+ 监控告警模块增加任务排队等候超时、任务执行超时监控告警

+ 线程池完全配置在配置中心，无需代码编程式配置，服务启动会自动创建线程池实例，交给Spring容器管理

+ 拒绝策略告警优化，支持前后告警间隔计数

+ 相关代码优化

:::

::: tip

## v1.0.3

#### Features

+ 配置中心支持Zookeeper

+ 线程池交由Spring管理其生命周期，可以通过依赖注入方式使用

+ 创建时添加@DynamicTp注解支持监控JUC原生线程池

+ 仿照Tomcat线程池设计，提供IO密集型线程池（EagerDtpExecutor）

+ 相关代码优化，增加必要校验

:::

::: tip

## v1.0.2

#### Features

+ 配置中心支持Nacos、Apollo、Zookeeper

+ 告警平台支持企微、钉钉

+ 监控指标数据采集支持json日志输出、MicorMeter以及Endpoint三种方式

+ 第三方组件线程池管理已集成SpringBoot内置三大WebServer（Tomcat、Jetty、Undertow）

+ 核心模块都提供SPI接口可供自定义扩展（配置中心、配置文件解析、告警平台、监控指标数据采集）

+ 提供完整使用示例（包含Grafana配置面板Json文件，直接import即可使用）

:::