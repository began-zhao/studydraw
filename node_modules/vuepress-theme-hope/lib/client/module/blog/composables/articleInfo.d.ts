import { Ref } from "vue";
import type { ComputedRef } from "vue";
import type { AuthorInfo, DateInfo } from "vuepress-shared";
import type { PageInfoProps } from "@theme-hope/module/info/components/PageInfo";
import type { PageCategory, PageTag } from "@theme-hope/module/info/utils";
import type { ArticleInfo, PageInfo } from "../../../../shared";
export declare type AuthorRef = ComputedRef<AuthorInfo[]>;
export declare const useArticleAuthor: (info: Ref<ArticleInfo>) => AuthorRef;
export declare type CategoryRef = ComputedRef<PageCategory[]>;
export declare const useArticleCategory: (info: Ref<ArticleInfo>) => CategoryRef;
export declare type TagRef = ComputedRef<PageTag[]>;
export declare const useArticleTag: (info: Ref<ArticleInfo>) => TagRef;
export declare type DateRef = ComputedRef<DateInfo | null>;
export declare const useArticleDate: (info: Ref<ArticleInfo>) => DateRef;
export declare const useArticleInfo: (info: Ref<ArticleInfo>) => {
    config: PageInfoProps;
    items: ComputedRef<PageInfo[] | false | undefined>;
};
