import { computed, defineComponent, h } from "vue";
import { useLocaleConfig } from "vuepress-shared/lib/client";
import { WordIcon } from "@theme-hope/module/info/components/icons";
import { useMetaLocale } from "@theme-hope/module/info/composables";
import { readingTimeLocales } from "@theme-hope/module/info/utils";
export default defineComponent({
    name: "ReadTimeInfo",
    props: {
        readingTime: {
            type: Object,
            default: () => null,
        },
        pure: Boolean,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const readingTimeLocale = useLocaleConfig(readingTimeLocales);
        const words = computed(() => props.readingTime?.words.toString());
        const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
        return () => words.value
            ? h("span", {
                class: "words-info",
                "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
                ...(props.pure ? {} : { "data-balloon-pos": "down" }),
            }, [
                h(WordIcon),
                h("span", wordText.value),
                h("meta", {
                    property: "wordCount",
                    content: words.value,
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=WordInfo.js.map