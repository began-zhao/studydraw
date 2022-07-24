"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSitemapPlugin = void 0;
const vuepress_plugin_sitemap2_1 = require("vuepress-plugin-sitemap2");
const getSitemapPlugin = (options, hostname, legacy = false) => {
    if (options === false)
        return null;
    // disable sitemap if `hostname` is not set and no options for sitemap plugin
    if (!Object.keys(options || {}).length && !hostname)
        return null;
    return (0, vuepress_plugin_sitemap2_1.sitemapPlugin)({
        hostname,
        ...(options || {}),
    }, legacy);
};
exports.getSitemapPlugin = getSitemapPlugin;
//# sourceMappingURL=sitemap.js.map