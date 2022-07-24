"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSocialMediaIcons = void 0;
const utils_1 = require("@vuepress/utils");
const utils_2 = require("./utils");
const checkSocialMediaIcons = (themeConfig) => {
    const icons = {};
    const checkIcon = (key, value) => {
        if (typeof value === "string") {
            const templatePath = utils_1.path.resolve(__dirname, `../../templates/socialMediaIcons/${key.toLocaleLowerCase()}.svg`);
            if (utils_1.fs.existsSync(templatePath)) {
                icons[key] = utils_1.fs.readFileSync(templatePath, { encoding: "utf-8" });
                return value;
            }
            utils_2.logger.warn(`${key} icon in blog media config not found!`);
            return false;
        }
        if (Array.isArray(value)) {
            // it’s a svg string
            if (value[1].startsWith("<svg")) {
                icons[key] = value[1];
                return value[0];
            }
            // it’s probably a path
            if (utils_1.fs.existsSync(value[1])) {
                icons[key] = utils_1.fs.readFileSync(value[1], { encoding: "utf-8" });
                return value[0];
            }
            utils_2.logger.warn(`${key}'s icon ${value[1]} in blog media config is invalid!`);
            return false;
        }
        utils_2.logger.warn(`${key} icon in blog media config has an invalid config!`);
        return false;
    };
    Object.entries(themeConfig.blog?.medias || {}).forEach(([key, value]) => {
        const result = checkIcon(key, value);
        if (result)
            themeConfig.blog.medias[key] = result;
        else
            delete themeConfig.blog.medias[key];
    });
    if (themeConfig.locales)
        Object.entries(themeConfig.locales).forEach(([, localeConfig]) => {
            Object.entries(localeConfig.blog?.medias || {}).forEach(([key, value]) => {
                const result = checkIcon(key, value);
                if (result)
                    localeConfig.blog.medias[key] = result;
                else
                    delete localeConfig.blog.medias[key];
            });
        });
    return icons;
};
exports.checkSocialMediaIcons = checkSocialMediaIcons;
//# sourceMappingURL=socialMedia.js.map