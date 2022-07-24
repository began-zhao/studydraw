import type { PropType, VNode } from "vue";
import "../styles/tag.scss";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<import("@theme-hope/module/info/utils").PageCategory[]>;
        default: () => never[];
    };
    pure: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<import("@theme-hope/module/info/utils").PageCategory[]>;
        default: () => never[];
    };
    pure: BooleanConstructor;
}>>, {
    tag: import("@theme-hope/module/info/utils").PageCategory[];
    pure: boolean;
}>;
export default _default;
