import type { Plugin } from "@vuepress/core";
import type { HopeThemeConfig, HopeThemePluginsOptions } from "../../shared";
export declare const getSEOPlugin: (themeConfig: HopeThemeConfig, { blog, seo }: HopeThemePluginsOptions, hostname?: string, legacy?: boolean) => Plugin | null;
