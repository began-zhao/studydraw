"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeedPlugin = void 0;
const vuepress_plugin_feed2_1 = require("vuepress-plugin-feed2");
const vuepress_shared_1 = require("vuepress-shared");
const getFeedPlugin = (themeConfig, options, hostname, legacy = false) => {
    if (options === false ||
        // disable feed if no options for feed plugin
        !Object.keys(options || {}).length)
        return null;
    return (0, vuepress_plugin_feed2_1.feedPlugin)(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (0, vuepress_shared_1.deepAssign)({
        hostname,
        author: themeConfig.author,
        locales: Object.entries(themeConfig.locales).map(([localePath, { author, copyright }]) => [
            localePath,
            { author, channel: { copyright } },
        ]),
        customElements: [
            "ExternalLinkIcon",
            "Badge",
            "ChartJS",
            "CodeDemo",
            "CodeTabs",
            "FlowChart",
            "Mermaid",
            "Presentation",
        ],
    }, options || {}), legacy);
};
exports.getFeedPlugin = getFeedPlugin;
//# sourceMappingURL=feed.js.map