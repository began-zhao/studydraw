<template><div><h1 id="jvm调优及常用命令记录" tabindex="-1"><a class="header-anchor" href="#jvm调优及常用命令记录" aria-hidden="true">#</a> JVM调优及常用命令记录</h1>
<p>大家好，我是咖飞，今天跟大家一起学习JVM调优</p>
<h1 id="_1、调优原则" tabindex="-1"><a class="header-anchor" href="#_1、调优原则" aria-hidden="true">#</a> <strong>1、调优原则</strong></h1>
<p>一般的Java项目通常使用不到具体参数级别的调优，要知道JVM调优应该算是Java性能优化的最后选择。JVM调优并不是性能问题的常规手段，性能问题一般第一选择是优化程序，最后的选择才是进行JVM调优。</p>
<blockquote>
<p>JVM的自动内存管理本来就是为了帮助开发人员简化内存管理的流程。即使不得不进行JVM调优，也一定要全面监控，详细分析性能数据，谨慎调整参数。</p>
</blockquote>
<p>性能问题调优层级一般来说如下图：</p>
<p><img src="@source/code/java/common/jvm/pictures/JVM调优及常用命令记录/Untitled.png" alt="java性能优化" loading="lazy"></p>
<h1 id="_2、jvm开始调优的时机" tabindex="-1"><a class="header-anchor" href="#_2、jvm开始调优的时机" aria-hidden="true">#</a> <strong>2、JVM开始调优的时机</strong></h1>
<p>真正意义上需要考虑进行JVM调优的是那些情况呢？</p>
<ol>
<li>Heap内存（老年代）持续上涨达到设置的最大内存值；</li>
<li>Full GC 次数频繁；</li>
<li>GC 停顿时间过长（超过1秒）；</li>
<li>应用出现 OutOfMemory 等内存异常；</li>
<li>应用中有使用本地缓存且占用大量内存空间；</li>
<li>系统吞吐量与响应性能不高或下降。</li>
</ol>
<h1 id="_3、jvm调优的目的" tabindex="-1"><a class="header-anchor" href="#_3、jvm调优的目的" aria-hidden="true">#</a> <strong>3、JVM调优的目的</strong></h1>
<p>通常情况下，JVM调优只能在如下三者中选择其中两个进行调优，类似CAP理论</p>
<ul>
<li>延迟：GC低停顿和GC低频率；</li>
<li>低内存占用；</li>
<li>高吞吐量;</li>
</ul>
<p>选择了其中两个，必然会会以牺牲另一个为代价。</p>
<p>下面展示了一些JVM调优的量化目标参考实例：</p>
<ul>
<li>Heap 内存使用率 &lt;= 70%;</li>
<li>Old generation内存使用率&lt;= 70%;</li>
<li>avgpause &lt;= 1秒;</li>
<li>Full gc 次数0 或 avg pause interval &gt;= 24小时 ;</li>
</ul>
<p><strong>ps</strong>：不同应用的JVM调优量化目标是不一样的。</p>
<h1 id="_4、具体的调优的步骤" tabindex="-1"><a class="header-anchor" href="#_4、具体的调优的步骤" aria-hidden="true">#</a> <strong>4、具体的调优的步骤</strong></h1>
<p>一般情况下，JVM调优可通过以下步骤进行：</p>
<ol>
<li>借助工具分析系统的运行情况：分析GC日志及dump文件，判断是否需要优化，确定瓶颈所在问题点；</li>
<li>指定好JVM调优量化目标；</li>
<li>根据历史参数来调整，确定JVM调优后参数；</li>
<li>依次确定并对比调优前后内存、延迟、吞吐量等指标；</li>
<li>分析和调整，直到找到合适的JVM参数配置；</li>
<li>找到最合适的参数，将这些参数应用到所有服务器，并进行后续跟踪。</li>
</ol>
<p>上诉操作步骤中，某些步骤是需要多次不断迭代完成的。一般是从满足程序的内存使用需求开始的，之后是时间延迟的要求，最后才是吞吐量的要求，要基于这个步骤来不断优化，每一个步骤都是进行下一步的基础，不可逆行。</p>
<p><img src="@source/code/java/common/jvm/pictures/JVM调优及常用命令记录/Untitled 1.png" alt="jvm调优" loading="lazy"></p>
<h1 id="_5、jvm参数" tabindex="-1"><a class="header-anchor" href="#_5、jvm参数" aria-hidden="true">#</a> <strong>5、JVM参数</strong></h1>
<p>下面来看一下JDK的JVM参数。</p>
<h3 id="基本参数" tabindex="-1"><a class="header-anchor" href="#基本参数" aria-hidden="true">#</a> <strong>基本参数</strong></h3>
<table>
<thead>
<tr>
<th>「参数名称」</th>
<th>「含义」</th>
<th>「默认值」</th>
<th>介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td>-Xms</td>
<td>初始堆大小</td>
<td>内存的1/64</td>
<td>默认(MinHeapFreeRatio参数可以调整)空余堆内存小于40%时，JVM就会增大堆直到-Xmx的最大限制.</td>
</tr>
<tr>
<td>-Xmx</td>
<td>最大堆大小</td>
<td>内存的1/4</td>
<td>默认(MaxHeapFreeRatio参数可以调整)空余堆内存大于70%时，JVM会减少堆直到 -Xms的最小限制</td>
</tr>
<tr>
<td>-Xmn</td>
<td>年轻代大小</td>
<td>-</td>
<td>「注意」：此处的大小是（eden+ 2 survivor space).与jmap -heap中显示的New gen是不同的。整个堆大小=年轻代大小 + 年老代大小 + 持久代大小. 增大年轻代后,将会减小年老代大小.此值对系统性能影响较大,Sun官方推荐配置为整个堆的3/8</td>
</tr>
<tr>
<td>-XX:NewSize</td>
<td>设置年轻代大小</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX:MaxNewSize</td>
<td>年轻代最大值</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX:PermSize</td>
<td>设置持久代(perm gen)初始值</td>
<td>内存的1/64</td>
<td>JDK1.8以前</td>
</tr>
<tr>
<td>-XX:MaxPermSize</td>
<td>设置持久代最大值</td>
<td>内存的1/4</td>
<td>JDK1.8以前</td>
</tr>
<tr>
<td>-Xss</td>
<td>每个线程的堆栈大小</td>
<td>-</td>
<td>JDK5.0以后每个线程堆栈大小为1M,以前每个线程堆栈大小为256K.更具应用的线程所需内存大小进行 调整.在相同物理内存下,减小这个值能生成更多的线程.但是操作系统对一个进程内的线程数还是有限制的,不能无限生成,经验值在3000~5000左右 一般小的应用， 如果栈不是很深， 应该是128k够用的 大的应用建议使用256k。这个选项对性能影响比较大，需要严格的测试。（校长） 和threadstacksize选项解释很类似,官方文档似乎没有解释,在论坛中有这样一句话:&quot;” -Xss is translated in a VM flag named ThreadStackSize” 一般设置这个值就可以了。</td>
</tr>
<tr>
<td>-XX:ThreadStackSize</td>
<td>Thread Stack Size</td>
<td>-</td>
<td>(0 means use default stack size) [Sparc: 512; Solaris x86: 320 (was 256  prior in 5.0 and earlier); Sparc 64 bit: 1024; Linux amd64: 1024 (was 0  in 5.0 and earlier); all others 0.]</td>
</tr>
<tr>
<td>-XX:NewRatio</td>
<td>年轻代(包括Eden和两个Survivor区)与年老代的比值(除去持久代)</td>
<td>-</td>
<td>-XX:NewRatio=4表示年轻代与年老代所占比值为1:4,年轻代占整个堆栈的1/5 Xms=Xmx并且设置了Xmn的情况下，该参数不需要进行设置。</td>
</tr>
<tr>
<td>-XX:SurvivorRatio</td>
<td>Eden区与Survivor区的大小比值</td>
<td>-</td>
<td>设置为8,则两个Survivor区与一个Eden区的比值为2:8,一个Survivor区占整个年轻代的1/10</td>
</tr>
<tr>
<td>-XX:LargePageSizeInBytes</td>
<td>内存页的大小不可设置过大， 会影响Perm的大小</td>
<td>-</td>
<td>=128m</td>
</tr>
<tr>
<td>-XX:+UseFastAccessorMethods</td>
<td>原始类型的快速优化</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+DisableExplicitGC</td>
<td>关闭System.gc()</td>
<td>-</td>
<td>这个参数需要严格的测试</td>
</tr>
<tr>
<td>-XX:+ExplicitGCInvokesConcurrent</td>
<td>关闭System.gc()</td>
<td>disabled</td>
<td>Enables invoking of concurrent GC by using the  System.gc() request. This option is disabled by default and can be  enabled only together with the -XX:+UseConcMarkSweepGC option.</td>
</tr>
<tr>
<td>-XX:+ExplicitGCInvokesConcurrentAndUnloadsClasses</td>
<td>关闭System.gc()</td>
<td>disabled</td>
<td>Enables invoking of concurrent GC by using the  System.gc() request and unloading of classes during the concurrent GC  cycle. This option is disabled by default and can be enabled only  together with the -XX:+UseConcMarkSweepGC option.</td>
</tr>
<tr>
<td>-XX:MaxTenuringThreshold</td>
<td>垃圾最大年龄</td>
<td>-</td>
<td>如果设置为0的话,则年轻代对象不经过Survivor区,直接进入年老代. 对于年老代比较多的应用,可以提高效率.如果将此值设置为一个较大值,则年轻代对象会在Survivor区进行多次复制,这样可以增加对象再年轻代的存活 时间,增加在年轻代即被回收的概率 该参数只有在串行GC时才有效.</td>
</tr>
<tr>
<td>-XX:+AggressiveOpts</td>
<td>加快编译</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+UseBiasedLocking</td>
<td>锁机制的性能改善</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-Xnoclassgc</td>
<td>禁用垃圾回收</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>-XX:SoftRefLRUPolicyMSPerMB</td>
<td>每兆堆空闲空间中SoftReference的存活时间</td>
<td>1s</td>
<td>softly reachable objects will remain alive for some amount of time after the  last time they were referenced. The default value is one second of  lifetime per free megabyte in the heap</td>
</tr>
<tr>
<td>-XX:PretenureSizeThreshold</td>
<td>对象超过多大是直接在旧生代分配</td>
<td>0</td>
<td>单位字节 新生代采用Parallel Scavenge GC时无效 另一种直接在旧生代分配的情况是大的数组对象,且数组中无外部引用对象.</td>
</tr>
<tr>
<td>-XX:TLABWasteTargetPercent</td>
<td>TLAB占eden区的百分比</td>
<td>1%</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+CollectGen0First</td>
<td>FullGC时是否先YGC</td>
<td>false</td>
<td>-</td>
</tr>
</tbody>
</table>
<p><strong>「Jdk7版本的主要参数」</strong></p>
<table>
<thead>
<tr>
<th>「参数名称」</th>
<th>「含义」</th>
<th>「默认值」</th>
<th>介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td>-XX:PermSize</td>
<td>设置持久代</td>
<td>-</td>
<td>Jdk7版本及以前版本</td>
</tr>
<tr>
<td>-XX:MaxPermSize</td>
<td>设置最大持久代</td>
<td>-</td>
<td>Jdk7版本及以前版本</td>
</tr>
</tbody>
</table>
<p><strong>「Jdk8版本的重要特有参数」</strong></p>
<table>
<thead>
<tr>
<th>「参数名称」</th>
<th>「含义」</th>
<th>「默认值」</th>
<th>介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td>-XX:MetaspaceSize</td>
<td>元空间大小</td>
<td>-</td>
<td>Jdk8版本</td>
</tr>
<tr>
<td>-XX:MaxMetaspaceSize</td>
<td>最大元空间</td>
<td>-</td>
<td>Jdk8版本</td>
</tr>
</tbody>
</table>
<h2 id="_5-2、并行收集器相关参数" tabindex="-1"><a class="header-anchor" href="#_5-2、并行收集器相关参数" aria-hidden="true">#</a> <strong>5.2、并行收集器相关参数</strong></h2>
<table>
<thead>
<tr>
<th>「参数名称」</th>
<th>「含义」</th>
<th>「默认值」</th>
<th>介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td>-XX:+UseParallelGC</td>
<td>Full</td>
<td>GC采用parallel MSC (此项待验证)</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+UseParNewGC</td>
<td>设置年轻代为并行收集</td>
<td>-</td>
<td>可与CMS收集同时使用 JDK5.0以上,JVM会根据系统配置自行设置,所以无需再设置此值</td>
</tr>
<tr>
<td>-XX:ParallelGCThreads</td>
<td>并行收集器的线程数</td>
<td>-</td>
<td>此值最好配置与处理器数目相等 同样适用于CMS</td>
</tr>
<tr>
<td>-XX:+UseParallelOldGC</td>
<td>年老代垃圾收集方式为并行收集(Parallel Compacting)</td>
<td>-</td>
<td>这个是JAVA 6出现的参数选项</td>
</tr>
<tr>
<td>-XX:MaxGCPauseMillis</td>
<td>每次年轻代垃圾回收的最长时间(最大暂停时间)</td>
<td>-</td>
<td>如果无法满足此时间,JVM会自动调整年轻代大小,以满足此值.</td>
</tr>
<tr>
<td>-XX:+UseAdaptiveSizePolicy</td>
<td>自动选择年轻代区大小和相应的Survivor区比例</td>
<td>-</td>
<td>设置此选项后,并行收集器会自动选择年轻代区大小和相应的Survivor区比例,以达到目标系统规定的最低相应时间或者收集频率等,此值建议使用并行收集器时,一直打开.</td>
</tr>
<tr>
<td>-XX:GCTimeRatio</td>
<td>设置垃圾回收时间占程序运行时间的百分比</td>
<td>-</td>
<td>公式为1/(1+n)</td>
</tr>
<tr>
<td>-XX:+ScavengeBeforeFullGC</td>
<td>Full GC前调用YGC</td>
<td>true</td>
<td>Do young generation GC prior to a full GC. (Introduced in 1.4.1.)</td>
</tr>
</tbody>
</table>
<h2 id="_5-3、cms相关参数" tabindex="-1"><a class="header-anchor" href="#_5-3、cms相关参数" aria-hidden="true">#</a> <strong>5.3、CMS相关参数</strong></h2>
<table>
<thead>
<tr>
<th>「参数名称」</th>
<th>「含义」</th>
<th>「默认值」</th>
<th>介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td>-XX:+UseConcMarkSweepGC</td>
<td>使用CMS内存收集</td>
<td>-</td>
<td>测试中配置这个以后,-XX:NewRatio=4的配置失效了,原因不明.所以,此时年轻代大小最好用-Xmn设置.???</td>
</tr>
<tr>
<td>-XX:+AggressiveHeap</td>
<td>-</td>
<td>-</td>
<td>试图是使用大量的物理内存 长时间大内存使用的优化，能检查计算资源（内存， 处理器数量） 至少需要256MB内存 大量的CPU／内存， （在1.4.1在4CPU的机器上已经显示有提升）</td>
</tr>
<tr>
<td>-XX:CMSFullGCsBeforeCompaction</td>
<td>多少次后进行内存压缩</td>
<td>-</td>
<td>由于并发收集器不对内存空间进行压缩,整理,所以运行一段时间以后会产生&quot;碎片&quot;,使得运行效率降低.此值设置运行多少次GC以后对内存空间进行压缩,整理.</td>
</tr>
<tr>
<td>-XX:+CMSParallelRemarkEnabled</td>
<td>降低标记停顿</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX+UseCMSCompactAtFullCollection</td>
<td>在FULL GC的时候， 对年老代的压缩</td>
<td>-</td>
<td>CMS是不会移动内存的， 因此， 这个非常容易产生碎片， 导致内存不够用， 因此， 内存的压缩这个时候就会被启用。增加这个参数是个好习惯。可能会影响性能,但是可以消除碎片</td>
</tr>
<tr>
<td>-XX:+UseCMSInitiatingOccupancyOnly</td>
<td>使用手动定义初始化定义开始CMS收集</td>
<td>-</td>
<td>禁止hostspot自行触发CMS GC</td>
</tr>
<tr>
<td>-XX:CMSInitiatingOccupancyFraction=70</td>
<td>使用cms作为垃圾回收 使用70％后开始CMS收集</td>
<td>92</td>
<td>为了保证不出现promotion failed(见下面介绍)错误,该值的设置需要满足以下公式「CMSInitiatingOccupancyFraction计算公式」</td>
</tr>
<tr>
<td>-XX:CMSInitiatingPermOccupancyFraction</td>
<td>设置Perm Gen使用到达多少比率时触发</td>
<td>92</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+CMSIncrementalMode</td>
<td>设置为增量模式</td>
<td>-</td>
<td>用于单CPU情况</td>
</tr>
<tr>
<td>-XX:+CMSClassUnloadingEnabled</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_5-4、辅助信息" tabindex="-1"><a class="header-anchor" href="#_5-4、辅助信息" aria-hidden="true">#</a> <strong>5.4、辅助信息</strong></h2>
<table>
<thead>
<tr>
<th>「参数名称」</th>
<th>「含义」</th>
<th>「默认值」</th>
<th>介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td>-XX:+PrintGC</td>
<td>-</td>
<td>-</td>
<td>输出形式: [GC 118250K-&gt;113543K(130112K), 0.0094143 secs] [Full GC 121376K-&gt;10414K(130112K), 0.0650971 secs]</td>
</tr>
<tr>
<td>-XX:+PrintGCDetails</td>
<td>-</td>
<td>-</td>
<td>输出形式:[GC [DefNew: 8614K-&gt;781K(9088K), 0.0123035 secs] 118250K-&gt;113543K(130112K), 0.0124633 secs] [GC [DefNew: 8614K-&gt;8614K(9088K), 0.0000665 secs][Tenured:  112761K-&gt;10414K(121024K), 0.0433488 secs]  121376K-&gt;10414K(130112K), 0.0436268 secs]</td>
</tr>
<tr>
<td>-XX:+PrintGCTimeStamps</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+PrintGC:PrintGCTimeStamps</td>
<td>-</td>
<td>-</td>
<td>可与-XX:+PrintGC -XX:+PrintGCDetails混合使用 输出形式:11.851: [GC 98328K-&gt;93620K(130112K), 0.0082960 secs]</td>
</tr>
<tr>
<td>-XX:+PrintGCApplicationStoppedTime</td>
<td>打印垃圾回收期间程序暂停的时间.可与上面混合使用</td>
<td>-</td>
<td>输出形式:Total time for which application threads were stopped: 0.0468229 seconds</td>
</tr>
<tr>
<td>-XX:+PrintGCApplicationConcurrentTime</td>
<td>打印每次垃圾回收前,程序未中断的执行时间.可与上面混合使用</td>
<td>-</td>
<td>输出形式:Application time: 0.5291524 seconds</td>
</tr>
<tr>
<td>-XX:+PrintHeapAtGC</td>
<td>打印GC前后的详细堆栈信息</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-Xloggc:filename</td>
<td>把相关日志信息记录到文件以便分析. 与上面几个配合使用</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+PrintClassHistogram</td>
<td>garbage collects before printing the histogram.</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>-XX:+PrintTLAB</td>
<td>查看TLAB空间的使用情况</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>XX:+PrintTenuringDistribution</td>
<td>查看每次minor GC后新的存活周期的阈值</td>
<td>-</td>
<td>Desired survivor size 1048576 bytes, new threshold 7 (max 15) new threshold 7即标识新的存活周期的阈值为7。</td>
</tr>
</tbody>
</table>
<h1 id="_6、主要工具" tabindex="-1"><a class="header-anchor" href="#_6、主要工具" aria-hidden="true">#</a> <strong>6、主要工具</strong></h1>
<h2 id="_6-1、jdk工具" tabindex="-1"><a class="header-anchor" href="#_6-1、jdk工具" aria-hidden="true">#</a> <strong>6.1、JDK工具</strong></h2>
<p>JDK自带了很多性能监控工具，我们可以用这些工具来监测系统和排查内存性能问题。</p>
<p><img src="@source/code/java/common/jvm/pictures/JVM调优及常用命令记录/Untitled 2.png" alt="Untitled" loading="lazy"></p>
<h2 id="_6-2、linux-命令行工具" tabindex="-1"><a class="header-anchor" href="#_6-2、linux-命令行工具" aria-hidden="true">#</a> <strong>6.2、Linux 命令行工具</strong></h2>
<p>进行性能监控和问题排查的时候，常常是结合操作系统本身的命令行工具来进行。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>top</td>
<td>实时显示正在执行进程的 CPU 使用率、内存使用率以及系统负载等信息</td>
</tr>
<tr>
<td>vmstat</td>
<td>对操作系统的虚拟内存、进程、CPU活动进行监控</td>
</tr>
<tr>
<td>pidstat</td>
<td>监控指定进程的上下文切换</td>
</tr>
<tr>
<td>iostat</td>
<td>监控磁盘IO</td>
</tr>
</tbody>
</table>
<p>其它还有一些第三方的监控工具，同样是性能分析和故障排查的利器，如**「MAT」<strong>、</strong>「GChisto」<strong>、</strong>「JProfiler」<strong>、</strong>「arthas」**。</p>
<h1 id="_7、常用调优策略" tabindex="-1"><a class="header-anchor" href="#_7、常用调优策略" aria-hidden="true">#</a> <strong>7、常用调优策略</strong></h1>
<blockquote>
<p>这里还是要提一下，及时确定要进行JVM调优，也不要陷入“知见障”，进行分析之后，发现可以通过优化程序提升性能，仍然首选优化程序。</p>
</blockquote>
<h2 id="_7-1、选择合适的垃圾回收器" tabindex="-1"><a class="header-anchor" href="#_7-1、选择合适的垃圾回收器" aria-hidden="true">#</a> <strong>7.1、选择合适的垃圾回收器</strong></h2>
<ul>
<li>CPU单核，那么毫无疑问Serial 垃圾收集器是你唯一的选择。</li>
<li>CPU多核，关注吞吐量 ，那么选择PS+PO组合。</li>
<li>CPU多核，关注用户停顿时间，JDK版本1.6或者1.7，那么选择CMS。</li>
<li>CPU多核，关注用户停顿时间，JDK1.8及以上，JVM可用内存6G以上，那么选择G1。</li>
</ul>
<p>参数配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//设置Serial垃圾收集器（新生代）
 开启：-XX:+UseSerialGC

