"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendsPage = exports.checkFrontmatter = void 0;
const utils_1 = require("@vuepress/utils");
const vuepress_shared_1 = require("vuepress-shared");
const checkFrontmatter = (page, isDev = false) => {
    const frontmatter = page.frontmatter;
    const { filePathRelative } = page;
    // check date
    if ("date" in frontmatter && !(frontmatter.date instanceof Date)) {
        if (isDev)
            utils_1.logger.error(`"date" roperty in Page FrontMatter should be a valid Date.${filePathRelative ? `\nFound in ${filePathRelative}` : ""}`);
        delete frontmatter.date;
    }
    // resolve category
    if ("category" in frontmatter) {
        const category = (0, vuepress_shared_1.getCategory)(frontmatter.category);
        frontmatter.category = category;
    }
    // resolve tag
    if ("tag" in frontmatter) {
        const tag = (0, vuepress_shared_1.getTag)(frontmatter.tag);
        frontmatter.tag = tag;
    }
};
exports.checkFrontmatter = checkFrontmatter;
const extendsPage = (themeConfig, plugins, page, isDev = false) => {
    const { config = {} } = themeConfig.encrypt;
    const frontmatter = page.frontmatter;
    const { filePathRelative, path } = page;
    const { createdTime } = page.data.git || {};
    (0, exports.checkFrontmatter)(page, isDev);
    // save relative file path into page data to generate edit link
    page.data.filePathRelative = filePathRelative;
    // inject localized date
    (0, vuepress_shared_1.injectLocalizedDate)(page);
    // save basic info to routeMeta
    page.routeMeta = {
        ...page.routeMeta,
        title: page.title,
        icon: frontmatter.icon,
    };
    // resolve shortTitle
    if ("shortTitle" in frontmatter)
        page.routeMeta["shortTitle"] = frontmatter.shortTitle;
    if (plugins.blog) {
        const isArticle = 
        // declaring this is an article
        frontmatter.article ||
            // generated from markdown files
            Boolean(frontmatter.article !== false && filePathRelative);
        const isEncrypted = Object.keys(config).some((key) => path.startsWith(key));
        const isSlide = isArticle && frontmatter.layout === "Slide";
        // save basic info to routeMeta
        page.routeMeta = {
            ...page.routeMeta,
            type: frontmatter.home
                ? "home"
                : isSlide
                    ? "slide"
                    : isArticle
                        ? "article"
                        : "page",
            readingTime: page.data.readingTime,
            excerpt: isEncrypted
                ? ""
                : page.excerpt ||
                    frontmatter.description ||
                    (typeof plugins.blog === "object" && plugins.blog.autoExcerpt
                        ? frontmatter.summary
                        : ""),
        };
        // resolve author
        if ("author" in frontmatter)
            page.routeMeta["author"] = frontmatter.author;
        // resolve date
        if ("date" in frontmatter) {
            const date = (0, vuepress_shared_1.getDate)(page.frontmatter.date)?.value;
            if (date) {
                page.routeMeta["date"] = frontmatter.date;
                page.routeMeta["localizedDate"] = (0, vuepress_shared_1.timeTransformer)(date, {
                    lang: page.lang,
                    type: "date",
                });
            }
        }
        else if (createdTime)
            page.routeMeta["date"] = new Date(createdTime);
        if ("category" in frontmatter)
            // resolve category
            // resolve category
            page.routeMeta["category"] = frontmatter.category;
        // resolve tag
        if ("tag" in frontmatter)
            page.routeMeta["tag"] = frontmatter.tag;
        // resolve sticky
        if ("sticky" in frontmatter)
            page.routeMeta["sticky"] = frontmatter.sticky;
        // resolve star
        if ("star" in frontmatter)
            page.routeMeta["star"] = frontmatter.star;
        // resolve image
        if ("cover" in frontmatter)
            page.routeMeta["image"] = frontmatter.cover;
        // resolve isOriginal
        if ("isOriginal" in frontmatter)
            page.routeMeta["isOriginal"] = frontmatter.isOriginal;
        // resolve encrypted
        if (isEncrypted)
            page.routeMeta["isEncrypted"] = true;
    }
};
exports.extendsPage = extendsPage;
//# sourceMappingURL=extendsPage.js.map