<template><div><div style="padding-bottom: 0px;"></div>
<h1 id="功能特性" tabindex="-1"><a class="header-anchor" href="#功能特性" aria-hidden="true">#</a> 功能特性</h1>
<ul>
<li>
<p><strong>代码零侵入</strong>：我们改变了线程池以往的使用姿势，所有配置均放在配置中心，服务启动时会从配置中心拉取配置生成线程池对象放到 Spring 容器中，使用时直接从 Spring 容器中获取，对业务代码零侵入</p>
</li>
<li>
<p><strong>通知告警</strong>：提供多种通知告警维度（配置变更通知、活性报警、队列容量阈值报警、拒绝触发报警、任务执行或等待超时报警），触发配置阈值实时推送告警信息，已支持企微、钉钉、飞书、邮件、云之家报警，同时提供 SPI 接口可自定义扩展实现</p>
</li>
<li>
<p><strong>运行监控</strong>：定时采集线程池指标数据（20 多种指标，包含线程池维度、队列维度、任务维度、tps、tp99等），支持通过 MicroMeter、JsonLog 两种方式定时获取，也可以通过 SpringBoot Endpoint 端点实时获取最新指标数据，同时提供 SPI 接口可自定义扩展实现</p>
</li>
<li>
<p><strong>任务增强</strong>：提供任务包装功能（比 Spring 线程池任务包装更强大），实现 TaskWrapper 接口即可，如 MdcTaskWrapper、TtlTaskWrapper、SwTraceTaskWrapper、OpenTelemetryWrapper，可以支持线程池上下文信息传递</p>
</li>
<li>
<p><strong>多配置中心支持</strong>：支持多种主流配置中心，包括 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb，同时也提供 SPI 接口可自定义扩展实现</p>
</li>
<li>
<p><strong>中间件线程池管理</strong>：集成管理常用第三方组件的线程池，已集成 Tomcat、Jetty、Undertow、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 等组件的线程池管理（调参、监控报警）</p>
</li>
<li>
<p><strong>轻量简单</strong>：使用起来极其简单，引入相应依赖，接入只需简单 4 步就可完成，顺利 3 分钟搞定，相当丝滑</p>
</li>
<li>
<p><strong>多模式</strong>：提供了增强线程池 DtpExecutor，IO 密集型场景使用的线程池 EagerDtpExecutor，调度线程池 ScheduledDtpExecutor，有序线程池 OrderedDtpExecutor，可以根据业务场景选择合适的线程池</p>
</li>
<li>
<p><strong>兼容性</strong>：JUC 普通线程池和 Spring 中的 ThreadPoolTaskExecutor 也可以被框架管理，@Bean 定义时加 @DynamicTp 注解即可</p>
</li>
<li>
<p><strong>可靠性</strong>：依靠 Spring 生命周期管理，可以做到优雅关闭线程池，在 Spring 容器关闭前尽可能多的处理队列中的任务</p>
</li>
<li>
<p><strong>高可扩展</strong>：框架核心功能都提供 SPI 接口供用户自定义个性化实现（配置中心、配置文件解析、通知告警、监控数据采集、任务包装等等）</p>
</li>
<li>
<p><strong>线上大规模应用</strong>：参考<a href="https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html" target="_blank" rel="noopener noreferrer">美团线程池实践<ExternalLinkIcon/></a>，美团内部已经有该理论成熟的应用经验</p>
</li>
</ul>
<h1 id="最新版本" tabindex="-1"><a class="header-anchor" href="#最新版本" aria-hidden="true">#</a> 最新版本</h1>
<p>SpringBoot1x、2x、Spring6 以下用此依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringBoot3x、Spring6 以上用此依赖（预览版）</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-tp-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.6-3.x-alpha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="技术架构" tabindex="-1"><a class="header-anchor" href="#技术架构" aria-hidden="true">#</a> 技术架构</h1>
<figure><img src="/images/dynamictp/arch.svg" alt="技术架构" tabindex="0" loading="lazy"><figcaption>技术架构</figcaption></figure>
<h1 id="star-history" tabindex="-1"><a class="header-anchor" href="#star-history" aria-hidden="true">#</a> Star History</h1>
<figure><a href="https://star-history.com/#dromara/dynamic-tp&amp;Date" target="_blank" rel="noopener noreferrer"><img src="https://api.star-history.com/svg?repos=dromara/dynamic-tp&amp;type=Date" alt="Star History Chart" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>Star History Chart</figcaption></figure>
<h1 id="知识星球" tabindex="-1"><a class="header-anchor" href="#知识星球" aria-hidden="true">#</a> 知识星球</h1>
<figure><img src="/images/dynamictp/dromara-zsxq.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="dromara-成员项目" tabindex="-1"><a class="header-anchor" href="#dromara-成员项目" aria-hidden="true">#</a> Dromara 成员项目</h1>
<div>
    <div class="com-box-f s-width">
        <div class="com-box com-box-you">
            <a href="https://gitee.com/dromara/TLog" target="_blank">
                <img src="/images/tlog-logo.png" msg="一个轻量级的分布式日志标记追踪神器，10分钟即可接入，自动对日志打标签完成微服务的链路追踪">
            </a>
            <a href="https://gitee.com/dromara/liteFlow" target="_blank">
                <img src="/images/lite-flow.png" msg="轻量，快速，稳定，可编排的组件式流程引擎">
            </a>
            <a href="https://hutool.cn/" target="_blank">
                <img src="/images/hutool-logo.png" msg="🍬小而全的Java工具类库，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。">
            </a>
            <a href="https://sa-token.dev33.cn/" target="_blank">
                <img src="/images/sa-token.png" msg="一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！">
            </a>
            <a href="https://gitee.com/dromara/hmily" target="_blank">
                <img src="/images/hmily.png" msg="高性能一站式分布式事务解决方案。">
            </a>
            <a href="https://gitee.com/dromara/Raincat" target="_blank">
                <img src="/images/raincat.png" msg="强一致性分布式事务解决方案。">
            </a>
            <a href="https://gitee.com/dromara/myth" target="_blank">
                <img src="/images/myth.png" msg="可靠消息分布式事务解决方案。">
            </a>
            <a href="https://cubic.jiagoujishu.com/" target="_blank">
                <img src="/images/cubic-logo.png" msg="一站式问题定位平台，以agent的方式无侵入接入应用，完整集成arthas功能模块，致力于应用级监控，帮助开发人员快速定位问题">
            </a>
            <a href="https://maxkey.top/" target="_blank">
                <img src="/images/maxkey-logo.png" msg="业界领先的身份管理和认证产品">
            </a>
            <a href="http://forest.dtflyx.com/" target="_blank">
                <img src="/images/forest-logo.png" msg="Forest能够帮助您使用更简单的方式编写Java的HTTP客户端" nf>
            </a>
            <a href="https://jpom.top/" target="_blank">
                <img src="/images/jpom-logo.png" msg="一款简而轻的低侵入式在线构建、自动部署、日常运维、项目监控软件">
            </a>
            <a href="https://su.usthe.com/" target="_blank">
                <img src="/images/sureness.png" msg="面向 REST API 的高性能认证鉴权框架">
            </a>
            <a href="https://easy-es.cn/" target="_blank">
                <img src="/images/easy-es2.png" msg="🚀傻瓜级ElasticSearch搜索引擎ORM框架">
            </a>
            <a href="https://gitee.com/dromara/northstar" target="_blank">
                <img src="/images/northstar_logo.png" msg="Northstar盈富量化交易平台">
            </a>
            <a href="https://hertzbeat.com/" target="_blank">
                <img src="/images/hertzbeat-logo.png" msg="易用友好的云监控系统">
            </a>
            <a href="https://dromara.gitee.io/fast-request/" target="_blank">
                <img src="/images/fast-request.png" msg="Idea 版 Postman，为简化调试API而生">
            </a>
            <a href="https://www.jeesuite.com/" target="_blank">
                <img src="/images/mendmix.png" msg="开源分布式云原生架构一站式解决方案">
            </a>
            <a href="https://gitee.com/dromara/koalas-rpc" target="_blank">
                <img src="/images/koalas-rpc2.png" msg="企业生产级百亿日PV高可用可拓展的RPC框架。">
            </a>
            <a href="https://async.sizegang.cn/" target="_blank">
                <img src="/images/gobrs-async.png" msg="🔥 配置极简功能强大的异步任务动态编排框架">
            </a>
            <a href="https://dynamictp.cn/" target="_blank">
                <img src="/images/dynamic-tp.png" msg="🔥🔥🔥 基于配置中心的轻量级动态可监控线程池">
            </a>
            <a href="https://www.x-easypdf.cn" target="_blank">
                <img src="/images/easypdf.png" msg="一个用搭积木的方式构建pdf的框架（基于pdfbox）">
            </a>
            <a href="http://dromara.gitee.io/image-combiner" target="_blank">
                <img src="/images/imageCombiner.png" msg="一个专门用于图片合成的工具，没有很复杂的功能，简单实用，却不失强大">
            </a>
            <a href="https://www.herodotus.cn/" target="_blank">
				<img src="/images/dantecloud.png" msg="Dante-Cloud 是一款企业级微服务架构和服务能力开发平台。">
            </a>
            <a href="https://www.mtruning.club/" target="_blank">
				<img src="/images/go-view.png" msg="GoView 是一个高效的拖拽式低代码数据可视化开发平台。">
            </a>
        </div>
        <div style="height: 10px; clear: both;"></div>
        <p>
            为往圣继绝学，一个人或许能走的更快，但一群人会走的更远。
        </p>
    </div>
    <div style="height: 60px;"></div>
</div>
<link rel="stylesheet" href="/index.css">
</div></template>