//设置PS+PO,新生代使用功能Parallel Scavenge 老年代将会使用Parallel Old收集器
 开启 -XX:+UseParallelOldGC

//CMS垃圾收集器（老年代）
 开启 -XX:+UseConcMarkSweepGC

//设置G1垃圾收集器
 开启 -XX:+UseG1GC

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2、调整内存大小" tabindex="-1"><a class="header-anchor" href="#_7-2、调整内存大小" aria-hidden="true">#</a> <strong>7.2、调整内存大小</strong></h2>
<p>现象：垃圾收集频率非常频繁。</p>
<p>原因：如果内存太小，就会导致频繁的需要进行垃圾收集才能释放出足够的空间来创建新的对象，所以增加堆内存大小的效果是非常显而易见的。</p>
<p>注意：如果垃圾收集次数非常频繁，但是每次能回收的对象非常少，那么这个时候并非内存太小，而可能是内存泄露导致对象无法回收，从而造成频繁GC。</p>
<p>参数配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//设置堆初始值
 指令1：-Xms2g
 指令2：-XX:InitialHeapSize=2048m

//设置堆区最大值
 指令1：`-Xmx2g`
 指令2： -XX:MaxHeapSize=2048m

//新生代内存配置
 指令1：-Xmn512m
 指令2：-XX:MaxNewSize=512m

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3、设置符合预期的停顿时间" tabindex="-1"><a class="header-anchor" href="#_7-3、设置符合预期的停顿时间" aria-hidden="true">#</a> <strong>7.3、设置符合预期的停顿时间</strong></h2>
<p>现象：程序间接性的卡顿</p>
<p>原因：如果没有确切的停顿时间设定，垃圾收集器以吞吐量为主，那么垃圾收集时间就会不稳定。</p>
<p>注意：不要设置不切实际的停顿时间，单次时间越短也意味着需要更多的GC次数才能回收完原有数量的垃圾.</p>
<p>参数配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//GC停顿时间，垃圾收集器会尝试用各种手段达到这个时间
 -XX:MaxGCPauseMillis

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4、调整内存区域大小比率" tabindex="-1"><a class="header-anchor" href="#_7-4、调整内存区域大小比率" aria-hidden="true">#</a> <strong>7.4、调整内存区域大小比率</strong></h2>
<p>现象：某一个区域的GC频繁，其他都正常。</p>
<p>原因：如果对应区域空间不足，导致需要频繁GC来释放空间，在JVM堆内存无法增加的情况下，可以调整对应区域的大小比率。</p>
<p>注意：也许并非空间不足，而是因为内存泄造成内存无法回收。从而导致GC频繁。</p>
<p>参数配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//survivor区和Eden区大小比率
 指令：-XX:SurvivorRatio=6//S区和Eden区占新生代比率为1:6,两个S区2:6

