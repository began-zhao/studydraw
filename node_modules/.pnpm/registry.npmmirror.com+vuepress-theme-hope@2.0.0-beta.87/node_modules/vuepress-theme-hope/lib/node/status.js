"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = void 0;
const getStatus = (themeOptions) => {
    const { plugins = {} } = themeOptions;
    return {
        enableBlog: Boolean(plugins.blog),
        enableEncrypt: Boolean(themeOptions.encrypt &&
            ("admin" in themeOptions.encrypt || "config" in themeOptions.encrypt)),
        enableSlide: Boolean(plugins.mdEnhance &&
            (plugins.mdEnhance.enableAll || plugins.mdEnhance.presentation)),
        enableVisitor: Boolean(plugins.comment && plugins.comment.provider === "Waline"),
    };
};
exports.getStatus = getStatus;
//# sourceMappingURL=status.js.map