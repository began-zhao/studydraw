import type { ComputedRef } from "vue";
import type { RepoType } from "@theme-hope/utils";
export interface RepoConfig {
    type: RepoType | "Source";
    label: string;
    link: string;
}
/**
 * Get navbar config of repository link
 */
export declare const useNavbarRepo: () => ComputedRef<RepoConfig | null>;
