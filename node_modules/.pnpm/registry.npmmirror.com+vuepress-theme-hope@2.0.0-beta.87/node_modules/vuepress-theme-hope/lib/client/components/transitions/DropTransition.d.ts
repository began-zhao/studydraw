import type { PropType, VNode } from "vue";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"group" | "single">;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    appear: BooleanConstructor;
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"group" | "single">;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    appear: BooleanConstructor;
}>>, {
    type: "group" | "single";
    duration: number;
    appear: boolean;
    delay: number;
}>;
export default _default;
