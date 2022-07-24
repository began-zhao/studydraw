import type { HopeThemeOptions } from "../shared";
export interface ThemeStatus {
    enableBlog: boolean;
    enableEncrypt: boolean;
    enableSlide: boolean;
    enableVisitor: boolean;
}
export declare const getStatus: (themeOptions: HopeThemeOptions) => ThemeStatus;
