import{_ as n,X as a,Y as s,a1 as e}from"./framework-a915a7eb.js";const t={},p=e(`<p>无配置中心可以用此依赖，将配置放到本地配置文件中，无动态调参功能，但有监控告警功能</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ol><li><p>动态线程池配置文件，建议单独开一个配置文件，方便管理</p></li><li><p>建议最好使用 yml 文件配置，可读性、可操作性更友好</p></li><li><p>给出的是全配置项，使用不到的项或者使用默认值的项都可以删除，减少配置量</p></li><li><p>集成失败 90% 以上情况都是使用姿势有误 / 版本兼容问题，有版本兼容性问题可以提 Issues 或加群反馈。</p></li></ol></div><div class="hint-container danger"><p class="hint-container-title">警告</p><ol><li>下述配置项的值都是随便填写的，请不要直接使用该值，根据自己项目做调整</li></ol></div><h3 id="maven-依赖" tabindex="-1"><a class="header-anchor" href="#maven-依赖" aria-hidden="true">#</a> maven 依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara.dynamictp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dynamic-tp-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池配置文件" tabindex="-1"><a class="header-anchor" href="#线程池配置文件" aria-hidden="true">#</a> 线程池配置文件</h3><h4 id="yml-格式" tabindex="-1"><a class="header-anchor" href="#yml-格式" aria-hidden="true">#</a> yml 格式</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
    <span class="token key atrule">tp</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">enabledCollect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                    <span class="token comment"># 是否开启监控指标采集，默认false</span>
      <span class="token key atrule">collectorTypes</span><span class="token punctuation">:</span> micrometer<span class="token punctuation">,</span>logging      <span class="token comment"># 监控数据采集器类型（logging | micrometer | internal_logging），默认micrometer</span>
      <span class="token key atrule">logPath</span><span class="token punctuation">:</span> /home/logs                     <span class="token comment"># 监控日志数据路径，默认 \${user.home}/logs，采集类型非logging不用配置</span>
      <span class="token key atrule">monitorInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>                      <span class="token comment"># 监控时间间隔（报警检测、指标采集），默认5s</span>
      <span class="token key atrule">platforms</span><span class="token punctuation">:</span>                              <span class="token comment"># 通知报警平台配置</span>
        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> wechat
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">1</span>                            <span class="token comment"># 平台id</span>
          <span class="token key atrule">urlKey</span><span class="token punctuation">:</span> 3a700<span class="token punctuation">-</span>127<span class="token punctuation">-</span>4bd<span class="token punctuation">-</span>a798<span class="token punctuation">-</span>c53d8b69c     <span class="token comment"># 替换</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> test1<span class="token punctuation">,</span>test2                   <span class="token comment"># 接受人企微名称</span>
        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> ding
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">2</span>                            <span class="token comment"># 平台id</span>
          <span class="token key atrule">urlKey</span><span class="token punctuation">:</span> f80dad441fcd655438f4a08dcd6a     <span class="token comment"># 替换</span>
          <span class="token key atrule">secret</span><span class="token punctuation">:</span> SECb5441fa6f375d5b9d21           <span class="token comment"># 替换，非sign模式可以没有此值</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> <span class="token number">18888888888</span>                   <span class="token comment"># 钉钉账号手机号</span>
        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> lark
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">3</span>                           
          <span class="token key atrule">urlKey</span><span class="token punctuation">:</span> 0d944ae7<span class="token punctuation">-</span>b24a<span class="token punctuation">-</span><span class="token number">40</span>                 <span class="token comment"># 替换</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> test1<span class="token punctuation">,</span>test2                   <span class="token comment"># 接受人飞书名称/openid</span>
        <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> email
          <span class="token key atrule">platformId</span><span class="token punctuation">:</span> <span class="token number">4</span>
          <span class="token key atrule">receivers</span><span class="token punctuation">:</span> 123456@qq.com<span class="token punctuation">,</span>789789@qq.com   <span class="token comment"># 收件人</span>
      <span class="token key atrule">executors</span><span class="token punctuation">:</span>                                   <span class="token comment"># 动态线程池配置，都有默认值，采用默认值的可以不配置该项，减少配置量</span>
        <span class="token punctuation">-</span> <span class="token key atrule">threadPoolName</span><span class="token punctuation">:</span> dtpExecutor1
          <span class="token key atrule">threadPoolAliasName</span><span class="token punctuation">:</span> 测试线程池             <span class="token comment"># 线程池别名</span>
          <span class="token key atrule">executorType</span><span class="token punctuation">:</span> common                     <span class="token comment"># 线程池类型common、eager：适用于io密集型</span>
          <span class="token key atrule">corePoolSize</span><span class="token punctuation">:</span> <span class="token number">6</span>
          <span class="token key atrule">maximumPoolSize</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token key atrule">queueCapacity</span><span class="token punctuation">:</span> <span class="token number">200</span>
          <span class="token key atrule">queueType</span><span class="token punctuation">:</span> VariableLinkedBlockingQueue   <span class="token comment"># 任务队列，查看源码QueueTypeEnum枚举类</span>
          <span class="token key atrule">rejectedHandlerType</span><span class="token punctuation">:</span> CallerRunsPolicy    <span class="token comment"># 拒绝策略，查看RejectedTypeEnum枚举类</span>
          <span class="token key atrule">keepAliveTime</span><span class="token punctuation">:</span> <span class="token number">50</span>
          <span class="token key atrule">allowCoreThreadTimeOut</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>                  <span class="token comment"># 是否允许核心线程池超时</span>
          <span class="token key atrule">threadNamePrefix</span><span class="token punctuation">:</span> test                         <span class="token comment"># 线程名前缀</span>
          <span class="token key atrule">waitForTasksToCompleteOnShutdown</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>        <span class="token comment"># 参考spring线程池设计，优雅关闭线程池</span>
          <span class="token key atrule">awaitTerminationSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>                     <span class="token comment"># 单位（s）</span>
          <span class="token key atrule">preStartAllCoreThreads</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>                  <span class="token comment"># 是否预热所有核心线程，默认false</span>
          <span class="token key atrule">runTimeout</span><span class="token punctuation">:</span> <span class="token number">200</span>                                <span class="token comment"># 任务执行超时阈值，目前只做告警用，单位（ms）</span>
          <span class="token key atrule">queueTimeout</span><span class="token punctuation">:</span> <span class="token number">100</span>                              <span class="token comment"># 任务在队列等待超时阈值，目前只做告警用，单位（ms）</span>
          <span class="token key atrule">taskWrapperNames</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ttl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mdc&quot;</span><span class="token punctuation">]</span>               <span class="token comment"># 任务包装器名称，继承TaskWrapper接口</span>
          <span class="token key atrule">notifyEnabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                            <span class="token comment"># 是否开启报警，默认true</span>
          <span class="token key atrule">notifyItems</span><span class="token punctuation">:</span>                     <span class="token comment"># 报警项，不配置自动会按默认值配置（变更通知、容量报警、活性报警、拒绝报警、任务超时报警）</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> capacity               <span class="token comment"># 报警项类型，查看源码 NotifyTypeEnum枚举类</span>
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>                <span class="token comment"># 报警阈值</span>
              <span class="token key atrule">platforms</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ding<span class="token punctuation">,</span>wechat<span class="token punctuation">]</span>     <span class="token comment"># 可选配置，不配置默认拿上层platforms配置的所以平台</span>
              <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">120</span>                <span class="token comment"># 报警间隔（单位：s）</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> change
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> liveness
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">80</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> reject
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> run_timeout
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> queue_timeout
              <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
              <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="properties-格式" tabindex="-1"><a class="header-anchor" href="#properties-格式" aria-hidden="true">#</a> properties 格式</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.dynamic.tp.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.enabledCollect</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.collectorTypes</span><span class="token punctuation">=</span><span class="token value attr-value">micrometer,logging</span>
<span class="token key attr-name">spring.dynamic.tp.logPath</span><span class="token punctuation">=</span><span class="token value attr-value">/home/logs</span>
<span class="token key attr-name">spring.dynamic.tp.monitorInterval</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[0].platform</span><span class="token punctuation">=</span><span class="token value attr-value">wechat</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[0].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">3a700-127-4bd-a798-c53d8b69c</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[0].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">test1,test2</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].platform</span><span class="token punctuation">=</span><span class="token value attr-value">ding</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">f80dad441fcd655438f4a08dcd6a</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].secret</span><span class="token punctuation">=</span><span class="token value attr-value">SECb5441fa6f375d5b9d21</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[1].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">18888888888</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[2].platform</span><span class="token punctuation">=</span><span class="token value attr-value">lark</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[2].urlKey</span><span class="token punctuation">=</span><span class="token value attr-value">0d944ae7-b24a-40</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[2].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">test1,test2</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[3].platform</span><span class="token punctuation">=</span><span class="token value attr-value">email</span>
<span class="token key attr-name">spring.dynamic.tp.platforms[3].receivers</span><span class="token punctuation">=</span><span class="token value attr-value">123456@qq.com,789789@qq.com</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].threadPoolName</span><span class="token punctuation">=</span><span class="token value attr-value">dtpExecutor1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].threadPoolAliasName</span><span class="token punctuation">=</span><span class="token value attr-value">测试线程池</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].executorType</span><span class="token punctuation">=</span><span class="token value attr-value">common</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].corePoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">6</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].maximumPoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].queueCapacity</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].queueType</span><span class="token punctuation">=</span><span class="token value attr-value">VariableLinkedBlockingQueue</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].rejectedHandlerType</span><span class="token punctuation">=</span><span class="token value attr-value">CallerRunsPolicy</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].keepAliveTime</span><span class="token punctuation">=</span><span class="token value attr-value">50</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].allowCoreThreadTimeOut</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].threadNamePrefix</span><span class="token punctuation">=</span><span class="token value attr-value">test</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].waitForTasksToCompleteOnShutdown</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].awaitTerminationSeconds</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].preStartAllCoreThreads</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].runTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].queueTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].taskWrapperNames[0]</span><span class="token punctuation">=</span><span class="token value attr-value">ttl</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].taskWrapperNames[1]</span><span class="token punctuation">=</span><span class="token value attr-value">mdc</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyEnabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].type</span><span class="token punctuation">=</span><span class="token value attr-value">capacity</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].platforms[0]</span><span class="token punctuation">=</span><span class="token value attr-value">ding</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].platforms[1]</span><span class="token punctuation">=</span><span class="token value attr-value">wechat</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[0].interval</span><span class="token punctuation">=</span><span class="token value attr-value">120</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[1].type</span><span class="token punctuation">=</span><span class="token value attr-value">change</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[1].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].type</span><span class="token punctuation">=</span><span class="token value attr-value">liveness</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[2].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].type</span><span class="token punctuation">=</span><span class="token value attr-value">reject</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[3].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].type</span><span class="token punctuation">=</span><span class="token value attr-value">run_timeout</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[4].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[5].type</span><span class="token punctuation">=</span><span class="token value attr-value">queue_timeout</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[5].enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.dynamic.tp.executors[0].notifyItems[5].threshold</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[p];function c(o,i){return a(),s("div",null,l)}const r=n(t,[["render",c],["__file","none.html.vue"]]);export{r as default};
