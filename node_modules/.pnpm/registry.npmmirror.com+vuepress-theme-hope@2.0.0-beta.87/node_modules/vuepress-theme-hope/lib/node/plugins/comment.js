"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentPlugin = void 0;
const vuepress_plugin_comment2_1 = require("vuepress-plugin-comment2");
const getCommentPlugin = (options, legacy = false) => {
    if (options === false || !options?.provider)
        return null;
    return (0, vuepress_plugin_comment2_1.commentPlugin)({
        provider: "None",
        ...(options?.provider === "Waline"
            ? { dark: 'html[data-theme="dark"]' }
            : {}),
        ...(options || {}),
    }, legacy);
};
exports.getCommentPlugin = getCommentPlugin;
//# sourceMappingURL=comment.js.map