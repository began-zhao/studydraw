"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemeConfig = void 0;
const vuepress_shared_1 = require("vuepress-shared");
const encrypt_1 = require("./encrypt");
const locales_1 = require("./locales");
const rootAllowConfig = [
    "blog",
    "encrypt",
    "pure",
    "darkmode",
    "themeColor",
    "fullscreen",
    "mobileBreakPoint",
];
const defaultRootOptions = {
    // features
    blog: {},
    encrypt: {},
    // appearance
    pure: false,
    darkmode: "switch",
    themeColor: false,
    fullscreen: false,
};
const defaultLocaleOptions = {
    // features
    blog: {},
    // layouts
    repoDisplay: true,
    navbarIcon: true,
    navbarAutoHide: "mobile",
    hideSiteNameonMobile: true,
    sidebar: "structure",
    sidebarIcon: true,
    headerDepth: 2,
};
/**
 * Get client-side `themeConfig`
 */
const getThemeConfig = (app, themeOptions, { enableBlog }) => {
    const themeData = {
        ...defaultRootOptions,
        ...Object.fromEntries(Object.entries(themeOptions).filter(([key]) => rootAllowConfig.includes(key))),
        locales: 
        // assign locale data to `themeConfig`
        (0, vuepress_shared_1.getLocales)({
            app,
            name: "vuepress-theme-hope",
            default: Object.fromEntries(Object.entries(locales_1.themeLocalesData).map(([locale, config]) => {
                if (!enableBlog) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    delete config.blogLocales;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    delete config.paginationLocales;
                }
                return [
                    locale,
                    {
                        // default config
                        ...defaultLocaleOptions,
                        ...config,
                    },
                ];
            })),
            // extract localeConfig
            config: Object.fromEntries([
                ["/", {}],
                ...Object.entries(themeOptions.locales || {}),
            ].map(([localePath, localeConfig]) => [
                localePath,
                {
                    // root config
                    ...Object.fromEntries(Object.entries(themeOptions).filter(([key]) => key !== "locales" && !rootAllowConfig.includes(key))),
                    // locale options
                    ...localeConfig,
                },
            ])),
        }),
    };
    // handle encrypt options
    themeData.encrypt = (0, encrypt_1.resolveEncrypt)(themeData.encrypt);
    if (app.env.isDebug)
        console.log("Theme config: ", themeData);
    return themeData;
};
exports.getThemeConfig = getThemeConfig;
//# sourceMappingURL=themeConfig.js.map