//新生代和老年代的占比
 -XX:NewRatio=4//表示新生代:老年代 = 1:4 即老年代占整个堆的4/5；默认值=2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5、调整对象升老年代的年龄" tabindex="-1"><a class="header-anchor" href="#_7-5、调整对象升老年代的年龄" aria-hidden="true">#</a> <strong>7.5、调整对象升老年代的年龄</strong></h2>
<p>现象：老年代频繁GC，每次回收的对象很多。</p>
<p>原因：如果升代年龄小，新生代的对象很快就进入老年代了，导致老年代对象变多，而这些对象其实在随后的很短时间内就可以回收，这时候可以调整对象的升级代年龄，让对象不那么容易进入老年代解决老年代空间不足频繁GC问题。</p>
<p>注意：增加了年龄之后，这些对象在新生代的时间会变长可能导致新生代的GC频率增加，并且频繁复制这些对象新生的GC时间也可能变长。</p>
<p>配置参数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//进入老年代最小的GC年龄,年轻代对象转换为老年代对象最小年龄值，默认值7
 -XX:InitialTenuringThreshol=7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6、调整大对象的标准" tabindex="-1"><a class="header-anchor" href="#_7-6、调整大对象的标准" aria-hidden="true">#</a> <strong>7.6、调整大对象的标准</strong></h2>
