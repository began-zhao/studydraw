import type { UserConfig } from "@vuepress/cli";
import type { HopeThemeNavbarConfig, HopeThemeSidebarConfig, HopeThemeOptions } from "../../shared";
/**
 * @deprecated use `navbar` instead
 */
export declare const navbarConfig: (config: HopeThemeNavbarConfig) => HopeThemeNavbarConfig;
/**
 * @deprecated use `sidebar` instead
 */
export declare const sidebarConfig: (config: HopeThemeSidebarConfig) => HopeThemeSidebarConfig;
/**
 * @deprecated import and use `hopeTheme` instead
 */
export declare const themeConfig: (themeConfig: HopeThemeOptions) => HopeThemeOptions;
export declare const checkBundlerOptions: (config: Record<string, unknown>) => void;
/**
 * @deprecated import and use `hopeTheme` instead
 */
export declare const config: (userConfig: Record<string, unknown>) => UserConfig;
