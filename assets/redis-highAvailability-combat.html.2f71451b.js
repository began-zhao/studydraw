import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as a,b as e,a as s,e as l,d as i,r as t}from"./app.0aadd796.js";const c={},v=l('<h1 id="redis-\u9AD8\u53EF\u7528\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#redis-\u9AD8\u53EF\u7528\u5B9E\u8DF5" aria-hidden="true">#</a> Redis \u9AD8\u53EF\u7528\u5B9E\u8DF5</h1><h1 id="redis\u5B89\u88C5\u53CA\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#redis\u5B89\u88C5\u53CA\u9AD8\u53EF\u7528" aria-hidden="true">#</a> <strong>Redis\u5B89\u88C5\u53CA\u9AD8\u53EF\u7528</strong></h1><h1 id="_1-\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> <strong>1.\u5B89\u88C5\u53CA\u914D\u7F6E</strong></h1>',3),o=i("Redis \u5B98\u7F51\uFF1A\xA0"),m={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},u=i("https://redis.io/"),b=i("Redis \u4E2D\u6587\u7F51\uFF08\u66F4\u65B0\u6BD4\u8F83\u6162\uFF09\uFF1A\xA0"),p={href:"http://www.redis.cn/",target:"_blank",rel:"noopener noreferrer"},g=i("http://www.redis.cn/"),h=l(`<h1 id="_1-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5" aria-hidden="true">#</a> <strong>1.1 \u5B89\u88C5</strong></h1><p>\u4EE5centos7\u4E3A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> #\u4E0B\u8F7D\u5305
wget https://download.redis.io/releases/redis-6.2.5.tar.gz

#\u914D\u7F6Egcc\uFF0Credis6\u9700\u8981gcc9
yum -y install centos-release-scl
yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils

#\u4E34\u65F6\u5C06\u6B64\u65F6\u7684gcc\u7248\u672C\u6539\u4E3A9
[root@localhost ~]# scl enable devtoolset-9 bash#\u6216\u6C38\u4E45\u6539\u53D8echo &quot;source /opt/rh/devtoolset-9/enable&quot; &gt;&gt;/etc/profile

#\u89E3\u538B\u5E76\u5B89\u88C5
tar xf redis-6.0.6.tar.gz -C /usr/local/
mv /usr/local/redis-6.0.6/ /usr/local/redis
cd /usr/local/redis/
make
make install

#\u65B9\u4FBF\u64CD\u4F5Ccp src/redis-server src/redis-cli /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_1-2-\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> <strong>1.2 \u4FEE\u6539\u914D\u7F6E</strong></h1><p>\u9700\u8981\u4FEE\u6539redis.conf,\u521D\u59CB\u5316\u53EF\u4EE5\u4FEE\u6539\u4E0B\u9762\u51E0\u9879\uFF0C\u5176\u4ED6\u6839\u636E\u9700\u6C42\u8C03\u6574</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u628A\u6587\u4EF6\u4E2D\u7684daemonize\u5C5E\u6027\u6539\u4E3Ayes\uFF08\u8868\u660E\u9700\u8981\u5728\u540E\u53F0\u8FD0\u884C\uFF09,\u9700\u8981\u914D\u7F6Esystemd\u542F\u52A8\u65F6\uFF0C\u4E00\u5B9A\u8981\u6253\u5F00
daemonize yes

\u628A redis.conf\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 bind 127.0.0.1 \u8FD9\u4E00\u884C\u7ED9\u6CE8\u91CA\u6389\uFF0C\u8FD9\u91CC\u7684bind\u6307\u7684\u662F\u53EA\u6709\u6307\u5B9A\u7684\u7F51\u6BB5\u624D\u80FD\u8FDC\u7A0B\u8BBF\u95EE\u8FD9\u4E2Aredis\uFF0C\u6CE8\u91CA\u6389\u540E\uFF0C\u5C31\u6CA1\u6709\u8FD9\u4E2A\u9650\u5236\u4E86\u3002\uFF08\u9ED8\u8BA4\u662Fbind 127.0.0.1 -::1\uFF0C\u6CE8\u91CA\u6389\u5C31\u884C\u4E86\uFF09
#bind 127.0.0.1

\u7AEF\u53E3\u53F7\u6839\u636E\u9700\u6C42\u6539
port 6379

\u628A redis.conf\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 protected-mode \u8BBE\u7F6E\u6210no\uFF08\u9ED8\u8BA4\u662F\u8BBE\u7F6E\u6210yes\u7684\uFF0C \u9632\u6B62\u4E86\u8FDC\u7A0B\u8BBF\u95EE\uFF0C\u5728redis3.2.3\u7248\u672C\u540E\uFF09
protected-mode no

\u4FEE\u6539Redis\u9ED8\u8BA4\u5BC6\u7801 (\u9ED8\u8BA4\u5BC6\u7801\u4E3A\u7A7A)\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u627E\u5230\u8FD9\u4E00\u884C# requirepass foobared\uFF0C\u5220\u9664\u524D\u9762\u7684\u6CE8\u91CA\u7B26\u53F7#\uFF0C\u5E76\u628Afoobared\u4FEE\u6539\u6210\u81EA\u5DF1\u7684\u5BC6\u7801  \u6216\u8005  \u53E6\u8D77\u4E00\u884C requirepass \u81EA\u5DF1\u7684\u5BC6\u7801
requirepass 123456

##protected-mode yes\u5E76\u4E0D\u662F\u8BF4\u76F4\u63A5\u7981\u6B62\u8FDC\u7A0B\u8BBF\u95EE
\u800C\u662F\u5F53\u4E0B\u9762\u4E24\u79CD\u60C5\u51B5\u540C\u65F6\u5B58\u5728\u662F\u624D\u4F1A\u89E6\u53D1Redis\u7684protected-mode
1.\u6CA1\u6709\u914D\u7F6E\u5BC6\u7801
2.\u6CA1\u6709bind\u4E00\u7EC4\u5730\u5740

#\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684
pidfile /var/run/redis_6379.pid
loglevel notice
logfile &quot;/usr/local/redis/redis.log&quot;
dir /usr/local/redis/
\u7B49\u6839\u636E\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5185\u6838\u53C2\u6570\u914D\u7F6E</strong></p><p>\u4E5F\u53EF\u4EE5\u6839\u636E\u65E5\u5FD7\u4E2D\u7684\u8B66\u544A\u6765\u6162\u6162\u8C03\u6574</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u6700\u5C11\u9700\u8981\u8FD9\u4E9B\u53C2\u6570
vim /etc/sysctl.conf
vm.max_map_count=262144
net.core.somaxconn= 32768
vm.overcommit_memory=1

sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_1-3-\u914D\u7F6E\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_1-3-\u914D\u7F6E\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> <strong>1.3 \u914D\u7F6E\u5F00\u673A\u81EA\u542F</strong></h1><p>\u786E\u4FDD\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF1Adaemonize yes</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u65B0\u5EFAredis.service\u670D\u52A1\u6587\u4EF6#\u53EF\u4EE5\u5C06\u914D\u7F6E\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u542F\u52A8\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u6587\u4EF6\u540D\u5E26\u4E0A\u7AEF\u53E3\u53F7\u6765\u533A\u5206
[root@localhost ~]# vim /usr/lib/systemd/system/redis.service
[Unit]
Description=Redis Server Manager
After=syslog.target network.target

[Service]
Type=forking
ExecStart=/usr/local/redis/src/redis-server /usr/local/redis/redis.conf
ExecReload=/bin/kill -USR2 $MAINPID
ExecStop=/bin/kill -SIGINT $MAINPID

[Install]
WantedBy=multi-user.target

#reload systemctl
systemctl daemon-reload
#\u542F\u52A8redis
systemctl start redis
systemctl enable redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-\u4E3B\u4ECE\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3B\u4ECE\u590D\u5236" aria-hidden="true">#</a> <strong>2.\u4E3B\u4ECE\u590D\u5236</strong></h1><p>\u7C7B\u4F3C\u4E8EMYSQL\u7684\u4E3B\u4ECE\u540C\u6B65, \u662F\u5C06\u4E00\u53F0Redis\u670D\u52A1\u5668\u7684\u6570\u636E(\u4E3B\u8282\u70B9)\u590D\u5236\u5230\u5176\u4ED6\u7684Redis\u670D\u52A1\u5668\u4E0A(\u4ECE\u8282\u70B9),\u4E14\u6570\u636E\u7684\u590D\u5236\u662F<strong>\u5355\u5411</strong>\u7684\uFF0C\u53EA\u80FD\u7531\u4E3B\u8282\u70B9\u5230\u4ECE\u8282\u70B9\u3002Redis \u4E3B\u4ECE\u590D\u5236\u652F\u6301\xA0<strong>\u4E3B\u4ECE\u540C\u6B65</strong>\xA0\u548C\xA0<strong>\u4ECE\u4ECE\u540C\u6B65</strong>\xA0\u4E24\u79CD\uFF0C\u540E\u8005\u662F Redis \u540E\u7EED\u7248\u672C\u65B0\u589E\u7684\u529F\u80FD\uFF0C\u4EE5\u51CF\u8F7B\u4E3B\u8282\u70B9\u7684\u540C\u6B65\u8D1F\u62C5\u3002</p>`,14),f={href:"https://redis.io/topics/replication",target:"_blank",rel:"noopener noreferrer"},_=i("https://redis.io/topics/replication"),x=l(`<h1 id="_2-1-\u4E3B\u4ECE\u590D\u5236\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E3B\u4ECE\u590D\u5236\u539F\u7406" aria-hidden="true">#</a> <strong>2.1 \u4E3B\u4ECE\u590D\u5236\u539F\u7406</strong></h1><p>1.slave\u8282\u70B9\u521D\u6B21\u542F\u52A8\u65F6\u4E3B\u52A8\u5411master\u53D1\u8D77TCP\u8FDE\u63A5,\u5E76\u53D1\u8D77\u540C\u6B65\u8BF7\u6C42(psync\u547D\u4EE4), master\u63A5\u6536\u8FDE\u63A5(\u53EF\u8981\u6C42\u6388\u6743\u8BA4\u8BC1),\u5E76\u5C06slave\u7684\u4FE1\u606F\u4FDD\u5B58\u8D77\u6765\u3002</p><p>2.master\u8282\u70B9\u6536\u5230\u540C\u6B65\u8BF7\u6C42,\u6267\u884CBGSAVE\u547D\u4EE4\u751F\u6210rdb\u6587\u4EF6,\u6587\u4EF6\u751F\u6210\u540E\u53D1\u9001\u7ED9slave\u3002</p><p>3.slave\u6536\u5230\u540E\u9996\u5148\u6E05\u695A\u81EA\u5DF1\u7684\u65E7\u6570\u636E, \u7136\u540E\u8F7D\u5165\u6536\u5230\u7684rdb\u6587\u4EF6, slave\u66F4\u65B0\u81F3master\u6267\u884Cbgsave\u547D\u4EE4\u524D\u7684\u72B6\u6001\u3002</p><p>4.master\u5C06\u4FDD\u5B58rdb\u6587\u4EF6\u671F\u95F4\u6536\u5230\u7684\u5199\u547D\u4EE4\u53D1\u9001\u7ED9slave, slave\u66F4\u65B0\u81F3\u4E3B\u8282\u70B9\u7684\u6700\u65B0\u72B6\u6001\u3002</p><p>5.\u6B64\u540Emaster\u6BCF\u6709\u5199\u547D\u4EE4,\u5C31\u4F1A\u4E3B\u52A8\u53D1\u9001\u7ED9slave\u8282\u70B9\u3002</p><p>\u4E3B\u4ECE\u8282\u70B9\u4F1A\u5206\u522B\u7EF4\u62A4\u4E00\u4E2A\u590D\u5236\u4FBF\u5B9C\u91CF(\u590D\u5236\u7684\u5B57\u8282\u6570), \u5F53\u51FA\u73B0\u7F51\u7EDC\u4E2D\u65AD\u7B49\u60C5\u51B5\u65F6,\u91CD\u8FDE\u540E\u4F1A\u4ECE\u504F\u79FB\u91CF\u5904\u5F00\u59CB\u8FDB\u884C\u90E8\u5206\u590D\u5236,\u907F\u514D\u4E86\u5168\u91CF\u590D\u5236\u7684\u91CD\u578B\u64CD\u4F5C\u3002</p><h1 id="_2-2-\u4E3B\u4ECE\u590D\u5236\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E3B\u4ECE\u590D\u5236\u914D\u7F6E" aria-hidden="true">#</a> <strong>2.2 \u4E3B\u4ECE\u590D\u5236\u914D\u7F6E</strong></h1><p>\u4E3B\u4ECE\u590D\u5236master\u8282\u70B9\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u914D\u7F6E, \u53EA\u9700\u8981\u5728slave\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5165:\xA0<code>slaveof &lt;masterip&gt; &lt;masterport&gt;</code></p><p><code>masterauth &lt;master-password&gt;</code></p><p><code>slaveof no one</code>\xA0\u5C06\u4F7F\u5F97\u8FD9\u4E2A\u4ECE\u5C5E\u670D\u52A1\u5668\u5173\u95ED\u590D\u5236\u529F\u80FD\uFF0C\u5E76\u4ECE\u4ECE\u5C5E\u670D\u52A1\u5668\u8F6C\u53D8\u56DE\u4E3B\u670D\u52A1\u5668\uFF0C\u539F\u6765\u540C\u6B65\u6240\u5F97\u7684\u6570\u636E\u96C6\u4E0D\u4F1A\u88AB\u4E22\u5F03\u3002</p><p>\u4F5C\u4E3A\u4ECE\u65F6\uFF0C\u4ECE\u8282\u70B9\u662F\u4E0D\u5141\u8BB8\u5199\u5165\u7684</p><p>\u5229\u7528\u300E SLAVEOF NO ONE \u4E0D\u4F1A\u4E22\u5F03\u540C\u6B65\u6240\u5F97\u6570\u636E\u96C6\u300F\u8FD9\u4E2A\u7279\u6027\uFF0C\u53EF\u4EE5\u5728\u4E3B\u670D\u52A1\u5668\u5931\u8D25\u7684\u65F6\u5019\uFF0C\u5C06\u4ECE\u5C5E\u670D\u52A1\u5668\u7528\u4F5C\u65B0\u7684\u4E3B\u670D\u52A1\u5668\uFF0C\u4ECE\u800C\u5B9E\u73B0\u65E0\u95F4\u65AD\u8FD0\u884C\u3002</p><p><strong>\u9664\u4E86slaveof\u4E4B\u5916\u4E5F\u53EF\u4EE5\u7528<code>replicaof &lt;masterip&gt; &lt;masterport&gt;</code></strong></p><blockquote><p>5.0\u4E4B\u540E\u5EFA\u8BAE\u4F7F\u7528replicaof</p></blockquote><p>\u4ECE\u8282\u70B9\u542F\u52A8\u65F6\u5C31\u4F1A\u81EA\u52A8\u5411\u4E3B\u8282\u70B9\u53D1\u8D77\u8FDE\u63A5,\u5B8C\u6210\u4E3B\u4ECE\u540C\u6B65\u7684\u4E00\u7CFB\u5217\u8FC7\u7A0B\u3002</p><blockquote><p>\u4E5F\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u914D\u7F6E\uFF0C\u4F46\u4EC5\u672C\u6B21\u751F\u6548</p></blockquote><p>\u67E5\u770B\u4E3B\u4ECE\u4FE1\u606F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; info replication
# Replicationrole:master
connected_slaves:1
slave0:ip=192.168.250.121,port=6381,state=online,offset=276,lag=1
master_failover_state:no-failover
master_replid:40f533a2d673cf8428ba32a1a02d5b588fef9730
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:276
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:276
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-3-\u4E3B\u4ECE\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E3B\u4ECE\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> <strong>2.3 \u4E3B\u4ECE\u4F18\u7F3A\u70B9</strong></h1><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> <strong>\u4F18\u70B9</strong></h3><p>\u4E3B\u4ECE\u590D\u5236\u63D0\u4F9B\u4E86\u57FA\u672C\u7684\u6570\u636E\u591A\u8282\u70B9\u5907\u4EFD\u529F\u80FD, \u5F53\u4E3B\u8282\u70B9\u53D1\u751F\u6545\u969C\u65F6,\u53EF\u4EE5\u542F\u7528\u4ECE\u8282\u70B9\u7EE7\u7EED\u63D0\u4F9B\u670D\u52A1\u3002</p><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> <strong>\u7F3A\u70B9</strong></h3><p>\u65E0\u6CD5\u5B9E\u73B0\u6545\u969C\u7684\u81EA\u52A8\u5207\u6362, \u4E3B\u8282\u70B9\u6545\u969C\u65F6,\u9700\u8981\u624B\u52A8\u5C06\u7A0B\u5E8F(\u5BA2\u6237\u7AEF)\u7684\u914D\u7F6E\u4ECE\u4E3B\u8282\u70B9\u5207\u6362\u4E3A\u4ECE\u8282\u70B9,\u7136\u540E\u91CD\u542F\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u3002</p><p><strong>\u4E3B\u4ECE\u590D\u5236\u7684\u673A\u5236\u662F\u5176\u4ED6\u9AD8\u53EF\u7528\u65B9\u5F0F\u7684\u57FA\u7840</strong></p><h1 id="_3-\u54E8\u5175\u6A21\u5F0F-redis-sentinel" tabindex="-1"><a class="header-anchor" href="#_3-\u54E8\u5175\u6A21\u5F0F-redis-sentinel" aria-hidden="true">#</a> <strong>3.\u54E8\u5175\u6A21\u5F0F\uFF08Redis Sentinel\uFF09</strong></h1>`,26),y=i("\u54E8\u5175\u6A21\u5F0F\u5B98\u7F51\u6587\u6863\uFF1A"),q={href:"https://redis.io/topics/sentinel",target:"_blank",rel:"noopener noreferrer"},k=i("https://redis.io/topics/sentinel"),R=l(`<ul><li><strong>\u54E8\u5175\u8282\u70B9</strong>: \u54E8\u5175\u7CFB\u7EDF\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u54E8\u5175\u8282\u70B9\u7EC4\u6210\uFF0C\u54E8\u5175\u8282\u70B9\u662F\u7279\u6B8A\u7684 Redis \u8282\u70B9\uFF0C\u4E0D\u5B58\u50A8\u6570\u636E\u3002</li><li><strong>\u6570\u636E\u8282\u70B9\uFF1A</strong>\xA0\u4E3B\u8282\u70B9\u548C\u4ECE\u8282\u70B9\u90FD\u662F\u6570\u636E\u8282\u70B9\u3002</li></ul><p>\u54E8\u5175\u65B9\u5F0F\u5728\u4E3B\u4ECE\u590D\u5236\u7684\u57FA\u7840\u4E0A, \u5B9E\u73B0\u4E86\u6545\u969C\u81EA\u52A8\u5207\u6362\u7684\u529F\u80FD:</p><ul><li><strong>\u76D1\u63A7\uFF08Monitoring\uFF09\uFF1A</strong>\xA0\u54E8\u5175\u4F1A\u4E0D\u65AD\u5730\u68C0\u67E5\u4E3B\u8282\u70B9\u548C\u4ECE\u8282\u70B9\u662F\u5426\u8FD0\u4F5C\u6B63\u5E38\u3002</li><li><strong>\u81EA\u52A8\u6545\u969C\u8F6C\u79FB\uFF08Automatic failover\uFF09\uFF1A</strong>\xA0\u5F53\xA0<strong>\u4E3B\u8282\u70B9</strong>\xA0\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u65F6\uFF0C\u54E8\u5175\u4F1A\u5F00\u59CB\xA0<strong>\u81EA\u52A8\u6545\u969C\u8F6C\u79FB\u64CD\u4F5C</strong>\uFF0C\u5B83\u4F1A\u5C06\u5931\u6548\u4E3B\u8282\u70B9\u7684\u5176\u4E2D\u4E00\u4E2A\xA0<strong>\u4ECE\u8282\u70B9\u5347\u7EA7\u4E3A\u65B0\u7684\u4E3B\u8282\u70B9</strong>\uFF0C\u5E76\u8BA9\u5176\u4ED6\u4ECE\u8282\u70B9\u6539\u4E3A\u590D\u5236\u65B0\u7684\u4E3B\u8282\u70B9\u3002</li><li><strong>\u914D\u7F6E\u63D0\u4F9B\u8005\uFF08Configuration provider\uFF09\uFF1A</strong>\xA0\u5BA2\u6237\u7AEF\u5728\u521D\u59CB\u5316\u65F6\uFF0C\u901A\u8FC7\u8FDE\u63A5\u54E8\u5175\u6765\u83B7\u5F97\u5F53\u524D Redis \u670D\u52A1\u7684\u4E3B\u8282\u70B9\u5730\u5740\u3002</li><li><strong>\u901A\u77E5\uFF08Notification\uFF09\uFF1A</strong>\xA0\u54E8\u5175\u53EF\u4EE5\u5C06\u6545\u969C\u8F6C\u79FB\u7684\u7ED3\u679C\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002</li></ul><p>Redis Sentinel \u96C6\u7FA4\u662F\u7531\u82E5\u5E72 Sentinel \u8282\u70B9\u7EC4\u6210\u7684\u5206\u5E03\u5F0F\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u6545\u969C\u53D1\u73B0\u3001\u6545\u969C\u81EA\u52A8\u8F6C\u79FB\u3001\u914D\u7F6E\u4E2D\u5FC3\u548C\u5BA2\u6237\u7AEF\u901A\u77E5\u3002Redis Sentinel \u7684\u8282\u70B9\u6570\u91CF\u8981\u6EE1\u8DB3 2n+1\uFF08n&gt;=1\uFF09\u7684\u5947\u6570\u4E2A\u3002</p><h1 id="_3-1-\u54E8\u5175\u6A21\u5F0F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_3-1-\u54E8\u5175\u6A21\u5F0F\u4F5C\u7528" aria-hidden="true">#</a> <strong>3.1 \u54E8\u5175\u6A21\u5F0F\u4F5C\u7528</strong></h1><p>\u4E3B\u4ECE\u540C\u6B65/\u590D\u5236\u7684\u6A21\u5F0F\uFF0C\u5F53\u4E3B\u670D\u52A1\u5668\u5B95\u673A\u540E\uFF0C\u9700\u8981\u624B\u52A8\u628A\u4E00\u53F0\u4ECE\u670D\u52A1\u5668\u5207\u6362\u4E3A\u4E3B\u670D\u52A1\u5668\uFF0C\u8FD9\u5C31\u9700\u8981\u4EBA\u5DE5\u5E72\u9884\uFF0C\u8D39\u4E8B\u8D39\u529B\uFF0C\u8FD8\u4F1A\u9020\u6210\u4E00\u6BB5\u65F6\u95F4\u5185\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u54E8\u5175\u6A21\u5F0F\u767B\u573A\u4E86\u3002\u54E8\u5175\u6A21\u5F0F\u662F\u4ECE Redis \u7684 2.6 \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u7684\uFF0C\u4F46\u662F\u5F53\u65F6\u8FD9\u4E2A\u7248\u672C\u7684\u6A21\u5F0F\u662F\u4E0D\u7A33\u5B9A\u7684\uFF0C\u76F4\u5230 Redis \u7684 2.8 \u7248\u672C\u4EE5\u540E\uFF0C\u8FD9\u4E2A\u54E8\u5175\u6A21\u5F0F\u624D\u7A33\u5B9A\u4E0B\u6765\u3002</p><p>\u54E8\u5175\u6A21\u5F0F\u6838\u5FC3\u8FD8\u662F\u4E3B\u4ECE\u590D\u5236\uFF0C\u53EA\u4E0D\u8FC7\u5728\u76F8\u5BF9\u4E8E\u4E3B\u4ECE\u6A21\u5F0F\u5728\u4E3B\u8282\u70B9\u5B95\u673A\u5BFC\u81F4\u4E0D\u53EF\u5199\u7684\u60C5\u51B5\u4E0B\uFF0C\u591A\u4E86\u4E00\u4E2A**\u7ADE\u9009\u673A\u5236\uFF1A**\u4ECE\u6240\u6709\u7684\u4ECE\u8282\u70B9\u7ADE\u9009\u51FA\u65B0\u7684\u4E3B\u8282\u70B9\u3002\u7ADE\u9009\u673A\u5236\u7684\u5B9E\u73B0\uFF0C\u662F\u4F9D\u8D56\u4E8E\u5728\u7CFB\u7EDF\u4E2D\u542F\u52A8\u4E00\u4E2A sentinel \u8FDB\u7A0B\u3002</p><p>\u54E8\u5175\u672C\u8EAB\u4E5F\u6709\u5355\u70B9\u6545\u969C\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u5728\u4E00\u4E2A\u4E00\u4E3B\u591A\u4ECE\u7684 Redis \u7CFB\u7EDF\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A\u54E8\u5175\u8FDB\u884C\u76D1\u63A7\uFF0C\u54E8\u5175\u4E0D\u4EC5\u4F1A\u76D1\u63A7\u4E3B\u6570\u636E\u5E93\u548C\u4ECE\u6570\u636E\u5E93\uFF0C\u54E8\u5175\u4E4B\u95F4\u4E5F\u4F1A\u76F8\u4E92\u76D1\u63A7\u3002\u6BCF\u4E00\u4E2A\u54E8\u5175\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FDB\u7A0B\uFF0C\u4F5C\u4E3A\u8FDB\u7A0B\uFF0C\u5B83\u4F1A\u72EC\u7ACB\u8FD0\u884C\u3002</p><p>\u54E8\u5175\u6A21\u5F0F\u7684\u4F5C\u7528\uFF1A</p><ul><li>\u76D1\u63A7\u6240\u6709\u670D\u52A1\u5668\u662F\u5426\u6B63\u5E38\u8FD0\u884C\uFF1A\u901A\u8FC7\u53D1\u9001\u547D\u4EE4\u8FD4\u56DE\u76D1\u63A7\u670D\u52A1\u5668\u7684\u8FD0\u884C\u72B6\u6001\uFF0C\u5904\u7406\u76D1\u63A7\u4E3B\u670D\u52A1\u5668\u3001\u4ECE\u670D\u52A1\u5668\u5916\uFF0C\u54E8\u5175\u4E4B\u95F4\u4E5F\u76F8\u4E92\u76D1\u63A7\u3002</li><li>\u6545\u969C\u5207\u6362\uFF1A\u5F53\u54E8\u5175\u76D1\u6D4B\u5230 master \u5B95\u673A\uFF0C\u4F1A\u81EA\u52A8\u5C06 slave \u5207\u6362\u6210 master\uFF0C\u7136\u540E\u901A\u8FC7<strong>\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</strong>\u901A\u77E5\u5176\u4ED6\u7684\u4ECE\u670D\u52A1\u5668\uFF0C\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BA9\u5B83\u4EEC\u5207\u6362 master\u3002\u540C\u65F6\u90A3\u53F0\u6709\u95EE\u9898\u7684\u65E7\u4E3B\u4E5F\u4F1A\u53D8\u4E3A\u65B0\u4E3B\u7684\u4ECE\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53\u65E7\u7684\u4E3B\u5373\u4F7F\u6062\u590D\u65F6\uFF0C\u5E76\u4E0D\u4F1A\u6062\u590D\u539F\u6765\u7684\u4E3B\u8EAB\u4EFD\uFF0C\u800C\u662F\u4F5C\u4E3A\u65B0\u4E3B\u7684\u4E00\u4E2A\u4ECE\u3002</li></ul><h1 id="_3-2-\u54E8\u5175\u6A21\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-2-\u54E8\u5175\u6A21\u5F0F\u539F\u7406" aria-hidden="true">#</a> <strong>3.2 \u54E8\u5175\u6A21\u5F0F\u539F\u7406</strong></h1><p>\u54E8\u5175\u5728\u542F\u52A8\u8FDB\u7A0B\u65F6\uFF0C\u4F1A\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7\u5982\u4E0B\u7684\u914D\u7F6E\u627E\u51FA\u9700\u8981\u76D1\u63A7\u7684\u4E3B\u6570\u636E\u5E93\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sentinel monitor master-name ip port quorum
# master-name \u662F\u4E3B\u6570\u636E\u5E93\u7684\u540D\u5B57# ip \u548C port \u662F\u5F53\u524D\u4E3B\u6570\u636E\u5E93\u5730\u5740\u548C\u7AEF\u53E3\u53F7# quorum \u8868\u793A\u5728\u6267\u884C\u6545\u969C\u5207\u6362\u64CD\u4F5C\u524D\uFF0C\u9700\u8981\u591A\u5C11\u54E8\u5175\u8282\u70B9\u540C\u610F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u4E4B\u6240\u4EE5\u53EA\u9700\u8981\u8FDE\u63A5\u4E3B\u8282\u70B9\uFF0C\u662F\u56E0\u4E3A\u901A\u8FC7\u4E3B\u8282\u70B9\u7684 info \u547D\u4EE4\uFF0C\u83B7\u53D6\u4ECE\u8282\u70B9\u4FE1\u606F\uFF0C\u4ECE\u800C\u548C\u4ECE\u8282\u70B9\u4E5F\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u540C\u65F6\u4E5F\u80FD\u901A\u8FC7\u4E3B\u8282\u70B9\u7684 info \u4FE1\u606F\u77E5\u9053\u65B0\u589E\u4ECE\u8282\u70B9\u7684\u4FE1\u606F\u3002</p><p>\u4E00\u4E2A\u54E8\u5175\u8282\u70B9\u53EF\u4EE5\u76D1\u63A7\u591A\u4E2A\u4E3B\u8282\u70B9\uFF0C\u4F46\u662F\u5E76\u4E0D\u63D0\u5021\u8FD9\u4E48\u505A\uFF0C\u56E0\u4E3A\u5F53\u54E8\u5175\u8282\u70B9\u5D29\u6E83\u65F6\uFF0C\u540C\u65F6\u6709\u591A\u4E2A\u96C6\u7FA4\u5207\u6362\u4F1A\u53D1\u751F\u6545\u969C\u3002\u54E8\u5175\u542F\u52A8\u540E\uFF0C\u4F1A\u4E0E\u4E3B\u6570\u636E\u5E93\u5EFA\u7ACB\u4E24\u6761\u8FDE\u63A5\u3002</p><ol><li>\u8BA2\u9605\u4E3B\u6570\u636E\u5E93\xA0<strong><code>_sentinel_:hello</code></strong>\xA0\u9891\u9053\u4EE5\u83B7\u53D6\u540C\u6837\u76D1\u63A7\u8BE5\u6570\u636E\u5E93\u7684\u54E8\u5175\u8282\u70B9\u4FE1\u606F</li><li>\u5B9A\u671F\u5411\u4E3B\u6570\u636E\u5E93\u53D1\u9001\xA0<strong><code>info</code></strong>\xA0\u547D\u4EE4\uFF0C\u83B7\u53D6\u4E3B\u6570\u636E\u5E93\u672C\u8EAB\u7684\u4FE1\u606F\u3002</li></ol><p>\u8DDF\u4E3B\u6570\u636E\u5E93\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4F1A\u5B9A\u65F6\u6267\u884C\u4EE5\u4E0B\u4E09\u4E2A\u64CD\u4F5C\uFF1A</p><ul><li>\u6BCF\u9694 10s \u5411 master \u548C slave \u53D1\u9001 info \u547D\u4EE4\u3002\u4F5C\u7528\u662F\u83B7\u53D6\u5F53\u524D\u6570\u636E\u5E93\u4FE1\u606F\uFF0C\u6BD4\u5982\u53D1\u73B0\u65B0\u589E\u4ECE\u8282\u70B9\u65F6\uFF0C\u4F1A\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5E76\u52A0\u5165\u5230\u76D1\u63A7\u5217\u8868\u4E2D\uFF0C\u5F53\u4E3B\u4ECE\u6570\u636E\u5E93\u7684\u89D2\u8272\u53D1\u751F\u53D8\u5316\u8FDB\u884C\u4FE1\u606F\u66F4\u65B0\u3002</li><li>\u6BCF\u9694 2s \u5411\u4E3B\u6570\u636E\u91CC\u548C\u4ECE\u6570\u636E\u5E93\u7684\xA0<strong><code>_sentinel_:hello</code></strong>\xA0\u9891\u9053\u53D1\u9001\u81EA\u5DF1\u7684\u4FE1\u606F\u3002\u4F5C\u7528\u662F\u5C06\u81EA\u5DF1\u7684\u76D1\u63A7\u6570\u636E\u548C\u54E8\u5175\u5206\u4EAB\u3002\u6BCF\u4E2A\u54E8\u5175\u4F1A\u8BA2\u9605\u6570\u636E\u5E93\u7684**<code>_sentinel:hello</code>**\xA0\u9891\u9053\uFF0C\u5F53\u5176\u4ED6\u54E8\u5175\u6536\u5230\u6D88\u606F\u540E\uFF0C\u4F1A\u5224\u65AD\u8BE5\u54E8\u5175\u662F\u4E0D\u662F\u65B0\u7684\u54E8\u5175\uFF0C\u5982\u679C\u662F\u5219\u5C06\u5176\u52A0\u5165\u54E8\u5175\u5217\u8868\uFF0C\u5E76\u5EFA\u7ACB\u8FDE\u63A5\u3002</li><li>\u6BCF\u9694 1s \u5411\u6240\u6709\u4E3B\u4ECE\u8282\u70B9\u548C\u6240\u6709\u54E8\u5175\u8282\u70B9\u53D1\u9001 ping \u547D\u4EE4\uFF0C\u4F5C\u7528\u662F\u76D1\u63A7\u8282\u70B9\u662F\u5426\u5B58\u6D3B\u3002</li></ul><h1 id="_3-3-\u4E3B\u89C2\u4E0B\u7EBF\u548C\u5BA2\u89C2\u4E0B\u7EBF" tabindex="-1"><a class="header-anchor" href="#_3-3-\u4E3B\u89C2\u4E0B\u7EBF\u548C\u5BA2\u89C2\u4E0B\u7EBF" aria-hidden="true">#</a> <strong>3.3 \u4E3B\u89C2\u4E0B\u7EBF\u548C\u5BA2\u89C2\u4E0B\u7EBF</strong></h1><p>\u54E8\u5175\u8282\u70B9\u53D1\u9001 ping \u547D\u4EE4\u65F6\uFF0C\u5F53\u8D85\u8FC7\u4E00\u5B9A\u65F6\u95F4(down-after-millisecond)\u540E\uFF0C\u5982\u679C\u8282\u70B9\u672A\u56DE\u590D\uFF0C\u5219\u54E8\u5175\u8BA4\u4E3A\u4E3B\u89C2\u4E0B\u7EBF\u3002\u4E3B\u89C2\u4E0B\u7EBF\u8868\u793A\u5F53\u524D\u54E8\u5175\u8BA4\u4E3A\u8BE5\u8282\u70B9\u5DF2\u7ECF\u4E0B\u7EBF\uFF0C\u5982\u679C\u8BE5\u8282\u70B9\u4E3A\u4E3B\u6570\u636E\u5E93\uFF0C\u54E8\u5175\u4F1A\u8FDB\u4E00\u6B65\u5224\u65AD\u662F\u591F\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u6545\u969C\u5207\u6362\uFF0C\u8FD9\u65F6\u5019\u5C31\u8981\u53D1\u9001\u547D\u4EE4(SENTINEL is-master-down-by-addr)\u8BE2\u95EE\u5176\u4ED6\u54E8\u5175\u8282\u70B9\u662F\u5426\u8BA4\u4E3A\u8BE5\u4E3B\u8282\u70B9\u662F\u4E3B\u89C2\u4E0B\u7EBF\uFF0C\u5F53\u8FBE\u5230\u6307\u5B9A\u6570\u91CF(quorum)\u65F6\uFF0C\u54E8\u5175\u5C31\u4F1A\u8BA4\u4E3A\u662F\u5BA2\u89C2\u4E0B\u7EBF\u3002</p><p>\u5F53\u4E3B\u8282\u70B9\u5BA2\u89C2\u4E0B\u7EBF\u65F6\u5C31\u9700\u8981\u8FDB\u884C\u4E3B\u4ECE\u5207\u6362\uFF0C\u4E3B\u4ECE\u5207\u6362\u7684\u6B65\u9AA4\u4E3A\uFF1A</p><ul><li>\u9009\u51FA\u9886\u5934\u54E8\u5175\u3002</li><li>\u9886\u5934\u54E8\u5175\u6240\u6709\u7684 slave \u9009\u51FA\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4ECE\u6570\u636E\u5E93\u3002\u4F18\u5148\u7EA7\u53EF\u4EE5\u901A\u8FC7 slave-priority \u9009\u9879\u8BBE\u7F6E\u3002</li><li>\u5982\u679C\u4F18\u5148\u7EA7\u76F8\u540C\uFF0C\u5219\u4ECE\u590D\u5236\u7684\u547D\u4EE4\u504F\u79FB\u91CF\u8D8A\u5927\uFF08\u5373\u590D\u5236\u540C\u6B65\u6570\u636E\u8D8A\u591A\uFF0C\u6570\u636E\u8D8A\u65B0\uFF09\uFF0C\u8D8A\u4F18\u5148\u3002</li><li>\u5982\u679C\u4EE5\u4E0A\u6761\u4EF6\u90FD\u4E00\u6837\uFF0C\u5219\u9009\u62E9 run ID \u8F83\u5C0F\u7684\u4ECE\u6570\u636E\u5E93\u3002</li></ul><p>\u9009\u51FA\u4E00\u4E2A\u4ECE\u6570\u636E\u5E93\u540E\uFF0C\u54E8\u5175\u53D1\u9001\xA0<code>slave no one</code>\xA0\u547D\u4EE4\u5347\u7EA7\u4E3A\u4E3B\u6570\u636E\u5E93\uFF0C\u5E76\u53D1\u9001<code>slaveof</code>\xA0\u547D\u4EE4\u5C06\u5176\u4ED6\u4ECE\u8282\u70B9\u7684\u4E3B\u6570\u636E\u5E93\u8BBE\u7F6E\u4E3A\u65B0\u7684\u4E3B\u6570\u636E\u5E93\u3002</p><h1 id="_3-4-\u54E8\u5175\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-4-\u54E8\u5175\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> <strong>3.4 \u54E8\u5175\u914D\u7F6E\u793A\u4F8B</strong></h1><p><strong>\u914D\u7F6E\u54E8\u5175\u65F6\uFF0C\u6700\u597D\u7981\u7528redis.conf\u4E2D\u7684requirepass,\u5426\u5219\u54E8\u5175\u542F\u52A8\u65F6\u4F1A\u8BA4\u4E3A\u4E3B\u673A\u4E0B\u7EBF</strong></p><p><strong>\u6216\u8005\u9700\u8981\u5728\u54E8\u5175\u914D\u7F6E\u6587\u4EF6\u4E2D\u589E\u52A0sentinel auth-pass master-name password</strong></p><p>\u8FD9\u91CC\u7684\u793A\u4F8B\u6CA1\u6709\u914D\u7F6E\u5BC6\u7801</p><p>\u4EE5\u4E00\u4E3B\u4E24\u4ECE\u4E3A\u4F8B</p><p>\u9996\u5148\u5EFA\u597D\u4E3B\u4ECE</p><p>\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#redis-master.conf    master\u914D\u7F6E
port 6379
daemonize yes
logfile &quot;6379.log&quot;
dbfilename &quot;dump-6379.rdb&quot;

#redis-slave1.conf   slave1\u914D\u7F6E
port 6380
daemonize yes
logfile &quot;6380.log&quot;
dbfilename &quot;dump-6380.rdb&quot;
slaveof 127.0.0.1 6379

#redis-slave2.conf    slave2\u914D\u7F6E
port 6381
daemonize yes
logfile &quot;6381.log&quot;
dbfilename &quot;dump-6381.rdb&quot;
slaveof 127.0.0.1 6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u5404\u5B9E\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-server redis-master.conf
redis-server redis-slave1.conf
redis-server redis-slave2.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u54E8\u5175\u8282\u70B9\u7684\u914D\u7F6E\u6587\u4EF6</p><blockquote><p>redis\u7684\u6E90\u7801\u5305\u4E0B\u9762\u6709sentinel.conf\u6587\u4EF6\uFF0C\u5B83\u662F\u914D\u7F6E\u54E8\u5175\u7684\u793A\u4F8B\u6587\u4EF6\uFF0C\u5404\u79CD\u53C2\u6570\u4E5F\u6709\u89E3\u91CA\uFF0C\u53EF\u4EE5\u6839\u636E\u5B83\u6765\u914D\u7F6E\u5408\u9002\u7684\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#redis-sentinel-6379.conf
port 26379
daemonize yes
logfile &quot;26379.log&quot;
dir /tmp
sentinel monitor mymaster 127.0.0.1 6379 2#\u914D\u7F6E\u76D1\u89C6\u7684Redis \u4E3B\u673A\uFF0C\u5224\u65AD\u4E00\u4E2A\u4E3B\u673A\u4E0B\u7EBF\u9700\u8981\u4E24\u4E2A\u54E8\u5175\u8FBE\u6210\u4E00\u81F4
sentinel down-after-milliseconds mymaster 30000##Redis\u4E3B\u673A\u65AD\u7EBF5\u79D2\u8BA4\u4E3A\u5176\u4E0B\u7EBF
sentinel parallel-syncs mymaster 1#\u9009\u9879\u6307\u5B9A\u4E86\u5728\u6267\u884C\u6545\u969C\u8F6C\u79FB\u65F6\uFF0C \u6700\u591A\u53EF\u4EE5\u6709\u591A\u5C11\u4E2A\u4ECE\u670D\u52A1\u5668\u540C\u65F6\u5BF9\u65B0\u7684\u4E3B\u670D\u52A1\u5668\u8FDB\u884C\u540C\u6B65
sentinel failover-timeout mymaster 180000#\u6545\u969C\u8F6C\u79FB\u8D85\u65F6\u65F6\u95F4#redis-sentinel-6380.conf
port 26380
daemonize yes
logfile &quot;26380.log&quot;
dir /tmp
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000

#redis-sentinel-6381.conf
port 26381
daemonize yes
logfile &quot;26381.log&quot;
dir /tmp
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sentinel monitor mymaster 127.0.0.1 6379 2</code>\xA0\u914D\u7F6E\u7684\u542B\u4E49\u662F\uFF1A\u8BE5\u54E8\u5175\u8282\u70B9\u76D1\u63A7\xA0<code>127.0.0.1:6379</code>\xA0\u8FD9\u4E2A\u4E3B\u8282\u70B9\uFF0C\u8BE5\u4E3B\u8282\u70B9\u7684\u540D\u79F0\u662F\xA0<code>mymaster</code>\uFF0C\u6700\u540E\u7684\xA0<code>2</code>\xA0\u7684\u542B\u4E49\u4E0E\u4E3B\u8282\u70B9\u7684\u6545\u969C\u5224\u5B9A\u6709\u5173\uFF1A\u81F3\u5C11\u9700\u8981\xA0<code>2</code>\xA0\u4E2A\u54E8\u5175\u8282\u70B9\u540C\u610F\uFF0C\u624D\u80FD\u5224\u5B9A\u4E3B\u8282\u70B9\u6545\u969C\u5E76\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u3002</p><p><code>sentinel monitor mymaster 127.0.0.1 6379 2</code>\xA0\u4E00\u65E6\u914D\u7F6E\u4E4B\u540E\uFF0C<code>sentinel</code>\u4F1A\u901A\u8FC7\u68C0\u6D4B\u4E3B\u8282\u70B9\u7684\u72B6\u6001\u6765\u5F97\u77E5\u5F53\u524D\u4E3B\u8282\u70B9\u7684\u4ECE\u8282\u70B9\u6709\u54EA\u4E9B</p><p>sentinel monitor\u914D\u7F6E\u4E2D\u7684\u5EFA\u8BAE\u8BBE\u7F6E\u6210 Sentinel \u8282\u70B9\u7684\u4E00\u534A\u52A0 1\uFF0C\u5F53 Sentinel \u90E8\u7F72\u5728\u591A\u4E2A IDC \u7684\u65F6\u5019\uFF0C\u5355\u4E2A IDC \u90E8\u7F72\u7684 Sentinel \u6570\u91CF\u4E0D\u5EFA\u8BAE\u8D85\u8FC7\uFF08Sentinel \u6570\u91CF \u2013 quorum\uFF09\u3002</p><p>\u4E00\u4E9B\u53C2\u6570\u53C2\u8003\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\uFF09sentinel monitor mymaster 192.168.10.202 6379 2
Sentine\u76D1\u542C\u7684maste\u5730\u5740\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u7ED9master\u8D77\u7684\u540D\u5B57\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3Amaster IP\uFF0C\u7B2C\u4E09\u4E2A\u4E3Amaster\u7AEF\u53E3\uFF0C\u7B2C\u56DB\u4E2A\u4E3A\u5F53\u8BE5master\u6302\u4E86\u7684\u65F6\u5019\uFF0C\u82E5\u60F3\u5C06\u8BE5master\u5224\u4E3A\u5931\u6548\uFF0C
\u5728Sentine\u96C6\u7FA4\u4E2D\u5FC5\u987B\u81F3\u5C112\u4E2ASentine\u540C\u610F\u624D\u884C\uFF0C\u53EA\u8981\u8BE5\u6570\u91CF\u4E0D\u8FBE\u6807\uFF0C\u5219\u5C31\u4E0D\u4F1A\u53D1\u751F\u6545\u969C\u8FC1\u79FB\u3002

2\uFF09sentinel down-after-milliseconds mymaster 30000
\u8868\u793Amaster\u88AB\u5F53\u524Dsentinel\u5B9E\u4F8B\u8BA4\u5B9A\u4E3A\u5931\u6548\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u5728\u8FD9\u6BB5\u65F6\u95F4\u5185\u4E00\u76F4\u6CA1\u6709\u7ED9Sentine\u8FD4\u56DE\u6709\u6548\u4FE1\u606F\uFF0C\u5219\u8BA4\u5B9A\u8BE5master\u4E3B\u89C2\u4E0B\u7EBF\u3002
\u53EA\u6709\u5728\u8DB3\u591F\u6570\u91CF\u7684 Sentinel \u90FD\u5C06\u4E00\u4E2A\u670D\u52A1\u5668\u6807\u8BB0\u4E3A\u4E3B\u89C2\u4E0B\u7EBF\u4E4B\u540E\uFF0C \u670D\u52A1\u5668\u624D\u4F1A\u88AB\u6807\u8BB0\u4E3A\u5BA2\u89C2\u4E0B\u7EBF\uFF0C\u5C06\u670D\u52A1\u5668\u6807\u8BB0\u4E3A\u5BA2\u89C2\u4E0B\u7EBF\u6240\u9700\u7684 Sentinel \u6570\u91CF\u7531\u5BF9\u4E3B\u670D\u52A1\u5668\u7684\u914D\u7F6E\u51B3\u5B9A\u3002

3\uFF09sentinel parallel-syncs mymaster 2
\u5F53\u5728\u6267\u884C\u6545\u969C\u8F6C\u79FB\u65F6\uFF0C\u8BBE\u7F6E\u51E0\u4E2Aslave\u540C\u65F6\u8FDB\u884C\u5207\u6362master\uFF0C\u8BE5\u503C\u8D8A\u5927\uFF0C\u5219\u53EF\u80FD\u5C31\u6709\u8D8A\u591A\u7684slave\u5728\u5207\u6362master\u65F6\u4E0D\u53EF\u7528\uFF0C\u53EF\u4EE5\u5C06\u8BE5\u503C\u8BBE\u7F6E\u4E3A1\uFF0C\u5373\u4E00\u4E2A\u4E00\u4E2A\u6765\uFF0C\u8FD9\u6837\u5728\u67D0\u4E2A
slave\u8FDB\u884C\u5207\u6362master\u540C\u6B65\u6570\u636E\u65F6\uFF0C\u5176\u4F59\u7684slave\u8FD8\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u4EE5\u6B64\u4FDD\u8BC1\u6BCF\u6B21\u53EA\u6709\u4E00\u4E2A\u4ECE\u670D\u52A1\u5668\u5904\u4E8E\u4E0D\u80FD\u5904\u7406\u547D\u4EE4\u8BF7\u6C42\u7684\u72B6\u6001\u3002

4\uFF09sentinel can-failover mymaster yes
\u5728sentinel\u68C0\u6D4B\u5230O_DOWN\u540E\uFF0C\u662F\u5426\u5BF9\u8FD9\u53F0redis\u542F\u52A8failover\u673A\u5236

5\uFF09sentinel auth-pass mymaster 20180408
\u8BBE\u7F6Esentinel\u8FDE\u63A5\u7684master\u548Cslave\u7684\u5BC6\u7801\uFF0C\u8FD9\u4E2A\u9700\u8981\u548Credis.conf\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u7684\u5BC6\u7801\u4E00\u6837

6\uFF09sentinel failover-timeout mymaster 180000
failover\u8FC7\u671F\u65F6\u95F4\uFF0C\u5F53failover\u5F00\u59CB\u540E\uFF0C\u5728\u6B64\u65F6\u95F4\u5185\u4ECD\u7136\u6CA1\u6709\u89E6\u53D1\u4EFB\u4F55failover\u64CD\u4F5C\uFF0C\u5F53\u524Dsentinel\u5C06\u4F1A\u8BA4\u4E3A\u6B64\u6B21failoer\u5931\u8D25\u3002
\u6267\u884C\u6545\u969C\u8FC1\u79FB\u8D85\u65F6\u65F6\u95F4\uFF0C\u5373\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u6CA1\u6709\u5927\u591A\u6570\u7684sentinel \u53CD\u9988master\u4E0B\u7EBF\uFF0C\u8BE5\u6545\u969C\u8FC1\u79FB\u8BA1\u5212\u5219\u5931\u6548

7\uFF09sentinel config-epoch mymaster 0
\u9009\u9879\u6307\u5B9A\u4E86\u5728\u6267\u884C\u6545\u969C\u8F6C\u79FB\u65F6\uFF0C \u6700\u591A\u53EF\u4EE5\u6709\u591A\u5C11\u4E2A\u4ECE\u670D\u52A1\u5668\u540C\u65F6\u5BF9\u65B0\u7684\u4E3B\u670D\u52A1\u5668\u8FDB\u884C\u540C\u6B65\u3002\u8FD9\u4E2A\u6570\u5B57\u8D8A\u5C0F\uFF0C \u5B8C\u6210\u6545\u969C\u8F6C\u79FB\u6240\u9700\u7684\u65F6\u95F4\u5C31\u8D8A\u957F\u3002

8\uFF09sentinel notification-script mymaster /var/redis/notify.sh
\u5F53failover\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A&quot;\u901A\u77E5&quot;\u811A\u672C\u7528\u6765\u544A\u77E5\u5F53\u524D\u96C6\u7FA4\u7684\u60C5\u51B5\u3002

\u811A\u672C\u88AB\u5141\u8BB8\u6267\u884C\u7684\u6700\u5927\u65F6\u95F4\u4E3A60\u79D2\uFF0C\u5982\u679C\u8D85\u65F6\uFF0C\u811A\u672C\u5C06\u4F1A\u88AB\u7EC8\u6B62(KILL)

9\uFF09sentinel leader-epoch mymaster 0
\u540C\u65F6\u4E00\u65F6\u95F4\u6700\u591A0\u4E2Aslave\u53EF\u540C\u65F6\u66F4\u65B0\u914D\u7F6E,\u5EFA\u8BAE\u6570\u5B57\u4E0D\u8981\u592A\u5927,\u4EE5\u514D\u5F71\u54CD\u6B63\u5E38\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u54E8\u5175</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-sentinel redis-sentinel-6379.conf
redis-sentinel redis-sentinel-6380.conf
redis-sentinel redis-sentinel-6381.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E<code>sentinel</code>\u8282\u70B9\u4E5F\u662F\u4E00\u4E2Aredis\u5B9E\u4F8B\uFF0C\u56E0\u800C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u4F7F\u7528<code>redis-cli</code>\u8FDE\u63A5<code>sentinel</code>\u8282\u70B9\uFF1A</p><p>\u8FDE\u4E0A<code>sentinel</code>\u8282\u70B9\u4E4B\u540E\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u67E5\u770B<code>sentinel</code>\u72B6\u6001\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# redis-cli -p 26379
127.0.0.1:26379&gt; info sentinel
# Sentinel
sentinel_masters:1
sentinel_tilt:0
sentinel_running_scripts:0
sentinel_scripts_queue_length:0
sentinel_simulate_failure_flags:0
master0:name=mymaster,status=ok,address=127.0.0.1:6379,slaves=2,sentinels=3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>sentinel</code>\u68C0\u6D4B\u5230\u4E3B\u4ECE\u8282\u70B9\u603B\u5171\u6709\u4E09\u4E2A\uFF0C\u5176\u4E2D\u4E00\u4E2A\u4E3B\u8282\u70B9\uFF0C\u4E24\u4E2A\u4ECE\u8282\u70B9\uFF0C\u5E76\u4E14<code>sentinel</code>\u8282\u70B9\u603B\u5171\u4E5F\u6709\u4E09\u4E2A\u3002\u542F\u52A8\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E3B\u52A8\u4E0B\u7EBF\u4E3B\u8282\u70B9\u6765\u6A21\u62DF<code>sentinel</code>\u7684\u6545\u969C\u8F6C\u79FB\u8FC7\u7A0B\u3002</p><p><strong>\u6CE8\u610F\u70B9</strong></p><p>\u5F53\u5B8C\u6210\u54E8\u5175\u914D\u7F6E\uFF0C\u6574\u4E2A\u96C6\u7FA4\u4E2D\u7684\u5B9E\u4F8B\u6709\u53D8\u5316\u65F6\uFF0C\u4F1A\u53CD\u5E94\u5728\u914D\u7F6E\u6587\u4EF6\u4E0A</p><p>\u9664\u4E86\u53EF\u4EE5redis-cli\u8FDE\u4E0A\u53BB\u770B\u72B6\u6001\u4E4B\u5916\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6539\u53D8\u6765\u67E5\u770B\u96C6\u7FA4\u5173\u7CFB\u72B6\u6001</p><p>\u5728\u914D\u7F6E\u5B8C\u54E8\u5175\u540E\uFF0C\u518D\u770B\u770B\u914D\u7F6E\u6587\u4EF6\u53D8\u5316</p><p>\u6CE8\u610F\u89C2\u5BDFmyid\u548Csentinel known-sentinel mymaster</p><p>\u5982\u679C\u60F3\u4E86\u89E3\u8FC7\u7A0B\uFF0C\u5728log\u4E2D\u6709\u8BE6\u7EC6\u53D8\u5316</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u67E5\u770Bredis-sentinel-6379.conf
port 26379
daemonize yes
logfile &quot;26379.log&quot;
dir &quot;/tmp&quot;
sentinel monitor mymaster 127.0.0.1 6379 2

# Generated by CONFIG REWRITE
protected-mode no
pidfile &quot;/var/run/redis.pid&quot;
user default on nopass ~* &amp;* +@all
sentinel myid 7e74f5731d16a5f7a4cdf3f21632bcaf420ea4e3
sentinel config-epoch mymaster 0
sentinel leader-epoch mymaster 0
sentinel current-epoch 0
sentinel known-replica mymaster 127.0.0.1 6381
sentinel known-replica mymaster 127.0.0.1 6380
sentinel known-sentinel mymaster 127.0.0.1 26381 f609ffc98db177946a304048d120547d060b8f7b
sentinel known-sentinel mymaster 127.0.0.1 26380 bbd61766a5653a430201983483803188c5a564d3

#\u67E5\u770Bredis-sentinel-6380.conf
port 26380
daemonize yes
logfile &quot;26380.log&quot;
dir &quot;/tmp&quot;
sentinel monitor mymaster 127.0.0.1 6379 2

# Generated by CONFIG REWRITE
protected-mode no
pidfile &quot;/var/run/redis.pid&quot;
user default on nopass ~* &amp;* +@all
sentinel myid bbd61766a5653a430201983483803188c5a564d3
sentinel config-epoch mymaster 0
sentinel leader-epoch mymaster 0
sentinel current-epoch 0
sentinel known-replica mymaster 127.0.0.1 6381
sentinel known-replica mymaster 127.0.0.1 6380
sentinel known-sentinel mymaster 127.0.0.1 26381 f609ffc98db177946a304048d120547d060b8f7b
sentinel known-sentinel mymaster 127.0.0.1 26379 7e74f5731d16a5f7a4cdf3f21632bcaf420ea4e3

#\u67E5\u770Bredis-sentinel-6381.conf
port 26381
daemonize yes
logfile &quot;26381.log&quot;
dir &quot;/tmp&quot;
sentinel monitor mymaster 127.0.0.1 6379 2

# Generated by CONFIG REWRITE
protected-mode no
pidfile &quot;/var/run/redis.pid&quot;
user default on nopass ~* &amp;* +@all
sentinel myid f609ffc98db177946a304048d120547d060b8f7b
sentinel config-epoch mymaster 0
sentinel leader-epoch mymaster 0
sentinel current-epoch 0
sentinel known-replica mymaster 127.0.0.1 6380
sentinel known-replica mymaster 127.0.0.1 6381
sentinel known-sentinel mymaster 127.0.0.1 26380 bbd61766a5653a430201983483803188c5a564d3
sentinel known-sentinel mymaster 127.0.0.1 26379 7e74f5731d16a5f7a4cdf3f21632bcaf420ea4e3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-5-\u6A21\u62DF\u6545\u969C\u8F6C\u79FB" tabindex="-1"><a class="header-anchor" href="#_3-5-\u6A21\u62DF\u6545\u969C\u8F6C\u79FB" aria-hidden="true">#</a> <strong>3.5 \u6A21\u62DF\u6545\u969C\u8F6C\u79FB</strong></h1><p>\u4E00\u6B21\u6545\u969C\u8F6C\u79FB\u64CD\u4F5C\u7531\u4EE5\u4E0B\u6B65\u9AA4\u7EC4\u6210\uFF1A</p><ul><li>\u53D1\u73B0\u4E3B\u670D\u52A1\u5668\u5DF2\u7ECF\u8FDB\u5165\u5BA2\u89C2\u4E0B\u7EBF\u72B6\u6001\u3002</li><li>\u5BF9\u6211\u4EEC\u7684\u5F53\u524D\u7EAA\u5143\u8FDB\u884C\u81EA\u589E\uFF0C \u5E76\u5C1D\u8BD5\u5728\u8FD9\u4E2A\u7EAA\u5143\u4E2D\u5F53\u9009\u3002</li><li>\u5982\u679C\u5F53\u9009\u5931\u8D25\uFF0C \u90A3\u4E48\u5728\u8BBE\u5B9A\u7684\u6545\u969C\u8FC1\u79FB\u8D85\u65F6\u65F6\u95F4\u7684\u4E24\u500D\u4E4B\u540E\uFF0C \u91CD\u65B0\u5C1D\u8BD5\u5F53\u9009\u3002\u5982\u679C\u5F53\u9009\u6210\u529F\uFF0C \u90A3\u4E48\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\u3002</li><li>\u9009\u51FA\u4E00\u4E2A\u4ECE\u670D\u52A1\u5668\uFF0C\u5E76\u5C06\u5B83\u5347\u7EA7\u4E3A\u4E3B\u670D\u52A1\u5668\u3002</li><li>\u5411\u88AB\u9009\u4E2D\u7684\u4ECE\u670D\u52A1\u5668\u53D1\u9001 SLAVEOF NO ONE \u547D\u4EE4\uFF0C\u8BA9\u5B83\u8F6C\u53D8\u4E3A\u4E3B\u670D\u52A1\u5668\u3002</li><li>\u901A\u8FC7\u53D1\u5E03\u4E0E\u8BA2\u9605\u529F\u80FD\uFF0C \u5C06\u66F4\u65B0\u540E\u7684\u914D\u7F6E\u4F20\u64AD\u7ED9\u6240\u6709\u5176\u4ED6 Sentinel \uFF0C \u5176\u4ED6 Sentinel \u5BF9\u5B83\u4EEC\u81EA\u5DF1\u7684\u914D\u7F6E\u8FDB\u884C\u66F4\u65B0\u3002</li><li>\u5411\u5DF2\u4E0B\u7EBF\u4E3B\u670D\u52A1\u5668\u7684\u4ECE\u670D\u52A1\u5668\u53D1\u9001 SLAVEOF \u547D\u4EE4\uFF0C \u8BA9\u5B83\u4EEC\u53BB\u590D\u5236\u65B0\u7684\u4E3B\u670D\u52A1\u5668\u3002</li><li>\u5F53\u6240\u6709\u4ECE\u670D\u52A1\u5668\u90FD\u5DF2\u7ECF\u5F00\u59CB\u590D\u5236\u65B0\u7684\u4E3B\u670D\u52A1\u5668\u65F6\uFF0C \u9886\u5934 Sentinel \u7EC8\u6B62\u8FD9\u6B21\u6545\u969C\u8FC1\u79FB\u64CD\u4F5C\u3002</li></ul><p>\u793A\u4F8B\uFF1A</p><p>\u5F53\u524D6379\u662F\u4E3B\uFF0C6380\u548C6381\u4E24\u4E2A\u4ECE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# redis-cli -p 6379
127.0.0.1:6379&gt; info replication
# Replication
role:master
connected_slaves:2
slave0:ip=127.0.0.1,port=6380,state=online,offset=114256,lag=0
slave1:ip=127.0.0.1,port=6381,state=online,offset=114256,lag=1
master_failover_state:no-failover
master_replid:1389bb3b39fbf71c6e6542aa1d666e472b11e4d3
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:114389
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:114389

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>shutdown\u63896379\uFF0C\u67E5\u770B\u8F6C\u79FB\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; shutdown save
not connected&gt;

#\u67E5\u770B6380\uFF0C\u6210\u4E3A\u4E86\u4E3B\uFF0C81\u79F0\u4E3A\u4E86\u4ECE
127.0.0.1:6380&gt; info replication
# Replication
role:master
connected_slaves:1
slave0:ip=127.0.0.1,port=6381,state=online,offset=138121,lag=0
master_failover_state:no-failover
master_replid:be8486d35851985a9af46671eec4dc97355a50b7
master_replid2:1389bb3b39fbf71c6e6542aa1d666e472b11e4d3
master_repl_offset:138121
second_repl_offset:130462
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:138121

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6062\u590D6379\u7684redis\u670D\u52A1\uFF0C\u6062\u590D\u4E4B\u540E\u5E76\u4E0D\u4F1A\u53BB\u62A2\u5360\uFF0C\u800C\u662F\u4F5C\u4E3A\u4ECE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# redis-server redis-master.conf
[root@localhost ~]# redis-cli  -p 6379
127.0.0.1:6379&gt; info replication
# Replication
role:slave
master_host:127.0.0.1
master_port:6380
master_link_status:up
master_last_io_seconds_ago:1
master_sync_in_progress:0
slave_repl_offset:164940
slave_priority:100
slave_read_only:1
replica_announced:1
connected_slaves:0
master_failover_state:no-failover
master_replid:be8486d35851985a9af46671eec4dc97355a50b7
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:164940
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:160221
repl_backlog_histlen:4720

#\u67E5\u770B6379\u7684\u914D\u7F6E\u6587\u4EF6
port 6379
daemonize yes
logfile &quot;6379.log&quot;
dbfilename &quot;dump-6379.rdb&quot;
# Generated by CONFIG REWRITE
pidfile &quot;/var/run/redis.pid&quot;
save 3600 1
save 300 100
save 60 10000
user default on nopass ~* &amp;* +@all
dir &quot;/root&quot;
replicaof 127.0.0.1 6380

#\u518D\u770B\u770B\u4E3B6080\u7684\u72B6\u6001
127.0.0.1:6380&gt; info replication
# Replication
role:master
connected_slaves:2
slave0:ip=127.0.0.1,port=6381,state=online,offset=187837,lag=0
slave1:ip=127.0.0.1,port=6379,state=online,offset=187704,lag=1
master_failover_state:no-failover
master_replid:be8486d35851985a9af46671eec4dc97355a50b7
master_replid2:1389bb3b39fbf71c6e6542aa1d666e472b11e4d3
master_repl_offset:187837
second_repl_offset:130462
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:187837

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-redis-cluster" tabindex="-1"><a class="header-anchor" href="#_4-redis-cluster" aria-hidden="true">#</a> <strong>4.Redis Cluster</strong></h1>`,65),w={href:"https://redis.io/topics/cluster-tutorial",target:"_blank",rel:"noopener noreferrer"},S=i("https://redis.io/topics/cluster-tutorial"),I=l('<h1 id="_4-1-\u96C6\u7FA4\u5206\u7247\u548C\u96C6\u7FA4\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#_4-1-\u96C6\u7FA4\u5206\u7247\u548C\u96C6\u7FA4\u901A\u4FE1" aria-hidden="true">#</a> <strong>4.1 \u96C6\u7FA4\u5206\u7247\u548C\u96C6\u7FA4\u901A\u4FE1</strong></h1><h3 id="_4-1-1-hash-slot" tabindex="-1"><a class="header-anchor" href="#_4-1-1-hash-slot" aria-hidden="true">#</a> <strong>4.1.1 hash slot</strong></h3><p>Redis-cluster\u5F15\u5165\u4E86<strong>\u54C8\u5E0C\u69FD</strong>\u7684\u6982\u5FF5\u3002</p><p>\u4E5F\u5C31\u662F\u5BF9\u96C6\u7FA4\u5206\u7247</p><p>Redis-cluster\u4E2D\u670916384(\u53732\u768414\u6B21\u65B9\uFF09\u4E2A\u54C8\u5E0C\u69FD\uFF0C\u6BCF\u4E2Akey\u901A\u8FC7CRC16\u6821\u9A8C\u540E\u5BF916384\u53D6\u6A21\u6765\u51B3\u5B9A\u653E\u7F6E\u54EA\u4E2A\u69FD\u3002</p><p>Cluster\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u8D1F\u8D23\u4E00\u90E8\u5206hash\u69FD\uFF08hash slot\uFF09\u3002</p><p>\u6BD4\u5982\u96C6\u7FA4\u4E2D\u5B58\u5728\u4E09\u4E2A\u8282\u70B9\uFF0C\u5219\u53EF\u80FD\u5B58\u5728\u7684\u4E00\u79CD\u5206\u914D\u5982\u4E0B\uFF1A</p><ul><li>\u8282\u70B9A\u5305\u542B0\u52305500\u53F7\u54C8\u5E0C\u69FD\uFF1B</li><li>\u8282\u70B9B\u5305\u542B5501\u523011000\u53F7\u54C8\u5E0C\u69FD\uFF1B</li><li>\u8282\u70B9C\u5305\u542B11001 \u5230 16383\u53F7\u54C8\u5E0C\u69FD\u3002</li></ul><p><img src="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914083212image-20210717200519848.png" alt="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914083212image-20210717200519848.png" loading="lazy"></p><h3 id="_4-1-2\u96C6\u7FA4\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#_4-1-2\u96C6\u7FA4\u901A\u4FE1" aria-hidden="true">#</a> <strong>4.1.2\u96C6\u7FA4\u901A\u4FE1</strong></h3><p>\u96C6\u7FA4\u4E2D\u5404\u4E2A\u8282\u70B9\u7684\u4FE1\u606F\u662F\u4E92\u901A\u7684\uFF0C\u8FD9\u79CD\u73B0\u8C61\u7531Gossip\uFF08\u6D41\u8A00\uFF09\u534F\u8BAE\u4EA7\u751F\u3002</p><p>Gossip\u534F\u8BAE\u89C4\u5B9A\u6BCF\u4E2A\u96C6\u7FA4\u8282\u70B9\u4E4B\u95F4\u4E92\u76F8\u4EA4\u6362\u4FE1\u606F\uFF0C\u4F7F\u5176\u80FD\u591F\u5F7C\u6B64\u77E5\u9053\u5BF9\u65B9\u7684\u72B6\u6001\u3002</p><p>\u5728\u901A\u4FE1\u5EFA\u7ACB\u65F6\uFF0C\u96C6\u7FA4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u8282\u70B9\u90FD\u4F1A\u5355\u72EC\u7684\u5F00\u8F9F\u4E00\u4E2ATCP\u901A\u9053\uFF0C\u7528\u4E8E\u4E0E\u5176\u4ED6\u8282\u70B9\u8FDB\u884C\u901A\u4FE1\uFF0C\u8FD9\u4E2A\u901A\u4FE1\u7AEF\u53E3\u4F1A\u5728\u57FA\u7840\u7AEF\u53E3\u4E0A+10000\u3002</p><p>\u901A\u4FE1\u5EFA\u7ACB\u6210\u529F\u540E\uFF0C\u6BCF\u4E2A\u8282\u70B9\u5728\u56FA\u5B9A\u5468\u671F\u5185\u901A\u8FC7\u7279\u5B9A\u89C4\u5219\u9009\u62E9\u8282\u70B9\u6765\u53D1\u9001ping\u6D88\u606F\uFF08\u5FC3\u8DF3\u673A\u5236\uFF09\u3002</p><p>\u5F53\u6536\u5230ping\u6D88\u606F\u7684\u8282\u70B9\u5219\u4F1A\u4F7F\u7528pong\u6D88\u606F\u4F5C\u4E3A\u56DE\u5E94\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u6709\u4E00\u4E2A\u65B0\u8282\u70B9\u52A0\u5165\u540E\uFF0C\u4E00\u77AC\u95F4\u96C6\u7FA4\u4E2D\u6240\u6709\u7684\u5176\u4ED6\u8282\u70B9\u4E5F\u80FD\u591F\u83B7\u53D6\u5230\u8BE5\u4FE1\u606F\u3002</p><p>Gossip\u534F\u8BAE\u7684\u4E3B\u8981\u804C\u8D23\u5C31\u662F\u8FDB\u884C\u96C6\u7FA4\u4E2D\u8282\u70B9\u7684\u4FE1\u606F\u4EA4\u6362\uFF0C\u5E38\u89C1\u7684Gossip\u534F\u8BAE\u6D88\u606F\u6709\u4EE5\u4E0B\u51E0\u70B9\u533A\u5206\uFF1A</p><ul><li>meet\uFF1A\u7528\u4E8E\u901A\u77E5\u65B0\u8282\u70B9\u52A0\u5165\uFF0C\u6D88\u606F\u53D1\u9001\u8005\u901A\u77E5\u63A5\u53D7\u8005\u52A0\u5165\u5230\u5F53\u524D\u96C6\u7FA4</li><li>ping\uFF1A\u96C6\u7FA4\u5185\u6BCF\u4E2A\u8282\u70B9\u4E0E\u5176\u4ED6\u8282\u70B9\u8FDB\u884C\u5FC3\u8DF3\u68C0\u6D4B\u7684\u547D\u4EE4\uFF0C\u7528\u4E8E\u68C0\u6D4B\u5176\u4ED6\u8282\u70B9\u662F\u5426\u5728\u7EBF\uFF0C\u9664\u6B64\u4E4B\u5916\u8FD8\u80FD\u4EA4\u6362\u5176\u4ED6\u989D\u5916\u4FE1\u606F</li><li>pong\uFF1A\u7528\u4E8E\u56DE\u590Dmeet\u4EE5\u53CAping\u4FE1\u606F\uFF0C\u8868\u793A\u5DF2\u6536\u5230\uFF0C\u80FD\u591F\u6B63\u5E38\u901A\u884C\u3002\u6B64\u5916\u8FD8\u80FD\u8FDB\u884C\u7FA4\u53D1\u66F4\u65B0\u8282\u70B9\u72B6\u6001</li><li>fail\uFF1A\u5F53\u5176\u4ED6\u8282\u70B9\u6536\u5230fail\u6D88\u606F\u540E\u7ACB\u9A6C\u628A\u5BF9\u5E94\u8282\u70B9\u66F4\u65B0\u4E3A\u4E0B\u7EBF\u72B6\u6001\uFF0C\u6B64\u65F6\u96C6\u7FA4\u5F00\u59CB\u8FDB\u884C\u6545\u969C\u8F6C\u79FB</li></ul><p><img src="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914084237\u901A\u4FE1.png" alt="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914084237\u901A\u4FE1.png" loading="lazy"></p><h1 id="_4-2-\u8BF7\u6C42\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#_4-2-\u8BF7\u6C42\u91CD\u5B9A\u5411" aria-hidden="true">#</a> <strong>4.2 \u8BF7\u6C42\u91CD\u5B9A\u5411</strong></h1><p>Redis cluster\u91C7\u7528\u53BB\u4E2D\u5FC3\u5316\u7684\u67B6\u6784\uFF0C\u96C6\u7FA4\u7684\u4E3B\u8282\u70B9\u5404\u81EA\u8D1F\u8D23\u4E00\u90E8\u5206\u69FD\uFF0C\u5BA2\u6237\u7AEF\u5982\u4F55\u786E\u5B9Akey\u5230\u5E95\u4F1A\u6620\u5C04\u5230\u54EA\u4E2A\u8282\u70B9\u4E0A\u5462\uFF1F</p><p>\u5728cluster\u6A21\u5F0F\u4E0B\uFF0C<strong>\u8282\u70B9\u5BF9\u8BF7\u6C42\u7684\u5904\u7406\u8FC7\u7A0B</strong>\u5982\u4E0B\uFF1A</p><ul><li>\u68C0\u67E5\u5F53\u524Dkey\u662F\u5426\u5B58\u5728\u5F53\u524DNODE\uFF1F <ul><li>\u901A\u8FC7crc16\uFF08key\uFF09/16384\u8BA1\u7B97\u51FAslot</li><li>\u67E5\u8BE2\u8D1F\u8D23\u8BE5slot\u8D1F\u8D23\u7684\u8282\u70B9\uFF0C\u5F97\u5230\u8282\u70B9\u6307\u9488</li><li>\u8BE5\u6307\u9488\u4E0E\u81EA\u8EAB\u8282\u70B9\u6BD4\u8F83</li></ul></li><li>\u82E5slot\u4E0D\u662F\u7531\u81EA\u8EAB\u8D1F\u8D23\uFF0C\u5219\u8FD4\u56DEMOVED\u91CD\u5B9A\u5411</li><li>\u82E5slot\u7531\u81EA\u8EAB\u8D1F\u8D23\uFF0C\u4E14key\u5728slot\u4E2D\uFF0C\u5219\u8FD4\u56DE\u8BE5key\u5BF9\u5E94\u7ED3\u679C</li><li>\u82E5key\u4E0D\u5B58\u5728\u6B64slot\u4E2D\uFF0C\u68C0\u67E5\u8BE5slot\u662F\u5426\u6B63\u5728\u8FC1\u51FA\uFF08MIGRATING\uFF09\uFF1F</li><li>\u82E5key\u6B63\u5728\u8FC1\u51FA\uFF0C\u8FD4\u56DEASK\u9519\u8BEF\u91CD\u5B9A\u5411\u5BA2\u6237\u7AEF\u5230\u8FC1\u79FB\u7684\u76EE\u7684\u670D\u52A1\u5668\u4E0A</li><li>\u82E5Slot\u672A\u8FC1\u51FA\uFF0C\u68C0\u67E5Slot\u662F\u5426\u5BFC\u5165\u4E2D\uFF1F</li><li>\u82E5Slot\u5BFC\u5165\u4E2D\u4E14\u6709ASKING\u6807\u8BB0\uFF0C\u5219\u76F4\u63A5\u64CD\u4F5C</li><li>\u5426\u5219\u8FD4\u56DEMOVED\u91CD\u5B9A\u5411</li></ul><p><img src="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914083425redis-cluster-3.png" alt="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914083425redis-cluster-3.png" loading="lazy"></p><ul><li>\u69FD\u547D\u4E2D\uFF1A\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C</li><li>\u69FD\u4E0D\u547D\u4E2D\uFF1A\u5373\u5F53\u524D\u952E\u547D\u4EE4\u6240\u8BF7\u6C42\u7684\u952E\u4E0D\u5728\u5F53\u524D\u8BF7\u6C42\u7684\u8282\u70B9\u4E2D\uFF0C\u5219\u5F53\u524D\u8282\u70B9\u4F1A\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u4E00\u4E2AMoved \u91CD\u5B9A\u5411\uFF0C\u5BA2\u6237\u7AEF\u6839\u636EMoved \u91CD\u5B9A\u5411\u6240\u5305\u542B\u7684\u5185\u5BB9\u627E\u5230\u76EE\u6807\u8282\u70B9\uFF0C\u518D\u4E00\u6B21\u53D1\u9001\u547D\u4EE4\u3002</li></ul><p>ASK \u91CD\u5B9A\u5411\uFF1A</p><p>Ask\u91CD\u5B9A\u5411\u53D1\u751F\u4E8E\u96C6\u7FA4\u4F38\u7F29\u65F6\uFF0C\u96C6\u7FA4\u4F38\u7F29\u4F1A\u5BFC\u81F4\u69FD\u8FC1\u79FB\uFF0C\u5F53\u6211\u4EEC\u53BB\u6E90\u8282\u70B9\u8BBF\u95EE\u65F6\uFF0C\u6B64\u65F6\u6570\u636E\u5DF2\u7ECF\u53EF\u80FD\u5DF2\u7ECF\u8FC1\u79FB\u5230\u4E86\u76EE\u6807\u8282\u70B9\uFF0C\u4F7F\u7528Ask\u91CD\u5B9A\u5411\u6765\u89E3\u51B3\u6B64\u79CD\u60C5\u51B5</p><p><img src="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914083513redis-cluster-5.png" alt="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914083513redis-cluster-5.png" loading="lazy"></p><h1 id="_4-3-redis-cluster\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-3-redis-cluster\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> <strong>4.3 redis cluster\u914D\u7F6E\u53C2\u6570</strong></h1>',28),z=i("\u5B98\u65B9\u6587\u6863\u914D\u7F6E\u4F5C\u7528;"),E={href:"https://redis.io/topics/cluster-tutorial",target:"_blank",rel:"noopener noreferrer"},N=i("https://redis.io/topics/cluster-tutorial"),C=l(`<ul><li><p><strong>cluster-enabled<code>&lt;yes/no&gt;</code></strong>\uFF1A\u542F\u7528\u96C6\u7FA4\u6A21\u5F0F</p></li><li><p><strong>cluster-config-file<code>&lt;filename&gt;</code></strong>\uFF1A\u6BCF\u4E2A\u96C6\u7FA4\u8282\u70B9\u7684\u914D\u7F6E\u6587\u4EF6</p><p>\u6CE8\u610F\uFF0C\u5C3D\u7BA1\u8FD9\u4E2A\u9009\u9879\u7684\u540D\u79F0\uFF0C\u8FD9\u4E0D\u662F\u4E00\u4E2A\u7528\u6237\u53EF\u7F16\u8F91\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u800C\u662F\u4E00\u4E2ARedis Cluster\u8282\u70B9\u5728\u6BCF\u6B21\u6709\u53D8\u5316\u65F6\u81EA\u52A8\u6301\u4E45\u5316\u96C6\u7FA4\u914D\u7F6E\uFF08\u72B6\u6001\uFF0C\u57FA\u672C\u4E0A\uFF09\u7684\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u80FD\u591F\u5728\u542F\u52A8\u65F6\u91CD\u65B0\u8BFB\u53D6\u5B83\u3002\u8BE5\u6587\u4EF6\u5217\u51FA\u4E86\u96C6\u7FA4\u4E2D\u7684\u5176\u4ED6\u8282\u70B9\u3001\u5B83\u4EEC\u7684\u72B6\u6001\u3001\u6301\u4E45\u53D8\u91CF\u7B49\u5185\u5BB9\u3002\u7531\u4E8E\u67D0\u4E9B\u6D88\u606F\u63A5\u6536\uFF0C\u6B64\u6587\u4EF6\u901A\u5E38\u4F1A\u88AB\u91CD\u5199\u5E76\u5237\u65B0\u5230\u78C1\u76D8\u4E0A\u3002</p></li><li><p><strong>cluster-node-timeout<code>&lt;milliseconds&gt;</code></strong>\uFF1ARedis \u96C6\u7FA4\u8282\u70B9\u4E0D\u53EF\u7528\u7684\u6700\u957F\u65F6\u95F4\uFF0C\u800C\u4E0D\u88AB\u89C6\u4E3A\u5931\u8D25\u3002\u5982\u679C\u4E3B\u8282\u70B9\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u5185\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u5B83\u5C06\u7531\u5176\u4ECE\u5C5E\u8282\u70B9\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u3002\u8BE5\u53C2\u6570\u63A7\u5236Redis Cluster\u4E2D\u7684\u5176\u4ED6\u91CD\u8981\u4E8B\u9879\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u5185\u65E0\u6CD5\u8BBF\u95EE\u5927\u591A\u6570\u4E3B\u8282\u70B9\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5C06\u505C\u6B62\u63A5\u53D7\u67E5\u8BE2\u3002</p></li><li><p><strong>cluster-slave-validity-factor<code>&lt;factor&gt;</code></strong>\uFF1A\u5982\u679C\u8BBE\u7F6E\u4E3A\u96F6\uFF0C\u5219\u4ECE\u7AD9\u5C06\u59CB\u7EC8\u8BA4\u4E3A\u81EA\u5DF1\u6709\u6548\uFF0C\u56E0\u6B64\u5C06\u59CB\u7EC8\u5C1D\u8BD5\u5BF9\u4E3B\u7AD9\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\uFF0C\u65E0\u8BBA\u4E3B\u7AD9\u548C\u4ECE\u7AD9\u4E4B\u95F4\u7684\u94FE\u63A5\u4FDD\u6301\u65AD\u5F00\u8FDE\u63A5\u7684\u65F6\u95F4\u957F\u77ED\u3002\u5982\u679C\u503C\u4E3A\u6B63\uFF0C\u5219\u8BA1\u7B97\u6700\u5927\u65AD\u5F00\u65F6\u95F4\u4E3A<em>\u8282\u70B9\u8D85\u65F6</em>\u503C\u4E58\u4EE5\u6B64\u9009\u9879\u63D0\u4F9B\u7684\u7CFB\u6570\uFF0C\u5982\u679C\u8282\u70B9\u662F\u4ECE\u8282\u70B9\uFF0C\u5982\u679C\u4E3B\u94FE\u63A5\u65AD\u5F00\u7684\u65F6\u95F4\u8D85\u8FC7\u6307\u5B9A\u7684\u65F6\u95F4\uFF0C\u5B83\u5C06\u4E0D\u4F1A\u5C1D\u8BD5\u542F\u52A8\u6545\u969C\u8F6C\u79FB\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u8282\u70B9\u8D85\u65F6\u8BBE\u7F6E\u4E3A 5 \u79D2\uFF0C\u5E76\u4E14\u6709\u6548\u6027\u56E0\u5B50\u8BBE\u7F6E\u4E3A 10\uFF0C\u5219\u4ECE\u7AD9\u4E0E\u4E3B\u7AD9\u65AD\u5F00\u8FDE\u63A5\u8D85\u8FC7 50 \u79D2\u7684\u4ECE\u7AD9\u5C06\u4E0D\u4F1A\u5C1D\u8BD5\u5BF9\u5176\u4E3B\u7AD9\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u3002\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u6CA1\u6709\u80FD\u591F\u5BF9\u5176\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u7684\u4ECE\u5C5E\u670D\u52A1\u5668\uFF0C\u5219\u4EFB\u4F55\u975E\u96F6\u503C\u90FD\u53EF\u80FD\u5BFC\u81F4 Redis \u96C6\u7FA4\u5728\u4E3B\u670D\u52A1\u5668\u6545\u969C\u540E\u4E0D\u53EF\u7528\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EA\u6709\u5F53\u539F\u59CB\u4E3B\u8282\u70B9\u91CD\u65B0\u52A0\u5165\u96C6\u7FA4\u65F6\uFF0C\u96C6\u7FA4\u624D\u4F1A\u6062\u590D\u53EF\u7528\u3002</p></li><li><p><strong>cluster-migration-barrier<code>&lt;count&gt;</code></strong>\uFF1A\u4E00\u4E2A\u4E3B\u7AD9\u5C06\u4FDD\u6301\u8FDE\u63A5\u7684\u6700\u5C0F\u4ECE\u7AD9\u6570\u91CF\uFF0C\u4EE5\u4FBF\u53E6\u4E00\u4E2A\u4ECE\u7AD9\u8FC1\u79FB\u5230\u4E0D\u518D\u88AB\u4EFB\u4F55\u4ECE\u7AD9\u8986\u76D6\u7684\u4E3B\u7AD9\u3002\u6709\u5173\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u672C\u6559\u7A0B\u4E2D\u6709\u5173\u526F\u672C\u8FC1\u79FB\u7684\u76F8\u5E94\u90E8\u5206\u3002</p></li><li><p><strong>cluster-require-full-coverage<code>&lt;yes/no&gt;</code></strong>\uFF1A\u5982\u679C\u5C06\u5176\u8BBE\u7F6E\u4E3A yes\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4EFB\u4F55\u8282\u70B9\u672A\u8986\u76D6\u4E00\u5B9A\u767E\u5206\u6BD4\u7684\u5BC6\u94A5\u7A7A\u95F4\uFF0C\u5219\u96C6\u7FA4\u5C06\u505C\u6B62\u63A5\u53D7\u5199\u5165\u3002\u5982\u679C\u8BE5\u9009\u9879\u8BBE\u7F6E\u4E3A no\uFF0C\u5373\u4F7F\u53EA\u80FD\u5904\u7406\u6709\u5173\u5BC6\u94A5\u5B50\u96C6\u7684\u8BF7\u6C42\uFF0C\u96C6\u7FA4\u4ECD\u5C06\u63D0\u4F9B\u67E5\u8BE2\u670D\u52A1\u3002</p></li><li><p><strong>cluster-allow-reads-when-down<code>&lt;yes/no&gt;</code></strong>\uFF1A\u5982\u679C\u8BBE\u7F6E\u4E3A no\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u96C6\u7FA4\u88AB\u6807\u8BB0\u4E3A\u5931\u8D25\u65F6\uFF0CRedis \u96C6\u7FA4\u4E2D\u7684\u8282\u70B9\u5C06\u505C\u6B62\u670D\u52A1\u6240\u6709\u6D41\u91CF\uFF0C\u6216\u8005\u5F53\u8282\u70B9\u65E0\u6CD5\u8BBF\u95EE\u65F6\u8FBE\u5230\u6CD5\u5B9A\u4EBA\u6570\u6216\u672A\u8FBE\u5230\u5B8C\u5168\u8986\u76D6\u65F6\u3002\u8FD9\u53EF\u4EE5\u9632\u6B62\u4ECE\u4E0D\u77E5\u9053\u96C6\u7FA4\u4E2D\u7684\u53D8\u5316\u7684\u8282\u70B9\u8BFB\u53D6\u53EF\u80FD\u4E0D\u4E00\u81F4\u7684\u6570\u636E\u3002\u53EF\u4EE5\u5C06\u6B64\u9009\u9879\u8BBE\u7F6E\u4E3A yes \u4EE5\u5141\u8BB8\u5728\u6545\u969C\u72B6\u6001\u671F\u95F4\u4ECE\u8282\u70B9\u8BFB\u53D6\uFF0C\u8FD9\u5BF9\u4E8E\u5E0C\u671B\u4F18\u5148\u8003\u8651\u8BFB\u53D6\u53EF\u7528\u6027\u4F46\u4ECD\u5E0C\u671B\u9632\u6B62\u4E0D\u4E00\u81F4\u5199\u5165\u7684\u5E94\u7528\u7A0B\u5E8F\u975E\u5E38\u6709\u7528\u3002\u5B83\u4E5F\u53EF\u4EE5\u7528\u4E8E\u4F7F\u7528\u53EA\u6709\u4E00\u4E2A\u6216\u4E24\u4E2A\u5206\u7247\u7684 Redis Cluster \u65F6\uFF0C\u56E0\u4E3A\u5B83\u5141\u8BB8\u8282\u70B9\u5728\u4E3B\u8282\u70B9\u53D1\u751F\u6545\u969C\u4F46\u65E0\u6CD5\u81EA\u52A8\u6545\u969C\u8F6C\u79FB\u65F6\u7EE7\u7EED\u63D0\u4F9B\u5199\u5165\u670D\u52A1\u3002</p></li></ul><h1 id="_4-4-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-4-\u914D\u7F6E" aria-hidden="true">#</a> <strong>4.4 \u914D\u7F6E</strong></h1><p>\u8981\u8BA9\u96C6\u7FA4\u6B63\u5E38\u5DE5\u4F5C\u81F3\u5C11\u9700\u89813\u4E2A\u4E3B\u8282\u70B9\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u8981\u521B\u5EFA6\u4E2Aredis\u8282\u70B9\uFF0C\u5176\u4E2D\u4E09\u4E2A\u4E3A\u4E3B\u8282\u70B9\uFF0C\u4E09\u4E2A\u4E3A\u4ECE\u8282\u70B9\u3002\u4E3A\u4E86\u65B9\u4FBF\u6F14\u793A,\u8FD96\u4E2Aredis\u90E8\u7F72\u5728\u540C\u4E00\u53F0\u673A\u5668, \u91C7\u7528\u4E0D\u540C\u7684\u7AEF\u53E3\u53F7(7000 ~ 7005)\u3002</p><p>7000\u30017002\u30017004\u5206\u522B\u4E3A\u4E3B\u4ECE\uFF0C\u5176\u4ED6\u4E09\u4E2A\u4E3A\u4ECE</p><h3 id="_4-4-1-\u51C6\u5907\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-4-1-\u51C6\u5907\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> <strong>4.4.1\xA0\u51C6\u5907\u914D\u7F6E\u6587\u4EF6</strong></h3><p>\u521B\u5EFAredis-7000.conf\uFF0C\u4E00\u76F4\u5230redis-7005.conf\uFF0C6 \u4E2A\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u6700\u5C0F\u5316\u7684\u793A\u4F8B\uFF0C\u5176\u4ED6\u53C2\u6570\u6839\u636E\u5B98\u65B9\u6587\u6863\u914D\u7F6E\u6587\u4EF6\u7684\u53C2\u6570\u8C03\u6574#\u76F4\u63A5\u5C06redis.conf\u590D\u5236\u91CD\u547D\u540D\u8FC7\u6765\uFF0C\u4FEE\u6539\u4E0B\u9762\u8FD9\u4E9B
port 7000
daemonize yes
cluster-enabled yes
cluster-config-file nodes-7000.conf
cluster-node-timeout 5000
pidfile /var/run/redis_7000.pid
logfile &quot;cluster-7000.log&quot;
appendonly yes

#\u5BC6\u7801\u53EF\u4EE5\u4E0D\u914D\u7F6E
requirepass 123456
masterauth 123456
#\u5BF9\u4E8E\u5176\u4F59\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EA\u9700\u8981\u5C06\u5176\u4E2D\u5BF9\u5E94\u9879\u7684\u7AEF\u53E3\u53F7\u548C\u5E26\u6709\u7AEF\u53E3\u53F7\u7684\u6587\u4EF6\u540D\u4FEE\u6539\u4E3A\u5F53\u524D\u8981\u6307\u5B9A\u7684\u7AEF\u53E3\u53F7\u548C\u7AEF\u53E3\u53F7\u7684\u6587\u4EF6\u540D\u5373\u53EF\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-2-\u542F\u52A8\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_4-4-2-\u542F\u52A8\u96C6\u7FA4" aria-hidden="true">#</a> <strong>4.4.2 \u542F\u52A8\u96C6\u7FA4</strong></h3><p><img src="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914081641\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u8FC7\u7A0B.png" alt="https://images.cnblogs.com/cnblogs_com/shipment/1928838/o_210914081641\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u8FC7\u7A0B.png" loading="lazy"></p><p>\u4E3A\u4E86\u89C4\u8303\uFF0C\u653E\u5728\u5404\u81EA\u76EE\u5F55\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /usr/local/redis/cluster-test
cd /usr/local/redis/cluster-test/
mkdir 700{0..5}

#\u5C06\u914D\u7F6E\u6587\u4EF6\u653E\u5728\u5BF9\u5E94\u7684\u76EE\u5F55
[root@localhost cluster-test]# tree.
\u251C\u2500\u2500 7000
\u2502   \u2514\u2500\u2500 cluster-7000.conf
\u251C\u2500\u2500 7001
\u2502   \u2514\u2500\u2500 cluster-7001.conf
\u251C\u2500\u2500 7002
\u2502   \u2514\u2500\u2500 cluster-7002.conf
\u251C\u2500\u2500 7003
\u2502   \u2514\u2500\u2500 cluster-7003.conf
\u251C\u2500\u2500 7004
\u2502   \u2514\u2500\u2500 cluster-7004.conf
\u2514\u2500\u2500 7005
    \u2514\u2500\u2500 cluster-7005.conf

6 directories, 6 files

#\u6839\u636E\u6BCF\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u90FD\u542F\u52A8\u96C6\u7FA4cd 7000
redis-server cluster-7000.conf
.....
redis-server cluster-7005.conf

#\u542F\u52A8\u65F6\uFF0C\u4ECE\u6BCF\u4E2A\u5B9E\u4F8B\u7684\u65E5\u5FD7\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u7531\u4E8E\u6CA1\u6709nodes.conf\u6587\u4EF6\u5B58\u5728\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F1A\u4E3A\u81EA\u5DF1\u5206\u914D\u4E00\u4E2A\u65B0\u7684 ID\u3002267030:M 14 Sep 2021 14:44:54.902 * No cluster configuration found, I&#39;m 7418630a8879f4274bd429820f658f90bc046d95
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-3-\u52A0\u5165\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_4-4-3-\u52A0\u5165\u96C6\u7FA4" aria-hidden="true">#</a> <strong>4.4.3\xA0\u52A0\u5165\u96C6\u7FA4</strong></h3><blockquote><p>redis4\u4EE5\u4E0A\uFF0C\u53EF\u4EE5\u4F7F\u7528--cluster,\u4F8B\u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 \\
127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \\
--cluster-replicas 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u7528\u5B98\u65B9\u7684\u5DE5\u5177</p></blockquote><p>\u8FDE\u63A5\u4E0A\u540E\u4F7F\u7528<code>cluster meet</code>\u547D\u4EE4\u5206\u522B\u8FDE\u63A5\u5176\u4F59\u8282\u70B9\uFF1A</p><p>\u5982\u679C\u8FDE\u4E0D\u4E0A\uFF0C\u4F1Ahandshake - 0 0 0 disconnected\uFF0C\u7136\u540E\u5254\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# redis-cli -p 7000 -a 123456

127.0.0.1:7000&gt; cluster meet 127.0.0.1 7001
OK
.....
127.0.0.1:7000&gt; cluster meet 127.0.0.1 7005
OK

#\u5220\u9664\u8282\u70B9
cluster forget nodeid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDE\u63A5\u597D\u540E\u53EF\u4EE5\u4F7F\u7528<code>cluster nodes</code>\u547D\u4EE4\u67E5\u770B\u5F53\u524D\u96C6\u7FA4\u72B6\u6001\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:7000&gt; cluster nodes
d6dc709b3eb04310fab561c1b9a764a0d7e6955d 127.0.0.1:7001@17001 master - 0 1631602857000 5 connected
ce47ccef790cd5a22dc387edc506fe0066de6b25 127.0.0.1:7002@17002 master - 0 1631602857047 2 connected
54fba3d9266a0c58399d365e8e8eefd979bb1339 127.0.0.1:7004@17004 master - 0 1631602858050 4 connected
e831481f400bd0e3a08cbe3b11d5414e117bc2d4 127.0.0.1:7005@17005 master - 0 1631602857000 0 connected
7418630a8879f4274bd429820f658f90bc046d95 127.0.0.1:7000@17000 myself,master - 0 1631602857000 1 connected
b684c9b7aaaf5e3c84c5e02a7e69eff6d6cc3799 127.0.0.1:7003@17003 master - 0 1631602856042 3 connected

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u914D\u7F6E\u7684\u516D\u4E2A\u8282\u70B9\u90FD\u5DF2\u7ECF\u52A0\u5165\u5230\u4E86\u96C6\u7FA4\u4E2D\uFF0C\u4F46\u662F\u5176\u73B0\u5728\u8FD8\u4E0D\u80FD\u4F7F\u7528\uFF0C\u56E0\u4E3A\u8FD8\u6CA1\u6709\u5C0616384\u4E2A\u69FD\u5206\u914D\u5230\u96C6\u7FA4\u8282\u70B9\u4E2D\u3002</p><h3 id="_4-4-5-\u914D\u7F6E\u4ECE\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-4-5-\u914D\u7F6E\u4ECE\u8282\u70B9" aria-hidden="true">#</a> <strong>4.4.5 \u914D\u7F6E\u4ECE\u8282\u70B9</strong></h3><p>\u8FD9\u91CC\u6211\u4EEC\u5C0616384\u4E2A\u865A\u62DF\u69FD\u4F4D\u5206\u914D\u7ED9\u4E86\u4E09\u4E2A\u8282\u70B9</p><p>\u800C\u5269\u4F59\u7684\u4E09\u4E2A\u8282\u70B9\u6211\u4EEC\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u5C06\u5176\u914D\u7F6E\u4E3A\u8FD9\u4E09\u4E2A\u8282\u70B9\u7684\u4ECE\u8282\u70B9\uFF0C\u4ECE\u800C\u8FBE\u5230\u9AD8\u53EF\u7528\u7684\u76EE\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u6839\u636E\u5269\u4E0B\u7684\u4E09\u4E2A\u8282\u70B9\u7684node_id,\u5C06\u5176\u4F5C\u4E3A\u4ECE\u8282\u70B9
127.0.0.1:7000&gt; cluster nodes
d6dc709b3eb04310fab561c1b9a764a0d7e6955d 127.0.0.1:7001@17001 master - 0 1631604722537 5 connected
ce47ccef790cd5a22dc387edc506fe0066de6b25 127.0.0.1:7002@17002 master - 0 1631604722537 2 connected 5462-10922
54fba3d9266a0c58399d365e8e8eefd979bb1339 127.0.0.1:7004@17004 master - 0 1631604722000 4 connected 10923-16383
e831481f400bd0e3a08cbe3b11d5414e117bc2d4 127.0.0.1:7005@17005 master - 0 1631604722000 0 connected
7418630a8879f4274bd429820f658f90bc046d95 127.0.0.1:7000@17000 myself,master - 0 1631604721000 1 connected 0-5461
b684c9b7aaaf5e3c84c5e02a7e69eff6d6cc3799 127.0.0.1:7003@17003 master - 0 1631604723000 3 connected

#\u5F97\u5230\u8FD9\u4E09\u4E2A\u4E3B\u7684id
7000\uFF1A 7418630a8879f4274bd429820f658f90bc046d95
7002\uFF1A ce47ccef790cd5a22dc387edc506fe0066de6b25
7004;  54fba3d9266a0c58399d365e8e8eefd979bb1339

#\u5206\u522B\u767B\u9646\u4E09\u4E2A\u4ECE\uFF0C\u5C06\u4ED6\u4EEC\u914D\u7F6E\u4E3A\u5176\u4ED6\u4E09\u4E2A\u7684\u526F\u672C
127.0.0.1:7001&gt; cluster replicate 7418630a8879f4274bd429820f658f90bc046d95
OK
127.0.0.1:7003&gt; cluster replicate ce47ccef790cd5a22dc387edc506fe0066de6b25
OK
127.0.0.1:7005&gt; cluster replicate 54fba3d9266a0c58399d365e8e8eefd979bb1339
OK

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:7000&gt; cluster nodes
d6dc709b3eb04310fab561c1b9a764a0d7e6955d 127.0.0.1:7001@17001 slave 7418630a8879f4274bd429820f658f90bc046d95 0 1631605476000 1 connected
ce47ccef790cd5a22dc387edc506fe0066de6b25 127.0.0.1:7002@17002 master - 0 1631605476000 2 connected 5462-10922
54fba3d9266a0c58399d365e8e8eefd979bb1339 127.0.0.1:7004@17004 master - 0 1631605476543 4 connected 10923-16383
e831481f400bd0e3a08cbe3b11d5414e117bc2d4 127.0.0.1:7005@17005 slave 54fba3d9266a0c58399d365e8e8eefd979bb1339 0 1631605475539 4 connected
7418630a8879f4274bd429820f658f90bc046d95 127.0.0.1:7000@17000 myself,master - 0 1631605476000 1 connected 0-5461
b684c9b7aaaf5e3c84c5e02a7e69eff6d6cc3799 127.0.0.1:7003@17003 slave ce47ccef790cd5a22dc387edc506fe0066de6b25 0 1631605476845 2 connected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-6-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-4-6-\u6D4B\u8BD5" aria-hidden="true">#</a> <strong>4.4.6 \u6D4B\u8BD5</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
127.0.0.1:7000&gt; set hello world
OK
127.0.0.1:7000&gt; get hello
&quot;world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F<strong>\u8FDE\u63A5\u96C6\u7FA4\u6A21\u5F0F\u7684redis\u5B9E\u4F8B\u65F6\u9700\u8981\u52A0\u4E0A\u53C2\u6570<code>-c</code></strong>\uFF0C\u8868\u793A\u8FDE\u63A5\u7684\u662F\u96C6\u7FA4\u6A21\u5F0F\u7684\u5B9E\u4F8B\u3002\u8FDE\u63A5\u4E0A\u540E\u6267\u884C<code>get</code>\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
redis-cli -c -p 7001 -a 123456
127.0.0.1:7001&gt; get hello
-&gt; Redirected to slot [866] located at 127.0.0.1:7000
&quot;world&quot;

redis-cli -c -p 7003 -a 123456
127.0.0.1:7003&gt; keys *
(empty array)
127.0.0.1:7003&gt; get hello
-&gt; Redirected to slot [866] located at 127.0.0.1:7000
&quot;world&quot;
127.0.0.1:7000&gt;

redis-cli -c -p 7004 -a 123456
127.0.0.1:7004&gt; get foor
-&gt; Redirected to slot [3280] located at 127.0.0.1:7000
(nil)
127.0.0.1:7000&gt; get hello
&quot;world&quot;
127.0.0.1:7000&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728cluster\u7684\u5B9E\u4F8B\u4E0A\u6267\u884C<code>get</code>\u547D\u4EE4\u65F6\uFF0C\u5176\u9996\u5148\u4F1A\u4E3A\u5F53\u524D\u7684\u952E\u901A\u8FC7\u4E00\u81F4\u54C8\u5E0C\u7B97\u6CD5\u8BA1\u7B97\u5176\u6240\u5728\u7684\u69FD\u4F4D\uFF0C\u5E76\u4E14\u5224\u65AD\u8BE5\u69FD\u4F4D\u4E0D\u5728\u5F53\u524Dredis\u5B9E\u4F8B\u4E2D\uFF0C\u56E0\u800C\u91CD\u5B9A\u5411\u5230\u76EE\u6807\u5B9E\u4F8B\u4E0A\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u6700\u540E\u53D1\u73B0\u6CA1\u6709\u8BE5\u952E\u5BF9\u5E94\u7684\u503C\uFF0C\u56E0\u800C\u8FD4\u56DE\u4E86\u4E00\u4E2A\uFF08nil\uFF09\u3002</p><h3 id="_4-4-7-\u5E38\u7528\u547D\u4EE4\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-4-7-\u5E38\u7528\u547D\u4EE4\u53CA\u914D\u7F6E" aria-hidden="true">#</a> <strong>4.4.7 \u5E38\u7528\u547D\u4EE4\u53CA\u914D\u7F6E</strong></h3><p><strong>Cluster\u914D\u7F6E\uFF1A</strong></p><ol><li><p>\u662F\u5426\u542F\u7528cluster\uFF0C\u52A0\u5165cluster\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster-enabled yes|no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>cluster\u914D\u7F6E\u6587\u4EF6\u540D\uFF0C\u8BE5\u6587\u4EF6\u5C5E\u4E8E\u81EA\u52A8\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u5FEB\u901F\u67E5\u627E\u6587\u4EF6\u5E76\u67E5\u8BE2\u6587\u4EF6\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster-config-file filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8282\u70B9\u670D\u52A1\u54CD\u5E94\u8D85\u65F6\u65F6\u95F4\uFF0C\u7528\u4E8E\u5224\u5B9A\u8BE5\u8282\u70B9\u662F\u5426\u4E0B\u7EBF\u6216\u5207\u6362\u4E3A\u4ECE\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster-node-timeout milliseconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>master\u8FDE\u63A5\u7684slave\u6700\u5C0F\u6570\u91CF</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster-migration-barrier min_slave_number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Cluster\u8282\u70B9\u64CD\u4F5C\u547D\u4EE4:</strong></p><ol><li><p>\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u66F4\u6539slave\u6307\u5411\u65B0\u7684master</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster replicate master-id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u53D1\u73B0\u4E00\u4E2A\u65B0\u8282\u70B9\uFF0C\u65B0\u589Emaster</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster meet ip:port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5FFD\u7565\u4E00\u4E2A\u6CA1\u6709solt\u7684\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster forget server_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u624B\u52A8\u6545\u969C\u8F6C\u79FB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cluster failover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p><strong>redis-cli\u547D\u4EE4</strong></p><ol><li><p>\u521B\u5EFA\u96C6\u7FA4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli \u2013-cluster create masterhost1:masterport1 masterhost2:masterport2masterhost3:masterport3 [masterhostn:masterportn \u2026] slavehost1:slaveport1slavehost2:slaveport2 slavehost3:slaveport3 \u2013\u2013cluster-replicas n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>master\u4E0Eslave\u7684\u6570\u91CF\u8981\u5339\u914D\uFF0C\u4E00\u4E2Amaster\u5BF9\u5E94n\u4E2Aslave\uFF0C\u7531\u6700\u540E\u7684\u53C2\u6570n\u51B3\u5B9A</p><p>master\u4E0Eslave\u7684\u5339\u914D\u987A\u5E8F\u4E3A\u7B2C\u4E00\u4E2Amaster\u4E0E\u524Dn\u4E2Aslave\u5206\u4E3A\u4E00\u7EC4\uFF0C\u5F62\u6210\u4E3B\u4ECE\u7ED3\u6784</p></li><li><p>\u6DFB\u52A0master\u5230\u5F53\u524D\u96C6\u7FA4\u4E2D\uFF0C\u8FDE\u63A5\u65F6\u53EF\u4EE5\u6307\u5B9A\u4EFB\u610F\u73B0\u6709\u8282\u70B9\u5730\u5740\u4E0E\u7AEF\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster add-node new-master-host:new-master-port now-host:now-port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6DFB\u52A0slave</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster add-node new-slave-host:new-slave-portmaster-host:master-port --cluster-slave --cluster-master-id masterid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5220\u9664\u8282\u70B9\uFF0C\u5982\u679C\u5220\u9664\u7684\u8282\u70B9\u662Fmaster\uFF0C\u5FC5\u987B\u4FDD\u969C\u5176\u4E2D\u6CA1\u6709\u69FDslot</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster del-node del-slave-host:del-slave-port del-slave-id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u91CD\u65B0\u5206\u69FD\uFF0C\u5206\u69FD\u662F\u4ECE\u5177\u6709\u69FD\u7684master\u4E2D\u5212\u5206\u4E00\u90E8\u5206\u7ED9\u5176\u4ED6master\uFF0C\u8FC7\u7A0B\u4E2D\u4E0D\u521B\u5EFA\u65B0\u7684\u69FD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster reshard new-master-host:new-master:port --cluster-from srcmaster-id1, src-master-id2, src-master-idn --cluster-to target-master-id --cluster-slots slots
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>\u5C06\u9700\u8981\u53C2\u4E0E\u5206\u69FD\u7684\u6240\u6709masterid\u4E0D\u5206\u5148\u540E\u987A\u5E8F\u6DFB\u52A0\u5230\u53C2\u6570\u4E2D\uFF0C\u4F7F\u7528\uFF0C\u5206\u9694\u6307\u5B9A\u76EE\u6807\u5F97\u5230\u7684\u69FD\u7684\u6570\u91CF\uFF0C\u6240\u6709\u7684\u69FD\u5C06\u5E73\u5747\u4ECE\u6BCF\u4E2A\u6765\u6E90\u7684master\u5904\u83B7\u53D6</p><ol><li><p>\u91CD\u65B0\u5206\u914D\u69FD\uFF0C\u4ECE\u5177\u6709\u69FD\u7684master\u4E2D\u5206\u914D\u6307\u5B9A\u6570\u91CF\u7684\u69FD\u5230\u53E6\u4E00\u4E2Amaster\u4E2D\uFF0C\u5E38\u7528\u4E8E\u6E05\u7A7A\u6307\u5B9Amaster\u4E2D\u7684\u69FD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster reshard src-master-host:src-master-port --cluster-from srcmaster-id --cluster-to target-master-id --cluster-slots slots --cluster-yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,40);function O(A,G){const n=t("ExternalLinkIcon");return r(),a("div",null,[v,e("p",null,[o,e("a",m,[u,s(n)])]),e("p",null,[b,e("a",p,[g,s(n)])]),h,e("p",null,[e("a",f,[_,s(n)])]),x,e("p",null,[y,e("a",q,[k,s(n)])]),R,e("p",null,[e("a",w,[S,s(n)])]),I,e("p",null,[z,e("a",E,[N,s(n)])]),C])}var T=d(c,[["render",O],["__file","redis-highAvailability-combat.html.vue"]]);export{T as default};
