"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCopyrightPlugin = void 0;
const vuepress_plugin_copyright2_1 = require("vuepress-plugin-copyright2");
const vuepress_shared_1 = require("vuepress-shared");
const getCopyrightPlugin = (themeConfig, options, hostname) => {
    if (!options)
        return null;
    return (0, vuepress_plugin_copyright2_1.copyrightPlugin)({
        hostname,
        author: (page) => (0, vuepress_shared_1.getAuthor)(page.frontmatter.author)?.[0]?.name ||
            (0, vuepress_shared_1.getAuthor)(themeConfig.author)?.[0]?.name ||
            "",
        ...(typeof options === "object" ? options : { global: true }),
    });
};
exports.getCopyrightPlugin = getCopyrightPlugin;
//# sourceMappingURL=copyright.js.map