<p>现象：老年代频繁GC，每次回收的对象很多,而且单个对象的体积都比较大。</p>
<p>原因：如果大量的大对象直接分配到老年代，导致老年代容易被填满而造成频繁GC，可设置对象直接进入老年代的标准。</p>
<p>注意：这些大对象进入新生代后可能会使新生代的GC频率和时间增加。</p>
<p>配置参数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//新生代可容纳的最大对象,大于则直接会分配到老年代，0代表没有限制。
  -XX:PretenureSizeThreshold=1000000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-7、调整gc的触发时机" tabindex="-1"><a class="header-anchor" href="#_7-7、调整gc的触发时机" aria-hidden="true">#</a> <strong>7.7、调整GC的触发时机</strong></h2>
<p>现象：CMS，G1 经常 Full GC，程序卡顿严重。</p>
<p>原因：G1和CMS  部分GC阶段是并发进行的，业务线程和垃圾收集线程一起工作，也就说明垃圾收集的过程中业务线程会生成新的对象，所以在GC的时候需要预留一部分内存空间来容纳新产生的对象，如果这个时候内存空间不足以容纳新产生的对象，那么JVM就会停止并发收集暂停所有业务线程（STW）来保证垃圾收集的正常运行。这个时候可以调整GC触发的时机（比如在老年代占用60%就触发GC），这样就可以预留足够的空间来让业务线程创建的对象有足够的空间分配。</p>
<p>注意：提早触发GC会增加老年代GC的频率。</p>
<p>配置参数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//使用多少比例的老年代后开始CMS收集，默认是68%，如果频繁发生SerialOld卡顿，应该调小
 -XX:CMSInitiatingOccupancyFraction

