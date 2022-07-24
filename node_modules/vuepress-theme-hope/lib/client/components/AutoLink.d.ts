import type { PropType, VNode } from "vue";
import type { AutoLink } from "../../shared";
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<AutoLink>;
        required: true;
    };
    exact: BooleanConstructor;
    externalLinkIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "focusout"[], "focusout", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<AutoLink>;
        required: true;
    };
    exact: BooleanConstructor;
    externalLinkIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocusout?: (...args: any[]) => any;
}, {
    exact: boolean;
    externalLinkIcon: boolean;
}>;
export default _default;
