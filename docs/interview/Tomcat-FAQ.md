---
title: Tomcat 部分
date: 2020-11-23
category: interview
---

### Tomcat简介

Tomcat是用java编写的，属于Apache软件基金会的一个核心项目，可以运行Servlet和jsp，是一个小型的轻量级应用服务器，运行时占用系统资源少、扩展性好、支持负载均衡和邮件服务等的开发应用系统中的常见功能，使用中小型系统和并发访问用户不太多的系统。

Tomcat既是一个开放源码、免费支持JSP和Servlet技术的容器，同时又是一个Web服务器软件。与传统的桌面应用程序不同，Tomcat中的应用程序是一个WAR（Web Archive）文件，它是许多文件构成的一个压缩包，包中的文件按照一定目录结构来组织，不同目录文件中的文件也具有不同的功能。部署应用程序时，只需要把WAR文件放到Tomcat的**webapp**目录下，**Tomcat会自动检测和解压该文件**。

Tomcat既是一个Servlet容器，又是一个独立运行的服务器，像IIS。Apache等Web服务器一样，具有处理HTML页面的功能，但它处理HTML文件的能力并不是太强，所以一般把它当做JSP/Servlet引擎，通过适配器（Adapter）与其它Web服务器软件（如Apache）配合使用。



