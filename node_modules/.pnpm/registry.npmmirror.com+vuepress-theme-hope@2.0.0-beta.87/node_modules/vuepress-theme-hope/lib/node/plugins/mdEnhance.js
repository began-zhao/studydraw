"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMdEnhancePlugin = void 0;
const vuepress_plugin_md_enhance_1 = require("vuepress-plugin-md-enhance");
const getMdEnhancePlugin = (options, legacy = false) => {
    if (options === false)
        return null;
    return (0, vuepress_plugin_md_enhance_1.mdEnhancePlugin)({
        container: true,
        ...(options || {}),
    }, legacy);
};
exports.getMdEnhancePlugin = getMdEnhancePlugin;
//# sourceMappingURL=mdEnhance.js.map