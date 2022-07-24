import type { AutoLink, TextItem } from "./utils";
export declare type HopeThemeSidebarPageItem = AutoLink;
export interface HopeThemeSidebarGroupItem extends TextItem {
    prefix?: string;
    link?: string;
    collapsable?: boolean;
    children: (HopeThemeSidebarPageItem | HopeThemeSidebarGroupItem | HopeThemeSidebarStructureItem | string)[];
}
export interface HopeThemeSidebarStructureItem extends TextItem {
    prefix: string;
    link?: string;
    collapsable?: boolean;
    children: "structure";
}
export declare type HopeThemeSidebarItem = HopeThemeSidebarPageItem | HopeThemeSidebarGroupItem | HopeThemeSidebarStructureItem | string;
export declare type HopeThemeSidebarArrayConfig = HopeThemeSidebarItem[];
export declare type HopeThemeSidebarObjectConfig = Record<string, HopeThemeSidebarArrayConfig | "structure" | false>;
export declare type HopeThemeSidebarConfig = HopeThemeSidebarArrayConfig | HopeThemeSidebarObjectConfig;
export interface ResolvedHopeThemeSidebarHeaderItem extends HopeThemeSidebarPageItem {
    type: "heading";
    children: ResolvedHopeThemeSidebarHeaderItem[];
}
export interface ResolvedHopeThemeSidebarPageItem extends HopeThemeSidebarPageItem {
    type: "page";
    children: ResolvedHopeThemeSidebarHeaderItem[];
}
export interface ResolvedHopeThemeSidebarGroupItem extends HopeThemeSidebarGroupItem {
    type: "group";
    children: ResolvedSidebarItem[];
}
export declare type ResolvedSidebarItem = ResolvedHopeThemeSidebarHeaderItem | ResolvedHopeThemeSidebarPageItem | ResolvedHopeThemeSidebarGroupItem;
