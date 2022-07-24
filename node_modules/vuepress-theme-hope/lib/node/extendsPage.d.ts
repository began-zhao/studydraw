import type { Page } from "@vuepress/core";
import type { HopeThemeConfig, HopeThemePageData, HopeThemePluginsOptions } from "../shared";
export declare const checkFrontmatter: (page: Page<HopeThemePageData>, isDev?: boolean) => void;
export declare const extendsPage: (themeConfig: HopeThemeConfig, plugins: HopeThemePluginsOptions, page: Page<HopeThemePageData>, isDev?: boolean) => void;
