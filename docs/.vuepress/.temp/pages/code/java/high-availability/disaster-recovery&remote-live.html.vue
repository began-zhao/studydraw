<template><div><h1 id="灾备设计-异地多活" tabindex="-1"><a class="header-anchor" href="#灾备设计-异地多活" aria-hidden="true">#</a> 灾备设计&amp;异地多活</h1>
<p><strong>灾备</strong> = 容灾+备份。</p>
<ul>
<li><strong>备份</strong> ： 将系统所产生的的所有重要数据多备份几份。</li>
<li><strong>容灾</strong> ： 在异地建立两个完全相同的系统。当某个地方的系统突然挂掉，整个应用系统可以切换到另一个，这样系统就可以正常提供服务了。</li>
</ul>
<p><strong>异地多活</strong> 描述的是将服务部署在异地并且服务同时对外提供服务。和传统的灾备设计的最主要区别在于“多活”，即所有站点都是同时在对外提供服务的。异地多活是为了应对突发状况比如火灾、地震等自然或者人为灾害。</p>
<p>相关阅读：</p>
<ul>
<li><a href="https://mp.weixin.qq.com/s/T6mMDdtTfBuIiEowCpqu6Q" target="_blank" rel="noopener noreferrer">搞懂异地多活，看这篇就够了<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s/hMD-IS__4JE5_nQhYPYSTg" target="_blank" rel="noopener noreferrer">四步构建异地多活<ExternalLinkIcon/></a></li>
<li><a href="http://gk.link/a/10pKZ" target="_blank" rel="noopener noreferrer">《从零开始学架构》— 28 | 业务高可用的保障：异地多活架构<ExternalLinkIcon/></a></li>
</ul>
</div></template>
