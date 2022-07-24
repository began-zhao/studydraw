import type { AuthorInfo } from "vuepress-shared";
import type { ThemeDataRef, ThemeLocaleDataRef } from "@vuepress/plugin-theme-data/lib/client";
import type { ComputedRef } from "vue";
import type { HopeThemeConfig, HopeThemeLocaleConfig } from "../../shared";
export declare const useThemeData: () => ThemeDataRef<HopeThemeConfig>;
export declare const useThemeLocaleData: () => ThemeLocaleDataRef<HopeThemeLocaleConfig>;
export declare const useThemeAuthor: () => ComputedRef<AuthorInfo[]>;
export declare const usePure: () => ComputedRef<boolean>;
