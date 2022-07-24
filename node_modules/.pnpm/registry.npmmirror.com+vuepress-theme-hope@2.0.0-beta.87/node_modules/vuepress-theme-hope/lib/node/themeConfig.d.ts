import type { App } from "@vuepress/core";
import type { ThemeStatus } from "./status";
import { HopeThemeConfig, HopeThemeOptions } from "../shared";
/**
 * Get client-side `themeConfig`
 */
export declare const getThemeConfig: (app: App, themeOptions: HopeThemeOptions, { enableBlog }: ThemeStatus) => HopeThemeConfig;
