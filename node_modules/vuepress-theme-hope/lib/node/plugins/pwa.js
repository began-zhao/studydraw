"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPWAPlugin = void 0;
const vuepress_plugin_pwa2_1 = require("vuepress-plugin-pwa2");
const getPWAPlugin = (options, legacy = false) => {
    if (!options)
        return null;
    return (0, vuepress_plugin_pwa2_1.pwaPlugin)(typeof options === "object" ? options : {}, legacy);
};
exports.getPWAPlugin = getPWAPlugin;
//# sourceMappingURL=pwa.js.map