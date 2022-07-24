"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogPlugin = exports.getTitleLocales = exports.getBlogOptions = void 0;
const vuepress_plugin_blog2_1 = require("vuepress-plugin-blog2");
const defaultOptions = {
    article: "/article/",
    category: "/category/",
    categoryItem: "/category/:name/",
    tag: "/tag/",
    tagItem: "/tag/:name/",
    encrypted: "/encrypted/",
    slide: "/slide/",
    star: "/star/",
    timeline: "/timeline/",
};
const compareDate = (dateA, dateB) => {
    if (!dateA)
        return 1;
    if (!dateB)
        return -1;
    return dateB.getTime() - dateA.getTime();
};
const sorter = (pageA, pageB) => {
    const prevKey = pageA.frontmatter.sticky;
    const nextKey = pageB.frontmatter.sticky;
    if (prevKey && nextKey && prevKey !== nextKey)
        return Number(nextKey) - Number(prevKey);
    if (prevKey && !nextKey)
        return -1;
    if (!prevKey && nextKey)
        return 1;
    return compareDate(pageA.routeMeta.date, pageB.routeMeta.date);
};
const getBlogOptions = (options) => ({
    ...defaultOptions,
    ...(typeof options === "object" ? options : {}),
});
exports.getBlogOptions = getBlogOptions;
const getTitleLocales = (themeData, key) => Object.fromEntries(Object.entries(themeData.locales).map(([localePath, value]) => [
    localePath,
    value.blogLocales[key],
]));
exports.getTitleLocales = getTitleLocales;
const getBlogPlugin = (themeData, options) => {
    if (!options)
        return null;
    const blogOptions = {
        ...defaultOptions,
        ...(typeof options === "object" ? options : {}),
    };
    return (0, vuepress_plugin_blog2_1.blogPlugin)({
        metaScope: "",
        filter: blogOptions.filter ||
            (({ frontmatter, filePathRelative, routeMeta }) => Boolean(filePathRelative) &&
                frontmatter["home"] !== true &&
                routeMeta["type"] !== "page"),
        category: [
            {
                key: "category",
                getter: ({ routeMeta, }) => routeMeta.category || [],
                sorter,
                path: blogOptions.category,
                layout: "Blog",
                frontmatter: (localePath) => ({
                    title: themeData.locales[localePath].blogLocales.category,
                }),
                itemPath: blogOptions.categoryItem,
                itemFrontmatter: (name, localePath) => ({
                    title: `${name} ${themeData.locales[localePath].blogLocales.category}`,
                }),
                itemLayout: "Blog",
            },
            {
                key: "tag",
                getter: ({ routeMeta, }) => routeMeta.tag || [],
                sorter,
                path: blogOptions.tag,
                layout: "Blog",
                frontmatter: (localePath) => ({
                    title: themeData.locales[localePath].blogLocales.tag,
                }),
                itemPath: blogOptions.tagItem,
                itemLayout: "Blog",
                itemFrontmatter: (name, localePath) => ({
                    title: `${name} ${themeData.locales[localePath].blogLocales.tag}`,
                }),
            },
        ],
        type: [
            {
                key: "article",
                sorter,
                filter: ({ frontmatter, }) => frontmatter.article !== false,
                path: blogOptions.article,
                layout: "Blog",
                frontmatter: (localePath) => ({
                    title: themeData.locales[localePath].blogLocales.article,
                }),
            },
            {
                key: "encrypted",
                sorter,
                filter: ({ routeMeta, }) => Boolean(routeMeta.isEncrypted),
                path: blogOptions.encrypted,
                layout: "Blog",
                frontmatter: (localePath) => ({
                    title: themeData.locales[localePath].blogLocales.encrypt,
                }),
            },
            {
                key: "slide",
                sorter,
                filter: ({ routeMeta, }) => routeMeta.type === "slide",
                path: blogOptions.slide,
                layout: "Blog",
                frontmatter: (localePath) => ({
                    title: themeData.locales[localePath].blogLocales.slides,
                }),
            },
            {
                key: "star",
                sorter,
                filter: ({ frontmatter, }) => Boolean(frontmatter.star),
                path: blogOptions.star,
                layout: "Blog",
                frontmatter: (localePath) => ({
                    title: themeData.locales[localePath].blogLocales.star,
                }),
            },
            {
                key: "timeline",
                sorter: (pageA, pageB) => compareDate(pageA.routeMeta.date, pageB.routeMeta.date),
                filter: ({ frontmatter, routeMeta, }) => "date" in routeMeta && frontmatter["timeline"] !== false,
                path: blogOptions.timeline,
                layout: "Blog",
                frontmatter: (localePath) => ({
                    title: themeData.locales[localePath].blogLocales.timeline,
                }),
            },
        ],
    });
};
exports.getBlogPlugin = getBlogPlugin;
//# sourceMappingURL=blog.js.map