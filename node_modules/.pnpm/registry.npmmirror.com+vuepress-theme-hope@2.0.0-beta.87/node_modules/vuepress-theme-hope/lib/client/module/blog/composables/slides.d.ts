import type { ComputedRef, InjectionKey } from "vue";
import type { BlogTypeData } from "vuepress-plugin-blog2";
import type { ArticleInfo } from "../../../../shared";
export declare type SlidesRef = ComputedRef<BlogTypeData<ArticleInfo>>;
export declare const slidesSymbol: InjectionKey<SlidesRef>;
/**
 * Inject slides
 */
export declare const useSlides: () => SlidesRef;
/**
 * Provide slides
 */
export declare const setupSlides: () => void;
