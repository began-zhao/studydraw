import type { ComputedRef, InjectionKey } from "vue";
import type { Article } from "vuepress-plugin-blog2";
import type { ArticleInfo } from "../../../../shared";
export interface TimelineItem {
    year: number;
    items: {
        date: string;
        path: string;
        info: ArticleInfo;
    }[];
}
export declare type TimelinesRef = ComputedRef<{
    path: string;
    config: TimelineItem[];
    items: Article<ArticleInfo>[];
}>;
export declare const timelinesSymbol: InjectionKey<TimelinesRef>;
/**
 * Inject timelines
 */
export declare const useTimelines: () => TimelinesRef;
/**
 * Provide timelines
 */
export declare const setupTimelines: () => void;
