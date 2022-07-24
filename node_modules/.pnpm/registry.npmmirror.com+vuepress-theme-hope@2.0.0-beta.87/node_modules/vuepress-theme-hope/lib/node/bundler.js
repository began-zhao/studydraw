"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBundlerConfig = exports.checkTag = void 0;
const vuepress_shared_1 = require("vuepress-shared");
/**
 * Add tags as customElement
 *
 * @param config VuePress Bundler config
 * @param app VuePress Node App
 * @param customElements tags recognized as custom element
 */
const checkTag = (config, app) => {
    const { bundler } = app.options;
    // for vite
    if (bundler.name.endsWith("vite")) {
        const viteBundlerConfig = config;
        if (!viteBundlerConfig.vuePluginOptions)
            viteBundlerConfig.vuePluginOptions = {};
        if (!viteBundlerConfig.vuePluginOptions.template)
            viteBundlerConfig.vuePluginOptions.template = {};
        if (!viteBundlerConfig.vuePluginOptions.template.compilerOptions)
            viteBundlerConfig.vuePluginOptions.template.compilerOptions = {};
        const { isCustomElement } = viteBundlerConfig.vuePluginOptions.template.compilerOptions;
        viteBundlerConfig.vuePluginOptions.template.compilerOptions.isCustomElement =
            (tag) => {
                if (isCustomElement) {
                    const result = isCustomElement(tag);
                    if (!result)
                        (0, vuepress_shared_1.tagHint)(tag, app.env.isDebug);
                    return result;
                }
                (0, vuepress_shared_1.tagHint)(tag, app.env.isDebug);
            };
    }
    // for webpack
    if (bundler.name.endsWith("webpack")) {
        const webpackBundlerConfig = config;
        if (!webpackBundlerConfig.vue)
            webpackBundlerConfig.vue = {};
        if (!webpackBundlerConfig.vue.compilerOptions)
            webpackBundlerConfig.vue.compilerOptions = {};
        const { isCustomElement } = webpackBundlerConfig.vue.compilerOptions;
        webpackBundlerConfig.vue.compilerOptions.isCustomElement = (tag) => {
            if (isCustomElement) {
                const result = isCustomElement(tag);
                if (!result)
                    (0, vuepress_shared_1.tagHint)(tag, app.env.isDebug);
                return result;
            }
            (0, vuepress_shared_1.tagHint)(tag, app.env.isDebug);
        };
    }
};
exports.checkTag = checkTag;
const updateBundlerConfig = (config, app) => {
    (0, vuepress_shared_1.addViteOptimizeDepsInclude)({ app, config }, "@vueuse/core");
    (0, exports.checkTag)(config, app);
};
exports.updateBundlerConfig = updateBundlerConfig;
//# sourceMappingURL=bundler.js.map