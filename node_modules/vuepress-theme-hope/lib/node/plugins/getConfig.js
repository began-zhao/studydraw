"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPluginConfig = void 0;
const plugin_external_link_icon_1 = require("@vuepress/plugin-external-link-icon");
const plugin_nprogress_1 = require("@vuepress/plugin-nprogress");
const plugin_prismjs_1 = require("@vuepress/plugin-prismjs");
const plugin_theme_data_1 = require("@vuepress/plugin-theme-data");
const activeHeaderLinks_1 = require("./activeHeaderLinks");
const blog_1 = require("./blog");
const comment_1 = require("./comment");
const components_1 = require("./components");
const copyCode_1 = require("./copyCode");
const copyright_1 = require("./copyright");
const feed_1 = require("./feed");
const mdEnhance_1 = require("./mdEnhance");
const photoSwipe_1 = require("./photoSwipe");
const pwa_1 = require("./pwa");
const sitemap_1 = require("./sitemap");
const seo_1 = require("./seo");
const getPluginConfig = (plugins, themeData, options, legacy = false) => {
    const pluginConfig = [
        (0, components_1.getComponentsPlugin)(plugins.components, options),
        (0, activeHeaderLinks_1.getActiveHeaderLinksPlugin)(plugins.activeHeaderLinks),
        plugins.externalLinkIcon === false ? null : (0, plugin_external_link_icon_1.externalLinkIconPlugin)(),
        plugins.nprogress === false ? null : (0, plugin_nprogress_1.nprogressPlugin)(),
        plugins.prismjs === false ? null : (0, plugin_prismjs_1.prismjsPlugin)(),
        (0, plugin_theme_data_1.themeDataPlugin)({ themeData }),
        (0, blog_1.getBlogPlugin)(themeData, plugins.blog),
        (0, comment_1.getCommentPlugin)(plugins.comment, legacy),
        (0, copyCode_1.getCopyCodePlugin)(themeData, plugins.copyCode),
        (0, copyright_1.getCopyrightPlugin)(themeData, plugins.copyright, options.hostname),
        // seo should work before feed
        (0, seo_1.getSEOPlugin)(themeData, plugins, options.hostname, legacy),
        (0, feed_1.getFeedPlugin)(themeData, plugins.feed, options.hostname, legacy),
        (0, mdEnhance_1.getMdEnhancePlugin)(plugins.mdEnhance, legacy),
        (0, photoSwipe_1.getPhotoSwipePlugin)(plugins.photoSwipe),
        (0, pwa_1.getPWAPlugin)(plugins.pwa, legacy),
        (0, sitemap_1.getSitemapPlugin)(plugins.sitemap, options.hostname, legacy),
    ].filter((item) => item !== null);
    return pluginConfig;
};
exports.getPluginConfig = getPluginConfig;
//# sourceMappingURL=getConfig.js.map