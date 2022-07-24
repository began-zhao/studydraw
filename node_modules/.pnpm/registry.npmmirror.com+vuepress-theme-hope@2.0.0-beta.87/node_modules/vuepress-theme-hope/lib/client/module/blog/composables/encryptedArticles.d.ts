import type { ComputedRef, InjectionKey } from "vue";
import type { BlogTypeData } from "vuepress-plugin-blog2";
import type { ArticleInfo } from "../../../../shared";
export declare type EncryptedArticlesRef = ComputedRef<BlogTypeData<ArticleInfo>>;
export declare const encryptedArticlesSymbol: InjectionKey<EncryptedArticlesRef>;
/**
 * Inject encryptedArticles
 */
export declare const useEncryptedArticles: () => EncryptedArticlesRef;
/**
 * Provide encryptedArticles
 */
export declare const setupEncryptedArticles: () => void;
