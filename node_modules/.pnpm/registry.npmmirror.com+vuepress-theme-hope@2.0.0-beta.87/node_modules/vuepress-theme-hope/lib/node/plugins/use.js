"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePlugin = void 0;
const utils_1 = require("@vuepress/utils");
const vuepress_plugin_reading_time2_1 = require("vuepress-plugin-reading-time2");
const vuepress_plugin_sass_palette_1 = require("vuepress-plugin-sass-palette");
const vuepress_shared_1 = require("vuepress-shared");
const usePlugin = (app, plugins) => {
    // only use git plugin in production or debug mode
    if (app.env.isDebug || app.env.isBuild)
        (0, vuepress_shared_1.useGitPlugin)(app, "git" in plugins
            ? plugins.git || false
            : {
                createdTime: true,
                contributors: true,
                updatedTime: true,
            });
    (0, vuepress_plugin_reading_time2_1.useReadingTimePlugin)(app, {
        wordPerMinute: plugins.readingTime?.wordPerMinute || 300,
    });
    (0, vuepress_plugin_sass_palette_1.useSassPalettePlugin)(app, {
        id: "hope",
        config: ".vuepress/styles/config.scss",
        defaultConfig: utils_1.path.resolve(__dirname, "../../../templates/config.scss"),
        defaultPalette: utils_1.path.resolve(__dirname, "../../../templates/palette.scss"),
        generator: utils_1.path.resolve(__dirname, "../../../templates/generator.scss"),
        palette: ".vuepress/styles/palette.scss",
        style: ".vuepress/styles/index.scss",
    });
};
exports.usePlugin = usePlugin;
//# sourceMappingURL=use.js.map