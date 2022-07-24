import type { App } from "@vuepress/core";
import type { HopeThemeConfig, HopeThemeSidebarConfig } from "../../shared";
export declare const orderSort: (orderA: number | null, orderB: number | null) => number;
export declare const getSidebarData: (app: App, themeConfig: HopeThemeConfig) => HopeThemeSidebarConfig;
export declare const prepareSidebarData: (app: App, themeConfig: HopeThemeConfig) => Promise<void>;
