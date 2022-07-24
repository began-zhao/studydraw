"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotoSwipePlugin = void 0;
const vuepress_plugin_photo_swipe_1 = require("vuepress-plugin-photo-swipe");
const getPhotoSwipePlugin = (options) => {
    if (options === false)
        return null;
    return (0, vuepress_plugin_photo_swipe_1.photoSwipePlugin)({
        selector: ".theme-hope-content :not(a) > img",
        ...options,
    });
};
exports.getPhotoSwipePlugin = getPhotoSwipePlugin;
//# sourceMappingURL=photoSwipe.js.map