export const data = JSON.parse("{\"key\":\"v-5e397d7f\",\"path\":\"/interview/JUC-FAQ.html\",\"title\":\"Java 多线程部分\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 多线程部分\",\"date\":\"2020-11-23T00:00:00.000Z\",\"category\":[\"interview\"],\"summary\":\"\\\" JUC 面试，围绕着这么几个方向准备\\\"\\r\\\"\\\"\\r\\\" - 多线程的一些概念（进程、线程、并行、并发啥的，谈谈你对高并发的认识）\\\"\\r\\\" - Java 内存模型相关（也可以算是 JVM 的范畴）\\\"\\r\\\" - 同步机制（locks、synchronzied、atomic）\\\"\\r\\\" - 并发容器类\\\"\\r\\\" - ConcurrentHashMap、CopyOnWriteAr\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/interview/JUC-FAQ.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java 多线程部分\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-11-23T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"一、多线程开篇\",\"slug\":\"一、多线程开篇\",\"children\":[{\"level\":3,\"title\":\"1、进程和线程？\",\"slug\":\"_1、进程和线程\",\"children\":[]},{\"level\":3,\"title\":\"了解协程么？\",\"slug\":\"了解协程么\",\"children\":[]},{\"level\":3,\"title\":\"2、说说并发与并行的区别?\",\"slug\":\"_2、说说并发与并行的区别\",\"children\":[]},{\"level\":3,\"title\":\"3、说下同步、异步、阻塞和非阻塞\",\"slug\":\"_3、说下同步、异步、阻塞和非阻塞\",\"children\":[]},{\"level\":3,\"title\":\"4、什么是线程安全和线程不安全？\",\"slug\":\"_4、什么是线程安全和线程不安全\",\"children\":[]},{\"level\":3,\"title\":\"5、什么是上下文切换?\",\"slug\":\"_5、什么是上下文切换\",\"children\":[]},{\"level\":3,\"title\":\"6、什么是线程的上下文切换?\",\"slug\":\"_6、什么是线程的上下文切换\",\"children\":[]},{\"level\":3,\"title\":\"7、用户线程和守护线程有什么区别?\",\"slug\":\"_7、用户线程和守护线程有什么区别\",\"children\":[]},{\"level\":3,\"title\":\"8、如何在 Windows 和 Linux 上查找哪个线程 cpu 利用率最高？\",\"slug\":\"_8、如何在-windows-和-linux-上查找哪个线程-cpu-利用率最高\",\"children\":[]},{\"level\":3,\"title\":\"9、说说线程的生命周期和状态?\",\"slug\":\"_9、说说线程的生命周期和状态\",\"children\":[]},{\"level\":3,\"title\":\"10、一个线程两次调用 start() 方法会出现什么情况？谈谈线程的生命周期和状态转移\",\"slug\":\"_10、一个线程两次调用-start-方法会出现什么情况-谈谈线程的生命周期和状态转移\",\"children\":[]},{\"level\":3,\"title\":\"11、说说 sleep() 方法和 wait() 方法区别和共同点?\",\"slug\":\"_11、说说-sleep-方法和-wait-方法区别和共同点\",\"children\":[]},{\"level\":3,\"title\":\"为什么我们调用 start() 方法时会执行 run() 方法，为什么我们不能直接调用 run() 方法？\",\"slug\":\"为什么我们调用-start-方法时会执行-run-方法-为什么我们不能直接调用-run-方法\",\"children\":[]},{\"level\":3,\"title\":\"Java 线程启动的几种方式\",\"slug\":\"java-线程启动的几种方式\",\"children\":[]},{\"level\":3,\"title\":\"进程间的通信方式\",\"slug\":\"进程间的通信方式\",\"children\":[]},{\"level\":3,\"title\":\"Java 多线程之间的通信方式\",\"slug\":\"java-多线程之间的通信方式\",\"children\":[]},{\"level\":3,\"title\":\"Java 并发包提供了哪些并发工具类？\",\"slug\":\"java-并发包提供了哪些并发工具类\",\"children\":[]}]},{\"level\":2,\"title\":\"二、同步机制篇\",\"slug\":\"二、同步机制篇\",\"children\":[{\"level\":3,\"title\":\"Java 同步机制有哪些\",\"slug\":\"java-同步机制有哪些\",\"children\":[]},{\"level\":3,\"title\":\"synchronized 关键字\",\"slug\":\"synchronized-关键字\",\"children\":[]},{\"level\":3,\"title\":\"谈谈 synchronized和 ReentrantLock 的区别\",\"slug\":\"谈谈-synchronized和-reentrantlock-的区别\",\"children\":[]},{\"level\":3,\"title\":\"说说 synchronized 关键字和 volatile 关键字的区别\",\"slug\":\"说说-synchronized-关键字和-volatile-关键字的区别\",\"children\":[]},{\"level\":3,\"title\":\"什么是线程死锁? 如何避免死锁?\",\"slug\":\"什么是线程死锁-如何避免死锁\",\"children\":[]},{\"level\":3,\"title\":\"如何避免线程死锁?\",\"slug\":\"如何避免线程死锁\",\"children\":[]},{\"level\":3,\"title\":\"如何排查死锁\",\"slug\":\"如何排查死锁\",\"children\":[]},{\"level\":3,\"title\":\"死锁预防\",\"slug\":\"死锁预防\",\"children\":[]},{\"level\":3,\"title\":\"何谓悲观锁与乐观锁\",\"slug\":\"何谓悲观锁与乐观锁\",\"children\":[]},{\"level\":3,\"title\":\"ReentrantLock (可重入锁)\",\"slug\":\"reentrantlock-可重入锁\",\"children\":[]},{\"level\":3,\"title\":\"volatile关键字\",\"slug\":\"volatile关键字\",\"children\":[]},{\"level\":3,\"title\":\"volatile 是线程安全的吗\",\"slug\":\"volatile-是线程安全的吗\",\"children\":[]}]},{\"level\":2,\"title\":\"三、JMM篇\",\"slug\":\"三、jmm篇\",\"children\":[{\"level\":3,\"title\":\"Java 内存模型中的 happen-before 是什么？\",\"slug\":\"java-内存模型中的-happen-before-是什么\",\"children\":[]}]},{\"level\":2,\"title\":\"四、Atomic~CAS篇\",\"slug\":\"四、atomic-cas篇\",\"children\":[{\"level\":3,\"title\":\"AtomicInteger 底层实现原理是什么？如何在自己的产品代码中应用 CAS 操作？\",\"slug\":\"atomicinteger-底层实现原理是什么-如何在自己的产品代码中应用-cas-操作\",\"children\":[]}]},{\"level\":2,\"title\":\"五、线程池篇\",\"slug\":\"五、线程池篇\",\"children\":[{\"level\":3,\"title\":\"为什么要用线程池，优势是什么？\",\"slug\":\"为什么要用线程池-优势是什么\",\"children\":[]},{\"level\":3,\"title\":\"Java 并发类库提供的线程池有哪几种？ 分别有什么特点？\",\"slug\":\"java-并发类库提供的线程池有哪几种-分别有什么特点\",\"children\":[]},{\"level\":3,\"title\":\"线程池的几个重要参数\",\"slug\":\"线程池的几个重要参数\",\"children\":[]},{\"level\":3,\"title\":\"线程池工作原理\",\"slug\":\"线程池工作原理\",\"children\":[]},{\"level\":3,\"title\":\"合理配置线程池你是如何考虑的？（创建多少个线程合适）\",\"slug\":\"合理配置线程池你是如何考虑的-创建多少个线程合适\",\"children\":[]},{\"level\":3,\"title\":\"实现Runnable接口和Callable接口的区别\",\"slug\":\"实现runnable接口和callable接口的区别\",\"children\":[]},{\"level\":3,\"title\":\"执行execute()方法和submit()方法的区别是什么呢？\",\"slug\":\"执行execute-方法和submit-方法的区别是什么呢\",\"children\":[]},{\"level\":3,\"title\":\"如何创建线程池\",\"slug\":\"如何创建线程池\",\"children\":[]},{\"level\":3,\"title\":\"当提交新任务时，异常如何处理?\",\"slug\":\"当提交新任务时-异常如何处理\",\"children\":[]}]},{\"level\":2,\"title\":\"六、AQS篇\",\"slug\":\"六、aqs篇\",\"children\":[{\"level\":3,\"title\":\"6.1. AQS 介绍\",\"slug\":\"_6-1-aqs-介绍\",\"children\":[]},{\"level\":3,\"title\":\"6.2. AQS 原理分析\",\"slug\":\"_6-2-aqs-原理分析\",\"children\":[]},{\"level\":3,\"title\":\"6.3. AQS 组件总结\",\"slug\":\"_6-3-aqs-组件总结\",\"children\":[]},{\"level\":3,\"title\":\"AQS是如何唤醒下一个线程的？\",\"slug\":\"aqs是如何唤醒下一个线程的\",\"children\":[]},{\"level\":3,\"title\":\"AQS 中独占锁和共享锁的操作流程大体描述一下\",\"slug\":\"aqs-中独占锁和共享锁的操作流程大体描述一下\",\"children\":[]},{\"level\":3,\"title\":\"ReetrantLock有用过吗，怎么实现重入的\",\"slug\":\"reetrantlock有用过吗-怎么实现重入的\",\"children\":[]},{\"level\":3,\"title\":\"countDownLatch/CycliBarries/Semaphore使用过吗\",\"slug\":\"countdownlatch-cyclibarries-semaphore使用过吗\",\"children\":[]}]},{\"level\":2,\"title\":\"七、并发容器篇\",\"slug\":\"七、并发容器篇\",\"children\":[{\"level\":3,\"title\":\"什么是 ConcurrentHashMap？\",\"slug\":\"什么是-concurrenthashmap\",\"children\":[]},{\"level\":3,\"title\":\"什么是阻塞队列？阻塞队列的实现原理是什么？如何使用阻塞队列来实现生产者-消费者模型？\",\"slug\":\"什么是阻塞队列-阻塞队列的实现原理是什么-如何使用阻塞队列来实现生产者-消费者模型\",\"children\":[]},{\"level\":3,\"title\":\"如何设计一个阻塞队列，都需要考虑哪些点\",\"slug\":\"如何设计一个阻塞队列-都需要考虑哪些点\",\"children\":[]},{\"level\":3,\"title\":\"有哪些线程安全的非阻塞队列\",\"slug\":\"有哪些线程安全的非阻塞队列\",\"children\":[]},{\"level\":3,\"title\":\"ThreadLocal\",\"slug\":\"threadlocal\",\"children\":[]},{\"level\":3,\"title\":\"ThreadLocal简介\",\"slug\":\"threadlocal简介\",\"children\":[]},{\"level\":3,\"title\":\"ThreadLocal示例\",\"slug\":\"threadlocal示例\",\"children\":[]},{\"level\":3,\"title\":\"ThreadLocal原理\",\"slug\":\"threadlocal原理\",\"children\":[]},{\"level\":3,\"title\":\"ThreadLocal 内存泄露问题\",\"slug\":\"threadlocal-内存泄露问题\",\"children\":[]},{\"level\":3,\"title\":\"ThreadLocalMap的enrty的key为什么要设置成弱引用\",\"slug\":\"threadlocalmap的enrty的key为什么要设置成弱引用\",\"children\":[]}]},{\"level\":2,\"title\":\"八、其他问题\",\"slug\":\"八、其他问题\",\"children\":[{\"level\":3,\"title\":\"网站的高并发，大流量访问怎么解决?\",\"slug\":\"网站的高并发-大流量访问怎么解决\",\"children\":[]},{\"level\":3,\"title\":\"订票系统，某车次只有一张火车票，假定有 1w 个人同 时打开 12306 网站来订票，如何解决并发问题?(可扩展 到任何高并发网站要考虑的并发读写问题)。\",\"slug\":\"订票系统-某车次只有一张火车票-假定有-1w-个人同-时打开-12306-网站来订票-如何解决并发问题-可扩展-到任何高并发网站要考虑的并发读写问题-。\",\"children\":[]},{\"level\":3,\"title\":\"如果不用锁机制如何实现共享数据访问。(不要用锁，不要用 sychronized 块或者方法，也不要直接使用 jdk 提供的线程安全 的数据结构，需要自己实现一个类来保证多个线程同时读写这个类 中的共享数据是线程安全的，怎么办?)\",\"slug\":\"如果不用锁机制如何实现共享数据访问。-不要用锁-不要用-sychronized-块或者方法-也不要直接使用-jdk-提供的线程安全-的数据结构-需要自己实现一个类来保证多个线程同时读写这个类-中的共享数据是线程安全的-怎么办\",\"children\":[]},{\"level\":3,\"title\":\"写出 3 条你遵循的多线程最佳实践。\",\"slug\":\"写出-3-条你遵循的多线程最佳实践。\",\"children\":[]}]}],\"readingTime\":{\"minutes\":93.12,\"words\":27935},\"filePathRelative\":\"interview/JUC-FAQ.md\",\"localizedDate\":\"2020年11月23日\"}")

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
