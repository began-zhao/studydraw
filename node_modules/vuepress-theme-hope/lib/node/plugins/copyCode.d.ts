import type { Plugin } from "@vuepress/core";
import type { CopyCodeOptions } from "vuepress-plugin-copy-code2";
import type { HopeThemeConfig } from "../../shared";
export declare const getCopyCodePlugin: (themeData: HopeThemeConfig, options?: CopyCodeOptions | false) => Plugin | null;
