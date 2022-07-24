"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStyle = void 0;
const utils_1 = require("@vuepress/utils");
/**
 * @deprecated You should use scss style files in v2 and avoid using it
 */
const checkStyle = (app) => {
    if (utils_1.fs.existsSync(app.dir.source(".vuepress/styles/index.styl")) &&
        !utils_1.fs.existsSync(app.dir.source(".vuepress/styles/index.scss"))) {
        utils_1.logger.error("V2 style switched to scss intead of stylus, so you should remove index.styl and create index.scss under .vuepress/styles.");
    }
    if (utils_1.fs.existsSync(app.dir.source(".vuepress/styles/palette.styl")) &&
        !utils_1.fs.existsSync(app.dir.source(".vuepress/styles/palette.scss")) &&
        !utils_1.fs.existsSync(app.dir.source(".vuepress/styles/config.scss"))) {
        utils_1.logger.error("V2 style switched to scss intead of stylus, so you should remove palette.styl and create config.scss and palette.scss under .vuepress/styles.");
    }
};
exports.checkStyle = checkStyle;
//# sourceMappingURL=style.js.map