//G1混合垃圾回收周期中要包括的旧区域设置占用率阈值。默认占用率为 65%
 -XX:G1MixedGCLiveThresholdPercent=65

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-8、调整-jvm本地内存大小" tabindex="-1"><a class="header-anchor" href="#_7-8、调整-jvm本地内存大小" aria-hidden="true">#</a> <strong>7.8、调整 JVM本地内存大小</strong></h2>
<p>现象：GC的次数、时间和回收的对象都正常，堆内存空间充足，但是报OOM</p>
<p>原因：JVM除了堆内存之外还有一块堆外内存，这片内存也叫本地内存，可是这块内存区域不足了并不会主动触发GC，只有在堆内存区域触发的时候顺带会把本地内存回收了，而一旦本地内存分配不足就会直接报OOM异常。</p>
<p>注意：本地内存异常的时候除了上面的现象之外，异常信息可能是OutOfMemoryError：Direct buffer memory。解决方式除了调整本地内存大小之外，也可以在出现此异常时进行捕获，手动触发GC（System.gc()）。</p>
<p>配置参数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> XX:MaxDirectMemorySize

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8、jvm调优实例" tabindex="-1"><a class="header-anchor" href="#_8、jvm调优实例" aria-hidden="true">#</a> <strong>8、JVM调优实例</strong></h1>
<p>以下是整理自网络的一些JVM调优实例：</p>
<h2 id="_8-1、网站流量浏览量暴增后-网站反应页面响很慢" tabindex="-1"><a class="header-anchor" href="#_8-1、网站流量浏览量暴增后-网站反应页面响很慢" aria-hidden="true">#</a> <strong>8.1、网站流量浏览量暴增后，网站反应页面响很慢</strong></h2>
<p>1、问题推测：在测试环境测速度比较快，但是一到生产就变慢，所以推测可能是因为垃圾收集导致的业务线程停顿。</p>
<p>2、定位：为了确认推测的正确性，在线上通过jstat -gc 指令 看到JVM进行GC 次数频率非常高，GC所占用的时间非常长，所以基本推断就是因为GC频率非常高，所以导致业务线程经常停顿，从而造成网页反应很慢。</p>
<p>3、解决方案：因为网页访问量很高，所以对象创建速度非常快，导致堆内存容易填满从而频繁GC，所以这里问题在于新生代内存太小，所以这里可以增加JVM内存就行了，所以初步从原来的2G内存增加到16G内存。</p>
<p>4、第二个问题：增加内存后的确平常的请求比较快了，但是又出现了另外一个问题，就是不定期的会间断性的卡顿，而且单次卡顿的时间要比之前要长很多。</p>
<p>5、问题推测：练习到是之前的优化加大了内存，所以推测可能是因为内存加大了，从而导致单次GC的时间变长从而导致间接性的卡顿。</p>
<p>6、定位：还是通过jstat -gc 指令 查看到 的确FGC次数并不是很高，但是花费在FGC上的时间是非常高的,根据GC日志 查看到单次FGC的时间有达到几十秒的。</p>
<p>7、解决方案： 因为JVM默认使用的是PS+PO的组合，PS+PO垃圾标记和收集阶段都是STW，所以内存加大了之后，需要进行垃圾回收的时间就变长了，所以这里要想避免单次GC时间过长，所以需要更换并发类的收集器，因为当前的JDK版本为1.7，所以最后选择CMS垃圾收集器，根据之前垃圾收集情况设置了一个预期的停顿的时间，上线后网站再也没有了卡顿问题。</p>
<h2 id="_8-2、后台导出数据引发的oom" tabindex="-1"><a class="header-anchor" href="#_8-2、后台导出数据引发的oom" aria-hidden="true">#</a> <strong>8.2、后台导出数据引发的OOM</strong></h2>
<ul>
<li>*问题描述：**公司的后台系统，偶发性的引发OOM异常，堆内存溢出。</li>
</ul>
<p>1、因为是偶发性的，所以第一次简单的认为就是堆内存不足导致，所以单方面的加大了堆内存从4G调整到8G。</p>
<p>2、但是问题依然没有解决，只能从堆内存信息下手，通过开启了-XX:+HeapDumpOnOutOfMemoryError参数 获得堆内存的dump文件。</p>
<p>3、VisualVM 对  堆dump文件进行分析，通过VisualVM查看到占用内存最大的对象是String对象，本来想跟踪着String对象找到其引用的地方，但dump文件太大，跟踪进去的时候总是卡死，而String对象占用比较多也比较正常，最开始也没有认定就是这里的问题，于是就从线程信息里面找突破点。</p>
<p>4、通过线程进行分析，先找到了几个正在运行的业务线程，然后逐一跟进业务线程看了下代码，发现有个引起我注意的方法，导出订单信息。</p>
<p>5、因为订单信息导出这个方法可能会有几万的数据量，首先要从数据库里面查询出来订单信息，然后把订单信息生成excel，这个过程会产生大量的String对象。</p>
<p>6、为了验证自己的猜想，于是准备登录后台去测试下，结果在测试的过程中发现到处订单的按钮前端居然没有做点击后按钮置灰交互事件，结果按钮可以一直点，因为导出订单数据本来就非常慢，使用的人员可能发现点击后很久后页面都没反应，结果就一直点，结果就大量的请求进入到后台，堆内存产生了大量的订单对象和EXCEL对象，而且方法执行非常慢，导致这一段时间内这些对象都无法被回收，所以最终导致内存溢出。</p>
<p>7、知道了问题就容易解决了，最终没有调整任何JVM参数，只是在前端的导出订单按钮上加上了置灰状态，等后端响应之后按钮才可以进行点击，然后减少了查询订单信息的非必要字段来减少生成对象的体积，然后问题就解决了。</p>
<h2 id="_8-3、单个缓存数据过大导致的系统cpu飚高" tabindex="-1"><a class="header-anchor" href="#_8-3、单个缓存数据过大导致的系统cpu飚高" aria-hidden="true">#</a> <strong>8.3、单个缓存数据过大导致的系统CPU飚高</strong></h2>
<p>1、系统发布后发现CPU一直飚高到600%，发现这个问题后首先要做的是定位到是哪个应用占用CPU高，通过top  找到了对应的一个java应用占用CPU资源600%。</p>
<p>2、如果是应用的CPU飚高，那么基本上可以定位可能是锁资源竞争，或者是频繁GC造成的。</p>
<p>3、所以准备首先从GC的情况排查，如果GC正常的话再从线程的角度排查，首先使用jstat -gc PID 指令打印出GC的信息，结果得到得到的GC  统计信息有明显的异常，应用在运行了才几分钟的情况下GC的时间就占用了482秒，那么问这很明显就是频繁GC导致的CPU飚高。</p>
<p>4、定位到了是GC的问题，那么下一步就是找到频繁GC的原因了，所以可以从两方面定位了，可能是哪个地方频繁创建对象，或者就是有内存泄露导致内存回收不掉。</p>
<p>5、根据这个思路决定把堆内存信息dump下来看一下，使用jmap -dump 指令把堆内存信息dump下来（堆内存空间大的慎用这个指令否则容易导致会影响应用，因为我们的堆内存空间才2G所以也就没考虑这个问题了）。</p>
<p>6、把堆内存信息dump下来后，就使用visualVM进行离线分析了，首先从占用内存最多的对象中查找，结果排名第三看到一个业务VO占用堆内存约10%的空间，很明显这个对象是有问题的。</p>
<p>7、通过业务对象找到了对应的业务代码，通过代码的分析找到了一个可疑之处，这个业务对象是查看新闻资讯信息生成的对象，由于想提升查询的效率，所以把新闻资讯保存到了redis缓存里面，每次调用资讯接口都是从缓存里面获取。</p>
<p>8、把新闻保存到redis缓存里面这个方式是没有问题的，有问题的是新闻的50000多条数据都是保存在一个key里面，这样就导致每次调用查询新闻接口都会从redis里面把50000多条数据都拿出来，再做筛选分页拿出10条返回给前端。50000多条数据也就意味着会产生50000多个对象，每个对象280个字节左右，50000个对象就有13.3M，这就意味着只要查看一次新闻信息就会产生至少13.3M的对象，那么并发请求量只要到10，那么每秒钟都会产生133M的对象，而这种大对象会被直接分配到老年代，这样的话一个2G大小的老年代内存，只需要几秒就会塞满，从而触发GC。</p>
<p>9、知道了问题所在后那么就容易解决了，问题是因为单个缓存过大造成的，那么只需要把缓存减小就行了，这里只需要把缓存以页的粒度进行缓存就行了，每个key缓存10条作为返回给前端1页的数据，这样的话每次查询新闻信息只会从缓存拿出10条数据，就避免了此问题的 产生。</p>
<h2 id="_8-4、cpu经常100-问题定位" tabindex="-1"><a class="header-anchor" href="#_8-4、cpu经常100-问题定位" aria-hidden="true">#</a> <strong>8.4、CPU经常100% 问题定位</strong></h2>
<p>问题分析：CPU高一定是某个程序长期占用了CPU资源。</p>
<p>1、所以先需要找出那个进行占用CPU高。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> top  列出系统各个进程的资源占用情况。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后根据找到对应进行里哪个线程占用CPU高。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> top -Hp 进程ID   列出对应进程里面的线程占用资源情况

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、找到对应线程ID后，再打印出对应线程的堆栈信息</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>printf "%x\n"  PID    把线程ID转换为16进制。
 jstack PID 打印出进程的所有线程信息，从打印出来的线程信息中找到上一步转换为16进制的线程ID对应的线程信息。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、最后根据线程的堆栈信息定位到具体业务方法,从代码逻辑中找到问题所在。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>查看是否有线程长时间的watting 或blocked
 如果线程长期处于watting状态下， 关注watting on xxxxxx，说明线程在等待这把锁，然后根据锁的地址找到持有锁的线程。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-5、内存飚高问题定位" tabindex="-1"><a class="header-anchor" href="#_8-5、内存飚高问题定位" aria-hidden="true">#</a> <strong>8.5、内存飚高问题定位</strong></h2>
