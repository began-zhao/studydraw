import { defineComponent, h } from "vue";
import { useMetaLocale } from "@theme-hope/module/info/composables";
export default defineComponent({
    name: "OriginalMark",
    props: {
        isOriginal: Boolean,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        return () => props.isOriginal
            ? h("span", { class: "origin" }, metaLocale.value.origin)
            : null;
    },
});
//# sourceMappingURL=OriginalMark.js.map