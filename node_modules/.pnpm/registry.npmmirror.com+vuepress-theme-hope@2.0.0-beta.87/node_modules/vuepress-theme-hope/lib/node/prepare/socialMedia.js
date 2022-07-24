"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareSocialMediaIcons = void 0;
const prepareSocialMediaIcons = async (app, icons) => {
    await app.writeTemp(`theme-hope/socialMedia.js`, `export const icons = ${JSON.stringify(icons)}`);
};
exports.prepareSocialMediaIcons = prepareSocialMediaIcons;
//# sourceMappingURL=socialMedia.js.map