<p>分析：内存飚高如果是发生在java进程上，一般是因为创建了大量对象所导致，持续飚高说明垃圾回收跟不上对象创建的速度，或者内存泄露导致对象无法回收。</p>
<p>1、先观察垃圾回收的情况</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>jstat -gc PID 1000 查看GC次数，时间等信息，每隔一秒打印一次。

 jmap -histo PID | head -20   查看堆内存占用空间最大的前20个对象类型,可初步查看是哪个对象占用了内存。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果每次GC次数频繁，而且每次回收的内存空间也正常，那说明是因为对象创建速度快导致内存一直占用很高；如果每次回收的内存非常少，那么很可能是因为内存泄露导致内存一直无法被回收。</p>
<p>2、导出堆内存文件快照</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>jmap -dump:live,format=b,file=/home/myheapdump.hprof PID  dump堆内存信息到文件。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、使用visualVM对dump文件进行离线分析,找到占用内存高的对象，再找到创建该对象的业务代码位置，从代码和业务场景中定位具体问题。</p>
<h2 id="_8-6、数据分析平台系统频繁-full-gc" tabindex="-1"><a class="header-anchor" href="#_8-6、数据分析平台系统频繁-full-gc" aria-hidden="true">#</a> <strong>8.6、数据分析平台系统频繁 Full GC</strong></h2>
<p>平台主要对用户在 App 中行为进行定时分析统计，并支持报表导出，使用 CMS GC 算法。</p>
<p>数据分析师在使用中发现系统页面打开经常卡顿，通过 jstat 命令发现系统每次 Young GC 后大约有 10% 的存活对象进入老年代。</p>
<p>原来是因为 Survivor 区空间设置过小，每次 Young GC 后存活对象在 Survivor 区域放不下，提前进入老年代。</p>
<p>通过调大 Survivor 区，使得 Survivor 区可以容纳 Young GC 后存活对象，对象在 Survivor 区经历多次 Young GC 达到年龄阈值才进入老年代。</p>
<p>调整之后每次 Young GC 后进入老年代的存活对象稳定运行时仅几百 Kb，Full GC 频率大大降低。</p>
<h2 id="_8-7、业务对接网关-oom" tabindex="-1"><a class="header-anchor" href="#_8-7、业务对接网关-oom" aria-hidden="true">#</a> <strong>8.7、业务对接网关 OOM</strong></h2>
<p>网关主要消费 Kafka 数据，进行数据处理计算然后转发到另外的 Kafka 队列，系统运行几个小时候出现 OOM，重启系统几个小时之后又 OOM。</p>
<p>通过 jmap 导出堆内存，在 eclipse MAT 工具分析才找出原因：代码中将某个业务 Kafka 的 topic 数据进行日志异步打印，该业务数据量较大，大量对象堆积在内存中等待被打印，导致 OOM。</p>
<h2 id="_8-8、鉴权系统频繁长时间-full-gc" tabindex="-1"><a class="header-anchor" href="#_8-8、鉴权系统频繁长时间-full-gc" aria-hidden="true">#</a> <strong>8.8、鉴权系统频繁长时间 Full GC</strong></h2>
<p>系统对外提供各种账号鉴权服务，使用时发现系统经常服务不可用，通过 Zabbix 的监控平台监控发现系统频繁发生长时间 Full GC，且触发时老年代的堆内存通常并没有占满，发现原来是业务代码中调用了 System.gc()。</p>
</div></template>
