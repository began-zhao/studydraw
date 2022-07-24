"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.droppedLogger = exports.deprecatedLogger = void 0;
const utils_1 = require("../utils");
const deprecatedLogger = ({ options, deprecatedOption, newOption, msg = "", scope = "", }) => {
    if (deprecatedOption in options) {
        utils_1.logger.warn(`"${deprecatedOption}" is deprecated${scope ? ` in ${scope}` : ""}, please use "${newOption}" instead.${msg ? `\n${msg}` : ""}`);
        if (newOption.includes(".")) {
            const keys = newOption.split(".");
            let temp = options;
            keys.forEach((key, index) => {
                if (index !== keys.length - 1) {
                    // ensure level exists
                    temp[key] = temp[key] || {};
                    temp = temp[key];
                }
                else
                    temp[key] = options[deprecatedOption];
            });
        }
        else
            options[newOption] = options[deprecatedOption];
        delete options[deprecatedOption];
    }
};
exports.deprecatedLogger = deprecatedLogger;
const droppedLogger = (options, droppedOption, hint = "", newOption = "") => {
    if (droppedOption in options) {
        utils_1.logger.error(`"${droppedOption}" is removed${newOption
            ? `, please use ${newOption} instead.`
            : " and no longer supported"}${hint ? `\n${hint}` : ""}`);
        if (!newOption)
            delete options[droppedOption];
    }
};
exports.droppedLogger = droppedLogger;
//# sourceMappingURL=utils.js.map