import type { AuthorInfo, DateInfo } from "vuepress-shared";
import type { ComputedRef } from "vue";
import type { PageInfoProps } from "@theme-hope/module/info/components/PageInfo";
import type { PageCategory, PageTag } from "@theme-hope/module/info/utils";
import type { PageInfo } from "../../shared";
export declare const usePageAuthor: () => ComputedRef<AuthorInfo[]>;
export declare const usePageCategory: () => ComputedRef<PageCategory[]>;
export declare const usePageTag: () => ComputedRef<PageTag[]>;
export declare const usePageDate: () => ComputedRef<DateInfo | null>;
export declare const usePageInfo: () => {
    config: PageInfoProps;
    items: ComputedRef<PageInfo[] | false | null>;
};
