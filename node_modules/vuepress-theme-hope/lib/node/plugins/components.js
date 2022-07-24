"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentsPlugin = void 0;
const vuepress_plugin_components_1 = require("vuepress-plugin-components");
const getComponentsPlugin = (components = ["Badge", "FontIcon"], options) => (0, vuepress_plugin_components_1.componentsPlugin)({
    // FontIcon component is used by theme so we MUST enable it
    components: components.includes("FontIcon")
        ? components
        : ["FontIcon", ...components],
    backToTop: typeof options.backToTop === "number"
        ? options.backToTop
        : options.backToTop !== false,
    ...(options.addThis ? { addThis: options.addThis } : {}),
    ...(options.iconAssets ? { iconAssets: options.iconAssets } : {}),
    ...(options.iconPrefix ? { iconPrefix: options.iconPrefix } : {}),
});
exports.getComponentsPlugin = getComponentsPlugin;
//# sourceMappingURL=components.js.map