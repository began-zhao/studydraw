"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEncrypt = void 0;
const utils_1 = require("./utils");
const bcrypt_ts_1 = require("bcrypt-ts");
const resolveEncrypt = (encrypt) => {
    const result = {};
    if (encrypt.global)
        result.global = true;
    // handle global token
    if (encrypt.admin)
        if (typeof encrypt.admin === "string")
            result.admin = [(0, bcrypt_ts_1.hashSync)(encrypt.admin)];
        else if (Array.isArray(encrypt.admin))
            result.admin = encrypt.admin
                .map((globalToken) => {
                if (typeof globalToken === "string")
                    return (0, bcrypt_ts_1.hashSync)(globalToken);
                utils_1.logger.error(`You config "themeConfig.encrypt.admin", but your config is invalid. 

          All password MUST be string. But we found one’s type is ${typeof globalToken}. Please fix it!`);
                return null;
            })
                .filter((item) => item !== null);
        else
            utils_1.logger.error(`You are asking for global encryption but you provide invalid "admin" config. 
        
        Please check "admin" in your "themeConfig.encrypt" config. It can be string or string[], but you are providing ${typeof encrypt.admin}. Please fix it!`);
    if (encrypt.config)
        result.config = Object.fromEntries(Object.entries(encrypt.config)
            .map(([key, tokens]) => {
            if (typeof tokens === "string")
                return [key, [(0, bcrypt_ts_1.hashSync)(tokens)]];
            if (Array.isArray(tokens)) {
                const encryptedTokens = tokens
                    .map((token) => {
                    if (typeof token === "string")
                        return (0, bcrypt_ts_1.hashSync)(token);
                    utils_1.logger.error(`You config "themeConfig.encrypt.config", but your config is invalid. 
        
Key ${key}’s value MUST be string or string[]. But it’s type is ${typeof token}. Please fix it!`);
                    return null;
                })
                    .filter((item) => item !== null);
                if (encryptedTokens.length)
                    return [key, encryptedTokens];
                return null;
            }
            utils_1.logger.error(`You config "themeConfig.encrypt.config", but your config is invalid. 
        
        The value of key ${key} MUST be string or string[]. But not it’s ${typeof tokens}. Please fix it!`);
            return null;
        })
            .filter((item) => item !== null));
    return result;
};
exports.resolveEncrypt = resolveEncrypt;
//# sourceMappingURL=encrypt.js.map