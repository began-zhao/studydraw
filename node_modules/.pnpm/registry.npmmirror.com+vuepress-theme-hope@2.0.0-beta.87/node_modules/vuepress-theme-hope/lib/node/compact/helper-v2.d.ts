import type { UserConfig } from "@vuepress/cli";
import type { HopeThemeNavbarConfig, HopeThemeSidebarConfig, HopeThemeSidebarArrayConfig, HopeThemeSidebarObjectConfig, HopeThemeOptions } from "../../shared";
/**
 * @deprecated use `navbar` instead
 */
export declare const defineNavbarConfig: (config: HopeThemeNavbarConfig) => HopeThemeNavbarConfig;
/**
 * @deprecated use `sidebar` instead
 */
export declare const defineSidebarConfig: (config: HopeThemeSidebarConfig) => HopeThemeSidebarConfig;
/**
 * @deprecated use `arraySidebar` instead
 */
export declare const defineSidebarArrayConfig: (config: HopeThemeSidebarArrayConfig) => HopeThemeSidebarArrayConfig;
/**
 * @deprecated use `objectSidebar` instead
 */
export declare const defineSidebarObjectConfig: (config: HopeThemeSidebarObjectConfig) => HopeThemeSidebarObjectConfig;
/**
 * @deprecated import and use `hopeTheme` instead
 */
export declare const defineThemeConfig: (themeConfig: HopeThemeOptions) => HopeThemeOptions;
/**
 * @deprecated import and use `hopeTheme` instead
 */
export declare const defineHopeConfig: (config: UserConfig & Record<string, unknown>) => UserConfig;
