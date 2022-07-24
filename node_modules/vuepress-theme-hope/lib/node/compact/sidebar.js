"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSidebarConfig = void 0;
const utils_1 = require("./utils");
const utils_2 = require("../utils");
const handleArraySidebarConfig = (config) => config
    .map((item) => {
    if (typeof item === "string")
        return item;
    if (typeof item === "object") {
        const convertConfig = [
            ["title", "text"],
            ["path", "link"],
        ];
        convertConfig.forEach(([deprecatedOption, newOption]) => (0, utils_1.deprecatedLogger)({
            options: item,
            deprecatedOption,
            newOption,
            scope: "sidebar",
        }));
        (0, utils_1.droppedLogger)(item, "sidebarDepth", "Found in sidebar");
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (Array.isArray(item.children))
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            handleArraySidebarConfig(item.children);
        return item;
    }
    return null;
})
    .filter((item) => item !== null);
/**
 * @deprecated You should use V2 standard sidebar config and avoid using it
 */
const convertSidebarConfig = (config) => {
    if (config === false)
        return false;
    if (Array.isArray(config))
        return handleArraySidebarConfig(config);
    if (typeof config === "object" && config)
        return Object.fromEntries(Object.entries(config).map(([key, value]) => {
            if (Array.isArray(value))
                return [key, handleArraySidebarConfig(value)];
            if (value === "structure" || value === false)
                return [key, value];
            utils_2.logger.error('"sidebar" value should be an array, "structure" or false when setting as an object');
            return [key, false];
        }));
    utils_2.logger.error('"sidebar" config should be an array or object');
    return false;
};
exports.convertSidebarConfig = convertSidebarConfig;
//# sourceMappingURL=sidebar.js.map