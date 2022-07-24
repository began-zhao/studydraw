import type { GitContributor } from "@vuepress/plugin-git";
import type { ComputedRef } from "vue";
import type { AutoLink } from "../../../../shared";
export declare const useEditLink: () => ComputedRef<null | AutoLink>;
export declare const useUpdateTime: () => ComputedRef<null | string>;
export declare const useContributors: () => ComputedRef<null | GitContributor[]>;
