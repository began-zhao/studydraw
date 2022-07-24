import { defineComponent, h } from "vue";
import { useRoute, useRouter } from "vue-router";
import { generateIndexfromHash } from "vuepress-shared/lib/client";
import { TagIcon } from "@theme-hope/module/info/components/icons";
import { useMetaLocale } from "@theme-hope/module/info/composables";
import "../styles/tag.scss";
export default defineComponent({
    name: "TagInfo",
    props: {
        tag: {
            type: Array,
            default: () => [],
        },
        pure: Boolean,
    },
    setup(props) {
        const router = useRouter();
        const route = useRoute();
        const metaLocale = useMetaLocale();
        const navigate = (path = "") => {
            if (path && route.path !== path)
                void router.push(path);
        };
        return () => props.tag.length
            ? h("span", {
                "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
                ...(props.pure ? {} : { "data-balloon-pos": "down" }),
            }, [
                h(TagIcon),
                h("ul", { class: "tags-wrapper" }, props.tag.map(({ name, path }) => h("li", {
                    class: [
                        "tag",
                        {
                            // TODO: magic number 9 is tricky here
                            [`tag${generateIndexfromHash(name, 9)}`]: !props.pure,
                            clickable: path,
                        },
                    ],
                    role: path ? "navigation" : "",
                    onClick: () => navigate(path),
                }, name))),
                h("meta", {
                    property: "keywords",
                    content: props.tag.map(({ name }) => name).join(","),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=TagInfo.js.map