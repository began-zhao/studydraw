import type { App, InjectionKey, Ref, WritableComputedRef } from "vue";
export declare type DarkmodeStatus = "light" | "dark" | "auto";
export declare type DarkModeRef = WritableComputedRef<boolean>;
export declare type DarkModeStatusRef = Ref<DarkmodeStatus>;
export interface DarkMode {
    isDarkMode: DarkModeRef;
    status: DarkModeStatusRef;
}
export declare const darkModeSymbol: InjectionKey<DarkMode>;
/**
 * Inject dark mode global computed
 */
export declare const useDarkMode: () => DarkMode;
export declare const injectDarkMode: (app: App) => void;
export declare const setupDarkMode: () => void;
declare module "vue" {
    interface ComponentCustomProperties {
        $isDarkMode: boolean;
    }
}
