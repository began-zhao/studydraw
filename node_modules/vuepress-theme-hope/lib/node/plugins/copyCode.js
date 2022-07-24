"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCopyCodePlugin = void 0;
const vuepress_plugin_copy_code2_1 = require("vuepress-plugin-copy-code2");
const getCopyCodePlugin = (themeData, options) => {
    if (options === false)
        return null;
    return (0, vuepress_plugin_copy_code2_1.copyCodePlugin)({
        selector: '.theme-hope-content div[class*="language-"] pre',
        pure: themeData.pure,
        ...options,
    });
};
exports.getCopyCodePlugin = getCopyCodePlugin;
//# sourceMappingURL=copyCode.js.map