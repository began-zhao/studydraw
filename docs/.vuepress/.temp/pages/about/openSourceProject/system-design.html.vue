<template><div><h2 id="基础框架" tabindex="-1"><a class="header-anchor" href="#基础框架" aria-hidden="true">#</a> 基础框架</h2>
<ul>
<li><strong><a href="https://github.com/spring-projects/spring-boot" title="spring-boot" target="_blank" rel="noopener noreferrer">Spring Boot <ExternalLinkIcon/></a></strong> ：Spring Boot 可以轻松创建独立的生产级基于 Spring 的应用程序,内置 web 服务器让你可以像运行普通 Java 程序一样运行项 目。另外，大部分 Spring Boot 项目只需要少量的配置即可，这有别于 Spring 的重配置。</li>
<li><strong><a href="https://github.com/tipsy/javalin" target="_blank" rel="noopener noreferrer">Javalin<ExternalLinkIcon/></a></strong> ：一个轻量级的 Web 框架，同时支持 Java 和 Kotlin，被微软、红帽、Uber等公司使用。</li>
<li><strong><a href="https://github.com/quarkusio/quarkus" target="_blank" rel="noopener noreferrer">Quarkus<ExternalLinkIcon/></a></strong> : 用于编写 Java 应用程序的云原生和容器优先的框架。</li>
<li><strong><a href="https://github.com/google/guice" target="_blank" rel="noopener noreferrer">Guice<ExternalLinkIcon/></a></strong> ：Google 开源的一个轻量级依赖注入框架，相当于一个功能极简化的轻量级 Spring Boot。在某些情况下非常实用，就比如说我们的项目只需要使用依赖注入，不需要 AOP 等功能特性。</li>
<li><strong><a href="https://github.com/sofastack/sofa-boot" target="_blank" rel="noopener noreferrer">SOFABoot<ExternalLinkIcon/></a></strong> ：SOFABoot 基于 Spring Boot ，不过在其基础上增加了 Readiness Check，类隔离，日志空间隔离等等能力。 配套提供的还有：SOFARPC（RPC 框架）、SOFABolt（基于 Netty 的远程通信框架）、SOFARegistry（注册中心）...详情请参考：<a href="https://github.com/sofastack" target="_blank" rel="noopener noreferrer">SOFAStack <ExternalLinkIcon/></a> 。</li>
<li><a href="https://github.com/spring-projects/spring-batch" target="_blank" rel="noopener noreferrer"><strong>Spring Batch</strong><ExternalLinkIcon/></a> : Spring Batch 是一个轻量级但功能又十分全面的批处理框架，主要用于批处理场景比如从数据库、文件或队列中读取大量记录。不过，需要注意的是：<strong>Spring Batch 不是调度框架</strong>。商业和开源领域都有许多优秀的企业调度框架比如 Quartz、XXL-JOB、Elastic-Job。它旨在与调度程序一起工作，而不是取代调度程序。更多介绍请参考 <a href="https://docs.spring.io/spring-batch/docs/4.3.x/reference/html/spring-batch-intro.html#spring-batch-intro" target="_blank" rel="noopener noreferrer">Spring Batch 官方文档<ExternalLinkIcon/></a>，入门教程可以参考 <a href="https://mrbird.cc/Spring-Batch%E5%85%A5%E9%97%A8.html" target="_blank" rel="noopener noreferrer">Spring Batch 从入门到实战<ExternalLinkIcon/></a>。</li>
</ul>
<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2>
<h3 id="连接池" tabindex="-1"><a class="header-anchor" href="#连接池" aria-hidden="true">#</a> 连接池</h3>
<ul>
<li><strong><a href="https://github.com/alibaba/druid" target="_blank" rel="noopener noreferrer">Druid<ExternalLinkIcon/></a></strong> : 阿里巴巴数据库事业部出品，为监控而生的数据库连接池。</li>
<li><strong><a href="https://github.com/brettwooldridge/HikariCP" target="_blank" rel="noopener noreferrer">HikariCP<ExternalLinkIcon/></a></strong> : 一个可靠的高性能 JDBC 连接池。Springboot 2.0 选择 HikariCP 作为默认数据库连接池。</li>
</ul>
<h3 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h3>
<ul>
<li><strong><a href="https://github.com/baomidou/mybatis-plus" target="_blank" rel="noopener noreferrer">MyBatis-Plus<ExternalLinkIcon/></a></strong> : <a href="https://github.com/baomidou/mybatis-plus" target="_blank" rel="noopener noreferrer">MyBatis-Plus<ExternalLinkIcon/></a>（简称 MP）是一个 <a href="http://www.mybatis.org/mybatis-3/" target="_blank" rel="noopener noreferrer">MyBatis<ExternalLinkIcon/></a> 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</li>
<li><strong><a href="https://github.com/redisson/redisson" title="redisson" target="_blank" rel="noopener noreferrer">Redisson<ExternalLinkIcon/></a></strong> ： Redis 基础上的一个 Java 驻内存数据网格（In-Memory Data Grid）,支持超过 30 个对象和服务:<code v-pre>Set</code>,<code v-pre>SortedSet</code>, <code v-pre>Map</code>, <code v-pre>List</code>, <code v-pre>Queue</code>, <code v-pre>Deque</code> ......，并且提供了多种分布式锁的实现。更多介绍请看：<a href="https://github.com/redisson/redisson/wiki/Redisson%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D" title="Redisson项目介绍" target="_blank" rel="noopener noreferrer">《Redisson 项目介绍》<ExternalLinkIcon/></a>。</li>
</ul>
<h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3>
<ul>
<li><strong><a href="https://github.com/ben-manes/caffeine" target="_blank" rel="noopener noreferrer">Caffeine<ExternalLinkIcon/></a></strong> : 一款强大的本地缓存解决方案，性能非常 🐂。</li>
<li><strong><a href="https://github.com/redis/redis" target="_blank" rel="noopener noreferrer">Redis<ExternalLinkIcon/></a></strong> ：一个使用 C 语言开发的内存数据库，分布式缓存首选。</li>
</ul>
<h3 id="数据库建模" tabindex="-1"><a class="header-anchor" href="#数据库建模" aria-hidden="true">#</a> 数据库建模</h3>
<ul>
<li><strong><a href="https://gitee.com/robergroup/chiner" target="_blank" rel="noopener noreferrer">CHINER<ExternalLinkIcon/></a></strong> ：开源免费的国产数据库建模工具。目标是做一款丰富数据库生态，独立于具体数据库之外的，数据库关系模型设计平台。前生是 <a href="https://gitee.com/robergroup/pdman" target="_blank" rel="noopener noreferrer">PDMan<ExternalLinkIcon/></a>，定位为 PowerDesigner 的免费替代方案。</li>
</ul>
<p>开源的数据库建模工具比较少，以下是一些非开源的数据库建模工具（部分需要付费才能使用） :</p>
<ul>
<li><strong><a href="https://www.mysql.com/products/workbench/" target="_blank" rel="noopener noreferrer">MySQL Workbench<ExternalLinkIcon/></a></strong> : MySQL 官方为数据库架构师、开发人员和 DBA 提供的一个可视化工具。 MySQL Workbench 支持数据建模，SQL 开发以及服务器配置、用户管理、性能优化、数据库备份以及迁移等功能，支持 Windows、Linux 和 Mac OS X 平台。</li>
<li><strong><a href="https://www.navicat.com.cn/products/navicat-data-modeler" target="_blank" rel="noopener noreferrer">Navicat Data Modeler<ExternalLinkIcon/></a></strong> : 一款强大的和符合成本效益的数据库设计工具，它能帮助用户创建高质素的概念、逻辑和物理数据模型。让你可视化地设计数据库结构、执行逆向或正向工程程序、从 ODBC 数据源导入模型、生成复杂的 SQL/DDL 和打印模型到文件等。付费。</li>
<li><strong><a href="https://dbschema.com/" target="_blank" rel="noopener noreferrer">DbSchema<ExternalLinkIcon/></a></strong> : 一款功能强大的数据库设计和管理的可视化工具，支持几乎所有的关系型和 NoSQL 数据库。付费。</li>
<li><strong><a href="https://dbdiagram.io/home" target="_blank" rel="noopener noreferrer">dbdiagram.io<ExternalLinkIcon/></a></strong> : 是一款简单免费的在线 ER 图绘制工具，通过编写代码创建模型，专为开发人员和数据分析师而设计。它通过一个简单的自定义语言来生成数据模型，支持 MySQL、PostgreSQL、SQL Server 数据库 DDL 文件的正向工程和逆向工程、版本历史、在线共享、导出图片或者 PDF 等功能。<a href="http://dbdiagram.io" target="_blank" rel="noopener noreferrer">dbdiagram.io<ExternalLinkIcon/></a> 提供了免费版。</li>
</ul>
<h3 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理" aria-hidden="true">#</a> 数据库管理</h3>
<ul>
<li><strong><a href="https://github.com/beekeeper-studio/beekeeper-studio" target="_blank" rel="noopener noreferrer">Beekeeper Studio<ExternalLinkIcon/></a></strong> ：跨平台数据库管理工具，颜值高，支持 SQLite、MySQL、MariaDB、Postgres、CockroachDB、SQL Server、Amazon Redshift。</li>
<li><strong><a href="https://github.com/sequelpro/sequelpro" target="_blank" rel="noopener noreferrer">Sequel Pro<ExternalLinkIcon/></a></strong> ：适用于 macOS 的 MySQL/MariaDB 数据库管理工具。</li>
<li><strong><a href="https://github.com/dbeaver/dbeaver" target="_blank" rel="noopener noreferrer">DBeaver<ExternalLinkIcon/></a></strong> ：一个基于 Java 开发 ，并且支持几乎所有的数据库产品的开源数据库管理工具。DBeaver 社区版不光支持关系型数据库比如 MySQL、PostgreSQL、MariaDB、SQLite、Oracle、Db2、SQL Server，还比如 SQLite、H2 这些内嵌数据库。还支持常见的全文搜索引擎比如 Elasticsearch 和 Solr、大数据相关的工具比如 Hive 和 Spark。</li>
<li><strong><a href="https://gitee.com/dbkangaroo/kangaroo" target="_blank" rel="noopener noreferrer">Kangaroo<ExternalLinkIcon/></a></strong> ：袋鼠 是一款为热门数据库系统打造的管理客户端(SQLite / MySQL / PostgreSQL / ...) ，支持建表、查询、模型、同步、导入导出等功能，支持 Windows / Mac / Linux 等操作系统，力求打造成好用、好玩、开发友好的 SQL 工具。</li>
<li><strong><a href="https://github.com/RenzHoly/Mongood" target="_blank" rel="noopener noreferrer">Mongood<ExternalLinkIcon/></a></strong> : MongoDB 图形化的管理工具。基于微软 Fluent UI，支持自动黑暗模式。</li>
</ul>
<h3 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步" aria-hidden="true">#</a> 数据同步</h3>
<ul>
<li><strong><a href="https://github.com/alibaba/canal" title="canal" target="_blank" rel="noopener noreferrer">Canal<ExternalLinkIcon/></a></strong> [kə'næl] : Canal 译意为水道/管道/沟渠，主要用途是基于 MySQL 数据库增量日志解析，提供增量数据订阅和消费。</li>
<li><strong><a href="https://github.com/alibaba/DataX" title="DataX" target="_blank" rel="noopener noreferrer">DataX<ExternalLinkIcon/></a></strong> ：DataX 是阿里巴巴集团内被广泛使用的离线数据同步工具/平台，实现包括 MySQL、Oracle、SqlServer、Postgre、HDFS、Hive、ADS、HBase、TableStore(OTS)、MaxCompute(ODPS)、DRDS 等各种异构数据源之间高效的数据同步功能。相关项目：<strong><a href="https://github.com/WeiYe-Jing/datax-web" target="_blank" rel="noopener noreferrer">DataX-Web<ExternalLinkIcon/></a></strong> （DataX 集成可视化页面，选择数据源即可一键生成数据同步任务）。</li>
</ul>
<p>其他：<strong><a href="https://github.com/DTStack/flinkx" target="_blank" rel="noopener noreferrer">Flinkx<ExternalLinkIcon/></a></strong> （基于 Flink 的分布式数据同步工具）。</p>
<h2 id="搜索引擎" tabindex="-1"><a class="header-anchor" href="#搜索引擎" aria-hidden="true">#</a> 搜索引擎</h2>
<ul>
<li><strong><a href="https://github.com/elastic/elasticsearch" title="elasticsearch" target="_blank" rel="noopener noreferrer">Elasticsearch<ExternalLinkIcon/></a></strong> （推荐）：开源，分布式，RESTful 搜索引擎。</li>
<li><strong><a href="https://lucene.apache.org/solr/" target="_blank" rel="noopener noreferrer">Solr<ExternalLinkIcon/></a></strong> : Solr（读作“solar”）是 Apache Lucene 项目的开源企业搜索平台。</li>
</ul>
<h2 id="认证授权" tabindex="-1"><a class="header-anchor" href="#认证授权" aria-hidden="true">#</a> 认证授权</h2>
<ul>
<li><strong><a href="https://github.com/Wechat-Group/WxJava" target="_blank" rel="noopener noreferrer">WxJava<ExternalLinkIcon/></a></strong> : WxJava （微信开发 Java SDK），支持包括微信支付、开放平台、小程序、企业微信/企业号和公众号等的后端开发。</li>
<li><strong><a href="https://github.com/dromara/sa-token" target="_blank" rel="noopener noreferrer">Sa-Token<ExternalLinkIcon/></a></strong> ：轻量级 Java 权限认证框架。支持认证授权、单点登录、踢人下线、自动续签等功能。</li>
<li><strong><a href="https://github.com/justauth/JustAuth" target="_blank" rel="noopener noreferrer">JustAuth<ExternalLinkIcon/></a></strong> ：小而全而美的第三方登录开源组件。目前已经集成了诸如：Github、Gitee、支付宝、新浪微博、微信、Google、Facebook、Twitter、StackOverflow 等国内外数十家第三方平台。</li>
</ul>
<h2 id="网络通讯" tabindex="-1"><a class="header-anchor" href="#网络通讯" aria-hidden="true">#</a> 网络通讯</h2>
<ul>
<li><strong><a href="https://github.com/netty/netty" target="_blank" rel="noopener noreferrer">Netty<ExternalLinkIcon/></a></strong> : 一个基于 NIO 的 client-server(客户端服务器)框架，使用它可以快速简单地开发网络应用程序。</li>
<li><strong><a href="https://github.com/square/retrofit" target="_blank" rel="noopener noreferrer">Retrofit<ExternalLinkIcon/></a></strong> ：适用于 Android 和 Java 的类型安全的 HTTP 客户端。Retrofit 的 HTTP 请求使用的是 <a href="https://square.github.io/okhttp/" target="_blank" rel="noopener noreferrer">OkHttp<ExternalLinkIcon/></a> 库（一款被广泛使用网络框架）。</li>
<li><strong><a href="https://gitee.com/dromara/forest" target="_blank" rel="noopener noreferrer">Forest<ExternalLinkIcon/></a></strong> ：轻量级 HTTP 客户端 API 框架，让 Java 发送 HTTP/HTTPS 请求不再难。它比 OkHttp 和 HttpClient 更高层，是封装调用第三方 restful api client 接口的好帮手，是 retrofit 和 feign 之外另一个选择。</li>
<li><strong><a href="https://github.com/YeautyYE/netty-websocket-spring-boot-starter" target="_blank" rel="noopener noreferrer">netty-websocket-spring-boot-starter<ExternalLinkIcon/></a></strong> :帮助你在 Spring Boot 中使用 Netty 来开发 WebSocket 服务器，并像 spring-websocket 的注解开发一样简单。</li>
</ul>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>
<p>为了能让我们编写的系统更加健壮，必要的测试（UI 测试、单元测试...）是必须的。</p>
<h3 id="测试框架" tabindex="-1"><a class="header-anchor" href="#测试框架" aria-hidden="true">#</a> 测试框架</h3>
<ul>
<li><strong><a href="http://junit.org/" target="_blank" rel="noopener noreferrer">JUnit<ExternalLinkIcon/></a></strong> : Java 测试框架。</li>
<li><strong><a href="https://github.com/mockito/mockito" target="_blank" rel="noopener noreferrer">Mockito<ExternalLinkIcon/></a></strong> ：Mockito 是一个模拟测试框架，可以让你用优雅，简洁的接口写出漂亮的单元测试。（对那些不容易构建的对象用一个虚拟对象来代替，使其在调试期间用来作为真实对象的替代品）</li>
<li><strong><a href="https://github.com/powermock/powermock" target="_blank" rel="noopener noreferrer">PowerMock<ExternalLinkIcon/></a></strong> ： 编写单元测试仅靠 Mockito 是不够。因为 Mockito 无法 mock 私有方法、final 方法及静态方法等。PowerMock 这个 framework，主要是为了扩展其他 mock 框架，如 Mockito、EasyMock。它使用一个自定义的类加载器，纂改字节码，突破 Mockito 无法 mock 静态方法、构造方法、final 类、final 方法以及私有方法的限制。</li>
<li><strong><a href="https://github.com/tomakehurst/wiremock" target="_blank" rel="noopener noreferrer">WireMock<ExternalLinkIcon/></a></strong> ：模拟 HTTP 服务的工具（Mock your APIs）。</li>
<li><strong><a href="https://github.com/testcontainers/testcontainers-java" target="_blank" rel="noopener noreferrer">Testcontainers<ExternalLinkIcon/></a></strong> ：一个支持 JUnit 的测试工具库，提供轻量级的且一次性的常见数据库测试支持、Selenium Web 浏览器或者其他任何可以在 Docker 容器中运行的实例支持。</li>
</ul>
<p>相关阅读：</p>
<ul>
<li><a href="https://martinfowler.com/articles/practical-test-pyramid.html" target="_blank" rel="noopener noreferrer">The Practical Test Pyramid- Martin Fowler<ExternalLinkIcon/></a> (很赞的一篇文章，不过是英文的)</li>
<li><a href="https://juejin.im/post/6844903982058618894" target="_blank" rel="noopener noreferrer">浅谈测试之 PowerMock<ExternalLinkIcon/></a></li>
</ul>
<h3 id="测试平台" tabindex="-1"><a class="header-anchor" href="#测试平台" aria-hidden="true">#</a> 测试平台</h3>
<ul>
<li><strong><a href="https://github.com/metersphere/metersphere" target="_blank" rel="noopener noreferrer">MeterSphere<ExternalLinkIcon/></a></strong> : 一站式开源持续测试平台，涵盖测试跟踪、接口测试、性能测试、团队协作等功能，全面兼容 JMeter、Postman、Swagger 等开源、主流标准。</li>
<li><strong><a href="https://www.apifox.cn/" target="_blank" rel="noopener noreferrer">Apifox<ExternalLinkIcon/></a></strong> ：API 文档、API 调试、API Mock、API 自动化测试。</li>
</ul>
<h3 id="api-调试" tabindex="-1"><a class="header-anchor" href="#api-调试" aria-hidden="true">#</a> API 调试</h3>
<ul>
<li><strong><a href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer">Insomnia<ExternalLinkIcon/></a></strong> :像人类而不是机器人一样调试 API。我平时经常用的，界面美观且轻量，总之很喜欢。</li>
<li><strong><a href="https://www.getpostman.com/" target="_blank" rel="noopener noreferrer">Postman<ExternalLinkIcon/></a></strong> ：API 请求生成器。</li>
<li><strong><a href="https://github.com/liyasthomas/postwoman" title="postwoman" target="_blank" rel="noopener noreferrer">Postwoman<ExternalLinkIcon/></a></strong> ：API 请求生成器-一个免费、快速、漂亮的 Postma 替代品。</li>
</ul>
<h2 id="任务调度" tabindex="-1"><a class="header-anchor" href="#任务调度" aria-hidden="true">#</a> 任务调度</h2>
<ul>
<li><strong><a href="https://github.com/quartz-scheduler/quartz" target="_blank" rel="noopener noreferrer">Quartz<ExternalLinkIcon/></a></strong> ：一个很火的开源任务调度框架，Java 定时任务领域的老大哥或者说参考标准， 很多其他任务调度框架都是基于 <code v-pre>quartz</code> 开发的，比如当当网的<code v-pre>elastic-job</code>就是基于<code v-pre>quartz</code>二次开发之后的分布式调度解决方案</li>
<li><strong><a href="https://github.com/xuxueli/xxl-job" target="_blank" rel="noopener noreferrer">XXL-JOB<ExternalLinkIcon/></a></strong> :XXL-JOB 是一个分布式任务调度平台，其核心设计目标是开发迅速、学习简单、轻量级、易扩展。现已开放源代码并接入多家公司线上产品线，开箱即用。</li>
<li><strong><a href="http://elasticjob.io/index_zh.html" target="_blank" rel="noopener noreferrer">Elastic-Job<ExternalLinkIcon/></a></strong> ：Elastic-Job 是当当网开源的一个基于 Quartz 和 Zookeeper 的分布式调度解决方案，由两个相互独立的子项目 Elastic-Job-Lite 和 Elastic-Job-Cloud 组成，一般我们只要使用 Elastic-Job-Lite 就好。</li>
<li><strong><a href="https://github.com/analysys/EasyScheduler" title="EasyScheduler" target="_blank" rel="noopener noreferrer">EasyScheduler<ExternalLinkIcon/></a></strong> （已经更名为 DolphinScheduler，已经成为 Apache 孵化器项目）： Easy Scheduler 是一个分布式工作流任务调度系统，主要解决“复杂任务依赖但无法直接监控任务健康状态”的问题。Easy Scheduler 以 DAG 方式组装任务，可以实时监控任务的运行状态。同时，它支持重试，重新运行等操作... 。</li>
<li><strong><a href="https://gitee.com/KFCFans/PowerJob" target="_blank" rel="noopener noreferrer">PowerJob<ExternalLinkIcon/></a></strong> ：新一代分布式任务调度与计算框架，支持 CRON、API、固定频率、固定延迟等调度策略，提供工作流来编排任务解决依赖关系，使用简单，功能强大，文档齐全，欢迎各位接入使用！<a href="http://www.powerjob.tech/" target="_blank" rel="noopener noreferrer">http://www.powerjob.tech/<ExternalLinkIcon/></a> 。</li>
<li><strong><a href="https://github.com/apache/dolphinscheduler" target="_blank" rel="noopener noreferrer">DolphinScheduler<ExternalLinkIcon/></a></strong> ：分布式易扩展的可视化工作流任务调度平台。</li>
</ul>
<p>相关阅读：</p>
<ul>
<li><a href="https://mp.weixin.qq.com/s/jqN4noo5NazckPCehWFgpA" target="_blank" rel="noopener noreferrer">Spring Job、Quartz、XXL-Job 对比+全解析<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247518215&amp;idx=1&amp;sn=91e467f39322d2e7979b85fe235822d2&amp;chksm=cea1c7ccf9d64edaf966c95923d72d337bf5e655a773a3d295d65fc92e4535ae5d8b0e6d9d86&amp;token=2063686030&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">推荐 5 个 YYDS 的 Java 项目<ExternalLinkIcon/></a></li>
</ul>
<h2 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h2>
<h3 id="api-网关" tabindex="-1"><a class="header-anchor" href="#api-网关" aria-hidden="true">#</a> API 网关</h3>
<p>微服务下一个系统被拆分为多个服务，但是像 安全认证，流量控制，日志，监控等功能是每个服务都需要的，没有网关的话，我们就需要在每个服务中单独实现，这使得我们做了很多重复的事情并且没有一个全局的视图来统一管理这些功能。</p>
<p>综上：<strong>一般情况下，网关一般都会提供请求转发、安全认证（身份/权限认证）、流量控制、负载均衡、容灾、日志、监控这些功能。</strong></p>
<p>上面介绍了这么多功能实际上网关主要做了一件事情：<strong>请求过滤</strong> 。权限校验、流量控制这些都可以通过过滤器实现，请求转也是通过过滤器实现的。</p>
<ol>
<li><strong><a href="https://github.com/Kong/kong" title="kong" target="_blank" rel="noopener noreferrer">Kong<ExternalLinkIcon/></a></strong> ：Kong 是一个云原生、快速的、可伸缩的分布式微服务抽象层(也称为 API 网关、API 中间件或在某些情况下称为服务网格)。2015 年作为开源项目发布，其核心价值是高性能和可扩展性。</li>
<li><strong><a href="https://github.com/Dromara/soul" title="soul" target="_blank" rel="noopener noreferrer">Soul<ExternalLinkIcon/></a></strong> ：高性能、基于 webflux 的反应式 Java API 网关</li>
<li><strong><a href="https://github.com/spring-cloud/spring-cloud-gateway" target="_blank" rel="noopener noreferrer">Spring Cloud Gateway<ExternalLinkIcon/></a></strong> : 基于 Spring Framework 5.x 和 Spring Boot 2.x 构建的高性能网关。</li>
<li><strong><a href="https://github.com/Netflix/zuul" target="_blank" rel="noopener noreferrer">Zuul<ExternalLinkIcon/></a></strong> : Zuul 是一个 L7 应用程序网关，它提供了动态路由，监视，弹性，安全性等功能。</li>
</ol>
<h3 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心" aria-hidden="true">#</a> 配置中心</h3>
<ul>
<li><strong><a href="https://github.com/ctripcorp/apollo" title="apollo" target="_blank" rel="noopener noreferrer">Apollo<ExternalLinkIcon/></a></strong>（推荐） ：Apollo（阿波罗）是携程框架部门研发的分布式配置中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。</li>
<li><strong><a href="https://github.com/alibaba/nacos" target="_blank" rel="noopener noreferrer">Nacos<ExternalLinkIcon/></a></strong>（推荐）：Nacos 是 Spring Cloud Alibaba 提供的服务注册发现组件，类似于 Consul、Eureka。并且，提供了分布式配置管理功能。</li>
<li><strong><a href="https://github.com/spring-cloud/spring-cloud-config" target="_blank" rel="noopener noreferrer">Spring Cloud Config<ExternalLinkIcon/></a></strong> ： Spring Cloud Config 是 Spring Cloud 家族中最早的配置中心，虽然后来又发布了 Consul 可以代替配置中心功能，但是 Config 依然适用于 Spring Cloud 项目，通过简单的配置即可实现功能。</li>
<li><strong><a href="https://github.com/hashicorp/consul" target="_blank" rel="noopener noreferrer">Consul<ExternalLinkIcon/></a></strong> ：Consul 是 HashiCorp 公司推出的开源软件，提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之 Consul 提供了一种完整的服务网格解决方案。</li>
</ul>
<h3 id="链路追踪" tabindex="-1"><a class="header-anchor" href="#链路追踪" aria-hidden="true">#</a> 链路追踪</h3>
<p>目前分布式链路追踪系统基本都是根据谷歌的《Dapper 大规模分布式系统的跟踪系统》这篇论文发展而来，主流的有 Pinpoint，Skywalking ，CAT（当然也有其他的例如 Zipkin，Jaeger 等产品，不过总体来说不如前面选取的 3 个完成度高）等。</p>
<ol>
<li><strong><a href="https://github.com/apache/skywalking" title="skywalking" target="_blank" rel="noopener noreferrer">Skywalking<ExternalLinkIcon/></a></strong> : 针对分布式系统的应用性能监控，尤其是针对微服务、云原生和面向容器的分布式系统架构。</li>
<li><strong><a href="https://github.com/openzipkin/zipkin" title="zipkin" target="_blank" rel="noopener noreferrer">Zipkin<ExternalLinkIcon/></a></strong> ：Zipkin 是一个分布式跟踪系统。它有助于收集解决服务体系结构中的延迟问题所需的时序数据。功能包括该数据的收集和查找。</li>
<li><strong><a href="https://github.com/dianping/cat" title="cat" target="_blank" rel="noopener noreferrer">CAT<ExternalLinkIcon/></a></strong> ： CAT 作为服务端项目基础组件，提供了 Java, C/C++, Node.js, Python, Go 等多语言客户端，已经在美团点评的基础架构中间件框架（MVC 框架，RPC 框架，数据库框架，缓存框架等，消息队列，配置系统等）深度集成，为美团点评各业务线提供系统丰富的性能指标、健康状况、实时告警等。</li>
</ol>
<p>相关阅读： <a href="https://skywalking.apache.org/zh/blog/2019-03-29-introduction-of-skywalking-and-simple-practice.html" target="_blank" rel="noopener noreferrer">Skywalking 官网对于主流开源链路追踪系统的对比<ExternalLinkIcon/></a></p>
<h2 id="高并发" tabindex="-1"><a class="header-anchor" href="#高并发" aria-hidden="true">#</a> 高并发</h2>
<h3 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能" aria-hidden="true">#</a> 高性能</h3>
<h4 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列" aria-hidden="true">#</a> 消息队列</h4>
<p><strong>分布式队列</strong> ：</p>
<ol>
<li><strong><a href="https://github.com/apache/rocketmq" title="RocketMQ" target="_blank" rel="noopener noreferrer">RocketMQ<ExternalLinkIcon/></a></strong> ：阿里巴巴开源的一款高性能、高吞吐量的分布式消息中间件。</li>
<li><strong><a href="https://github.com/apache/kafka" title="Kafaka" target="_blank" rel="noopener noreferrer">Kafaka<ExternalLinkIcon/></a></strong>: Kafka 是一种分布式的，基于发布 / 订阅的消息系统。关于它的入门可以查看：<a href="https://github.com/Snailclimb/JavaGuide/blob/master/docs/system-design/data-communication/Kafka%E5%85%A5%E9%97%A8%E7%9C%8B%E8%BF%99%E4%B8%80%E7%AF%87%E5%B0%B1%E5%A4%9F%E4%BA%86.md" title="Kafka入门看这一篇就够了" target="_blank" rel="noopener noreferrer">Kafka 入门看这一篇就够了<ExternalLinkIcon/></a></li>
<li><strong><a href="https://github.com/rabbitmq" title="RabbitMQ" target="_blank" rel="noopener noreferrer">RabbitMQ<ExternalLinkIcon/></a></strong> :由 erlang 开发的基于 AMQP（Advanced Message Queue 高级消息队列协议）协议实现的消息队列。</li>
</ol>
<p><strong>内存队列</strong> ：</p>
<p><strong><a href="https://github.com/LMAX-Exchange/disruptor" target="_blank" rel="noopener noreferrer">Disruptor<ExternalLinkIcon/></a></strong> ： Disruptor 是英国外汇交易公司 LMAX 开发的一个高性能队列，研发的初衷是解决内存队列的延迟问题（在性能测试中发现竟然与 I/O 操作处于同样的数量级）。相关阅读 ：<a href="https://tech.meituan.com/2016/11/18/disruptor.html" target="_blank" rel="noopener noreferrer">《高性能内存队列——Disruptor》<ExternalLinkIcon/></a> 。</p>
<p><strong>管理工具</strong> ：</p>
<ol>
<li><strong><a href="https://github.com/obsidiandynamics/kafdrop" target="_blank" rel="noopener noreferrer">Kafdrop<ExternalLinkIcon/></a></strong> : 一个用于查看 Kafka 主题和浏览消费者组的 Web UI。</li>
<li><strong><a href="https://github.com/smartloli/EFAK" target="_blank" rel="noopener noreferrer">EFAK<ExternalLinkIcon/></a></strong> （Eagle For Apache Kafka，以前叫做 Kafka Eagle） ：一个简单的高性能监控系统，用于对 Kafka 集群进行全面的监控和管理。</li>
</ol>
<h4 id="多数据源-读写分离-分库分表" tabindex="-1"><a class="header-anchor" href="#多数据源-读写分离-分库分表" aria-hidden="true">#</a> 多数据源&amp;读写分离&amp;分库分表</h4>
<ul>
<li><strong><a href="https://github.com/apache/shardingsphere" target="_blank" rel="noopener noreferrer">ShardingSphere<ExternalLinkIcon/></a></strong> ：ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。 他们均提供标准化的数据分片、分布式事务和数据库治理功能，可适用于如 Java 同构、异构语言、云原生等各种多样化的应用场景。中文文档：<a href="https://shardingsphere.apache.org/document/current/cn/overview/" target="_blank" rel="noopener noreferrer">https://shardingsphere.apache.org/document/current/cn/overview/<ExternalLinkIcon/></a> 。</li>
<li><strong><a href="https://github.com/MyCatApache/MyCat2" target="_blank" rel="noopener noreferrer">MyCat<ExternalLinkIcon/></a></strong> : MyCat 是数据库分库分表的中间件，MyCat 使用最多的两个功能是：读写分离和分库分表。MyCat 是一些社区爱好者在阿里 Cobar 的基础上进行二次开发，解决了 Cobar 当时存 在的一些问题，并且加入了许多新的功能在其中。</li>
<li><strong><a href="https://github.com/baomidou/dynamic-datasource-spring-boot-starter%5D" target="_blank" rel="noopener noreferrer">dynamic-datasource-spring-boot-starter<ExternalLinkIcon/></a></strong> ：dynamic-datasource-spring-boot-starter 是一个基于 springboot 的快速集成多数据源的启动器。如果说你有配置多数据源、读写分离等需求的话，可以了解一下这个项目。</li>
</ul>
<p>相关阅读：<a href="https://zhuanlan.zhihu.com/p/87144535" target="_blank" rel="noopener noreferrer">数据库中间件详解（精品长文）<ExternalLinkIcon/></a></p>
<h3 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h3>
<h4 id="限流" tabindex="-1"><a class="header-anchor" href="#限流" aria-hidden="true">#</a> 限流</h4>
<p><strong>分布式限流</strong> ：</p>
<ul>
<li><strong><a href="https://github.com/alibaba/Sentinel" target="_blank" rel="noopener noreferrer"> Sentinel<ExternalLinkIcon/></a></strong>（推荐）：面向分布式服务架构的高可用防护组件，主要以流量为切入点，从流量控制、熔断降级、系统自适应保护等多个维度来帮助用户保障微服务的稳定性。</li>
<li><strong><a href="https://github.com/Netflix/Hystrix" target="_blank" rel="noopener noreferrer">Hystrix<ExternalLinkIcon/></a></strong> ：类似于 Sentinel 。</li>
</ul>
<p>相关阅读：<a href="https://sentinelguard.io/zh-cn/blog/sentinel-vs-hystrix.html" target="_blank" rel="noopener noreferrer">Sentinel 与 Hystrix 的对比<ExternalLinkIcon/></a></p>
<p><strong>单机限流</strong> ：</p>
<ul>
<li><strong><a href="https://github.com/vladimir-bukhtoyarov/bucket4j" target="_blank" rel="noopener noreferrer">Bucket4j<ExternalLinkIcon/></a></strong> ：一个非常不错的基于令牌/漏桶算法的限流库。</li>
<li><strong><a href="https://github.com/resilience4j/resilience4j" target="_blank" rel="noopener noreferrer">Resilience4j<ExternalLinkIcon/></a></strong> ：一个轻量级的容错组件，其灵感来自于 Hystrix。</li>
</ul>
<h4 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h4>
<ul>
<li><strong><a href="https://github.com/codecentric/spring-boot-admin" target="_blank" rel="noopener noreferrer">Spring Boot Admin<ExternalLinkIcon/></a></strong> ：管理和监控 Spring Boot 应用程序。</li>
<li><strong><a href="https://github.com/dropwizard/metrics" target="_blank" rel="noopener noreferrer">Metrics<ExternalLinkIcon/></a></strong> ：捕获<strong>JVM</strong>和应用程序级别的指标。所以你知道发生了什么事。</li>
</ul>
<h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2>
<ul>
<li><strong>EKL 老三件套</strong> : 最原始的时候，ELK 是由 3 个开源项目的首字母构成，分别是 <strong>E</strong>lasticsearch 、<strong>L</strong>ogstash、<strong>K</strong>ibana。</li>
<li><strong>新一代 ELK 架构</strong> : Elasticsearch+Logstash+Kibana+Beats。</li>
<li><strong>EFK</strong> : EFK 中的 F 代表的是 <a href="https://github.com/fluent/fluentd" target="_blank" rel="noopener noreferrer">Fluentd<ExternalLinkIcon/></a>。</li>
<li><strong><a href="https://gitee.com/dromara/TLog" target="_blank" rel="noopener noreferrer">TLog<ExternalLinkIcon/></a></strong> ：一个轻量级的分布式日志标记追踪神器，10 分钟即可接入，自动对日志打标签完成微服务的链路追踪。</li>
</ul>
</div></template>
