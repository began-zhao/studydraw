<template><div><h2 id="java-内存区域" tabindex="-1"><a class="header-anchor" href="#java-内存区域" aria-hidden="true">#</a> Java 内存区域</h2>
<p>对于 Java 程序员来说，在虚拟机自动内存管理机制下，不再需要像 C/C++程序开发程序员这样为每一个 new 操作去写对应的 delete/free 操作，不容易出现内存泄漏和内存溢出问题。正是因为 Java 程序员把内存控制权利交给 Java 虚拟机，一旦出现内存泄漏和溢出方面的问题，如果不了解虚拟机是怎样使用内存的，那么排查错误将会是一个非常艰巨的任务。</p>
<h3 id="java-内存区域和内存模型-jmm-有何区别" tabindex="-1"><a class="header-anchor" href="#java-内存区域和内存模型-jmm-有何区别" aria-hidden="true">#</a> Java 内存区域和内存模型(JMM)有何区别？</h3>
<p><strong>Java 内存区域和内存模型是完全不一样的两个东西！！！</strong></p>
<ul>
<li>Java 内存区域定义了JVM 在运行时如何分区存储程序数据，就比如说堆主要用于存放对象实例。</li>
<li>Java 内存模型抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中，其目的是为了屏蔽系统和硬件的差异，避免一套代码在不同的平台下产生的效果不一致。</li>
</ul>
<h3 id="简单介绍一下-java-内存区域-运行时数据区" tabindex="-1"><a class="header-anchor" href="#简单介绍一下-java-内存区域-运行时数据区" aria-hidden="true">#</a> 简单介绍一下 Java 内存区域（运行时数据区）</h3>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>嘿，同学，你要的 Java 内存模型 (JMM) 来了：<a href="https://xie.infoq.cn/article/739920a92d0d27e2053174ef2" target="_blank" rel="noopener noreferrer">https://xie.infoq.cn/article/739920a92d0d27e2053174ef2<ExternalLinkIcon/></a></li>
</ul>
</div></template>
