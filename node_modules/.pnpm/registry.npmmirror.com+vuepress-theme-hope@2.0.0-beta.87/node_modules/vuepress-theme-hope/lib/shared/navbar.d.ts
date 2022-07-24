import type { AutoLink, TextItem } from "./utils";
/**
 * Base nav group, has nav items children
 */
export interface HopeThemeNavGroup<T> extends TextItem {
    /**
     * Link prefix of currect group
     *
     * 当前分组的页面前缀
     */
    prefix?: string;
    /**
     * Link of current group
     *
     * 当前分组的链接
     */
    link?: string;
    /**
     * Children of current group
     *
     * 当前分组的子项
     */
    children: T[];
}
/**
 * Navbar types
 */
export declare type HopeThemeNavbarItem = AutoLink;
export declare type HopeThemeNavbarGroup = HopeThemeNavGroup<HopeThemeNavbarGroup | HopeThemeNavbarItem | string>;
export declare type HopeThemeNavbarConfig = (HopeThemeNavbarItem | HopeThemeNavbarGroup | string)[];
export declare type ResolvedHopeThemeNavbarItem = HopeThemeNavbarItem | HopeThemeNavGroup<AutoLink | HopeThemeNavGroup<AutoLink>>;
