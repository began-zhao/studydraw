"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveHeaderLinksPlugin = void 0;
const plugin_active_header_links_1 = require("@vuepress/plugin-active-header-links");
/**
 * Resolve options for @vuepress/plugin-active-header-links
 */
const getActiveHeaderLinksPlugin = (activeHeaderLinks) => {
    if (activeHeaderLinks === false)
        return null;
    return (0, plugin_active_header_links_1.activeHeaderLinksPlugin)({
        headerLinkSelector: ".sidebar-link, .toc-link",
        headerAnchorSelector: ".header-anchor",
    });
};
exports.getActiveHeaderLinksPlugin = getActiveHeaderLinksPlugin;
//# sourceMappingURL=activeHeaderLinks.js.map