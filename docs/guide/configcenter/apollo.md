---
title: apollo 应用接入
icon: palette
order: 1
author: yanhom
date: 2022-06-11
tag:
  - apollo 应用接入
  - dynamictp
sticky: true
star: true
---

::: tip 

1. 动态线程池配置文件，建议单独开一个文件放到 apollo 中，如：user-center-dtp-dev.yml

2. 如果配置中心支持 yml 格式，建议最好使用 yml 文件配置，可读性、可操作性更友好

3. 给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量

4. 集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈

:::

::: danger

1. 下述配置项的值都是随便填写的，请不要直接使用该值，根据自己项目做调整

:::

### maven依赖

 ```xml
     <dependency>
         <groupId>org.dromara.dynamictp</groupId>
         <artifactId>dynamic-tp-spring-boot-starter-apollo</artifactId>
         <version>1.1.5</version>
     </dependency>
 ```

### 线程池配置文件

#### yml 格式

```yaml
spring:
  dynamic:
    tp:
      enabled: true                               # 是否启用 dynamictp，默认true
      enabledCollect: true                        # 是否开启监控指标采集，默认false
      collectorTypes: micrometer,logging          # 监控数据采集器类型（logging | micrometer | internal_logging），默认micrometer
      logPath: /home/logs/dynamictp/user-center/  # 监控日志数据路径，默认 ${user.home}/logs，采集类型非logging不用配置
      monitorInterval: 5                          # 监控时间间隔（报警检测、指标采集），默认5s
      apollo:                                     # 存放该线程池配置的 namespace，不配置默认拿apollo配置第一个namespace，动态调参会用到该配置项
        namespace: user-center-dtp-dev.yml
      configType: yml                             # 配置文件类型
      platforms:                                  # 通知报警平台配置
        - platform: wechat
          platformId: 1                            # 平台id
          urlKey: 3a700-127-4bd-a798-c53d8b69c     # 替换
          receivers: test1,test2                   # 接受人企微名称
          
        - platform: ding
          platformId: 2                            # 平台id
          urlKey: f80dad441fcd655438f4a08dcd6a     # 替换
          secret: SECb5441fa6f375d5b9d21           # 替换，非sign模式可以没有此值
          receivers: 18888888888                   # 钉钉账号手机号
          
        - platform: lark
          platformId: 3
          urlKey: 0d944ae7-b24a-40                 # 替换
          receivers: test1,test2                   # 接受人飞书名称/openid
          
        - platform: email
          platformId: 4
          receivers: 123456@qq.com,789789@qq.com   # 收件人
      executors:                                   # 动态线程池配置，都有默认值，采用默认值的可以不配置该项，减少配置量
        - threadPoolName: dtpExecutor1
          threadPoolAliasName: 测试线程池        # 线程池别名
          executorType: common                 # 线程池类型 common、eager、ordered、scheduled，默认 common
          corePoolSize: 6                      # 核心线程数，默认1
          maximumPoolSize: 8                   # 最大线程数，默认cpu核数
          queueCapacity: 2000                  # 队列容量，默认1024
          queueType: VariableLinkedBlockingQueue         # 任务队列，查看源码QueueTypeEnum枚举类，默认VariableLinkedBlockingQueue
          rejectedHandlerType: CallerRunsPolicy          # 拒绝策略，查看RejectedTypeEnum枚举类，默认AbortPolicy
          keepAliveTime: 60                              # 空闲线程等待超时时间，默认60
          threadNamePrefix: test                         # 线程名前缀，默认dtp
          allowCoreThreadTimeOut: false                  # 是否允许核心线程池超时，默认false
          waitForTasksToCompleteOnShutdown: true         # 参考spring线程池设计，优雅关闭线程池，默认false
          awaitTerminationSeconds: 5                     # 优雅关闭线程池时，阻塞等待线程池中任务执行时间，默认0，单位（s）
          preStartAllCoreThreads: false                  # 是否预热所有核心线程，默认false
          runTimeout: 200                                # 任务执行超时阈值，目前只做告警用，单位（ms），默认0
          queueTimeout: 100                              # 任务在队列等待超时阈值，目前只做告警用，单位（ms），默认0
          taskWrapperNames: ["ttl", "mdc"]               # 任务包装器名称，继承TaskWrapper接口
          notifyEnabled: true                            # 是否开启报警，默认true
          platformIds: [1,2]                             # 报警平台id，不配置默认拿上层platforms配置的所有平台
          notifyItems:                     # 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）
            - type: change
              enabled: true
            
            - type: capacity               # 队列容量使用率，报警项类型，查看源码 NotifyTypeEnum枚举类
              enabled: true
              threshold: 80                # 报警阈值，默认70，意思是队列使用率达到70%告警
              platformIds: [2]             # 可选配置，本配置优先级 > 所属线程池platformIds > 全局配置platforms
              interval: 120                # 报警间隔（单位：s），默认120
           
            - type: liveness               # 线程池活性
              enabled: true
              threshold: 80                # 报警阈值，默认 70，意思是活性达到70%告警
           
            - type: reject                 # 触发任务拒绝告警
              enabled: true
              threshold: 100               # 默认阈值10
          
            - type: run_timeout            # 任务执行超时告警
              enabled: true
              threshold: 100               # 默认阈值10
          
            - type: queue_timeout          # 任务排队超时告警
              enabled: true
              threshold: 100               # 默认阈值10
```

#### properties 格式

