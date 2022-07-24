"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLayoutConfig = void 0;
const utils_1 = require("@vuepress/utils");
const getLayoutConfig = (app, plugins) => {
    const layoutConfig = {
        Layout: utils_1.path.resolve(__dirname, "../client/layouts/Layout.js"),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        404: utils_1.path.resolve(__dirname, "../client/layouts/404.js"),
    };
    if (plugins.mdEnhance &&
        (plugins.mdEnhance.enableAll || plugins.mdEnhance.presentation))
        layoutConfig["Slide"] = utils_1.path.resolve(__dirname, "../client/layouts/Slide.js");
    if (plugins.blog)
        layoutConfig["Blog"] = utils_1.path.resolve(__dirname, "../client/module/blog/layouts/Blog.js");
    if (app.env.isDebug)
        console.log("Theme layout config:", layoutConfig);
    return layoutConfig;
};
exports.getLayoutConfig = getLayoutConfig;
//# sourceMappingURL=layout.js.map