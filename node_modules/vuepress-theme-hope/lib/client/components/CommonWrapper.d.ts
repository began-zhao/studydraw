import type { VNode } from "vue";
import "../styles/common.scss";
declare const _default: import("vue").DefineComponent<{
    navbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    sidebar: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    navbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    sidebar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    navbar: boolean;
    sidebar: boolean;
}>;
export default _default;