```properties
spring.dynamic.tp.enabled=true
spring.dynamic.tp.enabledCollect=true
spring.dynamic.tp.collectorTypes=micrometer,logging
spring.dynamic.tp.logPath=/home/logs
spring.dynamic.tp.monitorInterval=5
spring.dynamic.tp.apollo.namespace=user-center-dtp-dev.properties
spring.dynamic.tp.configType=properties
spring.dynamic.tp.platforms[0].platform=wechat
spring.dynamic.tp.platforms[0].urlKey=3a700-127-4bd-a798-c53d8b69c
spring.dynamic.tp.platforms[0].receivers=test1,test2
spring.dynamic.tp.platforms[1].platform=ding
spring.dynamic.tp.platforms[1].urlKey=f80dad441fcd655438f4a08dcd6a
spring.dynamic.tp.platforms[1].secret=SECb5441fa6f375d5b9d21
spring.dynamic.tp.platforms[1].receivers=18888888888
spring.dynamic.tp.platforms[2].platform=lark
spring.dynamic.tp.platforms[2].urlKey=0d944ae7-b24a-40
spring.dynamic.tp.platforms[2].receivers=test1,test2
spring.dynamic.tp.platforms[3].platform=email
spring.dynamic.tp.platforms[3].receivers=123456@qq.com,789789@qq.com
spring.dynamic.tp.executors[0].threadPoolName=dtpExecutor1
spring.dynamic.tp.executors[0].threadPoolAliasName=测试线程池
spring.dynamic.tp.executors[0].executorType=common
spring.dynamic.tp.executors[0].corePoolSize=6
spring.dynamic.tp.executors[0].maximumPoolSize=8
spring.dynamic.tp.executors[0].queueCapacity=200
spring.dynamic.tp.executors[0].queueType=VariableLinkedBlockingQueue
spring.dynamic.tp.executors[0].rejectedHandlerType=CallerRunsPolicy
spring.dynamic.tp.executors[0].keepAliveTime=50
spring.dynamic.tp.executors[0].allowCoreThreadTimeOut=false
spring.dynamic.tp.executors[0].threadNamePrefix=test
spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown=false
spring.dynamic.tp.executors[0].awaitTerminationSeconds=5
spring.dynamic.tp.executors[0].preStartAllCoreThreads=false
spring.dynamic.tp.executors[0].runTimeout=200
spring.dynamic.tp.executors[0].queueTimeout=100
spring.dynamic.tp.executors[0].taskWrapperNames[0]=ttl
spring.dynamic.tp.executors[0].taskWrapperNames[1]=mdc
spring.dynamic.tp.executors[0].notifyEnabled=true
spring.dynamic.tp.executors[0].notifyItems[0].type=capacity
spring.dynamic.tp.executors[0].notifyItems[0].enabled=true
spring.dynamic.tp.executors[0].notifyItems[0].threshold=80
spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]=ding
spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]=wechat
spring.dynamic.tp.executors[0].notifyItems[0].interval=120
spring.dynamic.tp.executors[0].notifyItems[1].type=change
spring.dynamic.tp.executors[0].notifyItems[1].enabled=true
spring.dynamic.tp.executors[0].notifyItems[2].type=liveness
spring.dynamic.tp.executors[0].notifyItems[2].enabled=true
spring.dynamic.tp.executors[0].notifyItems[2].threshold=80
spring.dynamic.tp.executors[0].notifyItems[3].type=reject
spring.dynamic.tp.executors[0].notifyItems[3].enabled=true
spring.dynamic.tp.executors[0].notifyItems[3].threshold=1
spring.dynamic.tp.executors[0].notifyItems[4].type=run_timeout
spring.dynamic.tp.executors[0].notifyItems[4].enabled=true
spring.dynamic.tp.executors[0].notifyItems[4].threshold=1
spring.dynamic.tp.executors[0].notifyItems[5].type=queue_timeout
spring.dynamic.tp.executors[0].notifyItems[5].enabled=true
spring.dynamic.tp.executors[0].notifyItems[5].threshold=1

```

### application.yml 配置

```yaml
apollo:
  bootstrap:
    enabled: true
    namespaces: user-center-dev.yml,user-center-dtp-dev.yml  # 注意：这里要加上动态线程池配置文件，服务启动会根据此配置拉取配置	
  meta: http://localhost:8080
  config-service: http://localhost:8080
app:
  id: user-center
```



::: warning

如果 Apollo 使用 docker 方式安装，需要更改配置，参考这篇文章：https://blog.csdn.net/qq_35530042/article/details/113985623

docker 方式安装请参考这篇文章：https://www.apolloconfig.com/#/zh/deployment/quick-start-docker

:::



### 接入 Apollo 配置流程

1. 本地或 docker 安装 apollo 之后访问 `localhost:8070`

![image-20231205191955993](apollo.assets/image-20231205191955993.png)

2. 创建项目，appid 即为配置文件里的 app.id

![image-20231205192141255](apollo.assets/image-20231205192141255.png)

3. 新建 namespace，除非您想使用默认的 application 作为 namespace name，此时您的配置文件里应该将 namespace 设置为 namespace: application 或者不配置

![image-20231205192514239](apollo.assets/image-20231205192514239.png)

![image-20231205192713419](apollo.assets/image-20231205192713419.png)

![image-20231205192944618](apollo.assets/image-20231205192944618.png)

4. 创建 namespace 后将 dynamic-tp 动态线程池配置文件放置在配置中心 apollo 里

![image-20231205193214034](apollo.assets/image-20231205193214034.png)