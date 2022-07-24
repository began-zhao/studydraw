"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareThemeColorScss = void 0;
const prepareThemeColorScss = async (app, themeConfig) => {
    await app.writeTemp("theme-hope/theme-color.scss", `$picker: (${Object.entries(themeConfig.themeColor || {})
        .map(([color, value]) => `"${color}": ${value}`)
        .join(",")});`);
};
exports.prepareThemeColorScss = prepareThemeColorScss;
//# sourceMappingURL=themeColor.js.map