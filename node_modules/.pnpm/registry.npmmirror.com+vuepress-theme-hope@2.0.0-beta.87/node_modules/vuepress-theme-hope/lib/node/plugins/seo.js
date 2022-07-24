"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSEOPlugin = void 0;
const vuepress_plugin_seo2_1 = require("vuepress-plugin-seo2");
const blog_1 = require("./blog");
const getSEOPlugin = (themeConfig, { blog, seo }, hostname = "", legacy = false) => {
    if (seo === false)
        return null;
    // disable seo if `hostname` is not set and no options for seo plugin
    if (!Object.keys(seo || {}).length && !hostname)
        return null;
    const blogOptions = (0, blog_1.getBlogOptions)(blog);
    const isArticle = ({ filePathRelative, frontmatter, pathLocale, path, }) => {
        if (!filePathRelative || frontmatter["home"])
            return false;
        const localePath = path.replace(new RegExp(`^${pathLocale}`), "/");
        return Object.entries(blogOptions)
            .filter((item) => typeof item[1] === "string")
            .every(([, value]) => !localePath.startsWith(value));
    };
    return (0, vuepress_plugin_seo2_1.seoPlugin)({
        hostname,
        ...(themeConfig.author ? { author: themeConfig.author } : {}),
        isArticle,
        ...(seo || {}),
    }, legacy);
};
exports.getSEOPlugin = getSEOPlugin;
//# sourceMappingURL=seo.js.map