import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as e,e as s}from"./app.ccf59730.js";const l={},d=s(`<p>\u975E\u5E38\u4E0D\u9519\u7684\u603B\u7ED3\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u4FDD\u5B58\u4E0B\u6765\uFF0C\u9700\u8981\u7684\u65F6\u5019\u770B\u4E00\u770B\u3002</p><h3 id="\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* Windows\u670D\u52A1 */
-- \u542F\u52A8MySQL
    net start mysql
-- \u521B\u5EFAWindows\u670D\u52A1
    sc create mysql binPath= mysqld_bin_path(\u6CE8\u610F\uFF1A\u7B49\u53F7\u4E0E\u503C\u4E4B\u95F4\u6709\u7A7A\u683C)
/* \u8FDE\u63A5\u4E0E\u65AD\u5F00\u670D\u52A1\u5668 */
mysql -u \u5730\u5740 -P \u7AEF\u53E3 -u \u7528\u6237\u540D -p \u5BC6\u7801
SHOW PROCESSLIST -- \u663E\u793A\u54EA\u4E9B\u7EBF\u7A0B\u6B63\u5728\u8FD0\u884C
SHOW VARIABLES -- \u663E\u793A\u7CFB\u7EDF\u53D8\u91CF\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u5E93\u64CD\u4F5C</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u6570\u636E\u5E93\u64CD\u4F5C */ ------------------
-- \u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93
    SELECT DATABASE();
-- \u663E\u793A\u5F53\u524D\u65F6\u95F4\u3001\u7528\u6237\u540D\u3001\u6570\u636E\u5E93\u7248\u672C
    SELECT now(), user(), version();
-- \u521B\u5EFA\u5E93
    CREATE DATABASE[ IF NOT EXISTS] \u6570\u636E\u5E93\u540D \u6570\u636E\u5E93\u9009\u9879
    \u6570\u636E\u5E93\u9009\u9879\uFF1A
        CHARACTER SET charset_name
        COLLATE collation_name
-- \u67E5\u770B\u5DF2\u6709\u5E93
    SHOW DATABASES[ LIKE &#39;PATTERN&#39;]
-- \u67E5\u770B\u5F53\u524D\u5E93\u4FE1\u606F
    SHOW CREATE DATABASE \u6570\u636E\u5E93\u540D
-- \u4FEE\u6539\u5E93\u7684\u9009\u9879\u4FE1\u606F
    ALTER DATABASE \u5E93\u540D \u9009\u9879\u4FE1\u606F
-- \u5220\u9664\u5E93
    DROP DATABASE[ IF EXISTS] \u6570\u636E\u5E93\u540D
        \u540C\u65F6\u5220\u9664\u8BE5\u6570\u636E\u5E93\u76F8\u5173\u7684\u76EE\u5F55\u53CA\u5176\u76EE\u5F55\u5185\u5BB9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8868\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8868\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u8868\u7684\u64CD\u4F5C</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u521B\u5EFA\u8868
    CREATE [TEMPORARY] TABLE[ IF NOT EXISTS] [\u5E93\u540D.]\u8868\u540D ( \u8868\u7684\u7ED3\u6784\u5B9A\u4E49 )[ \u8868\u9009\u9879]
        \u6BCF\u4E2A\u5B57\u6BB5\u5FC5\u987B\u6709\u6570\u636E\u7C7B\u578B
        \u6700\u540E\u4E00\u4E2A\u5B57\u6BB5\u540E\u4E0D\u80FD\u6709\u9017\u53F7
        TEMPORARY \u4E34\u65F6\u8868\uFF0C\u4F1A\u8BDD\u7ED3\u675F\u65F6\u8868\u81EA\u52A8\u6D88\u5931
        \u5BF9\u4E8E\u5B57\u6BB5\u7684\u5B9A\u4E49\uFF1A
            \u5B57\u6BB5\u540D \u6570\u636E\u7C7B\u578B [NOT NULL | NULL] [DEFAULT default_value] [AUTO_INCREMENT] [UNIQUE [KEY] | [PRIMARY] KEY] [COMMENT &#39;string&#39;]
-- \u8868\u9009\u9879
    -- \u5B57\u7B26\u96C6
        CHARSET = charset_name
        \u5982\u679C\u8868\u6CA1\u6709\u8BBE\u5B9A\uFF0C\u5219\u4F7F\u7528\u6570\u636E\u5E93\u5B57\u7B26\u96C6
    -- \u5B58\u50A8\u5F15\u64CE
        ENGINE = engine_name
        \u8868\u5728\u7BA1\u7406\u6570\u636E\u65F6\u91C7\u7528\u7684\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u7ED3\u6784\u4E0D\u540C\u4F1A\u5BFC\u81F4\u5904\u7406\u65B9\u5F0F\u3001\u63D0\u4F9B\u7684\u7279\u6027\u64CD\u4F5C\u7B49\u4E0D\u540C
        \u5E38\u89C1\u7684\u5F15\u64CE\uFF1AInnoDB MyISAM Memory/Heap BDB Merge Example CSV MaxDB Archive
        \u4E0D\u540C\u7684\u5F15\u64CE\u5728\u4FDD\u5B58\u8868\u7684\u7ED3\u6784\u548C\u6570\u636E\u65F6\u91C7\u7528\u4E0D\u540C\u7684\u65B9\u5F0F
        MyISAM\u8868\u6587\u4EF6\u542B\u4E49\uFF1A.frm\u8868\u5B9A\u4E49\uFF0C.MYD\u8868\u6570\u636E\uFF0C.MYI\u8868\u7D22\u5F15
        InnoDB\u8868\u6587\u4EF6\u542B\u4E49\uFF1A.frm\u8868\u5B9A\u4E49\uFF0C\u8868\u7A7A\u95F4\u6570\u636E\u548C\u65E5\u5FD7\u6587\u4EF6
        SHOW ENGINES -- \u663E\u793A\u5B58\u50A8\u5F15\u64CE\u7684\u72B6\u6001\u4FE1\u606F
        SHOW ENGINE \u5F15\u64CE\u540D {LOGS|STATUS} -- \u663E\u793A\u5B58\u50A8\u5F15\u64CE\u7684\u65E5\u5FD7\u6216\u72B6\u6001\u4FE1\u606F
    -- \u81EA\u589E\u8D77\u59CB\u6570
    	AUTO_INCREMENT = \u884C\u6570
    -- \u6570\u636E\u6587\u4EF6\u76EE\u5F55
        DATA DIRECTORY = &#39;\u76EE\u5F55&#39;
    -- \u7D22\u5F15\u6587\u4EF6\u76EE\u5F55
        INDEX DIRECTORY = &#39;\u76EE\u5F55&#39;
    -- \u8868\u6CE8\u91CA
        COMMENT = &#39;string&#39;
    -- \u5206\u533A\u9009\u9879
        PARTITION BY ... (\u8BE6\u7EC6\u89C1\u624B\u518C)
-- \u67E5\u770B\u6240\u6709\u8868
    SHOW TABLES[ LIKE &#39;pattern&#39;]
    SHOW TABLES FROM  \u5E93\u540D
-- \u67E5\u770B\u8868\u7ED3\u6784
    SHOW CREATE TABLE \u8868\u540D \uFF08\u4FE1\u606F\u66F4\u8BE6\u7EC6\uFF09
    DESC \u8868\u540D / DESCRIBE \u8868\u540D / EXPLAIN \u8868\u540D / SHOW COLUMNS FROM \u8868\u540D [LIKE &#39;PATTERN&#39;]
    SHOW TABLE STATUS [FROM db_name] [LIKE &#39;pattern&#39;]
-- \u4FEE\u6539\u8868
    -- \u4FEE\u6539\u8868\u672C\u8EAB\u7684\u9009\u9879
        ALTER TABLE \u8868\u540D \u8868\u7684\u9009\u9879
        eg: ALTER TABLE \u8868\u540D ENGINE=MYISAM;
    -- \u5BF9\u8868\u8FDB\u884C\u91CD\u547D\u540D
        RENAME TABLE \u539F\u8868\u540D TO \u65B0\u8868\u540D
        RENAME TABLE \u539F\u8868\u540D TO \u5E93\u540D.\u8868\u540D \uFF08\u53EF\u5C06\u8868\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u6570\u636E\u5E93\uFF09
        -- RENAME\u53EF\u4EE5\u4EA4\u6362\u4E24\u4E2A\u8868\u540D
    -- \u4FEE\u6539\u8868\u7684\u5B57\u6BB5\u673A\u6784\uFF0813.1.2. ALTER TABLE\u8BED\u6CD5\uFF09
        ALTER TABLE \u8868\u540D \u64CD\u4F5C\u540D
        -- \u64CD\u4F5C\u540D
            ADD[ COLUMN] \u5B57\u6BB5\u5B9A\u4E49       -- \u589E\u52A0\u5B57\u6BB5
                AFTER \u5B57\u6BB5\u540D          -- \u8868\u793A\u589E\u52A0\u5728\u8BE5\u5B57\u6BB5\u540D\u540E\u9762
                FIRST               -- \u8868\u793A\u589E\u52A0\u5728\u7B2C\u4E00\u4E2A
            ADD PRIMARY KEY(\u5B57\u6BB5\u540D)   -- \u521B\u5EFA\u4E3B\u952E
            ADD UNIQUE [\u7D22\u5F15\u540D] (\u5B57\u6BB5\u540D)-- \u521B\u5EFA\u552F\u4E00\u7D22\u5F15
            ADD INDEX [\u7D22\u5F15\u540D] (\u5B57\u6BB5\u540D) -- \u521B\u5EFA\u666E\u901A\u7D22\u5F15
            DROP[ COLUMN] \u5B57\u6BB5\u540D      -- \u5220\u9664\u5B57\u6BB5
            MODIFY[ COLUMN] \u5B57\u6BB5\u540D \u5B57\u6BB5\u5C5E\u6027     -- \u652F\u6301\u5BF9\u5B57\u6BB5\u5C5E\u6027\u8FDB\u884C\u4FEE\u6539\uFF0C\u4E0D\u80FD\u4FEE\u6539\u5B57\u6BB5\u540D(\u6240\u6709\u539F\u6709\u5C5E\u6027\u4E5F\u9700\u5199\u4E0A)
            CHANGE[ COLUMN] \u539F\u5B57\u6BB5\u540D \u65B0\u5B57\u6BB5\u540D \u5B57\u6BB5\u5C5E\u6027      -- \u652F\u6301\u5BF9\u5B57\u6BB5\u540D\u4FEE\u6539
            DROP PRIMARY KEY    -- \u5220\u9664\u4E3B\u952E(\u5220\u9664\u4E3B\u952E\u524D\u9700\u5220\u9664\u5176AUTO_INCREMENT\u5C5E\u6027)
            DROP INDEX \u7D22\u5F15\u540D -- \u5220\u9664\u7D22\u5F15
            DROP FOREIGN KEY \u5916\u952E    -- \u5220\u9664\u5916\u952E
-- \u5220\u9664\u8868
    DROP TABLE[ IF EXISTS] \u8868\u540D ...
-- \u6E05\u7A7A\u8868\u6570\u636E
    TRUNCATE [TABLE] \u8868\u540D
-- \u590D\u5236\u8868\u7ED3\u6784
    CREATE TABLE \u8868\u540D LIKE \u8981\u590D\u5236\u7684\u8868\u540D
-- \u590D\u5236\u8868\u7ED3\u6784\u548C\u6570\u636E
    CREATE TABLE \u8868\u540D [AS] SELECT * FROM \u8981\u590D\u5236\u7684\u8868\u540D
-- \u68C0\u67E5\u8868\u662F\u5426\u6709\u9519\u8BEF
    CHECK TABLE tbl_name [, tbl_name] ... [option] ...
-- \u4F18\u5316\u8868
    OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...
-- \u4FEE\u590D\u8868
    REPAIR [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ... [QUICK] [EXTENDED] [USE_FRM]
-- \u5206\u6790\u8868
    ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u64CD\u4F5C</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u6570\u636E\u64CD\u4F5C */ ------------------
-- \u589E
    INSERT [INTO] \u8868\u540D [(\u5B57\u6BB5\u5217\u8868)] VALUES (\u503C\u5217\u8868)[, (\u503C\u5217\u8868), ...]
        -- \u5982\u679C\u8981\u63D2\u5165\u7684\u503C\u5217\u8868\u5305\u542B\u6240\u6709\u5B57\u6BB5\u5E76\u4E14\u987A\u5E8F\u4E00\u81F4\uFF0C\u5219\u53EF\u4EE5\u7701\u7565\u5B57\u6BB5\u5217\u8868\u3002
        -- \u53EF\u540C\u65F6\u63D2\u5165\u591A\u6761\u6570\u636E\u8BB0\u5F55\uFF01
        REPLACE \u4E0E INSERT \u5B8C\u5168\u4E00\u6837\uFF0C\u53EF\u4E92\u6362\u3002
    INSERT [INTO] \u8868\u540D SET \u5B57\u6BB5\u540D=\u503C[, \u5B57\u6BB5\u540D=\u503C, ...]
-- \u67E5
    SELECT \u5B57\u6BB5\u5217\u8868 FROM \u8868\u540D[ \u5176\u4ED6\u5B50\u53E5]
        -- \u53EF\u6765\u81EA\u591A\u4E2A\u8868\u7684\u591A\u4E2A\u5B57\u6BB5
        -- \u5176\u4ED6\u5B50\u53E5\u53EF\u4EE5\u4E0D\u4F7F\u7528
        -- \u5B57\u6BB5\u5217\u8868\u53EF\u4EE5\u7528*\u4EE3\u66FF\uFF0C\u8868\u793A\u6240\u6709\u5B57\u6BB5
-- \u5220
    DELETE FROM \u8868\u540D[ \u5220\u9664\u6761\u4EF6\u5B50\u53E5]
        \u6CA1\u6709\u6761\u4EF6\u5B50\u53E5\uFF0C\u5219\u4F1A\u5220\u9664\u5168\u90E8
-- \u6539
    UPDATE \u8868\u540D SET \u5B57\u6BB5\u540D=\u65B0\u503C[, \u5B57\u6BB5\u540D=\u65B0\u503C] [\u66F4\u65B0\u6761\u4EF6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B57\u7B26\u96C6\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u96C6\u7F16\u7801" aria-hidden="true">#</a> \u5B57\u7B26\u96C6\u7F16\u7801</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u5B57\u7B26\u96C6\u7F16\u7801 */ ------------------
-- MySQL\u3001\u6570\u636E\u5E93\u3001\u8868\u3001\u5B57\u6BB5\u5747\u53EF\u8BBE\u7F6E\u7F16\u7801
-- \u6570\u636E\u7F16\u7801\u4E0E\u5BA2\u6237\u7AEF\u7F16\u7801\u4E0D\u9700\u4E00\u81F4
SHOW VARIABLES LIKE &#39;character_set_%&#39;   -- \u67E5\u770B\u6240\u6709\u5B57\u7B26\u96C6\u7F16\u7801\u9879
    character_set_client        \u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u6570\u636E\u65F6\u4F7F\u7528\u7684\u7F16\u7801
    character_set_results       \u670D\u52A1\u5668\u7AEF\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u6240\u4F7F\u7528\u7684\u7F16\u7801
    character_set_connection    \u8FDE\u63A5\u5C42\u7F16\u7801
SET \u53D8\u91CF\u540D = \u53D8\u91CF\u503C
    SET character_set_client = gbk;
    SET character_set_results = gbk;
    SET character_set_connection = gbk;
SET NAMES GBK;  -- \u76F8\u5F53\u4E8E\u5B8C\u6210\u4EE5\u4E0A\u4E09\u4E2A\u8BBE\u7F6E
-- \u6821\u5BF9\u96C6
    \u6821\u5BF9\u96C6\u7528\u4EE5\u6392\u5E8F
    SHOW CHARACTER SET [LIKE &#39;pattern&#39;]/SHOW CHARSET [LIKE &#39;pattern&#39;]   \u67E5\u770B\u6240\u6709\u5B57\u7B26\u96C6
    SHOW COLLATION [LIKE &#39;pattern&#39;]     \u67E5\u770B\u6240\u6709\u6821\u5BF9\u96C6
    CHARSET \u5B57\u7B26\u96C6\u7F16\u7801     \u8BBE\u7F6E\u5B57\u7B26\u96C6\u7F16\u7801
    COLLATE \u6821\u5BF9\u96C6\u7F16\u7801     \u8BBE\u7F6E\u6821\u5BF9\u96C6\u7F16\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u7C7B\u578B-\u5217\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B-\u5217\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B(\u5217\u7C7B\u578B)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u6570\u636E\u7C7B\u578B\uFF08\u5217\u7C7B\u578B\uFF09 */ ------------------
1. \u6570\u503C\u7C7B\u578B
-- a. \u6574\u578B ----------
    \u7C7B\u578B         \u5B57\u8282     \u8303\u56F4\uFF08\u6709\u7B26\u53F7\u4F4D\uFF09
    tinyint     1\u5B57\u8282    -128 ~ 127      \u65E0\u7B26\u53F7\u4F4D\uFF1A0 ~ 255
    smallint    2\u5B57\u8282    -32768 ~ 32767
    mediumint   3\u5B57\u8282    -8388608 ~ 8388607
    int         4\u5B57\u8282
    bigint      8\u5B57\u8282
    int(M)  M\u8868\u793A\u603B\u4F4D\u6570
    - \u9ED8\u8BA4\u5B58\u5728\u7B26\u53F7\u4F4D\uFF0Cunsigned \u5C5E\u6027\u4FEE\u6539
    - \u663E\u793A\u5BBD\u5EA6\uFF0C\u5982\u679C\u67D0\u4E2A\u6570\u4E0D\u591F\u5B9A\u4E49\u5B57\u6BB5\u65F6\u8BBE\u7F6E\u7684\u4F4D\u6570\uFF0C\u5219\u524D\u9762\u4EE50\u8865\u586B\uFF0Czerofill \u5C5E\u6027\u4FEE\u6539
        \u4F8B\uFF1Aint(5)   \u63D2\u5165\u4E00\u4E2A\u6570&#39;123&#39;\uFF0C\u8865\u586B\u540E\u4E3A&#39;00123&#39;
    - \u5728\u6EE1\u8DB3\u8981\u6C42\u7684\u60C5\u51B5\u4E0B\uFF0C\u8D8A\u5C0F\u8D8A\u597D\u3002
    - 1\u8868\u793Abool\u503C\u771F\uFF0C0\u8868\u793Abool\u503C\u5047\u3002MySQL\u6CA1\u6709\u5E03\u5C14\u7C7B\u578B\uFF0C\u901A\u8FC7\u6574\u578B0\u548C1\u8868\u793A\u3002\u5E38\u7528tinyint(1)\u8868\u793A\u5E03\u5C14\u578B\u3002
-- b. \u6D6E\u70B9\u578B ----------
    \u7C7B\u578B             \u5B57\u8282     \u8303\u56F4
    float(\u5355\u7CBE\u5EA6)     4\u5B57\u8282
    double(\u53CC\u7CBE\u5EA6)    8\u5B57\u8282
    \u6D6E\u70B9\u578B\u65E2\u652F\u6301\u7B26\u53F7\u4F4D unsigned \u5C5E\u6027\uFF0C\u4E5F\u652F\u6301\u663E\u793A\u5BBD\u5EA6 zerofill \u5C5E\u6027\u3002
        \u4E0D\u540C\u4E8E\u6574\u578B\uFF0C\u524D\u540E\u5747\u4F1A\u8865\u586B0.
    \u5B9A\u4E49\u6D6E\u70B9\u578B\u65F6\uFF0C\u9700\u6307\u5B9A\u603B\u4F4D\u6570\u548C\u5C0F\u6570\u4F4D\u6570\u3002
        float(M, D)     double(M, D)
        M\u8868\u793A\u603B\u4F4D\u6570\uFF0CD\u8868\u793A\u5C0F\u6570\u4F4D\u6570\u3002
        M\u548CD\u7684\u5927\u5C0F\u4F1A\u51B3\u5B9A\u6D6E\u70B9\u6570\u7684\u8303\u56F4\u3002\u4E0D\u540C\u4E8E\u6574\u578B\u7684\u56FA\u5B9A\u8303\u56F4\u3002
        M\u65E2\u8868\u793A\u603B\u4F4D\u6570\uFF08\u4E0D\u5305\u62EC\u5C0F\u6570\u70B9\u548C\u6B63\u8D1F\u53F7\uFF09\uFF0C\u4E5F\u8868\u793A\u663E\u793A\u5BBD\u5EA6\uFF08\u6240\u6709\u663E\u793A\u7B26\u53F7\u5747\u5305\u62EC\uFF09\u3002
        \u652F\u6301\u79D1\u5B66\u8BA1\u6570\u6CD5\u8868\u793A\u3002
        \u6D6E\u70B9\u6570\u8868\u793A\u8FD1\u4F3C\u503C\u3002
-- c. \u5B9A\u70B9\u6570 ----------
    decimal -- \u53EF\u53D8\u957F\u5EA6
    decimal(M, D)   M\u4E5F\u8868\u793A\u603B\u4F4D\u6570\uFF0CD\u8868\u793A\u5C0F\u6570\u4F4D\u6570\u3002
    \u4FDD\u5B58\u4E00\u4E2A\u7CBE\u786E\u7684\u6570\u503C\uFF0C\u4E0D\u4F1A\u53D1\u751F\u6570\u636E\u7684\u6539\u53D8\uFF0C\u4E0D\u540C\u4E8E\u6D6E\u70B9\u6570\u7684\u56DB\u820D\u4E94\u5165\u3002
    \u5C06\u6D6E\u70B9\u6570\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u6765\u4FDD\u5B58\uFF0C\u6BCF9\u4F4D\u6570\u5B57\u4FDD\u5B58\u4E3A4\u4E2A\u5B57\u8282\u3002
2. \u5B57\u7B26\u4E32\u7C7B\u578B
-- a. char, varchar ----------
    char    \u5B9A\u957F\u5B57\u7B26\u4E32\uFF0C\u901F\u5EA6\u5FEB\uFF0C\u4F46\u6D6A\u8D39\u7A7A\u95F4
    varchar \u53D8\u957F\u5B57\u7B26\u4E32\uFF0C\u901F\u5EA6\u6162\uFF0C\u4F46\u8282\u7701\u7A7A\u95F4
    M\u8868\u793A\u80FD\u5B58\u50A8\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u6B64\u957F\u5EA6\u662F\u5B57\u7B26\u6570\uFF0C\u975E\u5B57\u8282\u6570\u3002
    \u4E0D\u540C\u7684\u7F16\u7801\uFF0C\u6240\u5360\u7528\u7684\u7A7A\u95F4\u4E0D\u540C\u3002
    char,\u6700\u591A255\u4E2A\u5B57\u7B26\uFF0C\u4E0E\u7F16\u7801\u65E0\u5173\u3002
    varchar,\u6700\u591A65535\u5B57\u7B26\uFF0C\u4E0E\u7F16\u7801\u6709\u5173\u3002
    \u4E00\u6761\u6709\u6548\u8BB0\u5F55\u6700\u5927\u4E0D\u80FD\u8D85\u8FC765535\u4E2A\u5B57\u8282\u3002
        utf8 \u6700\u5927\u4E3A21844\u4E2A\u5B57\u7B26\uFF0Cgbk \u6700\u5927\u4E3A32766\u4E2A\u5B57\u7B26\uFF0Clatin1 \u6700\u5927\u4E3A65532\u4E2A\u5B57\u7B26
    varchar \u662F\u53D8\u957F\u7684\uFF0C\u9700\u8981\u5229\u7528\u5B58\u50A8\u7A7A\u95F4\u4FDD\u5B58 varchar \u7684\u957F\u5EA6\uFF0C\u5982\u679C\u6570\u636E\u5C0F\u4E8E255\u4E2A\u5B57\u8282\uFF0C\u5219\u91C7\u7528\u4E00\u4E2A\u5B57\u8282\u6765\u4FDD\u5B58\u957F\u5EA6\uFF0C\u53CD\u4E4B\u9700\u8981\u4E24\u4E2A\u5B57\u8282\u6765\u4FDD\u5B58\u3002
    varchar \u7684\u6700\u5927\u6709\u6548\u957F\u5EA6\u7531\u6700\u5927\u884C\u5927\u5C0F\u548C\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\u786E\u5B9A\u3002
    \u6700\u5927\u6709\u6548\u957F\u5EA6\u662F65532\u5B57\u8282\uFF0C\u56E0\u4E3A\u5728varchar\u5B58\u5B57\u7B26\u4E32\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u5B57\u8282\u662F\u7A7A\u7684\uFF0C\u4E0D\u5B58\u5728\u4EFB\u4F55\u6570\u636E\uFF0C\u7136\u540E\u8FD8\u9700\u4E24\u4E2A\u5B57\u8282\u6765\u5B58\u653E\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u6240\u4EE5\u6709\u6548\u957F\u5EA6\u662F65535-1-2=65532\u5B57\u8282\u3002
    \u4F8B\uFF1A\u82E5\u4E00\u4E2A\u8868\u5B9A\u4E49\u4E3A CREATE TABLE tb(c1 int, c2 char(30), c3 varchar(N)) charset=utf8; \u95EEN\u7684\u6700\u5927\u503C\u662F\u591A\u5C11\uFF1F \u7B54\uFF1A(65535-1-2-4-30*3)/3
-- b. blob, text ----------
    blob \u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\uFF08\u5B57\u8282\u5B57\u7B26\u4E32\uFF09
        tinyblob, blob, mediumblob, longblob
    text \u975E\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\uFF08\u5B57\u7B26\u5B57\u7B26\u4E32\uFF09
        tinytext, text, mediumtext, longtext
    text \u5728\u5B9A\u4E49\u65F6\uFF0C\u4E0D\u9700\u8981\u5B9A\u4E49\u957F\u5EA6\uFF0C\u4E5F\u4E0D\u4F1A\u8BA1\u7B97\u603B\u957F\u5EA6\u3002
    text \u7C7B\u578B\u5728\u5B9A\u4E49\u65F6\uFF0C\u4E0D\u53EF\u7ED9default\u503C
-- c. binary, varbinary ----------
    \u7C7B\u4F3C\u4E8Echar\u548Cvarchar\uFF0C\u7528\u4E8E\u4FDD\u5B58\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\uFF0C\u4E5F\u5C31\u662F\u4FDD\u5B58\u5B57\u8282\u5B57\u7B26\u4E32\u800C\u975E\u5B57\u7B26\u5B57\u7B26\u4E32\u3002
    char, varchar, text \u5BF9\u5E94 binary, varbinary, blob.
3. \u65E5\u671F\u65F6\u95F4\u7C7B\u578B
    \u4E00\u822C\u7528\u6574\u578B\u4FDD\u5B58\u65F6\u95F4\u6233\uFF0C\u56E0\u4E3APHP\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5C06\u65F6\u95F4\u6233\u8FDB\u884C\u683C\u5F0F\u5316\u3002
    datetime    8\u5B57\u8282    \u65E5\u671F\u53CA\u65F6\u95F4     1000-01-01 00:00:00 \u5230 9999-12-31 23:59:59
    date        3\u5B57\u8282    \u65E5\u671F         1000-01-01 \u5230 9999-12-31
    timestamp   4\u5B57\u8282    \u65F6\u95F4\u6233        19700101000000 \u5230 2038-01-19 03:14:07
    time        3\u5B57\u8282    \u65F6\u95F4         -838:59:59 \u5230 838:59:59
    year        1\u5B57\u8282    \u5E74\u4EFD         1901 - 2155
datetime    YYYY-MM-DD hh:mm:ss
timestamp   YY-MM-DD hh:mm:ss
            YYYYMMDDhhmmss
            YYMMDDhhmmss
            YYYYMMDDhhmmss
            YYMMDDhhmmss
date        YYYY-MM-DD
            YY-MM-DD
            YYYYMMDD
            YYMMDD
            YYYYMMDD
            YYMMDD
time        hh:mm:ss
            hhmmss
            hhmmss
year        YYYY
            YY
            YYYY
            YY
4. \u679A\u4E3E\u548C\u96C6\u5408
-- \u679A\u4E3E(enum) ----------
enum(val1, val2, val3...)
    \u5728\u5DF2\u77E5\u7684\u503C\u4E2D\u8FDB\u884C\u5355\u9009\u3002\u6700\u5927\u6570\u91CF\u4E3A65535.
    \u679A\u4E3E\u503C\u5728\u4FDD\u5B58\u65F6\uFF0C\u4EE52\u4E2A\u5B57\u8282\u7684\u6574\u578B(smallint)\u4FDD\u5B58\u3002\u6BCF\u4E2A\u679A\u4E3E\u503C\uFF0C\u6309\u4FDD\u5B58\u7684\u4F4D\u7F6E\u987A\u5E8F\uFF0C\u4ECE1\u5F00\u59CB\u9010\u4E00\u9012\u589E\u3002
    \u8868\u73B0\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5B58\u50A8\u5374\u662F\u6574\u578B\u3002
    NULL\u503C\u7684\u7D22\u5F15\u662FNULL\u3002
    \u7A7A\u5B57\u7B26\u4E32\u9519\u8BEF\u503C\u7684\u7D22\u5F15\u503C\u662F0\u3002
-- \u96C6\u5408\uFF08set\uFF09 ----------
set(val1, val2, val3...)
    create table tab ( gender set(&#39;\u7537&#39;, &#39;\u5973&#39;, &#39;\u65E0&#39;) );
    insert into tab values (&#39;\u7537, \u5973&#39;);
    \u6700\u591A\u53EF\u4EE5\u670964\u4E2A\u4E0D\u540C\u7684\u6210\u5458\u3002\u4EE5bigint\u5B58\u50A8\uFF0C\u51718\u4E2A\u5B57\u8282\u3002\u91C7\u53D6\u4F4D\u8FD0\u7B97\u7684\u5F62\u5F0F\u3002
    \u5F53\u521B\u5EFA\u8868\u65F6\uFF0CSET\u6210\u5458\u503C\u7684\u5C3E\u90E8\u7A7A\u683C\u5C06\u81EA\u52A8\u88AB\u5220\u9664\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5217\u5C5E\u6027-\u5217\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u5217\u5C5E\u6027-\u5217\u7EA6\u675F" aria-hidden="true">#</a> \u5217\u5C5E\u6027(\u5217\u7EA6\u675F)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u5217\u5C5E\u6027\uFF08\u5217\u7EA6\u675F\uFF09 */ ------------------
1. PRIMARY \u4E3B\u952E
    - \u80FD\u552F\u4E00\u6807\u8BC6\u8BB0\u5F55\u7684\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u4E3B\u952E\u3002
    - \u4E00\u4E2A\u8868\u53EA\u80FD\u6709\u4E00\u4E2A\u4E3B\u952E\u3002
    - \u4E3B\u952E\u5177\u6709\u552F\u4E00\u6027\u3002
    - \u58F0\u660E\u5B57\u6BB5\u65F6\uFF0C\u7528 primary key \u6807\u8BC6\u3002
        \u4E5F\u53EF\u4EE5\u5728\u5B57\u6BB5\u5217\u8868\u4E4B\u540E\u58F0\u660E
            \u4F8B\uFF1Acreate table tab ( id int, stu varchar(10), primary key (id));
    - \u4E3B\u952E\u5B57\u6BB5\u7684\u503C\u4E0D\u80FD\u4E3Anull\u3002
    - \u4E3B\u952E\u53EF\u4EE5\u7531\u591A\u4E2A\u5B57\u6BB5\u5171\u540C\u7EC4\u6210\u3002\u6B64\u65F6\u9700\u8981\u5728\u5B57\u6BB5\u5217\u8868\u540E\u58F0\u660E\u7684\u65B9\u6CD5\u3002
        \u4F8B\uFF1Acreate table tab ( id int, stu varchar(10), age int, primary key (stu, age));
2. UNIQUE \u552F\u4E00\u7D22\u5F15\uFF08\u552F\u4E00\u7EA6\u675F\uFF09
    \u4F7F\u5F97\u67D0\u5B57\u6BB5\u7684\u503C\u4E5F\u4E0D\u80FD\u91CD\u590D\u3002
3. NULL \u7EA6\u675F
    null\u4E0D\u662F\u6570\u636E\u7C7B\u578B\uFF0C\u662F\u5217\u7684\u4E00\u4E2A\u5C5E\u6027\u3002
    \u8868\u793A\u5F53\u524D\u5217\u662F\u5426\u53EF\u4EE5\u4E3Anull\uFF0C\u8868\u793A\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002
    null, \u5141\u8BB8\u4E3A\u7A7A\u3002\u9ED8\u8BA4\u3002
    not null, \u4E0D\u5141\u8BB8\u4E3A\u7A7A\u3002
    insert into tab values (null, &#39;val&#39;);
        -- \u6B64\u65F6\u8868\u793A\u5C06\u7B2C\u4E00\u4E2A\u5B57\u6BB5\u7684\u503C\u8BBE\u4E3Anull, \u53D6\u51B3\u4E8E\u8BE5\u5B57\u6BB5\u662F\u5426\u5141\u8BB8\u4E3Anull
4. DEFAULT \u9ED8\u8BA4\u503C\u5C5E\u6027
    \u5F53\u524D\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C\u3002
    insert into tab values (default, &#39;val&#39;);    -- \u6B64\u65F6\u8868\u793A\u5F3A\u5236\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002
    create table tab ( add_time timestamp default current_timestamp );
        -- \u8868\u793A\u5C06\u5F53\u524D\u65F6\u95F4\u7684\u65F6\u95F4\u6233\u8BBE\u4E3A\u9ED8\u8BA4\u503C\u3002
        current_date, current_time
5. AUTO_INCREMENT \u81EA\u52A8\u589E\u957F\u7EA6\u675F
    \u81EA\u52A8\u589E\u957F\u5FC5\u987B\u4E3A\u7D22\u5F15\uFF08\u4E3B\u952E\u6216unique\uFF09
    \u53EA\u80FD\u5B58\u5728\u4E00\u4E2A\u5B57\u6BB5\u4E3A\u81EA\u52A8\u589E\u957F\u3002
    \u9ED8\u8BA4\u4E3A1\u5F00\u59CB\u81EA\u52A8\u589E\u957F\u3002\u53EF\u4EE5\u901A\u8FC7\u8868\u5C5E\u6027 auto_increment = x\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u6216 alter table tbl auto_increment = x;
6. COMMENT \u6CE8\u91CA
    \u4F8B\uFF1Acreate table tab ( id int ) comment &#39;\u6CE8\u91CA\u5185\u5BB9&#39;;
7. FOREIGN KEY \u5916\u952E\u7EA6\u675F
    \u7528\u4E8E\u9650\u5236\u4E3B\u8868\u4E0E\u4ECE\u8868\u6570\u636E\u5B8C\u6574\u6027\u3002
    alter table t1 add constraint \`t1_t2_fk\` foreign key (t1_id) references t2(id);
        -- \u5C06\u8868t1\u7684t1_id\u5916\u952E\u5173\u8054\u5230\u8868t2\u7684id\u5B57\u6BB5\u3002
        -- \u6BCF\u4E2A\u5916\u952E\u90FD\u6709\u4E00\u4E2A\u540D\u5B57\uFF0C\u53EF\u4EE5\u901A\u8FC7 constraint \u6307\u5B9A
    \u5B58\u5728\u5916\u952E\u7684\u8868\uFF0C\u79F0\u4E4B\u4E3A\u4ECE\u8868\uFF08\u5B50\u8868\uFF09\uFF0C\u5916\u952E\u6307\u5411\u7684\u8868\uFF0C\u79F0\u4E4B\u4E3A\u4E3B\u8868\uFF08\u7236\u8868\uFF09\u3002
    \u4F5C\u7528\uFF1A\u4FDD\u6301\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u5B8C\u6574\u6027\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u63A7\u5236\u5B58\u50A8\u5728\u5916\u952E\u8868\uFF08\u4ECE\u8868\uFF09\u4E2D\u7684\u6570\u636E\u3002
    MySQL\u4E2D\uFF0C\u53EF\u4EE5\u5BF9InnoDB\u5F15\u64CE\u4F7F\u7528\u5916\u952E\u7EA6\u675F\uFF1A
    \u8BED\u6CD5\uFF1A
    foreign key (\u5916\u952E\u5B57\u6BB5\uFF09 references \u4E3B\u8868\u540D (\u5173\u8054\u5B57\u6BB5) [\u4E3B\u8868\u8BB0\u5F55\u5220\u9664\u65F6\u7684\u52A8\u4F5C] [\u4E3B\u8868\u8BB0\u5F55\u66F4\u65B0\u65F6\u7684\u52A8\u4F5C]
    \u6B64\u65F6\u9700\u8981\u68C0\u6D4B\u4E00\u4E2A\u4ECE\u8868\u7684\u5916\u952E\u9700\u8981\u7EA6\u675F\u4E3A\u4E3B\u8868\u7684\u5DF2\u5B58\u5728\u7684\u503C\u3002\u5916\u952E\u5728\u6CA1\u6709\u5173\u8054\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3Anull.\u524D\u63D0\u662F\u8BE5\u5916\u952E\u5217\uFF0C\u6CA1\u6709not null\u3002
    \u53EF\u4EE5\u4E0D\u6307\u5B9A\u4E3B\u8868\u8BB0\u5F55\u66F4\u6539\u6216\u66F4\u65B0\u65F6\u7684\u52A8\u4F5C\uFF0C\u90A3\u4E48\u6B64\u65F6\u4E3B\u8868\u7684\u64CD\u4F5C\u88AB\u62D2\u7EDD\u3002
    \u5982\u679C\u6307\u5B9A\u4E86 on update \u6216 on delete\uFF1A\u5728\u5220\u9664\u6216\u66F4\u65B0\u65F6\uFF0C\u6709\u5982\u4E0B\u51E0\u4E2A\u64CD\u4F5C\u53EF\u4EE5\u9009\u62E9\uFF1A
    1. cascade\uFF0C\u7EA7\u8054\u64CD\u4F5C\u3002\u4E3B\u8868\u6570\u636E\u88AB\u66F4\u65B0\uFF08\u4E3B\u952E\u503C\u66F4\u65B0\uFF09\uFF0C\u4ECE\u8868\u4E5F\u88AB\u66F4\u65B0\uFF08\u5916\u952E\u503C\u66F4\u65B0\uFF09\u3002\u4E3B\u8868\u8BB0\u5F55\u88AB\u5220\u9664\uFF0C\u4ECE\u8868\u76F8\u5173\u8BB0\u5F55\u4E5F\u88AB\u5220\u9664\u3002
    2. set null\uFF0C\u8BBE\u7F6E\u4E3Anull\u3002\u4E3B\u8868\u6570\u636E\u88AB\u66F4\u65B0\uFF08\u4E3B\u952E\u503C\u66F4\u65B0\uFF09\uFF0C\u4ECE\u8868\u7684\u5916\u952E\u88AB\u8BBE\u7F6E\u4E3Anull\u3002\u4E3B\u8868\u8BB0\u5F55\u88AB\u5220\u9664\uFF0C\u4ECE\u8868\u76F8\u5173\u8BB0\u5F55\u5916\u952E\u88AB\u8BBE\u7F6E\u6210null\u3002\u4F46\u6CE8\u610F\uFF0C\u8981\u6C42\u8BE5\u5916\u952E\u5217\uFF0C\u6CA1\u6709not null\u5C5E\u6027\u7EA6\u675F\u3002
    3. restrict\uFF0C\u62D2\u7EDD\u7236\u8868\u5220\u9664\u548C\u66F4\u65B0\u3002
    \u6CE8\u610F\uFF0C\u5916\u952E\u53EA\u88ABInnoDB\u5B58\u50A8\u5F15\u64CE\u6240\u652F\u6301\u3002\u5176\u4ED6\u5F15\u64CE\u662F\u4E0D\u652F\u6301\u7684\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5EFA\u8868\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8868\u89C4\u8303" aria-hidden="true">#</a> \u5EFA\u8868\u89C4\u8303</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u5EFA\u8868\u89C4\u8303 */ ------------------
    -- Normal Format, NF
        - \u6BCF\u4E2A\u8868\u4FDD\u5B58\u4E00\u4E2A\u5B9E\u4F53\u4FE1\u606F
        - \u6BCF\u4E2A\u5177\u6709\u4E00\u4E2AID\u5B57\u6BB5\u4F5C\u4E3A\u4E3B\u952E
        - ID\u4E3B\u952E + \u539F\u5B50\u8868
    -- 1NF, \u7B2C\u4E00\u8303\u5F0F
        \u5B57\u6BB5\u4E0D\u80FD\u518D\u5206\uFF0C\u5C31\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u3002
    -- 2NF, \u7B2C\u4E8C\u8303\u5F0F
        \u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u7684\u524D\u63D0\u4E0B\uFF0C\u4E0D\u80FD\u51FA\u73B0\u90E8\u5206\u4F9D\u8D56\u3002
        \u6D88\u9664\u590D\u5408\u4E3B\u952E\u5C31\u53EF\u4EE5\u907F\u514D\u90E8\u5206\u4F9D\u8D56\u3002\u589E\u52A0\u5355\u5217\u5173\u952E\u5B57\u3002
    -- 3NF, \u7B2C\u4E09\u8303\u5F0F
        \u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\u7684\u524D\u63D0\u4E0B\uFF0C\u4E0D\u80FD\u51FA\u73B0\u4F20\u9012\u4F9D\u8D56\u3002
        \u67D0\u4E2A\u5B57\u6BB5\u4F9D\u8D56\u4E8E\u4E3B\u952E\uFF0C\u800C\u6709\u5176\u4ED6\u5B57\u6BB5\u4F9D\u8D56\u4E8E\u8BE5\u5B57\u6BB5\u3002\u8FD9\u5C31\u662F\u4F20\u9012\u4F9D\u8D56\u3002
        \u5C06\u4E00\u4E2A\u5B9E\u4F53\u4FE1\u606F\u7684\u6570\u636E\u653E\u5728\u4E00\u4E2A\u8868\u5185\u5B9E\u73B0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* SELECT */ ------------------
SELECT [ALL|DISTINCT] select_expr FROM -&gt; WHERE -&gt; GROUP BY [\u5408\u8BA1\u51FD\u6570] -&gt; HAVING -&gt; ORDER BY -&gt; LIMIT
a. select_expr
    -- \u53EF\u4EE5\u7528 * \u8868\u793A\u6240\u6709\u5B57\u6BB5\u3002
        select * from tb;
    -- \u53EF\u4EE5\u4F7F\u7528\u8868\u8FBE\u5F0F\uFF08\u8BA1\u7B97\u516C\u5F0F\u3001\u51FD\u6570\u8C03\u7528\u3001\u5B57\u6BB5\u4E5F\u662F\u4E2A\u8868\u8FBE\u5F0F\uFF09
        select stu, 29+25, now() from tb;
    -- \u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u5217\u4F7F\u7528\u522B\u540D\u3002\u9002\u7528\u4E8E\u7B80\u5316\u5217\u6807\u8BC6\uFF0C\u907F\u514D\u591A\u4E2A\u5217\u6807\u8BC6\u7B26\u91CD\u590D\u3002
        - \u4F7F\u7528 as \u5173\u952E\u5B57\uFF0C\u4E5F\u53EF\u7701\u7565 as.
        select stu+10 as add10 from tb;
b. FROM \u5B50\u53E5
    \u7528\u4E8E\u6807\u8BC6\u67E5\u8BE2\u6765\u6E90\u3002
    -- \u53EF\u4EE5\u4E3A\u8868\u8D77\u522B\u540D\u3002\u4F7F\u7528as\u5173\u952E\u5B57\u3002
        SELECT * FROM tb1 AS tt, tb2 AS bb;
    -- from\u5B50\u53E5\u540E\uFF0C\u53EF\u4EE5\u540C\u65F6\u51FA\u73B0\u591A\u4E2A\u8868\u3002
        -- \u591A\u4E2A\u8868\u4F1A\u6A2A\u5411\u53E0\u52A0\u5230\u4E00\u8D77\uFF0C\u800C\u6570\u636E\u4F1A\u5F62\u6210\u4E00\u4E2A\u7B1B\u5361\u5C14\u79EF\u3002
        SELECT * FROM tb1, tb2;
    -- \u5411\u4F18\u5316\u7B26\u63D0\u793A\u5982\u4F55\u9009\u62E9\u7D22\u5F15
        USE INDEX\u3001IGNORE INDEX\u3001FORCE INDEX
        SELECT * FROM table1 USE INDEX (key1,key2) WHERE key1=1 AND key2=2 AND key3=3;
        SELECT * FROM table1 IGNORE INDEX (key3) WHERE key1=1 AND key2=2 AND key3=3;
c. WHERE \u5B50\u53E5
    -- \u4ECEfrom\u83B7\u5F97\u7684\u6570\u636E\u6E90\u4E2D\u8FDB\u884C\u7B5B\u9009\u3002
    -- \u6574\u578B1\u8868\u793A\u771F\uFF0C0\u8868\u793A\u5047\u3002
    -- \u8868\u8FBE\u5F0F\u7531\u8FD0\u7B97\u7B26\u548C\u8FD0\u7B97\u6570\u7EC4\u6210\u3002
        -- \u8FD0\u7B97\u6570\uFF1A\u53D8\u91CF\uFF08\u5B57\u6BB5\uFF09\u3001\u503C\u3001\u51FD\u6570\u8FD4\u56DE\u503C
        -- \u8FD0\u7B97\u7B26\uFF1A
            =, &lt;=&gt;, &lt;&gt;, !=, &lt;=, &lt;, &gt;=, &gt;, !, &amp;&amp;, ||,
            in (not) null, (not) like, (not) in, (not) between and, is (not), and, or, not, xor
            is/is not \u52A0\u4E0Ature/false/unknown\uFF0C\u68C0\u9A8C\u67D0\u4E2A\u503C\u7684\u771F\u5047
            &lt;=&gt;\u4E0E&lt;&gt;\u529F\u80FD\u76F8\u540C\uFF0C&lt;=&gt;\u53EF\u7528\u4E8Enull\u6BD4\u8F83
d. GROUP BY \u5B50\u53E5, \u5206\u7EC4\u5B50\u53E5
    GROUP BY \u5B57\u6BB5/\u522B\u540D [\u6392\u5E8F\u65B9\u5F0F]
    \u5206\u7EC4\u540E\u4F1A\u8FDB\u884C\u6392\u5E8F\u3002\u5347\u5E8F\uFF1AASC\uFF0C\u964D\u5E8F\uFF1ADESC
    \u4EE5\u4E0B[\u5408\u8BA1\u51FD\u6570]\u9700\u914D\u5408 GROUP BY \u4F7F\u7528\uFF1A
    count \u8FD4\u56DE\u4E0D\u540C\u7684\u975ENULL\u503C\u6570\u76EE  count(*)\u3001count(\u5B57\u6BB5)
    sum \u6C42\u548C
    max \u6C42\u6700\u5927\u503C
    min \u6C42\u6700\u5C0F\u503C
    avg \u6C42\u5E73\u5747\u503C
    group_concat \u8FD4\u56DE\u5E26\u6709\u6765\u81EA\u4E00\u4E2A\u7EC4\u7684\u8FDE\u63A5\u7684\u975ENULL\u503C\u7684\u5B57\u7B26\u4E32\u7ED3\u679C\u3002\u7EC4\u5185\u5B57\u7B26\u4E32\u8FDE\u63A5\u3002
e. HAVING \u5B50\u53E5\uFF0C\u6761\u4EF6\u5B50\u53E5
    \u4E0E where \u529F\u80FD\u3001\u7528\u6CD5\u76F8\u540C\uFF0C\u6267\u884C\u65F6\u673A\u4E0D\u540C\u3002
    where \u5728\u5F00\u59CB\u65F6\u6267\u884C\u68C0\u6D4B\u6570\u636E\uFF0C\u5BF9\u539F\u6570\u636E\u8FDB\u884C\u8FC7\u6EE4\u3002
    having \u5BF9\u7B5B\u9009\u51FA\u7684\u7ED3\u679C\u518D\u6B21\u8FDB\u884C\u8FC7\u6EE4\u3002
    having \u5B57\u6BB5\u5FC5\u987B\u662F\u67E5\u8BE2\u51FA\u6765\u7684\uFF0Cwhere \u5B57\u6BB5\u5FC5\u987B\u662F\u6570\u636E\u8868\u5B58\u5728\u7684\u3002
    where \u4E0D\u53EF\u4EE5\u4F7F\u7528\u5B57\u6BB5\u7684\u522B\u540D\uFF0Chaving \u53EF\u4EE5\u3002\u56E0\u4E3A\u6267\u884CWHERE\u4EE3\u7801\u65F6\uFF0C\u53EF\u80FD\u5C1A\u672A\u786E\u5B9A\u5217\u503C\u3002
    where \u4E0D\u53EF\u4EE5\u4F7F\u7528\u5408\u8BA1\u51FD\u6570\u3002\u4E00\u822C\u9700\u7528\u5408\u8BA1\u51FD\u6570\u624D\u4F1A\u7528 having
    SQL\u6807\u51C6\u8981\u6C42HAVING\u5FC5\u987B\u5F15\u7528GROUP BY\u5B50\u53E5\u4E2D\u7684\u5217\u6216\u7528\u4E8E\u5408\u8BA1\u51FD\u6570\u4E2D\u7684\u5217\u3002
f. ORDER BY \u5B50\u53E5\uFF0C\u6392\u5E8F\u5B50\u53E5
    order by \u6392\u5E8F\u5B57\u6BB5/\u522B\u540D \u6392\u5E8F\u65B9\u5F0F [,\u6392\u5E8F\u5B57\u6BB5/\u522B\u540D \u6392\u5E8F\u65B9\u5F0F]...
    \u5347\u5E8F\uFF1AASC\uFF0C\u964D\u5E8F\uFF1ADESC
    \u652F\u6301\u591A\u4E2A\u5B57\u6BB5\u7684\u6392\u5E8F\u3002
g. LIMIT \u5B50\u53E5\uFF0C\u9650\u5236\u7ED3\u679C\u6570\u91CF\u5B50\u53E5
    \u4EC5\u5BF9\u5904\u7406\u597D\u7684\u7ED3\u679C\u8FDB\u884C\u6570\u91CF\u9650\u5236\u3002\u5C06\u5904\u7406\u597D\u7684\u7ED3\u679C\u7684\u770B\u4F5C\u662F\u4E00\u4E2A\u96C6\u5408\uFF0C\u6309\u7167\u8BB0\u5F55\u51FA\u73B0\u7684\u987A\u5E8F\uFF0C\u7D22\u5F15\u4ECE0\u5F00\u59CB\u3002
    limit \u8D77\u59CB\u4F4D\u7F6E, \u83B7\u53D6\u6761\u6570
    \u7701\u7565\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u8868\u793A\u4ECE\u7D22\u5F150\u5F00\u59CB\u3002limit \u83B7\u53D6\u6761\u6570
h. DISTINCT, ALL \u9009\u9879
    distinct \u53BB\u9664\u91CD\u590D\u8BB0\u5F55
    \u9ED8\u8BA4\u4E3A all, \u5168\u90E8\u8BB0\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> UNION</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* UNION */ ------------------
    \u5C06\u591A\u4E2Aselect\u67E5\u8BE2\u7684\u7ED3\u679C\u7EC4\u5408\u6210\u4E00\u4E2A\u7ED3\u679C\u96C6\u5408\u3002
    SELECT ... UNION [ALL|DISTINCT] SELECT ...
    \u9ED8\u8BA4 DISTINCT \u65B9\u5F0F\uFF0C\u5373\u6240\u6709\u8FD4\u56DE\u7684\u884C\u90FD\u662F\u552F\u4E00\u7684
    \u5EFA\u8BAE\uFF0C\u5BF9\u6BCF\u4E2ASELECT\u67E5\u8BE2\u52A0\u4E0A\u5C0F\u62EC\u53F7\u5305\u88F9\u3002
    ORDER BY \u6392\u5E8F\u65F6\uFF0C\u9700\u52A0\u4E0A LIMIT \u8FDB\u884C\u7ED3\u5408\u3002
    \u9700\u8981\u5404select\u67E5\u8BE2\u7684\u5B57\u6BB5\u6570\u91CF\u4E00\u6837\u3002
    \u6BCF\u4E2Aselect\u67E5\u8BE2\u7684\u5B57\u6BB5\u5217\u8868(\u6570\u91CF\u3001\u7C7B\u578B)\u5E94\u4E00\u81F4\uFF0C\u56E0\u4E3A\u7ED3\u679C\u4E2D\u7684\u5B57\u6BB5\u540D\u4EE5\u7B2C\u4E00\u6761select\u8BED\u53E5\u4E3A\u51C6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u5B50\u67E5\u8BE2 */ ------------------
    - \u5B50\u67E5\u8BE2\u9700\u7528\u62EC\u53F7\u5305\u88F9\u3002
-- from\u578B
    from\u540E\u8981\u6C42\u662F\u4E00\u4E2A\u8868\uFF0C\u5FC5\u987B\u7ED9\u5B50\u67E5\u8BE2\u7ED3\u679C\u53D6\u4E2A\u522B\u540D\u3002
    - \u7B80\u5316\u6BCF\u4E2A\u67E5\u8BE2\u5185\u7684\u6761\u4EF6\u3002
    - from\u578B\u9700\u5C06\u7ED3\u679C\u751F\u6210\u4E00\u4E2A\u4E34\u65F6\u8868\u683C\uFF0C\u53EF\u7528\u4EE5\u539F\u8868\u7684\u9501\u5B9A\u7684\u91CA\u653E\u3002
    - \u5B50\u67E5\u8BE2\u8FD4\u56DE\u4E00\u4E2A\u8868\uFF0C\u8868\u578B\u5B50\u67E5\u8BE2\u3002
    select * from (select * from tb where id&gt;0) as subfrom where id&gt;1;
-- where\u578B
    - \u5B50\u67E5\u8BE2\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u6807\u91CF\u5B50\u67E5\u8BE2\u3002
    - \u4E0D\u9700\u8981\u7ED9\u5B50\u67E5\u8BE2\u53D6\u522B\u540D\u3002
    - where\u5B50\u67E5\u8BE2\u5185\u7684\u8868\uFF0C\u4E0D\u80FD\u76F4\u63A5\u7528\u4EE5\u66F4\u65B0\u3002
    select * from tb where money = (select max(money) from tb);
    -- \u5217\u5B50\u67E5\u8BE2
        \u5982\u679C\u5B50\u67E5\u8BE2\u7ED3\u679C\u8FD4\u56DE\u7684\u662F\u4E00\u5217\u3002
        \u4F7F\u7528 in \u6216 not in \u5B8C\u6210\u67E5\u8BE2
        exists \u548C not exists \u6761\u4EF6
            \u5982\u679C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u8FD4\u56DE1\u62160\u3002\u5E38\u7528\u4E8E\u5224\u65AD\u6761\u4EF6\u3002
            select column1 from t1 where exists (select * from t2);
    -- \u884C\u5B50\u67E5\u8BE2
        \u67E5\u8BE2\u6761\u4EF6\u662F\u4E00\u4E2A\u884C\u3002
        select * from t1 where (id, gender) in (select id, gender from t2);
        \u884C\u6784\u9020\u7B26\uFF1A(col1, col2, ...) \u6216 ROW(col1, col2, ...)
        \u884C\u6784\u9020\u7B26\u901A\u5E38\u7528\u4E8E\u4E0E\u5BF9\u80FD\u8FD4\u56DE\u4E24\u4E2A\u6216\u4E24\u4E2A\u4EE5\u4E0A\u5217\u7684\u5B50\u67E5\u8BE2\u8FDB\u884C\u6BD4\u8F83\u3002
    -- \u7279\u6B8A\u8FD0\u7B97\u7B26
    != all()    \u76F8\u5F53\u4E8E not in
    = some()    \u76F8\u5F53\u4E8E in\u3002any \u662F some \u7684\u522B\u540D
    != some()   \u4E0D\u7B49\u540C\u4E8E not in\uFF0C\u4E0D\u7B49\u4E8E\u5176\u4E2D\u67D0\u4E00\u4E2A\u3002
    all, some \u53EF\u4EE5\u914D\u5408\u5176\u4ED6\u8FD0\u7B97\u7B26\u4E00\u8D77\u4F7F\u7528\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDE\u63A5\u67E5\u8BE2-join" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u67E5\u8BE2-join" aria-hidden="true">#</a> \u8FDE\u63A5\u67E5\u8BE2(join)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u8FDE\u63A5\u67E5\u8BE2(join) */ ------------------
    \u5C06\u591A\u4E2A\u8868\u7684\u5B57\u6BB5\u8FDB\u884C\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8FDE\u63A5\u6761\u4EF6\u3002
-- \u5185\u8FDE\u63A5(inner join)
    - \u9ED8\u8BA4\u5C31\u662F\u5185\u8FDE\u63A5\uFF0C\u53EF\u7701\u7565inner\u3002
    - \u53EA\u6709\u6570\u636E\u5B58\u5728\u65F6\u624D\u80FD\u53D1\u9001\u8FDE\u63A5\u3002\u5373\u8FDE\u63A5\u7ED3\u679C\u4E0D\u80FD\u51FA\u73B0\u7A7A\u884C\u3002
    on \u8868\u793A\u8FDE\u63A5\u6761\u4EF6\u3002\u5176\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E0Ewhere\u7C7B\u4F3C\u3002\u4E5F\u53EF\u4EE5\u7701\u7565\u6761\u4EF6\uFF08\u8868\u793A\u6761\u4EF6\u6C38\u8FDC\u4E3A\u771F\uFF09
    \u4E5F\u53EF\u7528where\u8868\u793A\u8FDE\u63A5\u6761\u4EF6\u3002
    \u8FD8\u6709 using, \u4F46\u9700\u5B57\u6BB5\u540D\u76F8\u540C\u3002 using(\u5B57\u6BB5\u540D)
    -- \u4EA4\u53C9\u8FDE\u63A5 cross join
        \u5373\uFF0C\u6CA1\u6709\u6761\u4EF6\u7684\u5185\u8FDE\u63A5\u3002
        select * from tb1 cross join tb2;
-- \u5916\u8FDE\u63A5(outer join)
    - \u5982\u679C\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u4E5F\u4F1A\u51FA\u73B0\u5728\u8FDE\u63A5\u7ED3\u679C\u4E2D\u3002
    -- \u5DE6\u5916\u8FDE\u63A5 left join
        \u5982\u679C\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u5DE6\u8868\u8BB0\u5F55\u4F1A\u51FA\u73B0\uFF0C\u800C\u53F3\u8868\u4E3Anull\u586B\u5145
    -- \u53F3\u5916\u8FDE\u63A5 right join
        \u5982\u679C\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u53F3\u8868\u8BB0\u5F55\u4F1A\u51FA\u73B0\uFF0C\u800C\u5DE6\u8868\u4E3Anull\u586B\u5145
-- \u81EA\u7136\u8FDE\u63A5(natural join)
    \u81EA\u52A8\u5224\u65AD\u8FDE\u63A5\u6761\u4EF6\u5B8C\u6210\u8FDE\u63A5\u3002
    \u76F8\u5F53\u4E8E\u7701\u7565\u4E86using\uFF0C\u4F1A\u81EA\u52A8\u67E5\u627E\u76F8\u540C\u5B57\u6BB5\u540D\u3002
    natural join
    natural left join
    natural right join
select info.id, info.name, info.stu_num, extra_info.hobby, extra_info.sex from info, extra_info where info.stu_num = extra_info.stu_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="truncate" tabindex="-1"><a class="header-anchor" href="#truncate" aria-hidden="true">#</a> TRUNCATE</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* TRUNCATE */ ------------------
TRUNCATE [TABLE] tbl_name
\u6E05\u7A7A\u6570\u636E
\u5220\u9664\u91CD\u5EFA\u8868
\u533A\u522B\uFF1A
1\uFF0Ctruncate \u662F\u5220\u9664\u8868\u518D\u521B\u5EFA\uFF0Cdelete \u662F\u9010\u6761\u5220\u9664
2\uFF0Ctruncate \u91CD\u7F6Eauto_increment\u7684\u503C\u3002\u800Cdelete\u4E0D\u4F1A
3\uFF0Ctruncate \u4E0D\u77E5\u9053\u5220\u9664\u4E86\u51E0\u6761\uFF0C\u800Cdelete\u77E5\u9053\u3002
4\uFF0C\u5F53\u88AB\u7528\u4E8E\u5E26\u5206\u533A\u7684\u8868\u65F6\uFF0Ctruncate \u4F1A\u4FDD\u7559\u5206\u533A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5907\u4EFD\u4E0E\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u4E0E\u8FD8\u539F" aria-hidden="true">#</a> \u5907\u4EFD\u4E0E\u8FD8\u539F</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u5907\u4EFD\u4E0E\u8FD8\u539F */ ------------------
\u5907\u4EFD\uFF0C\u5C06\u6570\u636E\u7684\u7ED3\u6784\u4E0E\u8868\u5185\u6570\u636E\u4FDD\u5B58\u8D77\u6765\u3002
\u5229\u7528 mysqldump \u6307\u4EE4\u5B8C\u6210\u3002
-- \u5BFC\u51FA
mysqldump [options] db_name [tables]
mysqldump [options] ---database DB1 [DB2 DB3...]
mysqldump [options] --all--database
1. \u5BFC\u51FA\u4E00\u5F20\u8868
\u3000\u3000mysqldump -u\u7528\u6237\u540D -p\u5BC6\u7801 \u5E93\u540D \u8868\u540D &gt; \u6587\u4EF6\u540D(D:/a.sql)
2. \u5BFC\u51FA\u591A\u5F20\u8868
\u3000\u3000mysqldump -u\u7528\u6237\u540D -p\u5BC6\u7801 \u5E93\u540D \u88681 \u88682 \u88683 &gt; \u6587\u4EF6\u540D(D:/a.sql)
3. \u5BFC\u51FA\u6240\u6709\u8868
\u3000\u3000mysqldump -u\u7528\u6237\u540D -p\u5BC6\u7801 \u5E93\u540D &gt; \u6587\u4EF6\u540D(D:/a.sql)
4. \u5BFC\u51FA\u4E00\u4E2A\u5E93
\u3000\u3000mysqldump -u\u7528\u6237\u540D -p\u5BC6\u7801 --lock-all-tables --database \u5E93\u540D &gt; \u6587\u4EF6\u540D(D:/a.sql)
\u53EF\u4EE5-w\u643A\u5E26WHERE\u6761\u4EF6
-- \u5BFC\u5165
1. \u5728\u767B\u5F55mysql\u7684\u60C5\u51B5\u4E0B\uFF1A
\u3000\u3000source  \u5907\u4EFD\u6587\u4EF6
2. \u5728\u4E0D\u767B\u5F55\u7684\u60C5\u51B5\u4E0B
\u3000\u3000mysql -u\u7528\u6237\u540D -p\u5BC6\u7801 \u5E93\u540D &lt; \u5907\u4EFD\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE" aria-hidden="true">#</a> \u89C6\u56FE</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4EC0\u4E48\u662F\u89C6\u56FE\uFF1A
    \u89C6\u56FE\u662F\u4E00\u4E2A\u865A\u62DF\u8868\uFF0C\u5176\u5185\u5BB9\u7531\u67E5\u8BE2\u5B9A\u4E49\u3002\u540C\u771F\u5B9E\u7684\u8868\u4E00\u6837\uFF0C\u89C6\u56FE\u5305\u542B\u4E00\u7CFB\u5217\u5E26\u6709\u540D\u79F0\u7684\u5217\u548C\u884C\u6570\u636E\u3002\u4F46\u662F\uFF0C\u89C6\u56FE\u5E76\u4E0D\u5728\u6570\u636E\u5E93\u4E2D\u4EE5\u5B58\u50A8\u7684\u6570\u636E\u503C\u96C6\u5F62\u5F0F\u5B58\u5728\u3002\u884C\u548C\u5217\u6570\u636E\u6765\u81EA\u7531\u5B9A\u4E49\u89C6\u56FE\u7684\u67E5\u8BE2\u6240\u5F15\u7528\u7684\u8868\uFF0C\u5E76\u4E14\u5728\u5F15\u7528\u89C6\u56FE\u65F6\u52A8\u6001\u751F\u6210\u3002
    \u89C6\u56FE\u5177\u6709\u8868\u7ED3\u6784\u6587\u4EF6\uFF0C\u4F46\u4E0D\u5B58\u5728\u6570\u636E\u6587\u4EF6\u3002
    \u5BF9\u5176\u4E2D\u6240\u5F15\u7528\u7684\u57FA\u7840\u8868\u6765\u8BF4\uFF0C\u89C6\u56FE\u7684\u4F5C\u7528\u7C7B\u4F3C\u4E8E\u7B5B\u9009\u3002\u5B9A\u4E49\u89C6\u56FE\u7684\u7B5B\u9009\u53EF\u4EE5\u6765\u81EA\u5F53\u524D\u6216\u5176\u5B83\u6570\u636E\u5E93\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u8868\uFF0C\u6216\u8005\u5176\u5B83\u89C6\u56FE\u3002\u901A\u8FC7\u89C6\u56FE\u8FDB\u884C\u67E5\u8BE2\u6CA1\u6709\u4EFB\u4F55\u9650\u5236\uFF0C\u901A\u8FC7\u5B83\u4EEC\u8FDB\u884C\u6570\u636E\u4FEE\u6539\u65F6\u7684\u9650\u5236\u4E5F\u5F88\u5C11\u3002
    \u89C6\u56FE\u662F\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\u7684\u67E5\u8BE2\u7684sql\u8BED\u53E5\uFF0C\u5B83\u4E3B\u8981\u51FA\u4E8E\u4E24\u79CD\u539F\u56E0\uFF1A\u5B89\u5168\u539F\u56E0\uFF0C\u89C6\u56FE\u53EF\u4EE5\u9690\u85CF\u4E00\u4E9B\u6570\u636E\uFF0C\u5982\uFF1A\u793E\u4F1A\u4FDD\u9669\u57FA\u91D1\u8868\uFF0C\u53EF\u4EE5\u7528\u89C6\u56FE\u53EA\u663E\u793A\u59D3\u540D\uFF0C\u5730\u5740\uFF0C\u800C\u4E0D\u663E\u793A\u793E\u4F1A\u4FDD\u9669\u53F7\u548C\u5DE5\u8D44\u6570\u7B49\uFF0C\u53E6\u4E00\u539F\u56E0\u662F\u53EF\u4F7F\u590D\u6742\u7684\u67E5\u8BE2\u6613\u4E8E\u7406\u89E3\u548C\u4F7F\u7528\u3002
-- \u521B\u5EFA\u89C6\u56FE
CREATE [OR REPLACE] [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW view_name [(column_list)] AS select_statement
    - \u89C6\u56FE\u540D\u5FC5\u987B\u552F\u4E00\uFF0C\u540C\u65F6\u4E0D\u80FD\u4E0E\u8868\u91CD\u540D\u3002
    - \u89C6\u56FE\u53EF\u4EE5\u4F7F\u7528select\u8BED\u53E5\u67E5\u8BE2\u5230\u7684\u5217\u540D\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6307\u5B9A\u76F8\u5E94\u7684\u5217\u540D\u3002
    - \u53EF\u4EE5\u6307\u5B9A\u89C6\u56FE\u6267\u884C\u7684\u7B97\u6CD5\uFF0C\u901A\u8FC7ALGORITHM\u6307\u5B9A\u3002
    - column_list\u5982\u679C\u5B58\u5728\uFF0C\u5219\u6570\u76EE\u5FC5\u987B\u7B49\u4E8ESELECT\u8BED\u53E5\u68C0\u7D22\u7684\u5217\u6570
-- \u67E5\u770B\u7ED3\u6784
    SHOW CREATE VIEW view_name
-- \u5220\u9664\u89C6\u56FE
    - \u5220\u9664\u89C6\u56FE\u540E\uFF0C\u6570\u636E\u4F9D\u7136\u5B58\u5728\u3002
    - \u53EF\u540C\u65F6\u5220\u9664\u591A\u4E2A\u89C6\u56FE\u3002
    DROP VIEW [IF EXISTS] view_name ...
-- \u4FEE\u6539\u89C6\u56FE\u7ED3\u6784
    - \u4E00\u822C\u4E0D\u4FEE\u6539\u89C6\u56FE\uFF0C\u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u7684\u66F4\u65B0\u89C6\u56FE\u90FD\u4F1A\u6620\u5C04\u5230\u8868\u4E0A\u3002
    ALTER VIEW view_name [(column_list)] AS select_statement
-- \u89C6\u56FE\u4F5C\u7528
    1. \u7B80\u5316\u4E1A\u52A1\u903B\u8F91
    2. \u5BF9\u5BA2\u6237\u7AEF\u9690\u85CF\u771F\u5B9E\u7684\u8868\u7ED3\u6784
-- \u89C6\u56FE\u7B97\u6CD5(ALGORITHM)
    MERGE       \u5408\u5E76
        \u5C06\u89C6\u56FE\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u4E0E\u5916\u90E8\u67E5\u8BE2\u9700\u8981\u5148\u5408\u5E76\u518D\u6267\u884C\uFF01
    TEMPTABLE   \u4E34\u65F6\u8868
        \u5C06\u89C6\u56FE\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u5F62\u6210\u4E34\u65F6\u8868\uFF0C\u518D\u505A\u5916\u5C42\u67E5\u8BE2\uFF01
    UNDEFINED   \u672A\u5B9A\u4E49(\u9ED8\u8BA4)\uFF0C\u6307\u7684\u662FMySQL\u81EA\u4E3B\u53BB\u9009\u62E9\u76F8\u5E94\u7684\u7B97\u6CD5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8B\u52A1-transaction" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1-transaction" aria-hidden="true">#</a> \u4E8B\u52A1(transaction)</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4E8B\u52A1\u662F\u6307\u903B\u8F91\u4E0A\u7684\u4E00\u7EC4\u64CD\u4F5C\uFF0C\u7EC4\u6210\u8FD9\u7EC4\u64CD\u4F5C\u7684\u5404\u4E2A\u5355\u5143\uFF0C\u8981\u4E0D\u5168\u6210\u529F\u8981\u4E0D\u5168\u5931\u8D25\u3002
    - \u652F\u6301\u8FDE\u7EEDSQL\u7684\u96C6\u4F53\u6210\u529F\u6216\u96C6\u4F53\u64A4\u9500\u3002
    - \u4E8B\u52A1\u662F\u6570\u636E\u5E93\u5728\u6570\u636E\u5B8C\u6574\u6027\u65B9\u9762\u7684\u4E00\u4E2A\u529F\u80FD\u3002
    - \u9700\u8981\u5229\u7528 InnoDB \u6216 BDB \u5B58\u50A8\u5F15\u64CE\uFF0C\u5BF9\u81EA\u52A8\u63D0\u4EA4\u7684\u7279\u6027\u652F\u6301\u5B8C\u6210\u3002
    - InnoDB\u88AB\u79F0\u4E3A\u4E8B\u52A1\u5B89\u5168\u578B\u5F15\u64CE\u3002
-- \u4E8B\u52A1\u5F00\u542F
    START TRANSACTION; \u6216\u8005 BEGIN;
    \u5F00\u542F\u4E8B\u52A1\u540E\uFF0C\u6240\u6709\u88AB\u6267\u884C\u7684SQL\u8BED\u53E5\u5747\u88AB\u8BA4\u4F5C\u5F53\u524D\u4E8B\u52A1\u5185\u7684SQL\u8BED\u53E5\u3002
-- \u4E8B\u52A1\u63D0\u4EA4
    COMMIT;
-- \u4E8B\u52A1\u56DE\u6EDA
    ROLLBACK;
    \u5982\u679C\u90E8\u5206\u64CD\u4F5C\u53D1\u751F\u95EE\u9898\uFF0C\u6620\u5C04\u5230\u4E8B\u52A1\u5F00\u542F\u524D\u3002
-- \u4E8B\u52A1\u7684\u7279\u6027
    1. \u539F\u5B50\u6027\uFF08Atomicity\uFF09
        \u4E8B\u52A1\u662F\u4E00\u4E2A\u4E0D\u53EF\u5206\u5272\u7684\u5DE5\u4F5C\u5355\u4F4D\uFF0C\u4E8B\u52A1\u4E2D\u7684\u64CD\u4F5C\u8981\u4E48\u90FD\u53D1\u751F\uFF0C\u8981\u4E48\u90FD\u4E0D\u53D1\u751F\u3002
    2. \u4E00\u81F4\u6027\uFF08Consistency\uFF09
        \u4E8B\u52A1\u524D\u540E\u6570\u636E\u7684\u5B8C\u6574\u6027\u5FC5\u987B\u4FDD\u6301\u4E00\u81F4\u3002
        - \u4E8B\u52A1\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\uFF0C\u5916\u90E8\u6570\u636E\u4E00\u81F4
        - \u5728\u6574\u4E2A\u4E8B\u52A1\u8FC7\u7A0B\u4E2D\uFF0C\u64CD\u4F5C\u662F\u8FDE\u7EED\u7684
    3. \u9694\u79BB\u6027\uFF08Isolation\uFF09
        \u591A\u4E2A\u7528\u6237\u5E76\u53D1\u8BBF\u95EE\u6570\u636E\u5E93\u65F6\uFF0C\u4E00\u4E2A\u7528\u6237\u7684\u4E8B\u52A1\u4E0D\u80FD\u88AB\u5176\u5B83\u7528\u6237\u7684\u4E8B\u52A1\u6240\u5E72\u6270\uFF0C\u591A\u4E2A\u5E76\u53D1\u4E8B\u52A1\u4E4B\u95F4\u7684\u6570\u636E\u8981\u76F8\u4E92\u9694\u79BB\u3002
    4. \u6301\u4E45\u6027\uFF08Durability\uFF09
        \u4E00\u4E2A\u4E8B\u52A1\u4E00\u65E6\u88AB\u63D0\u4EA4\uFF0C\u5B83\u5BF9\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u6539\u53D8\u5C31\u662F\u6C38\u4E45\u6027\u7684\u3002
-- \u4E8B\u52A1\u7684\u5B9E\u73B0
    1. \u8981\u6C42\u662F\u4E8B\u52A1\u652F\u6301\u7684\u8868\u7C7B\u578B
    2. \u6267\u884C\u4E00\u7EC4\u76F8\u5173\u7684\u64CD\u4F5C\u524D\u5F00\u542F\u4E8B\u52A1
    3. \u6574\u7EC4\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u90FD\u6210\u529F\uFF0C\u5219\u63D0\u4EA4\uFF1B\u5982\u679C\u5B58\u5728\u5931\u8D25\uFF0C\u9009\u62E9\u56DE\u6EDA\uFF0C\u5219\u4F1A\u56DE\u5230\u4E8B\u52A1\u5F00\u59CB\u7684\u5907\u4EFD\u70B9\u3002
-- \u4E8B\u52A1\u7684\u539F\u7406
    \u5229\u7528InnoDB\u7684\u81EA\u52A8\u63D0\u4EA4(autocommit)\u7279\u6027\u5B8C\u6210\u3002
    \u666E\u901A\u7684MySQL\u6267\u884C\u8BED\u53E5\u540E\uFF0C\u5F53\u524D\u7684\u6570\u636E\u63D0\u4EA4\u64CD\u4F5C\u5747\u53EF\u88AB\u5176\u4ED6\u5BA2\u6237\u7AEF\u53EF\u89C1\u3002
    \u800C\u4E8B\u52A1\u662F\u6682\u65F6\u5173\u95ED\u201C\u81EA\u52A8\u63D0\u4EA4\u201D\u673A\u5236\uFF0C\u9700\u8981commit\u63D0\u4EA4\u6301\u4E45\u5316\u6570\u636E\u64CD\u4F5C\u3002
-- \u6CE8\u610F
    1. \u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF08DDL\uFF09\u8BED\u53E5\u4E0D\u80FD\u88AB\u56DE\u6EDA\uFF0C\u6BD4\u5982\u521B\u5EFA\u6216\u53D6\u6D88\u6570\u636E\u5E93\u7684\u8BED\u53E5\uFF0C\u548C\u521B\u5EFA\u3001\u53D6\u6D88\u6216\u66F4\u6539\u8868\u6216\u5B58\u50A8\u7684\u5B50\u7A0B\u5E8F\u7684\u8BED\u53E5\u3002
    2. \u4E8B\u52A1\u4E0D\u80FD\u88AB\u5D4C\u5957
-- \u4FDD\u5B58\u70B9
    SAVEPOINT \u4FDD\u5B58\u70B9\u540D\u79F0 -- \u8BBE\u7F6E\u4E00\u4E2A\u4E8B\u52A1\u4FDD\u5B58\u70B9
    ROLLBACK TO SAVEPOINT \u4FDD\u5B58\u70B9\u540D\u79F0 -- \u56DE\u6EDA\u5230\u4FDD\u5B58\u70B9
    RELEASE SAVEPOINT \u4FDD\u5B58\u70B9\u540D\u79F0 -- \u5220\u9664\u4FDD\u5B58\u70B9
-- InnoDB\u81EA\u52A8\u63D0\u4EA4\u7279\u6027\u8BBE\u7F6E
    SET autocommit = 0|1;   0\u8868\u793A\u5173\u95ED\u81EA\u52A8\u63D0\u4EA4\uFF0C1\u8868\u793A\u5F00\u542F\u81EA\u52A8\u63D0\u4EA4\u3002
    - \u5982\u679C\u5173\u95ED\u4E86\uFF0C\u90A3\u666E\u901A\u64CD\u4F5C\u7684\u7ED3\u679C\u5BF9\u5176\u4ED6\u5BA2\u6237\u7AEF\u4E5F\u4E0D\u53EF\u89C1\uFF0C\u9700\u8981commit\u63D0\u4EA4\u540E\u624D\u80FD\u6301\u4E45\u5316\u6570\u636E\u64CD\u4F5C\u3002
    - \u4E5F\u53EF\u4EE5\u5173\u95ED\u81EA\u52A8\u63D0\u4EA4\u6765\u5F00\u542F\u4E8B\u52A1\u3002\u4F46\u4E0ESTART TRANSACTION\u4E0D\u540C\u7684\u662F\uFF0C
        SET autocommit\u662F\u6C38\u4E45\u6539\u53D8\u670D\u52A1\u5668\u7684\u8BBE\u7F6E\uFF0C\u76F4\u5230\u4E0B\u6B21\u518D\u6B21\u4FEE\u6539\u8BE5\u8BBE\u7F6E\u3002(\u9488\u5BF9\u5F53\u524D\u8FDE\u63A5)
        \u800CSTART TRANSACTION\u8BB0\u5F55\u5F00\u542F\u524D\u7684\u72B6\u6001\uFF0C\u800C\u4E00\u65E6\u4E8B\u52A1\u63D0\u4EA4\u6216\u56DE\u6EDA\u540E\u5C31\u9700\u8981\u518D\u6B21\u5F00\u542F\u4E8B\u52A1\u3002(\u9488\u5BF9\u5F53\u524D\u4E8B\u52A1)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9501\u8868" tabindex="-1"><a class="header-anchor" href="#\u9501\u8868" aria-hidden="true">#</a> \u9501\u8868</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u9501\u8868 */
\u8868\u9501\u5B9A\u53EA\u7528\u4E8E\u9632\u6B62\u5176\u5B83\u5BA2\u6237\u7AEF\u8FDB\u884C\u4E0D\u6B63\u5F53\u5730\u8BFB\u53D6\u548C\u5199\u5165
MyISAM \u652F\u6301\u8868\u9501\uFF0CInnoDB \u652F\u6301\u884C\u9501
-- \u9501\u5B9A
    LOCK TABLES tbl_name [AS alias]
-- \u89E3\u9501
    UNLOCK TABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E6\u53D1\u5668" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u5668" aria-hidden="true">#</a> \u89E6\u53D1\u5668</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u89E6\u53D1\u5668 */ ------------------
    \u89E6\u53D1\u7A0B\u5E8F\u662F\u4E0E\u8868\u6709\u5173\u7684\u547D\u540D\u6570\u636E\u5E93\u5BF9\u8C61\uFF0C\u5F53\u8BE5\u8868\u51FA\u73B0\u7279\u5B9A\u4E8B\u4EF6\u65F6\uFF0C\u5C06\u6FC0\u6D3B\u8BE5\u5BF9\u8C61
    \u76D1\u542C\uFF1A\u8BB0\u5F55\u7684\u589E\u52A0\u3001\u4FEE\u6539\u3001\u5220\u9664\u3002
-- \u521B\u5EFA\u89E6\u53D1\u5668
CREATE TRIGGER trigger_name trigger_time trigger_event ON tbl_name FOR EACH ROW trigger_stmt
    \u53C2\u6570\uFF1A
    trigger_time\u662F\u89E6\u53D1\u7A0B\u5E8F\u7684\u52A8\u4F5C\u65F6\u95F4\u3002\u5B83\u53EF\u4EE5\u662F before \u6216 after\uFF0C\u4EE5\u6307\u660E\u89E6\u53D1\u7A0B\u5E8F\u662F\u5728\u6FC0\u6D3B\u5B83\u7684\u8BED\u53E5\u4E4B\u524D\u6216\u4E4B\u540E\u89E6\u53D1\u3002
    trigger_event\u6307\u660E\u4E86\u6FC0\u6D3B\u89E6\u53D1\u7A0B\u5E8F\u7684\u8BED\u53E5\u7684\u7C7B\u578B
        INSERT\uFF1A\u5C06\u65B0\u884C\u63D2\u5165\u8868\u65F6\u6FC0\u6D3B\u89E6\u53D1\u7A0B\u5E8F
        UPDATE\uFF1A\u66F4\u6539\u67D0\u4E00\u884C\u65F6\u6FC0\u6D3B\u89E6\u53D1\u7A0B\u5E8F
        DELETE\uFF1A\u4ECE\u8868\u4E2D\u5220\u9664\u67D0\u4E00\u884C\u65F6\u6FC0\u6D3B\u89E6\u53D1\u7A0B\u5E8F
    tbl_name\uFF1A\u76D1\u542C\u7684\u8868\uFF0C\u5FC5\u987B\u662F\u6C38\u4E45\u6027\u7684\u8868\uFF0C\u4E0D\u80FD\u5C06\u89E6\u53D1\u7A0B\u5E8F\u4E0ETEMPORARY\u8868\u6216\u89C6\u56FE\u5173\u8054\u8D77\u6765\u3002
    trigger_stmt\uFF1A\u5F53\u89E6\u53D1\u7A0B\u5E8F\u6FC0\u6D3B\u65F6\u6267\u884C\u7684\u8BED\u53E5\u3002\u6267\u884C\u591A\u4E2A\u8BED\u53E5\uFF0C\u53EF\u4F7F\u7528BEGIN...END\u590D\u5408\u8BED\u53E5\u7ED3\u6784
-- \u5220\u9664
DROP TRIGGER [schema_name.]trigger_name
\u53EF\u4EE5\u4F7F\u7528old\u548Cnew\u4EE3\u66FF\u65E7\u7684\u548C\u65B0\u7684\u6570\u636E
    \u66F4\u65B0\u64CD\u4F5C\uFF0C\u66F4\u65B0\u524D\u662Fold\uFF0C\u66F4\u65B0\u540E\u662Fnew.
    \u5220\u9664\u64CD\u4F5C\uFF0C\u53EA\u6709old.
    \u589E\u52A0\u64CD\u4F5C\uFF0C\u53EA\u6709new.
-- \u6CE8\u610F
    1. \u5BF9\u4E8E\u5177\u6709\u76F8\u540C\u89E6\u53D1\u7A0B\u5E8F\u52A8\u4F5C\u65F6\u95F4\u548C\u4E8B\u4EF6\u7684\u7ED9\u5B9A\u8868\uFF0C\u4E0D\u80FD\u6709\u4E24\u4E2A\u89E6\u53D1\u7A0B\u5E8F\u3002
-- \u5B57\u7B26\u8FDE\u63A5\u51FD\u6570
concat(str1,str2,...])
concat_ws(separator,str1,str2,...)
-- \u5206\u652F\u8BED\u53E5
if \u6761\u4EF6 then
    \u6267\u884C\u8BED\u53E5
elseif \u6761\u4EF6 then
    \u6267\u884C\u8BED\u53E5
else
    \u6267\u884C\u8BED\u53E5
end if;
-- \u4FEE\u6539\u6700\u5916\u5C42\u8BED\u53E5\u7ED3\u675F\u7B26
delimiter \u81EA\u5B9A\u4E49\u7ED3\u675F\u7B26\u53F7
    SQL\u8BED\u53E5
\u81EA\u5B9A\u4E49\u7ED3\u675F\u7B26\u53F7
delimiter ;     -- \u4FEE\u6539\u56DE\u539F\u6765\u7684\u5206\u53F7
-- \u8BED\u53E5\u5757\u5305\u88F9
begin
    \u8BED\u53E5\u5757
end
-- \u7279\u6B8A\u7684\u6267\u884C
1. \u53EA\u8981\u6DFB\u52A0\u8BB0\u5F55\uFF0C\u5C31\u4F1A\u89E6\u53D1\u7A0B\u5E8F\u3002
2. Insert into on duplicate key update \u8BED\u6CD5\u4F1A\u89E6\u53D1\uFF1A
    \u5982\u679C\u6CA1\u6709\u91CD\u590D\u8BB0\u5F55\uFF0C\u4F1A\u89E6\u53D1 before insert, after insert;
    \u5982\u679C\u6709\u91CD\u590D\u8BB0\u5F55\u5E76\u66F4\u65B0\uFF0C\u4F1A\u89E6\u53D1 before insert, before update, after update;
    \u5982\u679C\u6709\u91CD\u590D\u8BB0\u5F55\u4F46\u662F\u6CA1\u6709\u53D1\u751F\u66F4\u65B0\uFF0C\u5219\u89E6\u53D1 before insert, before update
3. Replace \u8BED\u6CD5 \u5982\u679C\u6709\u8BB0\u5F55\uFF0C\u5219\u6267\u884C before insert, before delete, after delete, after insert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#sql\u7F16\u7A0B" aria-hidden="true">#</a> SQL\u7F16\u7A0B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* SQL\u7F16\u7A0B */ ------------------
--// \u5C40\u90E8\u53D8\u91CF ----------
-- \u53D8\u91CF\u58F0\u660E
    declare var_name[,...] type [default value]
    \u8FD9\u4E2A\u8BED\u53E5\u88AB\u7528\u6765\u58F0\u660E\u5C40\u90E8\u53D8\u91CF\u3002\u8981\u7ED9\u53D8\u91CF\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u8BF7\u5305\u542B\u4E00\u4E2Adefault\u5B50\u53E5\u3002\u503C\u53EF\u4EE5\u88AB\u6307\u5B9A\u4E3A\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u9700\u8981\u4E3A\u4E00\u4E2A\u5E38\u6570\u3002\u5982\u679C\u6CA1\u6709default\u5B50\u53E5\uFF0C\u521D\u59CB\u503C\u4E3Anull\u3002
-- \u8D4B\u503C
    \u4F7F\u7528 set \u548C select into \u8BED\u53E5\u4E3A\u53D8\u91CF\u8D4B\u503C\u3002
    - \u6CE8\u610F\uFF1A\u5728\u51FD\u6570\u5185\u662F\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\uFF08\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF\uFF09
--// \u5168\u5C40\u53D8\u91CF ----------
-- \u5B9A\u4E49\u3001\u8D4B\u503C
set \u8BED\u53E5\u53EF\u4EE5\u5B9A\u4E49\u5E76\u4E3A\u53D8\u91CF\u8D4B\u503C\u3002
set @var = value;
\u4E5F\u53EF\u4EE5\u4F7F\u7528select into\u8BED\u53E5\u4E3A\u53D8\u91CF\u521D\u59CB\u5316\u5E76\u8D4B\u503C\u3002\u8FD9\u6837\u8981\u6C42select\u8BED\u53E5\u53EA\u80FD\u8FD4\u56DE\u4E00\u884C\uFF0C\u4F46\u662F\u53EF\u4EE5\u662F\u591A\u4E2A\u5B57\u6BB5\uFF0C\u5C31\u610F\u5473\u7740\u540C\u65F6\u4E3A\u591A\u4E2A\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\uFF0C\u53D8\u91CF\u7684\u6570\u91CF\u9700\u8981\u4E0E\u67E5\u8BE2\u7684\u5217\u6570\u4E00\u81F4\u3002
\u8FD8\u53EF\u4EE5\u628A\u8D4B\u503C\u8BED\u53E5\u770B\u4F5C\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u901A\u8FC7select\u6267\u884C\u5B8C\u6210\u3002\u6B64\u65F6\u4E3A\u4E86\u907F\u514D=\u88AB\u5F53\u4F5C\u5173\u7CFB\u8FD0\u7B97\u7B26\u770B\u5F85\uFF0C\u4F7F\u7528:=\u4EE3\u66FF\u3002\uFF08set\u8BED\u53E5\u53EF\u4EE5\u4F7F\u7528= \u548C :=\uFF09\u3002
select @var:=20;
select @v1:=id, @v2=name from t1 limit 1;
select * from tbl_name where @var:=30;
select into \u53EF\u4EE5\u5C06\u8868\u4E2D\u67E5\u8BE2\u83B7\u5F97\u7684\u6570\u636E\u8D4B\u7ED9\u53D8\u91CF\u3002
    -| select max(height) into @max_height from tb;
-- \u81EA\u5B9A\u4E49\u53D8\u91CF\u540D
\u4E3A\u4E86\u907F\u514Dselect\u8BED\u53E5\u4E2D\uFF0C\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF\u4E0E\u7CFB\u7EDF\u6807\u8BC6\u7B26\uFF08\u901A\u5E38\u662F\u5B57\u6BB5\u540D\uFF09\u51B2\u7A81\uFF0C\u7528\u6237\u81EA\u5B9A\u4E49\u53D8\u91CF\u5728\u53D8\u91CF\u540D\u524D\u4F7F\u7528@\u4F5C\u4E3A\u5F00\u59CB\u7B26\u53F7\u3002
@var=10;
    - \u53D8\u91CF\u88AB\u5B9A\u4E49\u540E\uFF0C\u5728\u6574\u4E2A\u4F1A\u8BDD\u5468\u671F\u90FD\u6709\u6548\uFF08\u767B\u5F55\u5230\u9000\u51FA\uFF09
--// \u63A7\u5236\u7ED3\u6784 ----------
-- if\u8BED\u53E5
if search_condition then
    statement_list   
[elseif search_condition then
    statement_list]
...
[else
    statement_list]
end if;
-- case\u8BED\u53E5
CASE value WHEN [compare-value] THEN result
[WHEN [compare-value] THEN result ...]
[ELSE result]
END
-- while\u5FAA\u73AF
[begin_label:] while search_condition do
    statement_list
end while [end_label];
- \u5982\u679C\u9700\u8981\u5728\u5FAA\u73AF\u5185\u63D0\u524D\u7EC8\u6B62 while\u5FAA\u73AF\uFF0C\u5219\u9700\u8981\u4F7F\u7528\u6807\u7B7E\uFF1B\u6807\u7B7E\u9700\u8981\u6210\u5BF9\u51FA\u73B0\u3002
    -- \u9000\u51FA\u5FAA\u73AF
        \u9000\u51FA\u6574\u4E2A\u5FAA\u73AF leave
        \u9000\u51FA\u5F53\u524D\u5FAA\u73AF iterate
        \u901A\u8FC7\u9000\u51FA\u7684\u6807\u7B7E\u51B3\u5B9A\u9000\u51FA\u54EA\u4E2A\u5FAA\u73AF
--// \u5185\u7F6E\u51FD\u6570 ----------
-- \u6570\u503C\u51FD\u6570
abs(x)          -- \u7EDD\u5BF9\u503C abs(-10.9) = 10
format(x, d)    -- \u683C\u5F0F\u5316\u5343\u5206\u4F4D\u6570\u503C format(1234567.456, 2) = 1,234,567.46
ceil(x)         -- \u5411\u4E0A\u53D6\u6574 ceil(10.1) = 11
floor(x)        -- \u5411\u4E0B\u53D6\u6574 floor (10.1) = 10
round(x)        -- \u56DB\u820D\u4E94\u5165\u53BB\u6574
mod(m, n)       -- m%n m mod n \u6C42\u4F59 10%3=1
pi()            -- \u83B7\u5F97\u5706\u5468\u7387
pow(m, n)       -- m^n
sqrt(x)         -- \u7B97\u672F\u5E73\u65B9\u6839
rand()          -- \u968F\u673A\u6570
truncate(x, d)  -- \u622A\u53D6d\u4F4D\u5C0F\u6570
-- \u65F6\u95F4\u65E5\u671F\u51FD\u6570
now(), current_timestamp();     -- \u5F53\u524D\u65E5\u671F\u65F6\u95F4
current_date();                 -- \u5F53\u524D\u65E5\u671F
current_time();                 -- \u5F53\u524D\u65F6\u95F4
date(&#39;yyyy-mm-dd hh:ii:ss&#39;);    -- \u83B7\u53D6\u65E5\u671F\u90E8\u5206
time(&#39;yyyy-mm-dd hh:ii:ss&#39;);    -- \u83B7\u53D6\u65F6\u95F4\u90E8\u5206
date_format(&#39;yyyy-mm-dd hh:ii:ss&#39;, &#39;%d %y %a %d %m %b %j&#39;); -- \u683C\u5F0F\u5316\u65F6\u95F4
unix_timestamp();               -- \u83B7\u5F97unix\u65F6\u95F4\u6233
from_unixtime();                -- \u4ECE\u65F6\u95F4\u6233\u83B7\u5F97\u65F6\u95F4
-- \u5B57\u7B26\u4E32\u51FD\u6570
length(string)          -- string\u957F\u5EA6\uFF0C\u5B57\u8282
char_length(string)     -- string\u7684\u5B57\u7B26\u4E2A\u6570
substring(str, position [,length])      -- \u4ECEstr\u7684position\u5F00\u59CB,\u53D6length\u4E2A\u5B57\u7B26
replace(str ,search_str ,replace_str)   -- \u5728str\u4E2D\u7528replace_str\u66FF\u6362search_str
instr(string ,substring)    -- \u8FD4\u56DEsubstring\u9996\u6B21\u5728string\u4E2D\u51FA\u73B0\u7684\u4F4D\u7F6E
concat(string [,...])   -- \u8FDE\u63A5\u5B57\u4E32
charset(str)            -- \u8FD4\u56DE\u5B57\u4E32\u5B57\u7B26\u96C6
lcase(string)           -- \u8F6C\u6362\u6210\u5C0F\u5199
left(string, length)    -- \u4ECEstring2\u4E2D\u7684\u5DE6\u8FB9\u8D77\u53D6length\u4E2A\u5B57\u7B26
load_file(file_name)    -- \u4ECE\u6587\u4EF6\u8BFB\u53D6\u5185\u5BB9
locate(substring, string [,start_position]) -- \u540Cinstr,\u4F46\u53EF\u6307\u5B9A\u5F00\u59CB\u4F4D\u7F6E
lpad(string, length, pad)   -- \u91CD\u590D\u7528pad\u52A0\u5728string\u5F00\u5934,\u76F4\u5230\u5B57\u4E32\u957F\u5EA6\u4E3Alength
ltrim(string)           -- \u53BB\u9664\u524D\u7AEF\u7A7A\u683C
repeat(string, count)   -- \u91CD\u590Dcount\u6B21
rpad(string, length, pad)   --\u5728str\u540E\u7528pad\u8865\u5145,\u76F4\u5230\u957F\u5EA6\u4E3Alength
rtrim(string)           -- \u53BB\u9664\u540E\u7AEF\u7A7A\u683C
strcmp(string1 ,string2)    -- \u9010\u5B57\u7B26\u6BD4\u8F83\u4E24\u5B57\u4E32\u5927\u5C0F
-- \u6D41\u7A0B\u51FD\u6570
case when [condition] then result [when [condition] then result ...] [else result] end   \u591A\u5206\u652F
if(expr1,expr2,expr3)  \u53CC\u5206\u652F\u3002
-- \u805A\u5408\u51FD\u6570
count()
sum();
max();
min();
avg();
group_concat()
-- \u5176\u4ED6\u5E38\u7528\u51FD\u6570
md5();
default();
--// \u5B58\u50A8\u51FD\u6570\uFF0C\u81EA\u5B9A\u4E49\u51FD\u6570 ----------
-- \u65B0\u5EFA
    CREATE FUNCTION function_name (\u53C2\u6570\u5217\u8868) RETURNS \u8FD4\u56DE\u503C\u7C7B\u578B
        \u51FD\u6570\u4F53
    - \u51FD\u6570\u540D\uFF0C\u5E94\u8BE5\u5408\u6CD5\u7684\u6807\u8BC6\u7B26\uFF0C\u5E76\u4E14\u4E0D\u5E94\u8BE5\u4E0E\u5DF2\u6709\u7684\u5173\u952E\u5B57\u51B2\u7A81\u3002
    - \u4E00\u4E2A\u51FD\u6570\u5E94\u8BE5\u5C5E\u4E8E\u67D0\u4E2A\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u4F7F\u7528db_name.funciton_name\u7684\u5F62\u5F0F\u6267\u884C\u5F53\u524D\u51FD\u6570\u6240\u5C5E\u6570\u636E\u5E93\uFF0C\u5426\u5219\u4E3A\u5F53\u524D\u6570\u636E\u5E93\u3002
    - \u53C2\u6570\u90E8\u5206\uFF0C\u7531&quot;\u53C2\u6570\u540D&quot;\u548C&quot;\u53C2\u6570\u7C7B\u578B&quot;\u7EC4\u6210\u3002\u591A\u4E2A\u53C2\u6570\u7528\u9017\u53F7\u9694\u5F00\u3002
    - \u51FD\u6570\u4F53\u7531\u591A\u6761\u53EF\u7528\u7684mysql\u8BED\u53E5\uFF0C\u6D41\u7A0B\u63A7\u5236\uFF0C\u53D8\u91CF\u58F0\u660E\u7B49\u8BED\u53E5\u6784\u6210\u3002
    - \u591A\u6761\u8BED\u53E5\u5E94\u8BE5\u4F7F\u7528 begin...end \u8BED\u53E5\u5757\u5305\u542B\u3002
    - \u4E00\u5B9A\u8981\u6709 return \u8FD4\u56DE\u503C\u8BED\u53E5\u3002
-- \u5220\u9664
    DROP FUNCTION [IF EXISTS] function_name;
-- \u67E5\u770B
    SHOW FUNCTION STATUS LIKE &#39;partten&#39;
    SHOW CREATE FUNCTION function_name;
-- \u4FEE\u6539
    ALTER FUNCTION function_name \u51FD\u6570\u9009\u9879
--// \u5B58\u50A8\u8FC7\u7A0B\uFF0C\u81EA\u5B9A\u4E49\u529F\u80FD ----------
-- \u5B9A\u4E49
\u5B58\u50A8\u5B58\u50A8\u8FC7\u7A0B \u662F\u4E00\u6BB5\u4EE3\u7801\uFF08\u8FC7\u7A0B\uFF09\uFF0C\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\u7684sql\u7EC4\u6210\u3002
\u4E00\u4E2A\u5B58\u50A8\u8FC7\u7A0B\u901A\u5E38\u7528\u4E8E\u5B8C\u6210\u4E00\u6BB5\u4E1A\u52A1\u903B\u8F91\uFF0C\u4F8B\u5982\u62A5\u540D\uFF0C\u4EA4\u73ED\u8D39\uFF0C\u8BA2\u5355\u5165\u5E93\u7B49\u3002
\u800C\u4E00\u4E2A\u51FD\u6570\u901A\u5E38\u4E13\u6CE8\u4E0E\u67D0\u4E2A\u529F\u80FD\uFF0C\u89C6\u4E3A\u5176\u4ED6\u7A0B\u5E8F\u670D\u52A1\u7684\uFF0C\u9700\u8981\u5728\u5176\u4ED6\u8BED\u53E5\u4E2D\u8C03\u7528\u51FD\u6570\u624D\u53EF\u4EE5\uFF0C\u800C\u5B58\u50A8\u8FC7\u7A0B\u4E0D\u80FD\u88AB\u5176\u4ED6\u8C03\u7528\uFF0C\u662F\u81EA\u5DF1\u6267\u884C \u901A\u8FC7call\u6267\u884C\u3002
-- \u521B\u5EFA
CREATE PROCEDURE sp_name (\u53C2\u6570\u5217\u8868)
    \u8FC7\u7A0B\u4F53
\u53C2\u6570\u5217\u8868\uFF1A\u4E0D\u540C\u4E8E\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\uFF0C\u9700\u8981\u6307\u660E\u53C2\u6570\u7C7B\u578B
IN\uFF0C\u8868\u793A\u8F93\u5165\u578B
OUT\uFF0C\u8868\u793A\u8F93\u51FA\u578B
INOUT\uFF0C\u8868\u793A\u6DF7\u5408\u578B
\u6CE8\u610F\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B58\u50A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B58\u50A8\u8FC7\u7A0B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u5B58\u50A8\u8FC7\u7A0B */ ------------------
\u5B58\u50A8\u8FC7\u7A0B\u662F\u4E00\u6BB5\u53EF\u6267\u884C\u6027\u4EE3\u7801\u7684\u96C6\u5408\u3002\u76F8\u6BD4\u51FD\u6570\uFF0C\u66F4\u504F\u5411\u4E8E\u4E1A\u52A1\u903B\u8F91\u3002
\u8C03\u7528\uFF1ACALL \u8FC7\u7A0B\u540D
-- \u6CE8\u610F
- \u6CA1\u6709\u8FD4\u56DE\u503C\u3002
- \u53EA\u80FD\u5355\u72EC\u8C03\u7528\uFF0C\u4E0D\u53EF\u5939\u6742\u5728\u5176\u4ED6\u8BED\u53E5\u4E2D
-- \u53C2\u6570
IN|OUT|INOUT \u53C2\u6570\u540D \u6570\u636E\u7C7B\u578B
IN      \u8F93\u5165\uFF1A\u5728\u8C03\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u6570\u636E\u8F93\u5165\u5230\u8FC7\u7A0B\u4F53\u5185\u90E8\u7684\u53C2\u6570
OUT     \u8F93\u51FA\uFF1A\u5728\u8C03\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u8FC7\u7A0B\u4F53\u5904\u7406\u5B8C\u7684\u7ED3\u679C\u8FD4\u56DE\u5230\u5BA2\u6237\u7AEF
INOUT   \u8F93\u5165\u8F93\u51FA\uFF1A\u65E2\u53EF\u8F93\u5165\uFF0C\u4E5F\u53EF\u8F93\u51FA
-- \u8BED\u6CD5
CREATE PROCEDURE \u8FC7\u7A0B\u540D (\u53C2\u6570\u5217\u8868)
BEGIN
    \u8FC7\u7A0B\u4F53
END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528\u6237\u548C\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u548C\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u7528\u6237\u548C\u6743\u9650\u7BA1\u7406</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u7528\u6237\u548C\u6743\u9650\u7BA1\u7406 */ ------------------
-- root\u5BC6\u7801\u91CD\u7F6E
1. \u505C\u6B62MySQL\u670D\u52A1
2.  [Linux] /usr/local/mysql/bin/safe_mysqld --skip-grant-tables &amp;
    [Windows] mysqld --skip-grant-tables
3. use mysql;
4. UPDATE \`user\` SET PASSWORD=PASSWORD(&quot;\u5BC6\u7801&quot;) WHERE \`user\` = &quot;root&quot;;
5. FLUSH PRIVILEGES;
\u7528\u6237\u4FE1\u606F\u8868\uFF1Amysql.user
-- \u5237\u65B0\u6743\u9650
FLUSH PRIVILEGES;
-- \u589E\u52A0\u7528\u6237
CREATE USER \u7528\u6237\u540D IDENTIFIED BY [PASSWORD] \u5BC6\u7801(\u5B57\u7B26\u4E32)
    - \u5FC5\u987B\u62E5\u6709mysql\u6570\u636E\u5E93\u7684\u5168\u5C40CREATE USER\u6743\u9650\uFF0C\u6216\u62E5\u6709INSERT\u6743\u9650\u3002
    - \u53EA\u80FD\u521B\u5EFA\u7528\u6237\uFF0C\u4E0D\u80FD\u8D4B\u4E88\u6743\u9650\u3002
    - \u7528\u6237\u540D\uFF0C\u6CE8\u610F\u5F15\u53F7\uFF1A\u5982 &#39;user_name&#39;@&#39;192.168.1.1&#39;
    - \u5BC6\u7801\u4E5F\u9700\u5F15\u53F7\uFF0C\u7EAF\u6570\u5B57\u5BC6\u7801\u4E5F\u8981\u52A0\u5F15\u53F7
    - \u8981\u5728\u7EAF\u6587\u672C\u4E2D\u6307\u5B9A\u5BC6\u7801\uFF0C\u9700\u5FFD\u7565PASSWORD\u5173\u952E\u8BCD\u3002\u8981\u628A\u5BC6\u7801\u6307\u5B9A\u4E3A\u7531PASSWORD()\u51FD\u6570\u8FD4\u56DE\u7684\u6DF7\u7F16\u503C\uFF0C\u9700\u5305\u542B\u5173\u952E\u5B57PASSWORD
-- \u91CD\u547D\u540D\u7528\u6237
RENAME USER old_user TO new_user
-- \u8BBE\u7F6E\u5BC6\u7801
SET PASSWORD = PASSWORD(&#39;\u5BC6\u7801&#39;)  -- \u4E3A\u5F53\u524D\u7528\u6237\u8BBE\u7F6E\u5BC6\u7801
SET PASSWORD FOR \u7528\u6237\u540D = PASSWORD(&#39;\u5BC6\u7801&#39;) -- \u4E3A\u6307\u5B9A\u7528\u6237\u8BBE\u7F6E\u5BC6\u7801
-- \u5220\u9664\u7528\u6237
DROP USER \u7528\u6237\u540D
-- \u5206\u914D\u6743\u9650/\u6DFB\u52A0\u7528\u6237
GRANT \u6743\u9650\u5217\u8868 ON \u8868\u540D TO \u7528\u6237\u540D [IDENTIFIED BY [PASSWORD] &#39;password&#39;]
    - all privileges \u8868\u793A\u6240\u6709\u6743\u9650
    - *.* \u8868\u793A\u6240\u6709\u5E93\u7684\u6240\u6709\u8868
    - \u5E93\u540D.\u8868\u540D \u8868\u793A\u67D0\u5E93\u4E0B\u9762\u7684\u67D0\u8868
    GRANT ALL PRIVILEGES ON \`pms\`.* TO &#39;pms&#39;@&#39;%&#39; IDENTIFIED BY &#39;pms0817&#39;;
-- \u67E5\u770B\u6743\u9650
SHOW GRANTS FOR \u7528\u6237\u540D
    -- \u67E5\u770B\u5F53\u524D\u7528\u6237\u6743\u9650
    SHOW GRANTS; \u6216 SHOW GRANTS FOR CURRENT_USER; \u6216 SHOW GRANTS FOR CURRENT_USER();
-- \u64A4\u6D88\u6743\u9650
REVOKE \u6743\u9650\u5217\u8868 ON \u8868\u540D FROM \u7528\u6237\u540D
REVOKE ALL PRIVILEGES, GRANT OPTION FROM \u7528\u6237\u540D   -- \u64A4\u9500\u6240\u6709\u6743\u9650
-- \u6743\u9650\u5C42\u7EA7
-- \u8981\u4F7F\u7528GRANT\u6216REVOKE\uFF0C\u60A8\u5FC5\u987B\u62E5\u6709GRANT OPTION\u6743\u9650\uFF0C\u5E76\u4E14\u60A8\u5FC5\u987B\u7528\u4E8E\u60A8\u6B63\u5728\u6388\u4E88\u6216\u64A4\u9500\u7684\u6743\u9650\u3002
\u5168\u5C40\u5C42\u7EA7\uFF1A\u5168\u5C40\u6743\u9650\u9002\u7528\u4E8E\u4E00\u4E2A\u7ED9\u5B9A\u670D\u52A1\u5668\u4E2D\u7684\u6240\u6709\u6570\u636E\u5E93\uFF0Cmysql.user
    GRANT ALL ON *.*\u548C REVOKE ALL ON *.*\u53EA\u6388\u4E88\u548C\u64A4\u9500\u5168\u5C40\u6743\u9650\u3002
\u6570\u636E\u5E93\u5C42\u7EA7\uFF1A\u6570\u636E\u5E93\u6743\u9650\u9002\u7528\u4E8E\u4E00\u4E2A\u7ED9\u5B9A\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u76EE\u6807\uFF0Cmysql.db, mysql.host
    GRANT ALL ON db_name.*\u548CREVOKE ALL ON db_name.*\u53EA\u6388\u4E88\u548C\u64A4\u9500\u6570\u636E\u5E93\u6743\u9650\u3002
\u8868\u5C42\u7EA7\uFF1A\u8868\u6743\u9650\u9002\u7528\u4E8E\u4E00\u4E2A\u7ED9\u5B9A\u8868\u4E2D\u7684\u6240\u6709\u5217\uFF0Cmysql.talbes_priv
    GRANT ALL ON db_name.tbl_name\u548CREVOKE ALL ON db_name.tbl_name\u53EA\u6388\u4E88\u548C\u64A4\u9500\u8868\u6743\u9650\u3002
\u5217\u5C42\u7EA7\uFF1A\u5217\u6743\u9650\u9002\u7528\u4E8E\u4E00\u4E2A\u7ED9\u5B9A\u8868\u4E2D\u7684\u5355\u4E00\u5217\uFF0Cmysql.columns_priv
    \u5F53\u4F7F\u7528REVOKE\u65F6\uFF0C\u60A8\u5FC5\u987B\u6307\u5B9A\u4E0E\u88AB\u6388\u6743\u5217\u76F8\u540C\u7684\u5217\u3002
-- \u6743\u9650\u5217\u8868
ALL [PRIVILEGES]    -- \u8BBE\u7F6E\u9664GRANT OPTION\u4E4B\u5916\u7684\u6240\u6709\u7B80\u5355\u6743\u9650
ALTER   -- \u5141\u8BB8\u4F7F\u7528ALTER TABLE
ALTER ROUTINE   -- \u66F4\u6539\u6216\u53D6\u6D88\u5DF2\u5B58\u50A8\u7684\u5B50\u7A0B\u5E8F
CREATE  -- \u5141\u8BB8\u4F7F\u7528CREATE TABLE
CREATE ROUTINE  -- \u521B\u5EFA\u5DF2\u5B58\u50A8\u7684\u5B50\u7A0B\u5E8F
CREATE TEMPORARY TABLES     -- \u5141\u8BB8\u4F7F\u7528CREATE TEMPORARY TABLE
CREATE USER     -- \u5141\u8BB8\u4F7F\u7528CREATE USER, DROP USER, RENAME USER\u548CREVOKE ALL PRIVILEGES\u3002
CREATE VIEW     -- \u5141\u8BB8\u4F7F\u7528CREATE VIEW
DELETE  -- \u5141\u8BB8\u4F7F\u7528DELETE
DROP    -- \u5141\u8BB8\u4F7F\u7528DROP TABLE
EXECUTE     -- \u5141\u8BB8\u7528\u6237\u8FD0\u884C\u5DF2\u5B58\u50A8\u7684\u5B50\u7A0B\u5E8F
FILE    -- \u5141\u8BB8\u4F7F\u7528SELECT...INTO OUTFILE\u548CLOAD DATA INFILE
INDEX   -- \u5141\u8BB8\u4F7F\u7528CREATE INDEX\u548CDROP INDEX
INSERT  -- \u5141\u8BB8\u4F7F\u7528INSERT
LOCK TABLES     -- \u5141\u8BB8\u5BF9\u60A8\u62E5\u6709SELECT\u6743\u9650\u7684\u8868\u4F7F\u7528LOCK TABLES
PROCESS     -- \u5141\u8BB8\u4F7F\u7528SHOW FULL PROCESSLIST
REFERENCES  -- \u672A\u88AB\u5B9E\u65BD
RELOAD  -- \u5141\u8BB8\u4F7F\u7528FLUSH
REPLICATION CLIENT  -- \u5141\u8BB8\u7528\u6237\u8BE2\u95EE\u4ECE\u5C5E\u670D\u52A1\u5668\u6216\u4E3B\u670D\u52A1\u5668\u7684\u5730\u5740
REPLICATION SLAVE   -- \u7528\u4E8E\u590D\u5236\u578B\u4ECE\u5C5E\u670D\u52A1\u5668\uFF08\u4ECE\u4E3B\u670D\u52A1\u5668\u4E2D\u8BFB\u53D6\u4E8C\u8FDB\u5236\u65E5\u5FD7\u4E8B\u4EF6\uFF09
SELECT  -- \u5141\u8BB8\u4F7F\u7528SELECT
SHOW DATABASES  -- \u663E\u793A\u6240\u6709\u6570\u636E\u5E93
SHOW VIEW   -- \u5141\u8BB8\u4F7F\u7528SHOW CREATE VIEW
SHUTDOWN    -- \u5141\u8BB8\u4F7F\u7528mysqladmin shutdown
SUPER   -- \u5141\u8BB8\u4F7F\u7528CHANGE MASTER, KILL, PURGE MASTER LOGS\u548CSET GLOBAL\u8BED\u53E5\uFF0Cmysqladmin debug\u547D\u4EE4\uFF1B\u5141\u8BB8\u60A8\u8FDE\u63A5\uFF08\u4E00\u6B21\uFF09\uFF0C\u5373\u4F7F\u5DF2\u8FBE\u5230max_connections\u3002
UPDATE  -- \u5141\u8BB8\u4F7F\u7528UPDATE
USAGE   -- \u201C\u65E0\u6743\u9650\u201D\u7684\u540C\u4E49\u8BCD
GRANT OPTION    -- \u5141\u8BB8\u6388\u4E88\u6743\u9650
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8868\u7EF4\u62A4" tabindex="-1"><a class="header-anchor" href="#\u8868\u7EF4\u62A4" aria-hidden="true">#</a> \u8868\u7EF4\u62A4</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u8868\u7EF4\u62A4 */
-- \u5206\u6790\u548C\u5B58\u50A8\u8868\u7684\u5173\u952E\u5B57\u5206\u5E03
ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE \u8868\u540D ...
-- \u68C0\u67E5\u4E00\u4E2A\u6216\u591A\u4E2A\u8868\u662F\u5426\u6709\u9519\u8BEF
CHECK TABLE tbl_name [, tbl_name] ... [option] ...
option = {QUICK | FAST | MEDIUM | EXTENDED | CHANGED}
-- \u6574\u7406\u6570\u636E\u6587\u4EF6\u7684\u788E\u7247
OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6742\u9879" tabindex="-1"><a class="header-anchor" href="#\u6742\u9879" aria-hidden="true">#</a> \u6742\u9879</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>/* \u6742\u9879 */ ------------------
1. \u53EF\u7528\u53CD\u5F15\u53F7\uFF08\`\uFF09\u4E3A\u6807\u8BC6\u7B26\uFF08\u5E93\u540D\u3001\u8868\u540D\u3001\u5B57\u6BB5\u540D\u3001\u7D22\u5F15\u3001\u522B\u540D\uFF09\u5305\u88F9\uFF0C\u4EE5\u907F\u514D\u4E0E\u5173\u952E\u5B57\u91CD\u540D\uFF01\u4E2D\u6587\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u6807\u8BC6\u7B26\uFF01
2. \u6BCF\u4E2A\u5E93\u76EE\u5F55\u5B58\u5728\u4E00\u4E2A\u4FDD\u5B58\u5F53\u524D\u6570\u636E\u5E93\u7684\u9009\u9879\u6587\u4EF6db.opt\u3002
3. \u6CE8\u91CA\uFF1A
    \u5355\u884C\u6CE8\u91CA # \u6CE8\u91CA\u5185\u5BB9
    \u591A\u884C\u6CE8\u91CA /* \u6CE8\u91CA\u5185\u5BB9 */
    \u5355\u884C\u6CE8\u91CA -- \u6CE8\u91CA\u5185\u5BB9     (\u6807\u51C6SQL\u6CE8\u91CA\u98CE\u683C\uFF0C\u8981\u6C42\u53CC\u7834\u6298\u53F7\u540E\u52A0\u4E00\u7A7A\u683C\u7B26\uFF08\u7A7A\u683C\u3001TAB\u3001\u6362\u884C\u7B49\uFF09)
4. \u6A21\u5F0F\u901A\u914D\u7B26\uFF1A
    _   \u4EFB\u610F\u5355\u4E2A\u5B57\u7B26
    %   \u4EFB\u610F\u591A\u4E2A\u5B57\u7B26\uFF0C\u751A\u81F3\u5305\u62EC\u96F6\u5B57\u7B26
    \u5355\u5F15\u53F7\u9700\u8981\u8FDB\u884C\u8F6C\u4E49 \\&#39;
5. CMD\u547D\u4EE4\u884C\u5185\u7684\u8BED\u53E5\u7ED3\u675F\u7B26\u53EF\u4EE5\u4E3A &quot;;&quot;, &quot;\\G&quot;, &quot;\\g&quot;\uFF0C\u4EC5\u5F71\u54CD\u663E\u793A\u7ED3\u679C\u3002\u5176\u4ED6\u5730\u65B9\u8FD8\u662F\u7528\u5206\u53F7\u7ED3\u675F\u3002delimiter \u53EF\u4FEE\u6539\u5F53\u524D\u5BF9\u8BDD\u7684\u8BED\u53E5\u7ED3\u675F\u7B26\u3002
6. SQL\u5BF9\u5927\u5C0F\u5199\u4E0D\u654F\u611F
7. \u6E05\u9664\u5DF2\u6709\u8BED\u53E5\uFF1A\\c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),v=[d];function a(r,m){return i(),e("div",null,v)}var b=n(l,[["render",a],["__file","a-thousand-lines-of-mysql-study-notes.html.vue"]]);export{b as default};
