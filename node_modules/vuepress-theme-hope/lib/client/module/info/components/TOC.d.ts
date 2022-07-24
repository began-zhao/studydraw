import type { PageHeader } from "@vuepress/shared";
import type { PropType, VNode } from "vue";
import "../styles/toc.scss";
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<PageHeader[]>;
        default: () => never[];
    };
    headerDepth: {
        type: NumberConstructor;
        default: number;
    };
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<PageHeader[]>;
        default: () => never[];
    };
    headerDepth: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    headerDepth: number;
    items: PageHeader[];
}>;
export default _default;
