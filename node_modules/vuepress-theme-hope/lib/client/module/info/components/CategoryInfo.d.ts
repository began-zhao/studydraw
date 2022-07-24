import type { PropType, VNode } from "vue";
import type { PageCategory } from "@theme-hope/module/info/utils";
import "../styles/category.scss";
declare const _default: import("vue").DefineComponent<{
    category: {
        type: PropType<PageCategory[]>;
        required: true;
    };
    pure: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    category: {
        type: PropType<PageCategory[]>;
        required: true;
    };
    pure: BooleanConstructor;
}>>, {
    pure: boolean;
}>;
export default _default;
